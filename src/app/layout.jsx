import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
          <div className="mt-28 w-full flex justify-center z-10">
            <div className="adsense-container">
              <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%", height: "60px" }}
                data-ad-client="ca-pub-5303334400624183"
                data-ad-slot="6614259860"
                data-ad-format="auto"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </div>
          </div>

          {/* Contenedor principal para los children */}
          <div className="flex-grow pb-20 mt-[80px]">
            {children}
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
