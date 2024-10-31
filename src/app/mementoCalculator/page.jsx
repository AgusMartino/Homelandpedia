"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialCardComponent from "@/components/MaterialCardComponent";
import MaterialCardResult from "@/components/MaterialResultaCardComponent"
import memento from '@/img/materialIcon.jpg';
import usd from '@/img/usd.jpg';
import eth from '@/img/eth.jpg';
import aquaticGif from '@/img/aquatic.gif';
import beastGif from '@/img/beast.gif';
import birdGif from '@/img/bird.gif';
import bugGif from '@/img/bug.gif';
import dawnGif from '@/img/dawn.gif'
import duskGif from '@/img/dusk.gif';
import mechGif from '@/img/mech.gif';
import plantGif from '@/img/plant.gif';
import reptileGif from '@/img/reptile.gif';
import radiantGif from '@/img/radiant.gif';
import aquatic from '@/img/aquatic.jpg';
import beast from '@/img/beast.jpg';
import bird from '@/img/bird.jpg';
import bug from '@/img/bug.jpg';
import dawn from '@/img/dawn.jpg';
import dusk from '@/img/dusk.jpg';
import mech from '@/img/mech.jpg';
import plant from '@/img/plant.jpg';
import reptile from '@/img/reptile.jpg';
import { Box, CircularProgress, Card, CardContent, Button, Typography, Input, Grid } from "@mui/joy";
import Image from "next/image";
import { TriangleAlert  } from "lucide-react";

