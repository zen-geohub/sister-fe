import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Submission from "./pages/Submission";
import { MapProvider } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css"

const App = () => {
  return (
    <HashRouter>
      <MapProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submission" element={<Submission />} />
        </Routes>
      </MapProvider>
    </HashRouter>
  );
};

export default App;
