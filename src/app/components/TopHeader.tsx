// app/components/TopHeader.tsx
"use client";

export default function TopHeader() {
  return (
    <div className="w-full h-[76px] bg-[#0F0F0F] border-b border-white/15 flex items-center justify-between px-6 py-4">
      {/* Left: Logo and Container */}
      <div className="flex items-center gap-2">
        <img src="/icons/IconContainer.png" alt="container" className="w-8 h-8" />
        <img src="/icons/logo.png" alt="logo" className="h-4" />
      </div>

      {/* Center: Navigation Icons */}
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-1 text-white text-sm">
          <img src="/icons/dasboard.png" alt="dashboard" className="w-4 h-4" />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <img src="/icons/camera.png" alt="camera" className="w-4 h-4" />
          <span>Cameras</span>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <img src="/icons/alertFill.png" alt="alert" className="w-4 h-4" />
          <span>Scenes</span>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <img src="/icons/settings.png" alt="settings" className="w-4 h-4" />
          <span>Incidents</span>
        </div>
        <div className="flex items-center gap-1 text-white text-sm">
          <img src="/icons/users.png" alt="users" className="w-4 h-4" />
          <span>Users</span>
        </div>
      </div>

      {/* Right: Profile Info */}
      <div className="flex items-center gap-2">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with your actual profile image
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col text-white text-xs">
          <span className="font-medium">Mohammed Ajhas</span>
          <span className="text-gray-400 text-[11px]">ajhas@mandlac.com</span>
        </div>
        <span className="text-white text-sm">▾</span>
      </div>
    </div>
  );
}