function App() {
  const [material, setData] = useState([]);
  const [exchange, setDataExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAxieClass, setselectedAxieClass] = useState(null);
  const [selectedBreed, setselectedBreed] = useState(null);
  const [selectedAxiePrice, setSelectedAxiePrice] = useState(null);
  const [selectedLevel, setselectedLevel] = useState(null);
  const [totalsArray, setTotalsArray] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState([]);
  const [alertBreed, setalertBreed] = useState(false);
  const [alertLevel, setalertLevel] = useState(false);
  const [alertQuantities, setalertQuantities] = useState(false);
  const [alertClass, setalertClass] = useState(false);
  const [alertPriceAxie, setalertPriceAxie] = useState(false);

  const options = [
    { id:1, label: "Aquatic", value: "aquatic", imgSrc: aquatic, key: 'aquatic', imgGif: aquaticGif },
    { id:2, label: "Beast", value: "beast", imgSrc: beast, key: 'beast', imgGif: beastGif },
    { id:3, label: "Bird", value: "bird", imgSrc: bird, key: 'bird', imgGif: birdGif },
    { id:4, label: "Bug", value: "bug", imgSrc: bug, key: 'bug', imgGif: bugGif },
    { id:5, label: "Dawn", value: "dawn", imgSrc: dawn, key: 'dawn', imgGif: dawnGif },
    { id:6, label: "Dusk", value: "dusk", imgSrc: dusk, key: 'dusk', imgGif: duskGif },
    { id:7, label: "Mech", value: "mech", imgSrc: mech, key: 'mech', imgGif: mechGif },
    { id:8, label: "Plant", value: "plant", imgSrc: plant, key: 'plant', imgGif: plantGif },
    { id:9, label: "Reptile", value: "reptile", imgSrc: reptile, key: 'reptile', imgGif: reptileGif },
  ];

  const mementosData = [
      { level: 1, breed: 0, avgMementos: 6 },
      { level: 1, breed: 1, avgMementos: 13 },
      { level: 1, breed: 2, avgMementos: 25 },
      { level: 1, breed: 3, avgMementos: 37.5 },
      { level: 1, breed: 4, avgMementos: 50 },
      { level: 1, breed: 5, avgMementos: 62.5 },
      { level: 1, breed: 6, avgMementos: 75 },
      { level: 1, breed: 7, avgMementos: 87.5 },
      { level: 10, breed: 0, avgMementos: 7 },
      { level: 10, breed: 1, avgMementos: 15 },
      { level: 10, breed: 2, avgMementos: 75 },
      { level: 10, breed: 3, avgMementos: 118 },
      { level: 10, breed: 4, avgMementos: 210 },
      { level: 10, breed: 5, avgMementos: 252 },
      { level: 10, breed: 6, avgMementos: 272 },
      { level: 10, breed: 7, avgMementos: 293 },
      { level: 20, breed: 0, avgMementos: 9 },
      { level: 20, breed: 1, avgMementos: 20 },
      { level: 20, breed: 2, avgMementos: 100 },
      { level: 20, breed: 3, avgMementos: 157 },
      { level: 20, breed: 4, avgMementos: 280 },
      { level: 20, breed: 5, avgMementos: 336 },
      { level: 20, breed: 6, avgMementos: 362 },
      { level: 20, breed: 7, avgMementos: 390 },
      { level: 30, breed: 0, avgMementos: 12 },
      { level: 30, breed: 1, avgMementos: 28 },
      { level: 30, breed: 2, avgMementos: 138 },
      { level: 30, breed: 3, avgMementos: 216 },
      { level: 30, breed: 4, avgMementos: 385 },
      { level: 30, breed: 5, avgMementos: 462 },
      { level: 30, breed: 6, avgMementos: 498 },
      { level: 30, breed: 7, avgMementos: 537 },
      { level: 40, breed: 0, avgMementos: 17 },
      { level: 40, breed: 1, avgMementos: 38 },
      { level: 40, breed: 2, avgMementos: 188 },
      { level: 40, breed: 3, avgMementos: 294 },
      { level: 40, breed: 4, avgMementos: 525 },
      { level: 40, breed: 5, avgMementos: 630 },
      { level: 40, breed: 6, avgMementos: 679 },
      { level: 40, breed: 7, avgMementos: 732 },
      { level: 50, breed: 0, avgMementos: 19 },
      { level: 50, breed: 1, avgMementos: 44 },
      { level: 50, breed: 2, avgMementos: 219 },
      { level: 50, breed: 3, avgMementos: 343 },
      { level: 50, breed: 4, avgMementos: 613 },
      { level: 50, breed: 5, avgMementos: 735 },
      { level: 50, breed: 6, avgMementos: 792 },
      { level: 50, breed: 7, avgMementos: 854 },
      { level: 60, breed: 0, avgMementos: 28 },
      { level: 60, breed: 1, avgMementos: 63 },
      { level: 60, breed: 2, avgMementos: 313 },
      { level: 60, breed: 3, avgMementos: 490 },
      { level: 60, breed: 4, avgMementos: 875 },
      { level: 60, breed: 5, avgMementos: 1050 },
      { level: 60, breed: 6, avgMementos: 1132 },
      { level: 60, breed: 7, avgMementos: 1220 }
  ];

  const [quantities, setQuantities] = useState({
    aquatic: 0,
    beast: 0,
    bird: 0,
    bug: 0,
    dawn: 0,
    dusk: 0,
    mech: 0,
    plant: 0,
    reptile: 0
  });

  const handleChange = (event, part) => {
    setQuantities({
      ...quantities,
      [part]: event.target.value,
    });
  };

  const handleChangePrice = (event) => {
    setSelectedAxiePrice(event.target.value);
  };

  const handleButtonClick = (number) => {
    setselectedBreed(number);
  };

  const handleRangeClick = (range) => {
    setselectedLevel(range);
  };

  const handleReset = () => {
    // Esta función recargará la página
    window.location.reload();
  };

  const handleCalculate = () => {

    const total = Object.values(quantities).reduce((total, quantity) => total + Number(quantity), 0);

    console.log("data:", total)

    let alerts = false;
    setalertBreed(false)
    setalertLevel(false)
    setalertClass(false)
    setalertQuantities(false)
    setalertPriceAxie(false)

    if(alerts == false){
      if(selectedBreed == null){
        setalertBreed(true)
        alerts = true
      }
      if(selectedLevel == null){
        setalertLevel(true)
        alerts = true
      }
      if(selectedAxieClass == null){
        setalertClass(true)
        alerts = true
      }
      if(total !== 6){
        setalertQuantities(true)
        alerts = true
      }
      if(selectedAxiePrice == null){
        setalertPriceAxie(true)
        alerts = true
      }
      if(alerts == true){
        return;
      }
    }

    const mementoData = mementosData.find(
      (data) => data.breed === selectedBreed && data.level === selectedLevel
    );

    if (!mementoData) {
      console.log("No data found for the selected breed and level range.");
      return;
    }

    const { avgMementos } = mementoData;

    let totalAvgEth = 0;
    let totalAvgUsd = 0;
    let totalMinEth = 0;
    let totalMinUsd = 0;
    let totalMaxEth = 0;
    let totalMaxUsd = 0;

    const updatedOptions = options.map((option) => {
      const quantity = quantities[option.value] || 0;
      const multiplier = selectedAxieClass === option.value ? 0.25 : 0;
      const totalMultiplier = multiplier + quantity * 0.125;

      const mementoAvg = avgMementos * totalMultiplier;
      const mementoMin = mementoAvg * 0.8;
      const mementoMax = mementoAvg * 1.2;

      const materialData = material.find(
        (mat) => mat.name.toLowerCase() === `${option.value.toLowerCase()} memento`
      );

      // Asegúrate de manejar correctamente `minprinceEth` y `minprinceUsd`
      const minPriceEth = Number(materialData.minprinceEth).toFixed(8);
      const minPriceUsd = Number(materialData.minprinceUsd).toFixed(6);

      const avgEth = (mementoAvg * minPriceEth).toFixed(8);
      const avgUsd = (mementoAvg * minPriceUsd).toFixed(6);
      const minEth = (mementoMin * minPriceEth).toFixed(8);
      const minUsd = (mementoMin * minPriceUsd).toFixed(6);
      const maxEth = (mementoMax * minPriceEth).toFixed(8);
      const maxUsd = (mementoMax * minPriceUsd).toFixed(6);

      // Acumular los totales
      totalAvgEth += parseFloat(avgEth);
      totalAvgUsd += parseFloat(avgUsd);
      totalMinEth += parseFloat(minEth);
      totalMinUsd += parseFloat(minUsd);
      totalMaxEth += parseFloat(maxEth);
      totalMaxUsd += parseFloat(maxUsd);

      return {
        ...option,
        mementoAvg: mementoAvg.toFixed(2),
        mementoMin: mementoMin.toFixed(2),
        mementoMax: mementoMax.toFixed(2),
        avgEth,
        avgUsd,
        minEth,
        minUsd,
        maxEth,
        maxUsd,
      };
    }).filter(Boolean);

    const priceAxieUsd = (selectedAxiePrice * exchange.data.exchangeRate.eth.usd).toFixed(2)

    const totals = {
      totalAvgEth: (totalAvgEth.toFixed(8) - selectedAxiePrice).toFixed(8),
      totalAvgUsd: (totalAvgUsd.toFixed(3) - priceAxieUsd).toFixed(3),
      totalMinEth: (totalMinEth.toFixed(8) - selectedAxiePrice).toFixed(8),
      totalMinUsd: (totalMinUsd.toFixed(3) - priceAxieUsd).toFixed(3),
      totalMaxEth: (totalMaxEth.toFixed(8) - selectedAxiePrice).toFixed(8),
      totalMaxUsd: (totalMaxUsd.toFixed(3) - priceAxieUsd).toFixed(3),
      mementoAvg: mementoData.avgMementos,
      mementoMin: mementoData.avgMementos * 0.8,
      mementoMax: mementoData.avgMementos * 1.2
    };

    setResult([updatedOptions])

    setTotalsArray(totals);
    setShowResults(true)
  };

  async function fetchData() {
    try {
      const res = await axios.post(`${window.location.origin}/api/mementoCalculator`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  async function fetchDataExchange() {
    try {
      const res = await axios.post(`${window.location.origin}/api/exchangeRate`);
      setDataExchange(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData();
    fetchDataExchange();
  }, []);

  if (loading)
    return (
      <div className="grid w-full flex-grow place-content-center mt-10">
        <CircularProgress />
      </div>
    );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{ mt: 2 }}
    >
      {/* Muestra los materiales en tarjetas */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        {material.map((item) => {
          // Cambia la URL de la imagen en base al nombre del item
          if (item.name === 'Dawn Memento') {
            item.imageUrl = dawnGif;
          } else if (item.name === 'Beast Memento') {
            item.imageUrl = beastGif;
          } else if (item.name === 'Bug Memento') {
            item.imageUrl = bugGif;
          } else if (item.name === 'Bird Memento') {
            item.imageUrl = birdGif;
          } else if (item.name === 'Plant Memento') {
            item.imageUrl = plantGif;
          } else if (item.name === 'Aquatic Memento') {
            item.imageUrl = aquaticGif;
          } else if (item.name === 'Reptile Memento') {
            item.imageUrl = reptileGif;
          } else if (item.name === 'Mech Memento') {
            item.imageUrl = mechGif;
          } else if (item.name === 'Dusk Memento') {
            item.imageUrl = duskGif;
          } else if (item.name === 'Radiant Spirit Shell') {
            item.imageUrl = radiantGif;
          }
          // Renderiza el componente con la imagen actualizada
          return <MaterialCardComponent key={item.tokenId} item={item} />;
        })}
      </Box>

      {/* Card de selección de clase Axie */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card variant="outlined" sx={{ display: 'flex', width: 830 }}>
          <CardContent>
            {alertClass && (
              <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>
                * You must Select Axie Class *
              </Typography>
            )}
            <Typography align="center" sx={{ mb: 2 }}>
              Select Axie Class
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {options.map((option) => (
                <Grid item xs={12} sm={4} md={4} key={option.id} display="flex" justifyContent="center">
                  <Button
                    variant={selectedAxieClass === option.value ? 'solid' : 'outlined'}
                    onClick={() => setselectedAxieClass(option.value)}
                    sx={{ width: '100%', textAlign: 'center', padding: 2 }}
                  >
                    <Image src={option.imgSrc} alt={option.label} width={20} height={20} />
                    <Typography>{option.label}</Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Tarjeta de entrada de cantidad y selección de botón */}
        <Box sx={{ display: 'flex', justifyContent: 'left' }}>
          <Card variant="outlined" sx={{ display: 'flex', width: 400 }}>
            <CardContent>
              {alertQuantities && (
                <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>
                  * You must enter exactly 6 quantity of axie parts *
                </Typography>
              )}
              <Typography align="center" sx={{ mb: 2 }}>
                Enter the quantity of axie parts
              </Typography>
              <Grid container>
                {options.map((option) => (
                  <Grid item xs={12} sm={4} md={4} key={option.key} display="flex" alignItems="center" justifyContent="center">
                    <Image src={option.imgSrc} alt={option.label} width={20} height={20} />
                    <Input
                      type="text"
                      value={quantities[option.key]}
                      onChange={(event) => {
                        const newValue = event.target.value;

                        // Permitir que el campo quede vacío temporalmente para facilitar el borrado
                        if (newValue === '' || (/^\d{0,1}(\.\d{0,1})?$/.test(newValue) && Number(newValue) <= 6)) {
                          handleChange(event, option.key); // Llama a la función handleChange si es válido o vacío
                        }
                      }}
                      sx={{ ml: 1, width: '60px' }}
                      variant="outlined"
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Card de botones numerados */}
        <Card variant="outlined" sx={{ width: 200 }}>
          <CardContent>
            {alertBreed && (
              <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>
                * You must Select Axie Breed *
              </Typography>
            )}
            <Typography align="center" sx={{ mb: 2 }}>
              Select Axie Breed
            </Typography>
            <Grid container spacing={1} justifyContent="center">
              {[...Array(8).keys()].map((number) => (
                <Grid item xs={6} key={number} display="flex" justifyContent="center">
                  <Button
                    variant={selectedBreed === number ? 'solid' : 'outlined'}
                    onClick={() => handleButtonClick(number)}
                    sx={{ width: '100%' }}
                  >
                    {number}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Nueva tarjeta de botones de rango */}
        <Card variant="outlined" sx={{ width: 200 }}>
          <CardContent>
            {alertLevel && (
              <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>
                * You must Select Axie Level Range *
              </Typography>
            )}
            <Typography align="center" sx={{ mb: 2 }}>
              Select Axie Level Range 
            </Typography>
            <Grid container spacing={1} justifyContent="center">
              {[
                { label: '1-9', value: 1 },
                { label: '10-19', value: 10 },
                { label: '20-29', value: 20 },
                { label: '30-39', value: 30 },
                { label: '40-49', value: 40 },
                { label: '50-59', value: 50 },
                { label: '60', value: 60 },
              ].map((range) => (
                <Grid item xs={6} key={range.value} display="flex" justifyContent="center">
                  <Button
                    variant={selectedLevel === range.value ? 'solid' : 'outlined'}
                    onClick={() => handleRangeClick(range.value)}
                    sx={{ width: '100%' }}
                  >
                    {range.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Botón de cálculo centrado */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Card variant="outlined" sx={{ width: 300 }}>
          <CardContent>
            {alertPriceAxie && (
              <Typography align="center" sx={{ color: "#ff0000", mb: 2 }}>
                * You must Enter a valid axie price *
              </Typography>
            )}
            <Typography align="center" sx={{ mb: 2 }}>
              Enter Axie Price
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Input
                type="text"
                value={selectedAxiePrice}
                onChange={(event) => {
                  // Permitir solo números y un solo punto decimal
                  const newValue = event.target.value;
                  if (/^\d*\.?\d*$/.test(newValue)) {
                    handleChangePrice(event); // Solo actualizar si el valor es válido
                  }
                }}
                placeholder="Enter the price in Ether"
                sx={{ width: 200 }}
              />
              <Image
                src="https://cdn.skymavis.com/ronin/2020/erc20/0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5/logo.png"
                alt="Eth"
                width={40}
                height={40}
                style={{ marginLeft: '8px' }} // Añadir un margen a la izquierda de la imagen
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="solid" onClick={handleCalculate} sx={{ flex: 1, mx: 1, width: 100 }}>
          Calculate
        </Button>
        <Button variant="solid" onClick={handleReset} sx={{ flex: 1, mx: 1, width: 100 }}>
          Reset
        </Button>
      </Box>

      {/* Mostrar resultados si showResults es true */}
      {showResults && (
        <Box 
          sx={{ 
            display: 'flex', 
            mt: 2, 
            alignItems: 'left',
            background: 'linear-gradient(90deg, #270094, #000)',
            borderRadius: '30px',
          }}
        >
          <Box sx={{ display: 'flex', margin: 2 }}>
            <Card variant="outlined" sx={{ margin: 2, flex: 1, height: 240 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  Results
                </Typography>
                {/* imgGif */}
                <Box display="flex" justifyContent="center" mb={2}>
                  <Image
                    src={radiantGif}
                    alt="radianshell"
                    width={50} // Ancho especificado para optimización de Next.js
                    height={50} // Alto especificado para optimización de Next.js
                    style={{ objectFit: "contain", height: 50 }}
                  />
                </Box>
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center"}}>
                  <Image
                    src={memento}
                    alt="memento"
                    width={20}
                    height={20}
                  /> 
                  <Typography variant="body1">
                    {totalsArray.mementoMin} - {totalsArray.mementoMax}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center"}}>
                  <Image
                    src={eth}
                    alt="eth"
                    width={20}
                    height={20}
                  />
                  <Typography variant="body1">
                    {totalsArray.totalMinEth} - {totalsArray.totalMaxEth}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center"}}>
                  <Image
                    src={usd}
                    alt="usd"
                    width={20}
                    height={20}
                  />
                  <Typography variant="body1">
                    {totalsArray.totalMinUsd} - {totalsArray.totalMaxUsd}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Memento Cards generados después de hacer clic en Calculate */}
          <Box sx={{ display: 'flex', margin: 2, flexWrap:'wrap'}}>
          {result[0]
            .filter(option => option.mementoAvg !== "0.00") // Filtra las opciones
            .map(option => (
              <MaterialCardResult key={option.id} data={option} />
          ))}
          </Box>
        </Box>
        )}
        {/* MementoMin - MementoMax */}
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", justifyContent:'center', flexDirection:"column"  }}>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <TriangleAlert  width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </Box>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography variant="body2">
              **The calculation NOT includes a marketplace commission of 4.25%.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <Typography variant="body2">
              **The calculation NOT includes an ascending fee.
            </Typography>
          </Box>
        </Box>
      
    </Box>

  );
}

export default App;
