export default function DashboardNavbar() {
  return (
    <div className="flex justify-between items-center p-3 bg-[#EEF0FB] border-b border-gray-300">
      <div>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>
      <div>
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
