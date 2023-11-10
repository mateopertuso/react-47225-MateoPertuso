/* import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section style={{display: "flex", justifyContent:"space-evenly"}}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
      })}
    </section>
  );
};

export default ItemList;
 */
import { Typography, Stack, Container } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, categoryName }) => {
  return (
    <>
      <Container maxWidth="xl" mt={1} mb={20} >
        <Typography variant="h2" mt={2} mb={2} align="center" color={"secondary"}>
          {categoryName ? `${categoryName} ` : "Catálogo"}
        </Typography>
        <Stack
          direction={{ xs: "row" }}
          flexWrap="wrap"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={{ xs: "center" }}
          gap={3}
          mb={4}
        >
          {items.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </Stack>
      </Container>
    </>
  );
};

export default ItemList;