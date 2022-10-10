import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { TextField } from '../TextField';

const Filter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
  }, 200);

  return (
    <TextField
      iconLeft="search"
      label="Pesquisar"
      value={value || ''}
      width="100%"
      onChange={(e) => {
        setValue(e);
        onChange(e);
      }}
      placeholder="Palavras, números..."
      type="search"
    />
  );
};

export { Filter };
