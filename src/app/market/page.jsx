"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Box } from "@mui/joy";
import LandCard from "@/components/LandCardComponent";
import LandFilters from "@/components/LandFilters";
import Script from "next/script";

const Lands = () => {
  const [lands, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    landtypes: "All",
    AltarOfAtia: 1,
    /* WorkersAxies: "0" */
  });

  async function fetchData(filters) {
    try {
      const res = await axios.post(`${window.location.origin}/api/market`, filters);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData(filters); // Llama a la API con los filtros aplicados
  }, [filters]);

  const applyFilters = (lands, filters) => {
    return lands.filter((land) => {
      const matchesLandType =
        filters.landtypes === "All" || land.landType === filters.landtypes;

      const matchesTownhallLevel =
        filters.AltarOfAtia === "All" ||
        land.plot_data.townhall_level >= parseInt(filters.AltarOfAtia, 10);
      
/*       const matchesWorkerAxie =
        filters.WorkersAxies === "All" ||
        land.plot_data.number_of_workers >= parseInt(filters.WorkersAxies, 35); */

      return matchesLandType && matchesTownhallLevel /* && matchesWorkerAxie; */
    });
  };

  if (loading)
    return (
      <div className="grid w-full flex-grow place-content-center mt-10">
        <CircularProgress />
      </div>
    );

  const filteredLands = applyFilters(lands, filters);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 3fr', gap: '5px', padding: '5px', marginLeft: 5 }}>
      {/* Filtro ocupa 1/4 */}
      <div style={{ paddingRight: '1px' }}>
        <LandFilters filters={filters} setFilters={setFilters} fetchData={fetchData} />
        
        {/* Contenedor del AdSense */}
        <div className="mt-4 w-full flex justify-center">
          <div
            className="adsense-container"
            style={{
              textAlign: 'center',
              width: '150px',
              height: '500px',
            }}
          >
            {/* Script de AdSense */}
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5303334400624183"
              crossOrigin="anonymous"
              onError={() => console.error("Error al cargar AdSense")}
            />
            {/* Contenedor del anuncio */}
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '150px', height: '500px' }}
              data-ad-client="ca-pub-5303334400624183"
              data-ad-slot="6614259860"
            ></ins>
            {/* Inicialización de AdSense */}
            <Script id="adsbygoogle-init" strategy="afterInteractive">
              {`
                console.log("Inicializando adsbygoogle...");
                (adsbygoogle = window.adsbygoogle || []).push({});
              `}
            </Script>
          </div>
        </div>
      </div>


      {/* Cards ocupan 3/4 */}
      <div>
        {filteredLands.length === 0 ? (
          <p>No lands found</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {filteredLands.map((land, index) => (
              <LandCard key={index} land={land} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lands;
