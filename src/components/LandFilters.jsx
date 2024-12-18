import React, { useEffect } from "react";
import {
  Sheet,
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  Select,
  Option,
  Slider,
} from "@mui/joy";
import { Heart } from "lucide-react";
import qr from '@/img/qrRonin.jpg';
import Image from 'next/image';

const Filters = ({ filters, setFilters, fetchData }) => {
  const landtypes = ["All", "Savannah", "Forest", "Arctic", "Mystic", "Genesis"];
  const AltarOfAtiaMax = 10;
  /* const WorkersAxiesMax = 35; */

  const defaultFilters = {
    landtypes: "All",
    AltarOfAtia: 1, // Ajuste para un valor único inicial en vez de [1, AltarOfAtiaMax]
    /* WorkersAxies: 0, // Ajuste para un valor único inicial */
  };

  // Establecer valores predeterminados y cargar datos al inicio
  useEffect(() => {
    if (!filters || Object.keys(filters).length === 0) {
      setFilters(defaultFilters);
      fetchData(defaultFilters);
    }
  }, [setFilters, fetchData]);

  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    fetchData(updatedFilters);
  };

  const resetFilters = () => {
    const ascendingFilters = {
      ...defaultFilters,
      AltarOfAtia: Math.min(defaultFilters.AltarOfAtia, AltarOfAtiaMax),
      /* WorkersAxies: Math.min(defaultFilters.WorkersAxies, WorkersAxiesMax), */
    };
    setFilters(ascendingFilters);
    fetchData(ascendingFilters);
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
        <FormLabel>Land Type:</FormLabel>
        <Select
          value={filters.landtypes || "All"}
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
        <FormLabel>Altar of Atia Level:</FormLabel>
        <Slider
          value={filters.AltarOfAtia || defaultFilters.AltarOfAtia}
          onChange={(event, newValue) => handleChange("AltarOfAtia", newValue)}
          valueLabelDisplay="auto"
          min={1}
          max={AltarOfAtiaMax}
          marks={[{ value: 1, label: "1" }]}  // Solo marca en el valor mínimo
          sx={{ mb: 2 }}
        />
      </FormControl>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        {/* Primer texto con el icono de corazón */}
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Typography variant="body2">Support</Typography>
          <Heart />
        </Box>

        {/* Segundo texto de donación */}
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Typography variant="body2">Donate to agusxcala.ron</Typography>
        </Box>

        {/* Box para la imagen sobre el último texto */}
        <Box sx={{ marginBottom: 1, display: 'flex', justifyContent: 'center' }}>
          <Image src={qr} alt="0x4b64176a09D6d1Cf4634C3DD46D6C8d9E8C09c83" width={100} height={100} unoptimized={true} />
        </Box>

        {/* Tercer texto de Lunacian Code */}
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Typography variant="body2">Lunacian Code Coming soon</Typography>
        </Box>
      </Box>

{/*       <FormControl>
        <FormLabel>Workers Axies:</FormLabel>
        <Slider
          value={filters.WorkersAxies || defaultFilters.WorkersAxies}
          onChange={(event, newValue) => handleChange("WorkersAxies", newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={WorkersAxiesMax}
          marks={[{ value: 0, label: "0" }]}  // Solo marca en el valor mínimo
          sx={{ mb: 2 }}
        />
      </FormControl> */}
    </Sheet>
  );
};

export default Filters;
