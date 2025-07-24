"use client";

import { useEffect, useState } from "react";
import { IncidentIcon } from "./IncidentIcons";

interface Incident {
  id: number;
  type: string;
  thumbnailUrl: string;
  camera: {
    location: string;
  };
  tsStart: string;
  tsEnd: string;
}

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [resolvingIds, setResolvingIds] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/incidents?resolved=false")
      .then((res) => res.json())
      .then(setIncidents);
  }, []);

  const handleResolve = async (id: number) => {
    setResolvingIds((prev) => [...prev, id]); // optimistic fade

    try {
      await fetch(`/api/incidents/${id}/resolve`, {
        method: "PATCH",
      });

      setIncidents((prev) => prev.filter((incident) => incident.id !== id));
    } catch (error) {
      console.error("Error resolving incident", error);
      setResolvingIds((prev) => prev.filter((i) => i !== id)); // rollback fade
    }
  };

  return (
    <div className="bg-black text-white w-[572px] h-[450px] flex flex-col px-6 pt-3 pb-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <img src="/icons/alert.png" alt="Alert" className="w-4 h-4" />
          <span className="text-white font-semibold text-base">
            {incidents.length} Unresolved Incidents
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="/icons/unauthorizedAccess.png" className="w-5 h-5" alt="unauthorized" />
          <img src="/icons/plus.png" className="w-5 h-5" alt="plus" />
          <img src="/icons/people.png" className="w-5 h-5" alt="people" />
          <img src="/icons/check-check.png" className="w-5 h-5" alt="check-check" />
          <div className="text-xs text-white bg-green-700 px-3 py-1 rounded whitespace-nowrap min-w-fit">
            {/* This is static unless you also fetch resolved incidents */}
            4 resolved incidents
          </div>
        </div>
      </div>

      {/* Incident List */}
      <div className="mt-4 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className={`transition-opacity duration-500 ${
              resolvingIds.includes(incident.id) ? "opacity-30" : "opacity-100"
            } flex items-start gap-4 bg-[#1B1B1B] p-3 rounded-lg border border-white/10`}
          >
            <img
              src={incident.thumbnailUrl}
              alt={`Incident ${incident.id}`}
              className="w-[120px] h-[67px] rounded-lg object-cover border border-gray-700"
            />
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-base font-semibold">
                <IncidentIcon type={incident.type} />
                <span>{incident.type}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 gap-2">
                <img src="/icons/camera.png" className="w-4 h-4" alt="camera" />
                <span>{incident.camera.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 gap-2">
                <img src="/icons/clock.png" className="w-4 h-4" alt="clock" />
                <span>
                  {formatTimeRange(incident.tsStart, incident.tsEnd)}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleResolve(incident.id)}
              className="text-yellow-400 font-semibold text-sm flex items-center gap-1 hover:underline whitespace-nowrap"
            >
              Resolve <span className="text-lg">›</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Optional helper
function formatTimeRange(start: string, end: string): string {
  const tsStart = new Date(start);
  const tsEnd = new Date(end);

  const pad = (n: number) => String(n).padStart(2, "0");

  const timeStart = `${pad(tsStart.getHours())}:${pad(tsStart.getMinutes())}`;
  const timeEnd = `${pad(tsEnd.getHours())}:${pad(tsEnd.getMinutes())}`;

  const date = tsStart.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return `${timeStart} – ${timeEnd} on ${date}`;
}

