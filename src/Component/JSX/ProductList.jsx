import React from "react";
import { useFilterContext } from "../Context/Filter_Context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view, isLoading, isError } = useFilterContext();

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  if (!filter_products || filter_products.length === 0) {
    return <div>No products found.</div>;
  }

  return grid_view ? (
    <GridView products={filter_products} />
  ) : (
    <ListView products={filter_products} />
  );
};

export default ProductList;