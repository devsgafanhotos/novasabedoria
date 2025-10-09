export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      <input
        type="text"
        placeholder="Search"
        className="w-1/3 px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-blue-300"
      />
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
}
