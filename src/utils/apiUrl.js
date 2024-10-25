const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://homelandpedia.vercel.app" // URL de la API en producción
    : "http://localhost:3000"; // URL de la API en desarrollo

export default apiUrl;
