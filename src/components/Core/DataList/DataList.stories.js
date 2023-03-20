/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-console */
import React from "react";
import { Card } from "../Card";
import { Check } from "../Check";

import { DataList, ProductCard } from "./DataList";
import { products } from "./dummy_data";

export default {
  title: "Core/DataList",
  component: DataList,
  parameters: {
    layout: "fullscreen",
  },
};

const dataConfig = [{ label: "ID", value: "id" }];
const Template = (args) => <DataList {...args} />;

export const Basic = Template.bind({});
export const Controlled = Template.bind({});
export const Test = Template.bind({});

const DescriptiveItemTest = ({ id, selectedProducts, setSelectedProducts }) => {
  function handleCheck(e) {
    if (e === "0") {
      setSelectedProducts((prevState) => [...prevState, id]);
    } else {
      const index = selectedProducts.indexOf(id);
      selectedProducts.splice(index, 1);
      setSelectedProducts([...selectedProducts]);
    }
  }
  return (
    <Card>
      <Check
        two
        handleChange={(e) => handleCheck(e)}
        value={selectedProducts.includes(id) ? "1" : "0"}
      >
        {`Id do item: ${id}`}
      </Check>
    </Card>
  );
};

Basic.args = {
  data: products,
  dataConfig,
  manualPagination: false,
  recordCount: products.length,
  itemComponent: ProductCard,
  onPageChange: ({ pageIndex, paginationCount }) =>
    console.log(`${pageIndex},${paginationCount}`),
  sort: [{ id: "id", desc: false }],
};

Controlled.args = {
  data: products,
  dataConfig,
  manualPagination: true,
  currentPage: 1,
  recordCount: products.length,
  itemComponent: ProductCard,
  onPageChange: ({ pageIndex, paginationCount }) =>
    console.log(`${pageIndex},${paginationCount}`),
  sort: [{ id: "id", desc: false }],
};

Test.args = {
  data: [
    { id: 1, teste: "teste" },
    { id: 2, teste: "teste" },
    { id: 3, teste: "teste" },
    { id: 4, teste: "teste" },
    { id: 5, teste: "teste" },
    { id: 6, teste: "teste" },
    { id: 7, teste: "teste" },
    { id: 8, teste: "teste" },
    { id: 9, teste: "teste" },
    { id: 10, teste: "teste" },
    { id: 11, teste: "teste" },
    { id: 12, teste: "teste" },
    { id: 13, teste: "teste" },
    { id: 14, teste: "teste" },
  ],
  dataConfig,
  manualPagination: false,
  currentPage: 1,
  recordCount: 14,
  itemComponent: DescriptiveItemTest,
  itemProps: {
    setSelectedProducts: () => console.log("select"),
    selectedProducts: [],
  },
  onPageChange: ({ pageIndex, paginationCount }) =>
    console.log(`${pageIndex},${paginationCount}`),
  sort: [{ id: "id", desc: false }],
};
