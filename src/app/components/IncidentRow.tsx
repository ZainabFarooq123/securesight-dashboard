"use client";

import { CameraIcon, ClockIcon } from "lucide-react";
import { IncidentIcon } from "./IncidentIcons";

export type Incident = {
  src: string;
  type: string;
  location: string;
  ts: string;
};

export default function IncidentRow({
  incident,
  onResolve,
  index,
  resolved,
}: {
  incident: Incident;
  onResolve: (index: number) => void;
  index: number;
  resolved: boolean;
}) {
  return (
    <div
      className={`transition-opacity duration-500 ${
        resolved ? "opacity-30" : "opacity-100"
      } flex items-start gap-4 bg-[#1B1B1B] p-3 rounded-lg border border-white/10`}
    >
      {/* Thumbnail */}
      <img
        src={incident.src}
        alt={`Incident ${index + 1}`}
        className="w-[120px] h-[67px] rounded-lg object-cover border border-gray-700"
      />

      {/* Info */}
      <div className="flex-1 flex flex-col gap-1 text-white">
        <div className="flex items-center gap-2 text-base font-semibold">
          <IncidentIcon type={incident.type} />
          <span>{incident.type}</span>
        </div>
        <div className="flex items-center text-sm text-gray-300 gap-2">
          <CameraIcon className="w-4 h-4" />
          <span>{incident.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-300 gap-2">
          <ClockIcon className="w-4 h-4" />
          <span>{incident.ts}</span>
        </div>
      </div>

      {/* Resolve Button */}
      <button
        onClick={() => onResolve(index)}
        className="text-yellow-400 font-semibold text-sm flex items-center gap-1 hover:underline whitespace-nowrap"
      >
        Resolve <span className="text-lg">›</span>
      </button>
    </div>
  );
}

