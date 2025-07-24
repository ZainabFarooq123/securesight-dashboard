"use client";

export default function IncidentPlayer() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
      {/* Show full image without cropping */}
      <img
        src="/thumbnails/preview.png"
        alt="Incident Frame"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
