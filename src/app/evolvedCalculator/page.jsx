"use client";
import { useState } from "react";
import { Box, Typography, Card, CardContent, Input, Button } from "@mui/joy";
import axios from "axios";
import Image from 'next/image';
import usd from 'image/usd.jpg';
import eth from 'image/eth.jpg';
import { padding } from "@mui/system";

export default function AxpCalculator() {
  const [axieId, setAxieId] = useState("");
  const [axie, setAxie] = useState(null);
  const [result, setResult] = useState(false);
  const [alertAxie, setAlertAxie] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchDataAxie(body) {
    try {
      const res = await axios.post(`${window.location.origin}/api/getEvolvedCalculate`, body);
      const fetchedAxie = res.data;
      if (fetchedAxie.class) {
        setAxie(fetchedAxie);
        setResult(true);
        setAlertAxie(false);
      } else {
        setAxie(null);
        setResult(false);
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

  const calculateEvolveDetails = (part) => {
    const { mementoPriceEth, mementoPriceUsd, mementosQuantity, mementosQuantityInsta, spiritShellNeed } = part.evolved;
    const spiritShell = spiritShellNeed || 0;

    return {
      normalEvolve: {
        totalQuantity: mementosQuantity + spiritShell,
        totalEth: (mementoPriceEth * (mementosQuantity + spiritShell)).toFixed(6),
        totalUsd: (mementoPriceUsd * (mementosQuantity + spiritShell)).toFixed(2),
      },
      instantEvolve: {
        totalQuantity: mementosQuantityInsta + spiritShell * 2,
        totalEth: (mementoPriceEth * (mementosQuantityInsta + spiritShell * 2)).toFixed(6),
        totalUsd: (mementoPriceUsd * (mementosQuantityInsta + spiritShell * 2)).toFixed(2),
      },
    };
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography level="h2" component="h2" sx={{ marginBottom: 2 }}>
        Calculate Cost of Evolved Parts
      </Typography>
      <Input
        placeholder="Axie ID"
        value={axieId}
        onChange={(e) => setAxieId(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="outlined" onClick={handleCalculateAxp} disabled={loading}>
        {loading ? "Loading..." : "Calculate"}
      </Button>
      {alertAxie && (
        <Typography align="center" sx={{ color: "#ff0000", mt: 2 }}>
          * The axie was not found *
        </Typography>
      )}
      {result && axie && (
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} mt={4}>
          {/* Primera Columna: Axie */}
          <Box flex={1}>
            <Card>
              <CardContent>
                {/* Mostrar el ID y nivel arriba de la imagen */}
                <Box sx={{ marginBottom: 2, textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                    ID: {axie.Id}
                  </Typography>
                  <Typography sx={{ fontSize: "1.6rem", fontWeight: "500" }}>
                    Level: {axie.level}
                  </Typography>
                </Box>

                {/* Imagen del Axie */}
                <Box
                  component="img"
                  src={axie.img}
                  alt={`Axie ${axie.Id}`}
                  sx={{ width: "100%", borderRadius: 2 }}
                />
              </CardContent>
            </Card>
          </Box>

          {/* Segunda Columna: Partes */}
          <Box flex={1}>
            {axie.parts && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // Dos columnas
                  gap: 2, // Espaciado entre cards
                }}
              >
                {axie.parts.map((part, index) => (
                  <Card key={index} sx={{ padding: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {/* Información de la parte con imagen y nombre */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* Imagen de la parte */}
                        <Image
                          src={part.img}
                          alt={part.type + part.class}
                          width={30}
                          height={30}
                        />
                        {/* Nombre de la parte */}
                        <Typography level="h6">{part.name}</Typography>
                      </Box>

                      {part.stage === 2 ? (
                        // Si es Stage 2, solo muestra el mensaje
                        <Typography>{part.evolved?.message}</Typography>
                      ) : (
                        <>
                          {/* Evolución normal e instantánea */}
                          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                            {/* Normal Evolve */}
                            <Box sx={{ flex: 1 }}>
                              <Typography level="h6" sx={{ fontWeight: 'bold' }} >Normal Evolve:</Typography>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                {/* Imagen de la parte */}
                                <Image
                                  src={part.evolved.mementoImg}
                                  alt={part.evolved.mementoName}
                                  width={30}
                                  height={30}
                                />
                                {/* Nombre de la parte */}
                                <Typography>
                                  {part.evolved.mementosQuantity}
                                </Typography>
                                {/* Verificar si spiritShellNeed no es nulo */}
                                {part.evolved.spiritShellNeed && (
                                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Typography>+</Typography>
                                    {/* Imagen de spiritShellNeed */}
                                    <Image
                                      src={part.evolved.spiritShellNeed.imageUrl}
                                      alt="Spirit Shell"
                                      width={20} // Ajusta el tamaño según lo necesites
                                      height={20} // Ajusta el tamaño según lo necesites
                                    />
                                    {/* Texto 1 al lado de la imagen */}
                                    <Typography>1</Typography>
                                  </Box>
                                )}
                              </Box>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 0.5 }}>
                                  {/* Imagen de la parte */}
                                  <Image
                                    src={eth}
                                    alt="Eth"
                                    width={30}
                                    height={30}
                                  />
                                  {/* Nombre de la parte */}
                                  <Typography>
                                    {(
                                      (Number(part.evolved.mementoPriceEth) *
                                      Number(part.evolved.mementosQuantity)) +
                                      (part.evolved.spiritShellNeed
                                        ? Number(part.evolved.spiritShellNeed.minprinceEth)
                                        : 0)
                                    ).toFixed(6)}
                                  </Typography>
                              </Box>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 0.5 }}>
                                  {/* Imagen de la parte */}
                                  <Image
                                    src={usd}
                                    alt="usd"
                                    width={30}
                                    height={30}
                                  />
                                  {/* Nombre de la parte */}
                                  <Typography>
                                    {(
                                      (Number(part.evolved.mementoPriceUsd) *
                                      Number(part.evolved.mementosQuantity)) +
                                      (part.evolved.spiritShellNeed
                                        ? Number(part.evolved.spiritShellNeed.minprinceUsd)
                                        : 0)
                                    ).toFixed(6)}
                                  </Typography>
                              </Box>
                            </Box>

                            {/* Instant Evolve */}
                            <Box sx={{ flex: 1 }}>
                              <Typography level="h6" sx={{ fontWeight: 'bold' }}>Instant Evolve:</Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                  {/* Imagen de la parte */}
                                  <Image
                                    src={part.evolved.mementoImg}
                                    alt={part.evolved.mementoName}
                                    width={30}
                                    height={30}
                                  />
                                  {/* Nombre de la parte */}
                                  <Typography>
                                    {part.evolved.mementosQuantityInsta}
                                  </Typography>
                                    {/* Verificar si spiritShellNeed no es nulo */}
                                  {part.evolved.spiritShellNeed && (
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                      <Typography>+</Typography>
                                      {/* Imagen de spiritShellNeed */}
                                      <Image
                                        src={part.evolved.spiritShellNeed.imageUrl}
                                        alt="Spirit Shell"
                                        width={20} // Ajusta el tamaño según lo necesites
                                        height={20} // Ajusta el tamaño según lo necesites
                                      />
                                      {/* Texto 1 al lado de la imagen */}
                                      <Typography>2</Typography>
                                    </Box>
                                  )}
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 0.5 }}>
                                  {/* Imagen de la parte */}
                                  <Image
                                    src={eth}
                                    alt="Eth"
                                    width={30}
                                    height={30}
                                  />
                                  {/* Nombre de la parte */}
                                  <Typography>
                                    {(
                                      (Number(part.evolved.mementoPriceEth) *
                                      Number(part.evolved.mementosQuantityInsta)) +
                                      (part.evolved.spiritShellNeed
                                        ? Number(part.evolved.spiritShellNeed.minprinceEth) * 2
                                        : 0)
                                    ).toFixed(6)}
                                  </Typography>
                              </Box>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 0.5 }}>
                                  {/* Imagen de la parte */}
                                  <Image
                                    src={usd}
                                    alt="usd"
                                    width={30}
                                    height={30}
                                  />
                                  {/* Nombre de la parte */}
                                  <Typography>
                                    {(
                                      (Number(part.evolved.mementoPriceUsd) *
                                      Number(part.evolved.mementosQuantityInsta)) +
                                      (part.evolved.spiritShellNeed
                                        ? Number(part.evolved.spiritShellNeed.minprinceUsd) * 2
                                        : 0)
                                    ).toFixed(6)}
                                  </Typography>
                              </Box>
                            </Box>
                          </Box>

                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 2 }}>
                            {/* Imagen al lado del Fee */}
                            <Typography align="center" marginRight={1}>
                              Fee:
                            </Typography>
                            <Image
                              src={usd}
                              alt="usd"
                              width={30}
                              height={30}
                            />
                            <Typography align="center" marginLeft={1}>
                              {part.evolved.feeEvolved}
                            </Typography>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Card>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
