import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function StaticMap({ latitude, longitude }) {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {
                    osm: {
                        type: "raster",
                        tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
                        tileSize: 256,
                        attribution: "© osm",
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
            center: [parseFloat(longitude), parseFloat(latitude)],
            zoom: 14,
            interactive: true,
        });

        new maplibregl.Marker({ color: "#d00" })
            .setLngLat([parseFloat(longitude), parseFloat(latitude)])
            .addTo(map);

        return () => map.remove();
    }, [latitude, longitude]);

    return (
        <div
            ref={mapContainer}
            className="w-full h-72 rounded-lg shadow-md border"
        />
    );
}
