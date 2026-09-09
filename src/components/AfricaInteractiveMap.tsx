import React, { useState } from 'react';
import { MapPin, Globe, Compass, ArrowUpRight, Shield, Layers, Building2 } from 'lucide-react';
import { GEO_REGIONS } from '../data/landingData';

interface AfricaInteractiveMapProps {
  onRegionSelect?: (regionId: string) => void;
  selectedRegionId?: string;
  className?: string;
}

export const AfricaInteractiveMap: React.FC<AfricaInteractiveMapProps> = ({
  onRegionSelect,
  selectedRegionId: externalSelectedId,
  className = '',
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string>('east');
  const activeRegionId = externalSelectedId || internalSelectedId;

  const handleSelect = (id: string) => {
    setInternalSelectedId(id);
    if (onRegionSelect) {
      onRegionSelect(id);
    }
  };

  const activeRegion = GEO_REGIONS.find((r) => r.id === activeRegionId) || GEO_REGIONS[0];

  // Coordinates normalized on a 600x640 viewBox for stylized continental map
  // Nairobi is at cx: 375, cy: 335
  const nairobiCoords = { cx: 375, cy: 335 };

  const hubs = [
    { id: 'east', name: 'Nairobi HQ / East Africa', cx: 375, cy: 335, markets: 'Kenya, Uganda, Tanzania, Rwanda, Ethiopia', region: 'East Africa' },
    { id: 'west', name: 'Lagos Hub / West Africa', cx: 205, cy: 290, markets: 'Nigeria, Ghana, Senegal, Côte d\'Ivoire', region: 'West Africa' },
    { id: 'south', name: 'Johannesburg / Southern Africa', cx: 335, cy: 510, markets: 'South Africa, Botswana, Namibia, Zambia', region: 'Southern Africa' },
    { id: 'north', name: 'Cairo Gateway / North Africa', cx: 360, cy: 130, markets: 'Egypt, Morocco, Algeria, Tunisia', region: 'North Africa' },
  ];

  return (
    <div className={`border border-[var(--line)] bg-[var(--paper)] rounded-[2px] overflow-hidden ${className}`}>
      {/* Top Telemetry Bar */}
      <div className="p-4 sm:p-5 border-b border-[var(--line)] bg-[var(--paper-2)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-[var(--ink-strong)] font-semibold uppercase tracking-wider">
            Nairobi Command Core · 1°17′S, 36°49′E
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[var(--ink-3)] text-[11px]">
          <span>45 African Markets</span>
          <span>·</span>
          <span>4 Regional Hubs</span>
          <span>·</span>
          <span className="text-[var(--accent)] font-medium">Pan-African Field Grid</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Stylized Interactive SVG Cartography (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-[var(--paper)] flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-[var(--line)]">
          {/* Legend / Coordinate overlay */}
          <div className="w-full flex items-center justify-between text-[10px] font-mono text-[var(--ink-3)] mb-2">
            <span>GRID: LAT 37°N - 35°S / LON 17°W - 51°E</span>
            <span>SYSTEM: WGS84 CARTOGRAPHY</span>
          </div>

          <div className="relative w-full max-w-[480px] aspect-[1/1.05]">
            <svg
              viewBox="0 0 600 640"
              className="w-full h-full select-none"
              aria-label="Interactive Cartographic Map of Africa with MindCraft regional hubs"
            >
              <defs>
                {/* Radial Glow for Nairobi Command Center */}
                <radialGradient id="nairobiGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
                {/* Pattern for continental grid lines */}
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="2,4" />
                </pattern>
              </defs>

              {/* Background Grid */}
              <rect width="600" height="640" fill="url(#gridPattern)" />

              {/* Equator & Prime Meridian Guides */}
              <line x1="40" y1="335" x2="560" y2="335" stroke="var(--line-2)" strokeWidth="1" strokeDasharray="4,6" />
              <text x="565" y="338" fill="var(--ink-3)" fontSize="9" fontFamily="monospace">0° (EQUATOR)</text>

              <line x1="230" y1="40" x2="230" y2="600" stroke="var(--line-2)" strokeWidth="1" strokeDasharray="4,6" />
              <text x="235" y="50" fill="var(--ink-3)" fontSize="9" fontFamily="monospace">0° (MERIDIAN)</text>

              {/* Continental Outline Path of Africa */}
              <path
                d="M 170 90
                   C 220 70, 310 70, 370 95
                   C 400 110, 425 150, 440 180
                   C 455 210, 520 230, 525 260
                   C 530 280, 490 300, 470 320
                   C 460 330, 450 360, 445 400
                   C 440 440, 430 480, 400 520
                   C 370 560, 340 595, 305 605
                   C 285 610, 265 590, 255 560
                   C 245 520, 235 480, 230 440
                   C 225 410, 210 380, 185 365
                   C 160 350, 140 335, 110 320
                   C 80 305, 75 270, 85 240
                   C 95 210, 110 180, 125 150
                   Z"
                fill="var(--paper-2)"
                stroke="var(--line-2)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Madagascar Island */}
              <path
                d="M 480 440 C 495 460, 490 510, 465 540 C 455 530, 460 480, 475 445 Z"
                fill="var(--paper-2)"
                stroke="var(--line-2)"
                strokeWidth="1.2"
              />

              {/* Regional Polygons / Highlights when selected */}
              {/* East Africa Polygon */}
              <path
                d="M 350 250 L 450 240 L 480 320 L 430 410 L 340 380 Z"
                fill={activeRegionId === 'east' ? 'var(--accent)' : 'transparent'}
                fillOpacity={activeRegionId === 'east' ? 0.15 : 0}
                stroke={activeRegionId === 'east' ? 'var(--accent)' : 'var(--line)'}
                strokeWidth={activeRegionId === 'east' ? 2 : 0.8}
                strokeDasharray={activeRegionId === 'east' ? 'none' : '3,3'}
                className="transition-all duration-300 cursor-pointer"
                onClick={() => handleSelect('east')}
              />

              {/* West Africa Polygon */}
              <path
                d="M 110 240 L 250 230 L 260 320 L 170 360 L 100 310 Z"
                fill={activeRegionId === 'west' ? 'var(--accent)' : 'transparent'}
                fillOpacity={activeRegionId === 'west' ? 0.15 : 0}
                stroke={activeRegionId === 'west' ? 'var(--accent)' : 'var(--line)'}
                strokeWidth={activeRegionId === 'west' ? 2 : 0.8}
                strokeDasharray={activeRegionId === 'west' ? 'none' : '3,3'}
                className="transition-all duration-300 cursor-pointer"
                onClick={() => handleSelect('west')}
              />

              {/* Southern Africa Polygon */}
              <path
                d="M 260 430 L 410 430 L 370 570 L 280 570 Z"
                fill={activeRegionId === 'south' ? 'var(--accent)' : 'transparent'}
                fillOpacity={activeRegionId === 'south' ? 0.15 : 0}
                stroke={activeRegionId === 'south' ? 'var(--accent)' : 'var(--line)'}
                strokeWidth={activeRegionId === 'south' ? 2 : 0.8}
                strokeDasharray={activeRegionId === 'south' ? 'none' : '3,3'}
                className="transition-all duration-300 cursor-pointer"
                onClick={() => handleSelect('south')}
              />

              {/* North Africa Polygon */}
              <path
                d="M 170 110 L 380 110 L 430 180 L 270 200 L 140 160 Z"
                fill={activeRegionId === 'north' ? 'var(--accent)' : 'transparent'}
                fillOpacity={activeRegionId === 'north' ? 0.15 : 0}
                stroke={activeRegionId === 'north' ? 'var(--accent)' : 'var(--line)'}
                strokeWidth={activeRegionId === 'north' ? 2 : 0.8}
                strokeDasharray={activeRegionId === 'north' ? 'none' : '3,3'}
                className="transition-all duration-300 cursor-pointer"
                onClick={() => handleSelect('north')}
              />

              {/* Radiating Command Arcs from Nairobi to other hubs */}
              <path
                d={`M ${nairobiCoords.cx} ${nairobiCoords.cy} Q 300 300 205 290`}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                className="opacity-70"
              />
              <path
                d={`M ${nairobiCoords.cx} ${nairobiCoords.cy} Q 370 430 335 510`}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                className="opacity-70"
              />
              <path
                d={`M ${nairobiCoords.cx} ${nairobiCoords.cy} Q 390 220 360 130`}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                className="opacity-70"
              />

              {/* Global Corridor Lines extending out */}
              {/* To Europe */}
              <path
                d="M 360 130 Q 320 60 270 10"
                fill="none"
                stroke="var(--ink-3)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text x="210" y="20" fill="var(--ink-2)" fontSize="10" fontFamily="monospace" fontWeight="bold">
                TO EUROPE (LONDON / GENEVA)
              </text>

              {/* To US */}
              <path
                d="M 120 230 Q 60 180 10 140"
                fill="none"
                stroke="var(--ink-3)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text x="15" y="130" fill="var(--ink-2)" fontSize="10" fontFamily="monospace" fontWeight="bold">
                TO US (NEW YORK / BOSTON)
              </text>

              {/* Hub Marker Nodes */}
              {hubs.map((hub) => {
                const isSelected = hub.id === activeRegionId;
                const isNairobi = hub.id === 'east';

                return (
                  <g
                    key={hub.id}
                    className="cursor-pointer group"
                    onClick={() => handleSelect(hub.id)}
                  >
                    {/* Pulsing ring for Nairobi */}
                    {isNairobi && (
                      <circle cx={hub.cx} cy={hub.cy} r="18" fill="url(#nairobiGlow)" />
                    )}

                    {/* Outer Target Circle */}
                    <circle
                      cx={hub.cx}
                      cy={hub.cy}
                      r={isSelected ? 9 : 6}
                      fill={isSelected ? 'var(--accent)' : 'var(--paper)'}
                      stroke={isSelected ? 'var(--paper)' : 'var(--accent)'}
                      strokeWidth="2"
                      className="transition-all duration-200"
                    />

                    {/* Center point */}
                    <circle
                      cx={hub.cx}
                      cy={hub.cy}
                      r="2.5"
                      fill={isSelected ? 'var(--paper)' : 'var(--accent)'}
                    />

                    {/* Label */}
                    <text
                      x={hub.cx + 12}
                      y={hub.cy + 4}
                      fill={isSelected ? 'var(--accent)' : 'var(--ink-strong)'}
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      className="transition-colors"
                    >
                      {hub.region}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="w-full mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--ink-3)]">
            <span>Click any quadrant to inspect regional intelligence</span>
            <span className="text-[var(--accent)] font-semibold">Active: {activeRegion.name}</span>
          </div>
        </div>

        {/* Right: Regional Intelligence Panel & Active Markets (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[var(--paper-2)] flex flex-col justify-between space-y-6 font-body">
          <div className="space-y-5">
            {/* Quick Hub Selector Buttons */}
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {GEO_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.id)}
                  className={`p-2.5 text-left border rounded-[2px] transition-colors cursor-pointer ${
                    r.id === activeRegionId
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)] font-semibold shadow-xs'
                      : 'bg-[var(--paper)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                  }`}
                >
                  <div className="font-semibold">{r.name}</div>
                  <div className={`text-[10px] mt-0.5 ${r.id === activeRegionId ? 'text-white/80' : 'text-[var(--ink-3)]'}`}>
                    {r.coverage}
                  </div>
                </button>
              ))}
            </div>

            {/* Region Detail Card */}
            <div className="p-5 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                <div>
                  <div className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider">
                    REGIONAL COMMAND
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--ink-strong)]">
                    {activeRegion.name}
                  </h3>
                </div>
                <div className="font-mono text-[11px] text-[var(--ink-3)] bg-[var(--paper-2)] px-2.5 py-1 border border-[var(--line)] rounded-[2px]">
                  {activeRegion.nairobiRelation}
                </div>
              </div>

              {/* Focus Markets Pills */}
              <div className="space-y-1.5">
                <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                  Primary Commercial & Clinical Markets:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeRegion.focusMarkets.map((market) => (
                    <span
                      key={market}
                      className="px-2.5 py-1 bg-[var(--paper-2)] border border-[var(--line-2)] text-xs font-mono text-[var(--ink-strong)] rounded-[2px] flex items-center space-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{market}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Regulatory Intelligence */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                  Harmonization & Regulatory Framework:
                </div>
                <p className="text-xs text-[var(--ink)] leading-relaxed bg-[var(--paper-2)] p-3 border border-[var(--line)] rounded-[2px]">
                  {activeRegion.keyIntelligence}
                </p>
              </div>

              {/* Commercial Dynamics */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase text-[var(--ink-3)] font-semibold tracking-wider">
                  Distribution & Logistics Reality:
                </div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  {activeRegion.commercialContext}
                </p>
              </div>
            </div>
          </div>

          {/* Global Corridors Strip */}
          <div className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs space-y-2">
            <div className="flex items-center space-x-2 text-[var(--accent)] font-semibold text-[11px] uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>International Advisory Corridors</span>
            </div>
            <div className="text-[11px] text-[var(--ink-2)] leading-relaxed">
              Active liaison channels with multinational headquarters in <strong>London</strong>, <strong>Geneva</strong>, <strong>Brussels</strong>, and <strong>New York</strong> structuring pan-African investments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
