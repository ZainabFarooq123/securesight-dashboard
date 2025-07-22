import { Incident } from "./IncidentList";

const typeColors: Record<string, string> = {
  "Unauthorised Access": "bg-red-500",
  "Gun Threat": "bg-yellow-500",
  "Face Recognised": "bg-blue-500",
};

export default function IncidentRow({
  incident,
  onResolve,
}: {
  incident: Incident;
  onResolve: (id: number) => void;
}) {
  return (
    <div className="flex items-center gap-4 p-2 border rounded hover:bg-gray-50 transition">
      <img
        src={incident.thumbnailUrl}
        alt="Thumbnail"
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${typeColors[incident.type]}`}
          ></span>
          <span className="font-medium">{incident.type}</span>
        </div>
        <div className="text-sm text-gray-600">
          {incident.camera.location} — {incident.tsStart} to {incident.tsEnd}
        </div>
      </div>
      <button
        onClick={() => onResolve(incident.id)}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Resolve
      </button>
    </div>
  );
}
