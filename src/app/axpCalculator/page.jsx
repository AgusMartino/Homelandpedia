"use client";
import { useState } from "react";
// Importa los componentes necesarios de MUI/Joy y Next.js
import { Box, Typography, Card, FormControl, FormLabel, Slider, Button, Input } from '@mui/joy';
import Image from 'next/image';
import { axp } from '@/utils/axpCalculate'; // Importa el array desde la ruta especificada
import axpIcon from '@/img/axp.jpg';
import time from '@/img/items/time.jpg';
import axios from 'axios'; // Asegúrate de importar axios si lo usas para las peticiones
import { TriangleAlert  } from "lucide-react";

const DAILY_CAP = 10000; // Límite diario de XP
const AltarOfAtiaMax = 10;
const defaultFilters = { AltarOfAtia: 10 };

export default function AxpTable() {
  const [filters, setFilters] = useState(defaultFilters);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc'
  const [axieId, setAxieId] = useState(''); // Estado para el ID del Axie
  const [axie, setAxie] = useState(null); // Cambiado a null para comprobar si hay datos
  const [result, setResult] = useState(false); // Estado para mostrar el resultado
  const [alertAxie, setAlertAxie] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de carga
  const [days, setDays] = useState("")
  const [hours, setHours] = useState("")

  // Función para actualizar el valor de AltarOfAtia en los filtros
  const handleChange = (key, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: newValue,
    }));
  };

  // Función para filtrar el array `axp` según el valor de AltarOfAtia
  const filteredAxp = axp.filter((item) => item.atia <= filters.AltarOfAtia);

  // Función para ordenar los elementos según el orden especificado
  const sortedAxp = filteredAxp.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.axpHour - b.axpHour; // Orden ascendente
    }
    return b.axpHour - a.axpHour; // Orden descendente
  });

  async function fetchDataAxie(body) {
    try {
      const res = await axios.post(`${window.location.origin}/api/getAxie`, body);
      setAxie(res.data);
    } catch (error) {
      console.error(error);
      setAxie(null); // Reiniciar axie en caso de error
    }
  }

  // Función para manejar el cálculo del AXP faltante
  const handleCalculateAxp = async () => {
    setLoading(true);
    await fetchDataAxie({ axieId }); // Asegúrate de pasar el ID del Axie en el cuerpo

    if (axie && axie.axpinfo) {
      const xpToAscend = axie.axpinfo.xpToAscend;
      const daysNeeded = Math.ceil(xpToAscend / DAILY_CAP);
      const remainingXP = xpToAscend % DAILY_CAP; // XP restante después de días completos

      // Calcula horas y minutos del XP restante
      const hoursNeeded = remainingXP > 0 ? (remainingXP / (DAILY_CAP / 24)).toFixed(2) : 0;
      setDays(daysNeeded)
      setHours(hoursNeeded)
      setResult(true)
      setAlertAxie(false)


    } else {
      setAlertAxie(true);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
      {/* Sección para la tabla (40% de ancho) */}
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

        {/* Botones para ordenar */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
          <Button variant="outlined" onClick={() => setSortOrder('asc')}>
            Sort AXP/Hour - Lowest to High
          </Button>
          <Button variant="outlined" onClick={() => setSortOrder('desc')}>
            Sort AXP/Hour - High to Lowest
          </Button>
        </Box>

        {/* Encabezado de la tabla */}
        <Box mt={2} width="100%">
          <Card sx={{ p: 1, border: '1px solid #666' }}>
            <Box component="table" width="100%" sx={{ borderCollapse: 'collapse' }}>
              <Box component="thead">
                <Box component="tr">
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}></Box>
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>AXP</Box>
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Time</Box>
                  <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>AXP/Hour</Box>
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
            {loading ? 'Loadingg...' : 'Calculate AXP'}
        </Button>
        {alertAxie && (
            <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>* The axie was not found *</Typography>
        )}
        

        {/* Mostrar la imagen y textos solo si result tiene un valor */}
        {result && (
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                    <Image
                        src={axie.img} // Asegúrate de actualizar esta ruta con la imagen correcta
                        alt="Imagen de axie"
                        width={300} // Ajusta el tamaño según sea necesario
                        height={300} // Ajusta el tamaño según sea necesario
                        style={{ objectFit: 'contain', marginRight: 2 }} // Margen a la derecha de la imagen
                    />
                    <Box>
                        <Typography variant="body2">Level: <strong>{axie.axpinfo.level}</strong></Typography>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body2">Actual: <strong>{axie.axpinfo.xp}</strong></Typography>
                            <Image
                                src={axpIcon} // Asegúrate de que esta sea la ruta correcta de tu imagen
                                alt="AXP Icon"
                                width={40} // Ajusta el tamaño según sea necesario
                                height={40} // Ajusta el tamaño según sea necesario
                                style={{ objectFit: 'contain' }} // Asegura que la imagen mantenga su forma
                            />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body2">
                                Missing for next ascend: <strong>{axie.axpinfo.xpToAscend}</strong>
                            </Typography>
                            <Image
                                src={axpIcon} // Asegúrate de que esta sea la ruta correcta de tu imagen
                                alt="AXP Icon"
                                width={40} // Ajusta el tamaño según sea necesario
                                height={40} // Ajusta el tamaño según sea necesario
                                style={{ objectFit: 'contain' }} // Asegura que la imagen mantenga su forma
                            />
                        </Box>
                        <Typography variant="body2">Days to generate missing AXP: <strong>{days}</strong></Typography>
                        <Typography variant="body2">Hours to generate missing AXP: <strong>{hours}</strong></Typography>
                    </Box>
                </Box>

                {/* Nuevo Box con advertencias dentro del condicional */}
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", justifyContent:'center', flexDirection:"column", marginTop: 2 }}>
                    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                        <TriangleAlert width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </Box>
                    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                        <Typography variant="body2">
                            **The result is calculated by making 10,000 Axp per day
                        </Typography>
                    </Box>
                </Box>
            </Box>
        )}
        </Box>
    </Box>
  );
}
