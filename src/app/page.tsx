// app/page.tsx
import TopHeader from './components/TopHeader';
import IncidentPlayer from './components/IncidentPlayer';
import IncidentList from './components/IncidentList';

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Top Navigation Header */}
      <TopHeader />

      {/* Main Content */}
      <div className="flex justify-center items-start gap-6 p-6">
        {/* Incident Player Section */}
        <div className="w-[796px] h-[450px] bg-[#0F0F0F] rounded-lg overflow-hidden">
          <IncidentPlayer />
        </div>

        {/* Incident List Section */}
        <div className="w-[572px] h-[450px] bg-[#0F0F0F] rounded-lg overflow-hidden">
          <IncidentList />
        </div>
      </div>
    </main>
  );
}
