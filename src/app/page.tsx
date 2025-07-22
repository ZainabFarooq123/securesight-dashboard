import IncidentPlayer from "./components/IncidentPlayer";
import IncidentList from "./components/IncidentList";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 bg-gray-100 flex flex-col md:flex-row gap-6">
      <div className="md:w-2/3">
        <IncidentPlayer />
      </div>
      <div className="md:w-1/3">
        <IncidentList />
      </div>
    </main>
  );
}
