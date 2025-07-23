export function IncidentIcon({ type }: { type: string }) {
  const iconMap: Record<string, string> = {
    "Unauthorised Access": "/icons/lock.svg",
    "Gun Threat": "/icons/gun.svg",
  };

  return (
    <img
      src={iconMap[type] || "/icons/lock.svg"}
      alt={`${type} icon`}
      className="w-5 h-5 object-contain"
    />
  );
}

