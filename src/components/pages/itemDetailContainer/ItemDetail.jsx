import { Box, Card } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
        {/* aca todo el detalle */}
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <h2>{productSelected.title}</h2>
          <img src={productSelected.img} alt="" style={{ maxWidth: 600 }} />
          {/* Aca el contador */}
          <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
        </Card>
    </Box>
  );
};
