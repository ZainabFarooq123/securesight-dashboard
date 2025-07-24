export default function IncidentListHeader() {
  return (
    <div className="w-[572px] h-[56px] flex items-center justify-between px-4 bg-black">
      {/* Left: Alert + Unresolved */}
      <div className="flex items-center gap-2">
        <img
          src="/icons/alert.png"
          alt="Alert Icon"
          className="w-4 h-4 object-contain"
        />
        <span className="text-white font-semibold text-base">
          15 Unresolved Incidents
        </span>
      </div>

      {/* Right: Resolved + Icons */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-green-700 text-white text-xs px-2 py-[2px] rounded-md">
          <img
            src="/icons/resolved.png"
            alt="Resolved Icon"
            className="w-3.5 h-3.5 object-contain"
          />
          <span>4 resolved incidents</span>
        </div>

        {/* Action Icons */}
        <img
          src="/icons/unauthorizedAccess.png"
          alt="Unauthorized"
          className="w-5 h-5 object-contain"
        />
        <img
          src="/icons/people.png"
          alt="People"
          className="w-5 h-5 object-contain"
        />
        <img
          src="/icons/plus.png"
          alt="Plus"
          className="w-5 h-5 object-contain"
        />
      </div>
    </div>
  );
}

