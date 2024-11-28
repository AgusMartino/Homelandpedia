"use client";
import { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/joy";
import gold from '@/img/items/gold.jpg';
import wood from '@/img/items/wood.jpg';
import stone from '@/img/items/stone.jpg';
import atia from '@/img/items/atia.jpg';
import time from '@/img/items/time.jpg';
import { buildings } from '@/utils/buildings'; // Asegúrate de que esta importación sea correcta
import Image from 'next/image';

function BuildingsList() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Box display="flex" p={2}>
      {/* Columna izquierda para el listado */}
      <Box width="50%" alignItems="center "pr={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" gutterBottom>Buildings</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" gap={2} maxWidth="100%">
          {Array.isArray(buildings) && buildings.length > 0 ? (
            buildings.map((building, index) => (
              <Card
                key={index}
                onClick={() => setSelectedBuilding(building)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 3,
                  },
                  width: 'calc(25% - 16px)', // 25% del ancho para un máximo de 4 por fila, menos el espacio del gap
                  minWidth: '150px', // Ancho mínimo si es necesario
                }}
              >
                <Image
                  src={building.image}
                  alt={building.name}
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                  unoptimized={true}
                />
                <CardContent>
                  <Typography variant="body1">{building.name}</Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1">No buildings available.</Typography>
          )}
        </Box>
      </Box>

      {/* Columna derecha para el detalle del edificio */}
      <Box width="50%" pl={2} border="1px solid black" borderRadius="8px" p={2} display="flex" flexDirection="column" alignItems="center">
        {selectedBuilding ? (
          <>
            <Typography align="center">{selectedBuilding.name}</Typography>
            <Image
              src={selectedBuilding.image}
              alt={selectedBuilding.name}
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
              sx={{ mt: 2 }}
              unoptimized={true}
            />
            <Typography sx={{ mt: 2 }} align="center"><strong>Max Buildings:</strong> {selectedBuilding.maxBuilding}</Typography>
            <Typography sx={{ mt: 2 }} align="center">{selectedBuilding.Description}</Typography>
            <Box mt={2} width="100%">
              {selectedBuilding.Levels && selectedBuilding.Levels.length > 0 ? (
                <Card sx={{ p: 1, border: '1px solid #666' }}>
                  <Box component="table" width="100%" sx={{ borderCollapse: 'collapse' }}>
                    <Box component="thead">
                      <Box component="tr">
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}></Box>
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Gold</Box>
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Wood</Box>
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Stone</Box>
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Time</Box>
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Atia Level</Box>
                        <Box component="th" padding={1} textAlign="center" sx={{ border: '1px solid #666' }}>Description</Box>
                      </Box>
                    </Box>
                    <Box component="tbody">
                      {selectedBuilding.Levels.map((level, idx) => (
                        <Box component="tr" key={idx}>
                          <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Image
                                src={level.img}
                                alt={level.name}
                                width={50}
                                height={50}
                                style={{ objectFit: "contain", marginRight: 8 }}
                                unoptimized={true}
                              />
                              <Typography variant="body2">{level.name}</Typography>
                            </Box>
                          </Box>
                          <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Typography variant="body2">{level.Gold}</Typography>
                              <Image
                                src={gold}
                                alt="gold"
                                width={25}
                                height={25}
                                style={{ objectFit: "contain", marginLeft: 8 }}
                                unoptimized={true}
                              />
                            </Box>
                          </Box>
                          <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Typography variant="body2">{level.Wood}</Typography>
                              <Image
                                src={wood}
                                alt="wood"
                                width={25}
                                height={25}
                                style={{ objectFit: "contain", marginLeft: 8 }}
                                unoptimized={true}
                              />
                            </Box>
                          </Box>
                          <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Typography variant="body2">{level.Stone}</Typography>
                              <Image
                                src={stone}
                                alt="stone"
                                width={25}
                                height={25}
                                style={{ objectFit: "contain", marginLeft: 8 }}
                                unoptimized={true}
                              />
                            </Box>
                          </Box>
                          <Box component="td" padding={1} sx={{ border: '1px solid #666', textAlign: 'center' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Typography variant="body2">{level.Time}</Typography>
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
                              <Typography variant="body2">{level.AtiaLevel}</Typography>
                              <Image
                                src={atia}
                                alt="atia"
                                width={25}
                                height={25}
                                style={{ objectFit: "contain", marginLeft: 8 }}
                                unoptimized={true}
                              />
                            </Box>
                          </Box>
                          <Box component="td" padding={1} sx={{ width:200, border: '1px solid #666', textAlign: 'center' }}>
                            <Typography variant="body2">{level.Description}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Card>
              ) : (
                <Typography variant="body2">No levels available for this building.</Typography>
              )}
            </Box>
          </>
        ) : (
          <Typography variant="body1">Select a building to see details</Typography>
        )}
      </Box>
    </Box>
  );
}

export default BuildingsList;
