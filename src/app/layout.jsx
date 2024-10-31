import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Asegúrate de importar el Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "homelandpedia",
  description: "Creado para A+ y comunidad de homeland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} max-w-screen flex flex-col min-h-screen`}
      >
        <InitColorSchemeScript />
        <CssVarsProvider defaultMode="dark">
          <CssBaseline />
          {/* Navbar fijo con altura ajustada */}
          <div className="fixed top-0 left-0 w-full z-10 bg-white">
            <Navbar />
          </div>

          {/* Margen superior ajustado para que el contenido no quede oculto */}
          <div className="mt-24 text-wrap bg-blue-600 p-2 text-center">
            Market filters and Wiki of items in development
          </div>

          {/* Contenedor que permite el crecimiento del contenido y padding inferior */}
          <div className="flex-grow pb-20"> {/* Asegúrate de agregar un padding inferior */}
            {children}
          </div>

          {/* Footer fijo en la parte inferior */}
          <div className="fixed bottom-0 left-0 w-full z-20 bg-white"> {/* Asegúrate de que el fondo sea sólido */}
            <Footer />
          </div>
        </CssVarsProvider>
      </body>
    </html>
  );
}
