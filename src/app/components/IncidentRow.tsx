import Image from "next/image";
import { Incident } from "./IncidentList";
import { CameraIcon, ClockIcon } from "lucide-react"; // optional, or replace with your own SVGs

const typeIcons: Record<string, string> = {
  "Unauthorised Access": "/icons/lock.svg",
  "Gun Threat": "/icons/gun.svg",
  // add more as needed
};

export default function IncidentRow({
  incident,
  onResolve,
}: {
  incident: Incident;
  onResolve: (id: number) => void;
}) {
  return (
    <div className="flex items-start gap-3 p-2 hover:bg-[#1A1A1A] rounded-lg transition-all">
      {/* Thumbnail */}
      <img
        src={incident.thumbnailUrl}
        alt="Incident Thumbnail"
        className="w-[120px] h-[67px] object-cover rounded-[6px] border border-gray-700"
      />

      {/* Info */}
      <div className="flex flex-col flex-1 text-white">
        {/* Incident Type with Icon */}
        <div className="flex items-center gap-2 font-semibold text-[15px]">
          <img src={typeIcons[incident.type]} alt="" className="w-[18px] h-[18px]" />
          <span>{incident.type}</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-400 mt-1 gap-2">
          <CameraIcon className="w-4 h-4" />
          <span>{incident.camera.location}</span>
        </div>

        {/* Timestamp */}
        <div className="flex items-center text-sm text-gray-400 mt-1 gap-2">
          <ClockIcon className="w-4 h-4" />
          <span>
            {incident.tsStart} – {incident.tsEnd} on {incident.date}
          </span>
        </div>
      </div>

      {/* Resolve Button */}
      <button
        onClick={() => onResolve(incident.id)}
        className="text-yellow-400 text-sm font-semibold hover:underline ml-auto"
      >
        Resolve →
      </button>
    </div>
  );
}
