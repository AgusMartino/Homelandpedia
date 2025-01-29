"use client";
import { useState } from "react";
import { Box, Typography, Card, FormControl, FormLabel, Slider, Button, Input, IconButton, Select, MenuItem , Checkbox } from '@mui/joy';
import Image from 'next/image';
import { axp } from '@/utils/axpCalculate';
import axpIcon from '@/img/axp.jpg';
import time from '@/img/items/time.jpg';
import axios from 'axios';
import { TriangleAlert, ArrowUp, ArrowDown } from "lucide-react";

const AltarOfAtiaMax = 10;
const defaultFilters = { AltarOfAtia: 10 };

export default function AxpTable() {
  const [filters, setFilters] = useState(defaultFilters);
  const [axieId, setAxieId] = useState('');
  const [axie, setAxie] = useState(null);
  const [result, setResult] = useState(false);
  const [alertAxie, setAlertAxie] = useState(false);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const labels = {
    homeland: "Daily Cap perAXIE",
    axieQuest: "Daily Cap per AXIE",
    axieOrigins: "Average of 30 energies",
    axieOriginsArcade: "Average of 10 energies",
    axieClassic: "Daily Cap per Axie, If you want to get, you need to win 63 Arenas"
  };
    // Estado para manejar los valores de los checkboxes
  const [checkboxValues, setCheckboxValues] = useState({
      homeland: 0,
      axieQuest: 0,
      axieOrigins: 0,
      axieOriginsArcade: 0,
      axieClassic: 0,
  });
  const [selectedOption, setSelectedOption] = useState(null);

  // Opciones del desplegable para Axie Origins
  const axieOriginsOptions = {
      Egg: 1800,
      Chick: 1800,
      Hare: 2700,
      Boar: 3600,
      Wolf: 4500,
      Bear: 5400,
      Tiger: 6300,
      Dragon: 7200,
      Challenger: 9000,
  };
  // Función para manejar cambios en los checkboxes
  const handleCheckboxChange = (field, value) => {
    setCheckboxValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  // Función para manejar la selección del desplegable Axie Origins
  const handleAxieOriginsChange = () => {
    setCheckboxValues((prev) => ({
      ...prev,
      axieOrigins: prev.axieOrigins === 0 ? 1000 : 0,
    }));
    if (checkboxValues.axieOrigins !== 0) {
      setSelectedOption(null);
    }
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setCheckboxValues((prev) => ({
      ...prev,
      axieOrigins: axieOriginsOptions[option],
    }));
  };
  const activeCheckboxes = Object.entries(checkboxValues).filter(([key, value]) => value !== 0);
  const handleChange = (key, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: newValue,
    }));
  };

  const filteredAxp = axp.filter((item) => item.atia <= filters.AltarOfAtia);

  const sortedAxp = filteredAxp.sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;
    const direction = sortDirection === 'asc' ? 1 : -1;
    return direction * (a[sortColumn] - b[sortColumn]);
  });

  const handleSort = (column, direction) => {
    setSortColumn(column);
    setSortDirection(direction);
  };

  async function fetchDataAxie(body) {
    try {
      // Sumar los valores de los checkboxes para calcular DAILY_CAP
      const DAILY_CAP = Object.values(checkboxValues).reduce((acc, val) => acc + val, 0);
      const res = await axios.post(`${window.location.origin}/api/getAxie`, body);
      const fetchedAxie = res.data;
      if (fetchedAxie && fetchedAxie.axpinfo) {
        const xpToAscend = fetchedAxie.axpinfo.xpToAscend;

        // Evitar división por cero si DAILY_CAP es 0
        const daysNeeded = DAILY_CAP > 0 ? Math.ceil(xpToAscend / DAILY_CAP) : Infinity;

        setAxie(fetchedAxie);
        setDays(daysNeeded);
        setResult(true);
        setAlertAxie(false);
      } else {
        setAxie(null);
        setAlertAxie(true);
      }
    } catch (error) {
      console.error(error);
      setAxie(null);
      setAlertAxie(true);
    } finally {
      setLoading(false);
    }
  }

  const handleCalculateAxp = async () => {
    setLoading(true);
    await fetchDataAxie({ axieId });
  };

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ width: '40%', marginLeft: '5%' }}>
        <Typography level="h1" component="h1" sx={{ marginBottom: 2 }}>
          AXP Generation
        </Typography>

        <FormControl sx={{ width: '100%' }}>
          <FormLabel>Altar of Atia Level:</FormLabel>
          <Slider
            value={filters.AltarOfAtia}
            onChange={(event, newValue) => handleChange('AltarOfAtia', newValue)}
            valueLabelDisplay="auto"
            min={1}
            max={AltarOfAtiaMax}
            marks={[
              { value: 1, label: '1' },
              { value: 10, label: '10' }
            ]}
            sx={{ mb: 2 }}
          />
        </FormControl>

        <Box mt={2} width="100%">
          <Card sx={{ p: 1, border: '1px solid #666' }}>
            <Box component="table" width="100%" sx={{ borderCollapse: 'collapse' }}>
              <Box component="thead">
                <Box component="tr">
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}></Box>
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>
                    AXP
                    <IconButton
                      onClick={() => handleSort('axp', 'asc')}
                      sx={{
                        color: sortColumn === 'axp' && sortDirection === 'asc' ? '#1976d2' : '#666',
                        border: '1px solid #1976d2',
                        m: 1,
                        backgroundColor: sortColumn === 'axp' && sortDirection === 'asc' ? '#e3f2fd' : 'transparent'
                      }}
                    >
                      <ArrowUp />
                    </IconButton>
                    <IconButton
                      onClick={() => handleSort('axp', 'desc')}
                      sx={{
                        color: sortColumn === 'axp' && sortDirection === 'desc' ? '#1976d2' : '#666',
                        border: '1px solid #1976d2',
                        backgroundColor: sortColumn === 'axp' && sortDirection === 'desc' ? '#e3f2fd' : 'transparent'
                      }}
                    >
                      <ArrowDown />
                    </IconButton>
                  </Box>
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>
                    Time
                  </Box>
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>
                    AXP/Hour
                    <IconButton
                      onClick={() => handleSort('axpHour', 'asc')}
                      sx={{
                        color: sortColumn === 'axpHour' && sortDirection === 'asc' ? '#1976d2' : '#666',
                        border: '1px solid #1976d2',
                        m: 1,
                        backgroundColor: sortColumn === 'axpHour' && sortDirection === 'asc' ? '#e3f2fd' : 'transparent'
                      }}
                    >
                      <ArrowUp />
                    </IconButton>
                    <IconButton
                      onClick={() => handleSort('axpHour', 'desc')}
                      sx={{
                        color: sortColumn === 'axpHour' && sortDirection === 'desc' ? '#1976d2' : '#666',
                        border: '1px solid #1976d2',
                        backgroundColor: sortColumn === 'axpHour' && sortDirection === 'desc' ? '#e3f2fd' : 'transparent'
                      }}
                    >
                      <ArrowDown />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <Box component="tbody">
                {sortedAxp.map((item, index) => (
                  <Box component="tr" key={index}>
                    <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={50}
                          height={50}
                          style={{ objectFit: "contain", marginRight: 8 }}
                          unoptimized={true}
                        />
                        <Typography sx={{ display: 'inline-flex', alignItems: 'center' }}>
                          {item.name}
                          {item.imgspecial && (
                            <span style={{ marginLeft: 8 }}>
                              <Image
                                src={item.imgspecial}
                                alt={`${item.name} special`}
                                width={20}
                                height={20}
                                style={{ objectFit: 'contain', verticalAlign: 'middle' }}
                                unoptimized={true}
                              />
                            </span>
                          )}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="body2">{item.axp}</Typography>
                        <Image
                          src={axpIcon}
                          alt="axp"
                          width={25}
                          height={25}
                          style={{ objectFit: "contain", marginLeft: 8 }}
                          unoptimized={true}
                        />
                      </Box>
                    </Box>
                    <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="body2">{item.time}</Typography>
                        <Image
                          src={time}
                          alt="time"
                          width={25}
                          height={25}
                          style={{ objectFit: "contain", marginLeft: 8 }}
                          unoptimized={true}
                        />
                      </Box>
                    </Box>
                    <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="body2">{item.axpHour}</Typography>
                        <Image
                          src={axpIcon}
                          alt="axp/hour"
                          width={25}
                          height={25}
                          style={{ objectFit: "contain", marginLeft: 8 }}
                          unoptimized={true}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>

        {/* Sección para calcular AXP faltante en el lado izquierdo (40% de ancho) */}
        <Box sx={{ width: '40%', marginRight: '5%' }}>
        <Typography level="h2" component="h2" sx={{ marginBottom: 2 }}>
            Calculate Missing AXP
        </Typography>
        <Input
            placeholder="Axie ID"
            value={axieId}
            onChange={(e) => setAxieId(e.target.value)}
            sx={{ marginBottom: 2 }}
        />
        <Button
            variant="outlined"
            onClick={handleCalculateAxp}
            disabled={loading}
        >
            {loading ? 'Loading...' : 'Calculate AXP'}
        </Button>
        {alertAxie && (
            <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>* The axie was not found *</Typography>
        )}
        {/* Checkboxes con nombres específicos */}
        <Box sx={{ marginTop: 2 }}>
            {/* Homeland */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox
                    checked={checkboxValues.homeland !== 0}
                    onChange={() => handleCheckboxChange("homeland", 10000)}
                />
                <Typography>Homeland</Typography>
            </Box>

            {/* Axie Quest */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox
                    checked={checkboxValues.axieQuest !== 0}
                    onChange={() => handleCheckboxChange("axieQuest", 6000)}
                />
                <Typography>Axie Quest</Typography>
            </Box>

            {/* Axie Origins */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox
                    checked={checkboxValues.axieOrigins !== 0}
                    onChange={() => {
                        handleCheckboxChange("axieOrigins", checkboxValues.axieOrigins === 0 ? 1000 : 0);
                    }}
                />
                <Typography>Axie Origins</Typography>
            </Box>

            {/* Mostrar el Select solo si Axie Origins está activo */}
            {checkboxValues.axieOrigins !== 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                {Object.entries(axieOriginsOptions).map(([label, value]) => (
                  <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Checkbox
                      checked={selectedOption === label}
                      onChange={() => handleOptionChange(label)}
                    />
                    <Typography>{label}</Typography>
                  </Box>
                ))}
              </Box>
            )}

            {/* Axie Origins Arcade */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox
                    checked={checkboxValues.axieOriginsArcade !== 0}
                    onChange={() => handleCheckboxChange("axieOriginsArcade", 1500)}
                />
                <Typography>Axie Origins Arcade</Typography>
            </Box>

            {/* Axie Classic */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox
                    checked={checkboxValues.axieClassic !== 0}
                    onChange={() => handleCheckboxChange("axieClassic", 12500)}
                />
                <Typography>Axie Classic</Typography>
            </Box>
        </Box>

        

        {/* Mostrar la imagen y textos solo si result tiene un valor */}
        {result && (
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', marginTop: 3, marginBottom: 8 }}>
                  <Card sx={{ p: 1, border: '1px solid #666', alignContent: 'center', justifyContent:'center' }}>
                    <Image
                        src={`https://axiecdn.axieinfinity.com/axies/${axie.axieId}/axie/axie-full-transparent.png`}// Asegúrate de actualizar esta ruta con la imagen correcta
                        alt="Imagen de axie"
                        width={300} // Ajusta el tamaño según sea necesario
                        height={300} // Ajusta el tamaño según sea necesario
                        style={{ objectFit: 'contain', marginRight: 2 }} // Margen a la derecha de la imagen
                        unoptimized={true}
                    />
                    <Box alignItems="center" justifyContent="center">
                        <Box display="flex" alignItems="center" justifyContent="center">
                          <Typography variant="body2">Level: <strong>{axie.axpinfo.level}</strong></Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="body2">Actual: <strong>{formatNumber(axie.axpinfo.xp)}</strong></Typography>
                            <Image
                                src={axpIcon} // Asegúrate de que esta sea la ruta correcta de tu imagen
                                alt="AXP Icon"
                                width={40} // Ajusta el tamaño según sea necesario
                                height={40} // Ajusta el tamaño según sea necesario
                                style={{ objectFit: 'contain' }} // Asegura que la imagen mantenga su forma
                                unoptimized={true}
                            />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="body2">
                                Missing for next ascend: <strong>{formatNumber(axie.axpinfo.xpToAscend)}</strong>
                            </Typography>
                            <Image
                                src={axpIcon} // Asegúrate de que esta sea la ruta correcta de tu imagen
                                alt="AXP Icon"
                                width={40} // Ajusta el tamaño según sea necesario
                                height={40} // Ajusta el tamaño según sea necesario
                                style={{ objectFit: 'contain' }} // Asegura que la imagen mantenga su forma
                                unoptimized={true}
                            />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                          <Typography variant="body2">Days to generate missing AXP: <strong>{days}</strong></Typography>
                        </Box>
                    </Box>
                  </Card>
                </Box>

                {/* Nuevo Box con advertencias dentro del condicional */}
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", justifyContent:'center', flexDirection:"column", marginTop: 2 }}>
                    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                        <TriangleAlert width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </Box>
                    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                        <Typography variant="body2">
                            * This is calculated assuming the Following daily caps *
                        </Typography>
                    </Box>
                    <Box>
                        {activeCheckboxes.map(([key, value]) => (
                            <Box key={key} sx={{ marginBottom: 2 }}>
                                <Typography level="title-md">
                                    <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong> {value}
                                </Typography>
                                <Typography level="body-sm" sx={{ color: "gray" }}>
                                    {labels[key]}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        )}
        </Box>
    </Box>
  );
}
