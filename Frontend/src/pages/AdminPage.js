import React from "react";
import { Container, Stack } from "@mui/material";
import { ProductsManagement } from "../components/ProductManagement";
import { OrdersManagement } from "../components/OrderManagement";
import SmallHeader from "../components/SmallHeader";
import "../style/admin.css";

function AdminPage() {
  return (
    <div>
      <Container>
        <Stack direction="column" spacing={5}>
          <div>
          <SmallHeader />
          </div>
          <div>
          <ProductsManagement className="component-separator" />
          </div>
          <div>
          <OrdersManagement />
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default AdminPage;
