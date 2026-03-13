export default function Topbar({ title, subtitle }) {
  return (
    <div className="mb-10 mt-8">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-gray-400 mt-2">{subtitle}</p>

      {/* Top Right Buttons */}
      <div className="flex justify-end mt-6 gap-4">
        <button className="px-4 py-2 border border-[#1f3c44] rounded-lg text-sm text-gray-300">
          Mark all read
        </button>
        <button className="px-4 py-2 bg-[#102e37] border border-[#1f3c44] rounded-lg text-sm text-white">
          Newest First ▾
        </button>
      </div>
    </div>
  );
}