import React from "react";
import {
  Sheet,
  Button,
  FormControl,
  FormLabel,
  Select,
  Option,
  Slider,
} from "@mui/joy";

const Filters = ({ filters, setFilters, fetchData }) => {
  const landtypes = ["All", "Savannah", "Forest", "Arctic", "Mystic", "Genesis"];
  const AltarOfAtiaMax = 10; // Valor máximo del slider

  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    fetchData(updatedFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      landtypes: "All",
      AltarOfAtia: [1, AltarOfAtiaMax],
    };
    setFilters(defaultFilters);
    fetchData(defaultFilters);
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        width: 250,
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
          {landtypes.map((landtype) => (
            <Option key={landtype} value={landtype}>
              {landtype}
            </Option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Altar of Atia Level</FormLabel>
        <Slider
          value={filters.AltarOfAtia}
          onChange={(event, newValue) => handleChange("AltarOfAtia", newValue)}
          valueLabelDisplay="auto"
          min={1}
          max={AltarOfAtiaMax}
          marks={[
            { value: 1, label: "1" },
            { value: AltarOfAtiaMax, label: `${AltarOfAtiaMax}` },
          ]}
          sx={{ mt: 2 }}
        />
      </FormControl>
    </Sheet>
  );
};

export default Filters;
