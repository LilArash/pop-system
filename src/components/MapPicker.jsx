import { useEffect, useRef, useState } from "react"
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
export function MapPicker({ onSelectLocation }) {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    const [location, setLocation] = useState({ lng: 51.669645, lat: 32.659429 });

    useEffect(() => {
        if (mapRef.current) return;

        mapRef.current = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {
                    osm: {
                        type: "raster",
                        tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
                        tileSize: 256,
                        attribution: "© OpenStreetMap contributors",
                    },
                },
                layers: [
                    {
                        id: "osm",
                        type: "raster",
                        source: "osm",
                    },
                ],
            },
            center: [location.lng, location.lat],
            zoom: 12,
        });

        mapRef.current.on("click", (e) => {
            const { lng, lat } = e.lngLat;
            setLocation({ lng, lat });

            if (onSelectLocation) onSelectLocation({ lng, lat });

            if (!markerRef.current) {
                markerRef.current = new maplibregl.Marker().setLngLat([lng, lat]).addTo(mapRef.current);
            } else {
                markerRef.current.setLngLat([lng, lat]);
            }
        });
    }, [onSelectLocation]);

    return (
        <div ref={mapContainer} className="h-80 md:h-auto border-gray-400 rounded-lg">

        </div>
    );
}