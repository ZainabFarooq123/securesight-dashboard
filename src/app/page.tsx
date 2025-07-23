// app/page.tsx
import IncidentPlayer from './components/IncidentPlayer';
import IncidentList from './components/IncidentList';

export default function HomePage() {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Incident Player Section */}
      <div className="w-2/3 bg-black p-4">
        <IncidentPlayer />
      </div>

      {/* Incident List Section */}
      <div className="w-1/3 bg-[#0F0F0F] text-white overflow-y-auto">
        <IncidentList />
      </div>
    </div>
  );
}


