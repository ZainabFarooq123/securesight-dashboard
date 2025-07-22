"use client";

import { useEffect, useState } from "react";
import IncidentRow from "./IncidentRow";

export type Incident = {
  id: number;
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  camera: { location: string };
  resolved: boolean;
};

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    fetch("/api/incidents?resolved=false")
      .then((res) => res.json())
      .then((data) => setIncidents(data));
  }, []);

  const handleResolve = async (id: number) => {
    setIncidents((prev) => prev.filter((i) => i.id !== id));
    await fetch(`/api/incidents/${id}/resolve`, { method: "PATCH" });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Unresolved Incidents</h2>
      <div className="space-y-4">
        {incidents.map((incident) => (
          <IncidentRow
            key={incident.id}
            incident={incident}
            onResolve={handleResolve}
          />
        ))}
      </div>
    </div>
  );
}
