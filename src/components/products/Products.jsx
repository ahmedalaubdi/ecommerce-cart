import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../product/Product";

//products
// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     price: "$20",
//     description: "Runnogn shoes",
//     image: "./images/project1.jpg",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     price: "$25",
//     description: "Apple macbook",
//     image: "./images/project2.jpg",
//   },
// ];

const Products = ({ products, handleAddToCart }) => {
  return (
    <main>
      <Grid container justify="center" spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
