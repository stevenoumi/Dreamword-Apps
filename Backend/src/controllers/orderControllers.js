const pool = require("../config/dbConfig");

const createOrder = async (req, res) => {
    const userId = req.user.userId;
    const { currentStep, totalAmount, items, shipping_address, billing_address } = req.body;

    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        // Insertion dans la table Orders
        const [orderResult] = await connection.query(
            'INSERT INTO Orders (user_id, status, total_amount, shipping_address, billing_address) VALUES (?, ?, ?, ?, ?)',
            [userId, currentStep, totalAmount, shipping_address, billing_address]
        );

        const orderId = orderResult.insertId;

        // Insertion dans la table OrderItems
        for (const item of items) {
            await connection.query(
                'INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
                [orderId, item.product_id, item.quantity, item.price]
            );
        }

        await connection.commit();
        res.status(201).json({ message: 'Order created successfully', orderId });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({ error: 'Failed to create order', details: error.message });
    } finally {
        connection.release();
    }
};

const getUserOrders = async (req, res) => {
    const userId = req.user.userId;
    console.log(userId);

    const sql = `
        SELECT 
            O.order_id,
            O.created_at AS order_created_at,
            O.status AS order_status,
            O.total_amount,
            O.shipping_address,
            O.billing_address,
            PI.product_id,
            P.title AS title,
            P.description AS description,
            P.image AS image,
            P.price AS price,
            PI.quantity,
            PI.price * PI.quantity AS item_total_price
        FROM 
            Orders O
        JOIN 
            OrderItems PI ON O.order_id = PI.order_id
        JOIN 
            Products P ON PI.product_id = P.product_id
        WHERE 
            O.user_id = ?
        ORDER BY 
            O.order_id;
    `;

    try {
        const [rows] = await pool.query(sql, [userId]);

        // Transformation des résultats en format souhaité
        const orders = rows.reduce((acc, row) => {
            const order = acc.find(o => o.idcommande === row.order_id);
            const item = {
                product_id: row.product_id,
                title: row.title,
                description: row.description,
                image: row.image,
                price: row.price,
                quantity: row.quantity,
                item_total_price: row.item_total_price
            };

            if (order) {
                order.items.push(item);
            } else {
                acc.push({
                    idcommande: row.order_id,
                    date: row.order_created_at,
                    shipping_mode: row.order_status,
                    shipping_address: row.shipping_address,
                    billing_address: row.billing_address,
                    item_total_price: row.item_total_price,
                    items: [item]
                });
            }

            return acc;
        }, []);

        res.status(200).json(orders);
        console.log("Les orders sont : ", orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user orders', details: error.message });
    }
};

module.exports = { createOrder, getUserOrders };
