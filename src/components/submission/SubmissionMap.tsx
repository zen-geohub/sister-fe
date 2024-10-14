import { useFormContext } from "react-hook-form";
import { Map, Marker, NavigationControl } from "react-map-gl/maplibre";

export type SubmissionMapProps = {
  markerLatitude: number;
  markerLongitude: number;
};

const SubmissionMap = () => {
  const { watch } = useFormContext();
  const markerLatitude = watch("Koordinat Lintang");
  const markerLongitude = watch("Koordinat Bujur");
  
  return (
    <Map
      id="mapSubmission"
      initialViewState={{
        latitude: -7.768857306422497,
        longitude: 110.40997792082442,
        zoom: 15,
      }}
      mapStyle={`${import.meta.env.VITE_BASEMAP_KEY}`}
      attributionControl={false}
      style={{ borderRadius: "8px" }}
      reuseMaps
    >
      <NavigationControl />
      <Marker latitude={markerLatitude} longitude={markerLongitude} />
    </Map>
  );
};

export default SubmissionMap;
