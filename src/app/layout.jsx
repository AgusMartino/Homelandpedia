import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "homelandpedia",
  description: "Creado para A+ y comunidad de homeland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        {/* Puedes agregar el script de AdSense aquí */}

      </head>
      <body
        className={`${inter.className} max-w-screen flex flex-col min-h-screen`}
      >
        <InitColorSchemeScript />
        <CssVarsProvider defaultMode="dark">
          <CssBaseline />

          {/* Navbar fijo con mayor prioridad */}
          <div className="fixed top-0 left-0 w-full z-20 bg-white">
            <Navbar />
          </div>

          {/* Contenedor del AdSense entre Navbar y Children */}
          <div className="mt-40 w-full flex justify-center z-10">
            <div className="adsense-container">
              <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5303334400624183"
                crossOrigin="anonymous"
              />
              <ins
                className="adsbygoogle"
                style={{ display: 'inline-block', width: '700px', height: '50px' }}
                data-ad-client="ca-pub-5303334400624183"
                data-ad-slot="4632820123"
              ></ins>
              <Script id="adsbygoogle-init">
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
              </Script>
            </div>
          </div>

          <div className="flex flex-row w-full pb-20 mt-[30px]">
            {/* Primera columna - 150px */}
            <div className="w-[150px]">
              {/* Contenido de la primera columna */}
              <div className="adsense-container">
                <Script
                  async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5303334400624183"
                  crossOrigin="anonymous"
                />
                <ins
                  className="adsbygoogle"
                  style={{ display: 'inline-block', width: '120px', height: '900px' }}
                  data-ad-client="ca-pub-5303334400624183"
                  data-ad-slot="6614259860"
                ></ins>
                <Script id="adsbygoogle-init">
                  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </Script>
              </div>
            </div>

            {/* Columna central (flex-grow) */}
            <div className="flex-grow max-w-full overflow-x-auto">
              <div className="min-w-[800px] mx-auto">
                {children}
              </div>
            </div>
            {/* Tercera columna - 150px */}
            <div className="w-[150px]">
              {/* Contenido de la tercera columna */}
              <div className="adsense-container">
                <Script
                  async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5303334400624183"
                  crossOrigin="anonymous"
                />
                <ins
                  className="adsbygoogle"
                  style={{ display: 'inline-block', width: '120px', height: '900px' }}
                  data-ad-client="ca-pub-5303334400624183"
                  data-ad-slot="6614259860"
                ></ins>
                <Script id="adsbygoogle-init">
                  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </Script>
              </div>
            </div>
          </div>
          {/* Footer fijo en la parte inferior */}
          <div className="fixed bottom-0 left-0 w-full z-20 bg-white">
            <Footer />
          </div>
        </CssVarsProvider>
      </body>
    </html>
  );
}
