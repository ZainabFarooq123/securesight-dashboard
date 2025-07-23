export default function IncidentPlayer() {
  return (
    <div className="relative h-full rounded-xl overflow-hidden">
      {/* Main Incident Frame */}
      <img
        src="/thumbnails/preview.png"
        alt="Incident Frame"
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Timestamp Overlay */}
      <div className="absolute top-2 left-2 bg-black/70 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
        <span>📅</span>
        <span>11/7/2025 – 03:12:37</span>
      </div>

      {/* Camera Label */}
      <div className="absolute bottom-2 left-2 bg-black/80 text-red-500 text-sm px-3 py-1 rounded">
        Camera – 01
      </div>

      {/* Bottom Camera Thumbnails */}
      <div className="absolute bottom-2 right-2 flex gap-2">
        <div className="relative w-[120px] h-[68px] rounded overflow-hidden border border-white/20">
          <img
            src="/camera02.jpg" // change if needed
            alt="Camera 02"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 text-xs text-white px-1 py-0.5">
            Camera – 02
          </div>
        </div>
        <div className="relative w-[120px] h-[68px] rounded overflow-hidden border border-white/20">
          <img
            src="/camera03.jpg" // change if needed
            alt="Camera 03"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/70 text-xs text-white px-1 py-0.5">
            Camera – 03
          </div>
        </div>
      </div>
    </div>
  );
}

