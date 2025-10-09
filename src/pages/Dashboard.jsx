export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">Total Students: 240</div>
        <div className="bg-white p-4 rounded-2xl shadow">Total Teachers: 40</div>
        <div className="bg-white p-4 rounded-2xl shadow">Applications: 520</div>
        <div className="bg-white p-4 rounded-2xl shadow">Admissions: 320</div>
      </div>
    </div>
  );
}
