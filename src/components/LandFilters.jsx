import React from "react";
import {
  Sheet,
  Button,
  FormControl,
  FormLabel,
  Select,
  Option,
} from "@mui/joy";

const Filters = ({ filters, setFilters, fetchData }) => {
  const landtypes = [
    "All", 
    "Savannah",
    "Forest",
    "Arctic",
    "Mystic",
    "Genesis"
  ];
  const AltarOfAtia = [
    "All",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ]

  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    fetchData(updatedFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      landtypes:"All",
      AltarOfAtia:"All"
    };
    setFilters(defaultFilters);
    fetchData(defaultFilters);
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        padding: 1,
        width: 200,
      }}
    >
      <Button color="neutral" onClick={resetFilters}>
        Reset Filters
      </Button>
      <FormControl>
        <FormLabel>Land Type</FormLabel>
        <Select
          value={filters.landtypes}
          onChange={(event, newValue) => handleChange("landtypes", newValue)}
        >
          {landtypes.map((landtypes) => (
            <Option key={landtypes} value={landtypes}>
              {landtypes}
            </Option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Altar of Atia Level</FormLabel>
        <Select
          value={filters.AltarOfAtia}
          onChange={(event, newValue) => handleChange("AltarOfAtia", newValue)}
        >
          {AltarOfAtia.map((AltarOfAtia) => (
            <Option key={AltarOfAtia} value={AltarOfAtia}>
              {AltarOfAtia}
            </Option>
          ))}
        </Select>
      </FormControl>
    </Sheet>
  );
};

export default Filters;
