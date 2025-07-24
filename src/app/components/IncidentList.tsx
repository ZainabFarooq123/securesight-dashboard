"use client";

import { useState } from "react";
import { IncidentIcon } from "./IncidentIcons";

export default function IncidentList() {
  const [resolvedIndices, setResolvedIndices] = useState<number[]>([]);

  const handleResolve = (index: number) => {
    setResolvedIndices((prev) => [...prev, index]);

    // Simulate API call
    setTimeout(() => {
      console.log(`Resolved incident ${index}`);
    }, 1000);
  };

  const incidents = [
    {
      src: "/thumbnails/img1.png",
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      ts: "14:35 – 14:37 on 7-Jul-2025",
    },
    {
      src: "/thumbnails/img2.png",
      type: "Gun Threat",
      location: "Vault Camera",
      ts: "15:10 – 15:12 on 7-Jul-2025",
    },
    {
      src: "/thumbnails/img3.png",
      type: "Face Recognised",
      location: "Entrance Camera",
      ts: "16:00 – 16:02 on 7-Jul-2025",
    },
    {
      src: "/thumbnails/img4.png",
      type: "Unauthorised Access",
      location: "Back Door Camera",
      ts: "17:20 – 17:22 on 7-Jul-2025",
    },
    {
      src: "/thumbnails/img5.png",
      type: "Gun Threat",
      location: "Vault Camera",
      ts: "18:15 – 18:17 on 7-Jul-2025",
    },
  ];

  return (
    <div className="bg-black text-white w-[572px] h-[450px] flex flex-col px-6 pt-3 pb-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between h-14">
        {/* Left */}
        <div className="flex items-center gap-2">
          <img src="/icons/alert.png" alt="Alert" className="w-4 h-4" />
          <span className="text-white font-semibold text-base">
            15 Unresolved Incidents
          </span>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="/icons/unauthorizedAccess.png" className="w-5 h-5" alt="unauthorized" />
          <img src="/icons/plus.png" className="w-5 h-5" alt="plus" />
          <img src="/icons/people.png" className="w-5 h-5" alt="people" />
          <img src="/icons/check-check.png" className="w-5 h-5" alt="check-check" />
          <div className="text-xs text-white bg-green-700 px-3 py-1 rounded whitespace-nowrap min-w-fit">
            4 resolved incidents
          </div>
        </div>
      </div>

      {/* Scrollable Incident List */}
      <div className="mt-4 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {incidents.map((incident, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              resolvedIndices.includes(index) ? "opacity-30" : "opacity-100"
            } flex items-start gap-4 bg-[#1B1B1B] p-3 rounded-lg border border-white/10`}
          >
            <img
              src={incident.src}
              alt={`Incident ${index + 1}`}
              className="w-[120px] h-[67px] rounded-lg object-cover border border-gray-700"
            />
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-base font-semibold">
                <IncidentIcon type={incident.type} />
                <span>{incident.type}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 gap-2">
                <img src="/icons/camera.png" className="w-4 h-4" alt="camera" />
                <span>{incident.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 gap-2">
                <img src="/icons/clock.png" className="w-4 h-4" alt="clock" />
                <span>{incident.ts}</span>
              </div>
            </div>
            <button
              onClick={() => handleResolve(index)}
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


