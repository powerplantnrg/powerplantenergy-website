import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Trash2, Navigation } from 'lucide-react';

declare global {
  interface Window {
    L: any;
  }
}

interface FarmMapProps {
  onAreaChange?: (area: number, geoJSON: string) => void;
  onDistanceChange?: (distance: number) => void;
}

export function FarmMap({ onAreaChange, onDistanceChange }: FarmMapProps) {
  const mapRef = useRef<any>(null);
  const [map, setMap] = useState<any>(null);
  const [drawnItems, setDrawnItems] = useState<any>(null);
  const [area, setArea] = useState<number>(0);
  const [distanceToRail, setDistanceToRail] = useState<number | null>(null);
  const [railLines, setRailLines] = useState<any[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet Draw CSS
    const drawLink = document.createElement('link');
    drawLink.rel = 'stylesheet';
    drawLink.href = 'https://unpkg.com/leaflet-draw/dist/leaflet.draw.css';
    document.head.appendChild(drawLink);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    script.async = true;
    script.onload = () => {
      // Load Leaflet Draw JS
      const drawScript = document.createElement('script');
      drawScript.src = 'https://unpkg.com/leaflet-draw/dist/leaflet.draw.js';
      drawScript.async = true;
      drawScript.onload = initMap;
      document.body.appendChild(drawScript);
    };
    document.body.appendChild(script);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const initMap = () => {
    if (!mapContainerRef.current || mapRef.current) return;

    const L = window.L;

    // Burdekin region center (Queensland, Australia)
    const burdekinCenter = [-19.75, 147.4];

    const newMap = L.map(mapContainerRef.current).setView(burdekinCenter, 11);

    // Add satellite imagery layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '© ESRI',
      maxZoom: 18,
    }).addTo(newMap);

    // Add labels overlay
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      attribution: '© ESRI',
      maxZoom: 18,
    }).addTo(newMap);

    // Initialize feature group for drawn items
    const featureGroup = new L.FeatureGroup();
    newMap.addLayer(featureGroup);

    // Add drawing controls
    const drawControl = new L.Control.Draw({
      draw: {
        polygon: {
          allowIntersection: false,
          shapeOptions: {
            color: '#16a34a',
            fillOpacity: 0.3,
          },
        },
        circle: {
          shapeOptions: {
            color: '#16a34a',
            fillOpacity: 0.3,
          },
        },
        rectangle: {
          shapeOptions: {
            color: '#16a34a',
            fillOpacity: 0.3,
          },
        },
        polyline: false,
        marker: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: featureGroup,
        remove: true,
      },
    });
    newMap.addControl(drawControl);

    // Add simulated rail lines (North Coast Line - approximate path through Burdekin)
    const railLine1 = [
      [-19.65, 147.05],
      [-19.70, 147.25],
      [-19.75, 147.40],
      [-19.82, 147.58],
      [-19.90, 147.75],
    ];

    const railLine2 = [
      [-19.60, 147.35],
      [-19.68, 147.42],
      [-19.75, 147.48],
      [-19.85, 147.55],
    ];

    const railLayers: any[] = [];

    const rail1 = L.polyline(railLine1, {
      color: '#ef4444',
      weight: 3,
      opacity: 0.8,
    }).addTo(newMap);
    rail1.bindPopup('<strong>North Coast Railway Line</strong><br>Main freight corridor');
    railLayers.push(rail1);

    const rail2 = L.polyline(railLine2, {
      color: '#ef4444',
      weight: 3,
      opacity: 0.8,
      dashArray: '5, 5',
    }).addTo(newMap);
    rail2.bindPopup('<strong>Branch Line</strong><br>Secondary freight line');
    railLayers.push(rail2);

    setRailLines(railLayers);

    // Handle drawing events
    newMap.on(L.Draw.Event.CREATED, (e: any) => {
      const layer = e.layer;
      featureGroup.clearLayers();
      featureGroup.addLayer(layer);

      // Calculate area
      let calculatedArea = 0;
      if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
        const latLngs = layer.getLatLngs()[0];
        calculatedArea = L.GeometryUtil.geodesicArea(latLngs) / 10000; // Convert to hectares
      } else if (layer instanceof L.Circle) {
        const radius = layer.getRadius();
        calculatedArea = (Math.PI * radius * radius) / 10000; // Convert to hectares
      }

      setArea(calculatedArea);

      // Calculate distance to nearest rail line
      const center = layer.getCenter ? layer.getCenter() : layer.getBounds().getCenter();
      let minDistance = Infinity;

      railLayers.forEach((railLayer) => {
        const railLatLngs = railLayer.getLatLngs();
        railLatLngs.forEach((railPoint: any) => {
          const distance = center.distanceTo(railPoint);
          if (distance < minDistance) {
            minDistance = distance;
          }
        });
      });

      const distanceKm = minDistance / 1000;
      setDistanceToRail(distanceKm);

      // Get GeoJSON
      const geoJSON = JSON.stringify(layer.toGeoJSON());

      // Callback
      if (onAreaChange) {
        onAreaChange(calculatedArea, geoJSON);
      }
      if (onDistanceChange) {
        onDistanceChange(distanceKm);
      }
    });

    newMap.on(L.Draw.Event.DELETED, () => {
      setArea(0);
      setDistanceToRail(null);
      if (onAreaChange) {
        onAreaChange(0, '');
      }
      if (onDistanceChange) {
        onDistanceChange(0);
      }
    });

    setMap(newMap);
    setDrawnItems(featureGroup);
    mapRef.current = newMap;
  };

  const clearDrawing = () => {
    if (drawnItems) {
      drawnItems.clearLayers();
      setArea(0);
      setDistanceToRail(null);
      if (onAreaChange) {
        onAreaChange(0, '');
      }
      if (onDistanceChange) {
        onDistanceChange(0);
      }
    }
  };

  const centerOnBurdekin = () => {
    if (map) {
      map.setView([-19.75, 147.4], 11);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Map Your Farm Location
          </CardTitle>
          <CardDescription>
            Use the drawing tools to outline your property boundary on the satellite map
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded text-sm text-blue-900">
            <p className="mb-2">📍 <strong>How to use:</strong></p>
            <ol className="ml-4 space-y-1">
              <li>1. Use the toolbar on the map to draw a polygon, circle, or rectangle around your farm</li>
              <li>2. The area and distance to rail will be calculated automatically</li>
              <li>3. You can edit or delete your drawing using the toolbar</li>
              <li>4. Rail lines are shown in red for distance reference</li>
            </ol>
          </div>

          {/* Map Container */}
          <div className="relative">
            <div
              ref={mapContainerRef}
              className="h-[500px] rounded-lg border-2 border-slate-200 shadow-lg"
              style={{ zIndex: 0 }}
            />

            {/* Map Controls Overlay */}
            <div className="absolute top-4 right-4 z-[1000] space-y-2">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white shadow-lg"
                onClick={centerOnBurdekin}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Center Map
              </Button>
              <Button
                size="sm"
                variant="destructive"
                className="bg-white text-red-600 hover:bg-red-50 shadow-lg w-full"
                onClick={clearDrawing}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className={area > 0 ? 'bg-green-50 border-green-200' : 'bg-slate-50'}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-1">Farm Area</p>
                  <p className="text-3xl text-slate-900">
                    {area > 0 ? area.toFixed(2) : '—'}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">hectares</p>
                </div>
              </CardContent>
            </Card>

            <Card className={distanceToRail !== null ? 'bg-blue-50 border-blue-200' : 'bg-slate-50'}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-1">Distance to Rail</p>
                  <p className="text-3xl text-slate-900">
                    {distanceToRail !== null ? distanceToRail.toFixed(1) : '—'}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">kilometers</p>
                  {distanceToRail !== null && distanceToRail < 5 && (
                    <Badge className="mt-2 bg-green-600">Excellent proximity</Badge>
                  )}
                  {distanceToRail !== null && distanceToRail >= 5 && distanceToRail < 15 && (
                    <Badge className="mt-2 bg-blue-600">Good proximity</Badge>
                  )}
                  {distanceToRail !== null && distanceToRail >= 15 && (
                    <Badge className="mt-2 bg-orange-600">Consider transport costs</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legend */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-700 mb-3">Map Legend</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 opacity-50 rounded" />
                <span className="text-slate-700">Your Farm Area</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-red-500" />
                <span className="text-slate-700">Main Rail Line</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-red-500 border-dashed border-t-2 border-red-500" />
                <span className="text-slate-700">Branch Rail Line</span>
              </div>
            </div>
          </div>

          {/* Transport Benefits */}
          {distanceToRail !== null && (
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-sm text-purple-900">Rail Transport Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-purple-900">
                <p>• Lower transport costs for bulk bamboo shipments</p>
                <p>• Direct access to major processing facilities and ports</p>
                <p>• Reduced carbon footprint compared to road transport</p>
                <p>• Potential for on-farm rail siding installation (proximity dependent)</p>
                {distanceToRail < 5 && (
                  <p className="text-green-700 mt-2">
                    ✓ Your proximity to rail ({distanceToRail.toFixed(1)}km) offers significant logistics advantages
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
