"use client";

import React, { useEffect, useRef } from "react";

const AdBanner = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Asegúrate de que el contenedor tenga tamaño visible antes de ejecutar el push
    if (adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.log("Google Ads Error:", error.message);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef} // Usar ref para asegurar que el contenedor esté disponible
      className="adsbygoogle"
      style={{ display: "block", width: "100%", height: "25px" }} // Ajuste de ancho y alto explícito
      data-ad-client="ca-pub-5303334400624183"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive} // No es necesario convertirlo a cadena
    ></ins>
  );
};

export default AdBanner;