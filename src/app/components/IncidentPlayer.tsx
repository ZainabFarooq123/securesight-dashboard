export default function IncidentPlayer() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Incident Player</h2>
      <div className="mb-4">
        {/* Replace with actual video later */}
        <img
          src="/thumbnails/sample-main.jpg"
          alt="Main incident"
          className="w-full rounded"
        />
      </div>
      <div className="flex gap-2">
        <img src="/thumbnails/cam1.jpg" alt="Cam 1" className="w-1/2 rounded" />
        <img src="/thumbnails/cam2.jpg" alt="Cam 2" className="w-1/2 rounded" />
      </div>
    </div>
  );
}
