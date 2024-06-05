import React, { useEffect, useState } from 'react';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, SkipNext, SkipPrevious } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
export const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);

  const columns = [
    {
      field: 'order_id',
      headerName: 'N° de commande',
      headerAlign: 'center',
      resizable: false,
      width: 150,
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'user_id',
      headerName: 'User ID',
      headerAlign: 'center',
      resizable: false,
      width: 80,
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'status',
      headerName: 'Statut',
      headerAlign: 'center',
      resizable: false,
      width: 10,
      disableColumnMenu: true,
      renderCell: (params) => {
        const isPending = params.row.status === 'PENDING' && true;
        const isDelivering = params.row.status === 'DELIVERING' && true;
        const isDelivered = params.row.status === 'DELIVERED' && true;
        const isCancelled = params.row.status === 'CANCELLED' && true;
        return (
          <Stack direction="row" spacing={1} className="items-center h-full justify-center">
            <IconButton
              size="small"
              onClick={() => handleSwitchStatus(params.row, false)}
              disabled={isCancelled || isPending}
            >
              <SkipPrevious />
            </IconButton>
            <Typography
              className={`rounded-2xl px-2 text-[#fff9eb] 
              ${isPending && 'bg-gray-600'} 
              ${isDelivering && 'bg-yellow-600'} 
              ${isDelivered && 'bg-green-600'} 
              ${isCancelled && 'bg-red-600'}`}
            >
              {getStatus(params.row.status)}
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleSwitchStatus(params.row, true)}
              disabled={isCancelled || isDelivered}
            >
              <SkipNext />
            </IconButton>
          </Stack>
        );
      }
    },
    {
      field: 'created_at',
      headerName: "Date de commande",
      headerAlign: 'center',
      resizable: false,
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant="inherit">
            {(params.row.created_at).split('T')[0]}
          </Typography>
        );
      }
    },
    {
      field: 'updated_at',
      headerName: "Date de livraison",
      headerAlign: 'center',
      resizable: false,
      width: 140,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant="inherit">
            {(params.row.updated_at).split('T')[0]}
          </Typography>
        );
      }
    },
    {
      field: 'total_amount',
      headerName: "prix total",
      headerAlign: 'center',
      resizable: false,
      width: 90,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant="inherit">
           {(params.row.total_amount)} €
          </Typography>
        );
      }
    },
    {
      field: 'shipping_address',
      headerName: "Adresse de livraison",
      resizable: false,
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const address = params.row.shipping_address;
        return (
          <Box className="h-full flex items-center">
            <Tooltip title={address} placement="top-start">
              <Typography variant="inherit" className="truncate">
                {address}
              </Typography>
            </Tooltip>
          </Box>
        );
      }
    },
    {
      field: 'delete',
      headerName: "Supprimer",
      headerAlign: 'center',
      resizable: false,
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box className="flex justify-center items-center h-full">
            <IconButton onClick={() => handleDelete(params.row.id)}>
              <Delete className="text-red-600" />
            </IconButton>
          </Box>
        );
      }
    }
  ];

  const handleSwitchStatus = (row, isNext) => {
    const currentStatus = row.status;
    const id = row.id;
    switch (currentStatus) {
      case 'PENDING':
        if (isNext) {
          handleChangeStatus(id, 'DELIVERING');
        }
        break;
      case 'DELIVERING':
        if (isNext) {
          handleChangeStatus(id, 'DELIVERED');
        } else {
          handleChangeStatus(id, 'PENDING');
        }
        break;
      case 'DELIVERED':
        if (!isNext) {
          handleChangeStatus(id, 'DELIVERING');
        }
        break;
      default:
        break;
    }
  };

  const handleChangeStatus = async (id, newStatus) => {
    const order = orders.find((order) => order.id === id);
    order.status = newStatus;

    try {
      const response = await fetch(`http://localhost:5000/orders/updateStatus/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      } else {
        setOrders([...orders]);
      }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du statut de la commande:', error);
    }
  };

  const getStatus = (status) => {
    switch (status) {
      case 'Prête':
        return "En attente";
      case 'En préparation':
        return "En cours de livraison";
      case 'En Cours de livraison':
        return "Livré";
      case 'Annulée':
        return "Annulé";
      default:
        return '';
    }
  };
  

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/order/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la suppression du produit');
        } else {
          setOrders(orders.filter((order) => order.id !== id));
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression d'une commande :", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/orders/allorders`)
      .then((response) => response.json())
      .then((data) => {
         // ajouter la colone id pour chaque commande
        const orders = data.map((order) => {
          return { ...order, id: order.order_id };
        }
        );
        setOrders(orders);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des commandes:', error);
      });
  }, []);

  return (
    <main className="flex-grow">
      <Typography variant="h7" className="pt-14 pb-2 flex-grow text-center" >
        {"Liste des commandes"}
      </Typography>
      <Box className="m-10">
        <DataGrid
          rows={orders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10
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
