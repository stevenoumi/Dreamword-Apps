import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useHistory } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const columns = [
    {
      field: 'id',
      renderHeader: () => <Typography className="pl-4"> ID </Typography>,
      width: 82,
      resizable: false,
      disableColumnMenu: true,
      renderCell: (params) => <Typography className="pl-4 h-full content-center">{params.value}</Typography>
    },
    {
      field: 'title',
      headerName: "product name",
      width: 200,
      resizable: false,
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'price',
      headerName: "price",
      width: 80,
      resizable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant="inherit">
           { params.row.price}
          </Typography>
        );
      }
    },
    {
      field: 'stock',
      headerName: "quantity",
      width: 80,
      resizable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant="inherit" className={`${params.value > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {params.value}
          </Typography>
        );
      }
    },
    {
      field: 'description',
      headerName: "description",
      resizable: false,
      disableColumnMenu: true,
      sortable: false,
      flex: 1
    },
    {
      field: 'action',
      headerName: "action",
      headerAlign: 'center',
      resizable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box className="flex justify-center items-center h-full">
            <IconButton component={Link} to={`/admin/product/${params.row.id}`}>
              <Edit className="text-green-600" />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon className="text-red-600" />
            </IconButton>
          </Box>
        );
      }
    }
  ];

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la suppression du produit');
        }
        return response.json();
      })
      .then(() => {
        setProducts(products.filter((product) => product.product_id !== id));
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit:', error);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/products/allproducts`)
      .then((response) => response.json())
      .then((data) => {

        const products = data.map((product) => {
          return { ...product, id: product.product_id };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
  }, []);



  return (
    <main className="flex-grow">
      <Box className="m-10">
        <Stack direction="row" className="justify-between mb-2">
          <Typography variant="h6"> Liste des Produits</Typography>
        </Stack>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: { 
              paginationModel: {
                pageSize: 4
              }
            }
          }}
          autoHeight
          pageSizeOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </main>
  );
};
