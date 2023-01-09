import React, { useState, useEffect } from "react";

import { Select } from "./Select";
import { SelectItem } from "./SelectItem";

export default {
  title: "Test/Select",
  component: Select,
};

const MultiFilterTest = () => {
  const data = [
    {
      brand: "Feminino",
      line: "Acessórios",
    },
    {
      brand: "Feminino",
      line: "Roupas",
    },
    {
      brand: "Masculino",
      line: "Cuecas",
    },
    {
      brand: "Masculino",
      line: "Perfumaria",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedLine, setSelectedLine] = useState([]);
  const [lineOptions, setLineOptions] = useState([]);

  useEffect(() => {
    const lines = data
      .filter((product) => product.brand === selectedBrand)
      .map((product) => product.line);
    setLineOptions([...new Set(lines)]);
    setSelectedLine([]);
  }, [selectedBrand]);

  const handleChangeBrand = (selected) => {
    setSelectedBrand(selected);
  };

  const handleChangeLine = (selected) => {
    setSelectedLine(selected);
  };

  return (
    <React.Fragment>
      <div className="my-3">
        selectedBrand: {selectedBrand} <br />
        selectedLine: {selectedLine}
      </div>
      <Select
        handleChange={handleChangeBrand}
        label="Brand"
        placeholder="Placeholder"
        selected={selectedBrand}
        readOnly
      >
        {[...new Set(data.map((product) => product.brand))].map((brand) => (
          <SelectItem value={brand}>{`Brand ${brand}`}</SelectItem>
        ))}
      </Select>
      <Select
        multiselect
        handleChange={handleChangeLine}
        label="Line"
        placeholder="Placeholder"
        selected={selectedLine}
        readOnly
      >
        {lineOptions.map((line) => (
          <SelectItem value={line}>{`Line ${line}`}</SelectItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

const Template = (args) => {
  return <MultiFilterTest />;
};

export const SelectInput = Template.bind({});
