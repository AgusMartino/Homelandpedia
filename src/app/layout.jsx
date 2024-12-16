import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import AdSense from "@/components/AdSense";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "homelandpedia",
  description: "Creado para A+ y comunidad de homeland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <AdSense pId="5303334400624183"/>
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

    {/* Contenedor del AdBanner con dimensiones específicas */}
{/*     <div className="relative w-full z-10 bg-white mt-[100px] flex justify-center">
      <div 
        className="flex justify-center items-center"
        style={{
          minWidth: "300px", // Asegura un ancho mínimo
          minHeight: "20px", // Asegura una altura mínima
          width: "600px",
          height: "60px",
        }}
      >
        <AdBanner             
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="6614259860"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
    </div> */}

    {/* Contenedor principal para los children */}
    <div className="flex-grow pb-20">
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
