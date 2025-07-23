"use client";

import { IncidentIcon } from "./IncidentIcons";
export type Incident = {
  id: number;
  type: string;
  camera: { location: string };
  tsStart: string;
  tsEnd: string;
  date: string;
  thumbnailUrl: string;
};


export default function IncidentList() {
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
      location: "Shop Floor Camera A",
      ts: "14:35 – 14:37 on 7-Jul-2025",
    },
    {
      src: "/thumbnails/img3.png",
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      ts: "14:35 – 14:37 on 7-Jul-2025",
    },
    {
      src: "/thumbnails/img4.png",
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      ts: "14:35 – 14:37 on 7-Jul-2025",
    },
  ];

  return (
    <div className="bg-black text-white p-4 rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-4">Unresolved Incidents</h2>
      <div className="flex flex-col gap-6">
        {incidents.map((incident, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={incident.src}
              alt={`Incident ${index + 1}`}
              className="w-[120px] h-[67px] rounded-lg object-cover border border-gray-700"
            />

            <div className="flex-1 flex flex-col gap-1">
              {/* Type & Icon */}
              <div className="flex items-center gap-2 text-base font-semibold">
                <IncidentIcon type={incident.type} />
                <span>{incident.type}</span>
              </div>

              {/* Location */}
              <div className="flex items-center text-sm text-gray-300 gap-2">
                <img src="/icons/camera.png" className="w-4 h-4" />
                <span>{incident.location}</span>
              </div>

              {/* Timestamp */}
              <div className="flex items-center text-sm text-gray-300 gap-2">
                <img src="/icons/clock.png" className="w-4 h-4" />
                <span>{incident.ts}</span>
              </div>
            </div>

            {/* Resolve button */}
            <button className="text-yellow-400 font-semibold text-sm flex items-center gap-1 hover:underline">
              Resolve
              <span className="text-lg">›</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

