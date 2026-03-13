export default function FilterTabs() {
  const tabs = ["All", "Mentorship", "Exams", "System", "Community"];

  return (
    <div className="flex gap-3 mt-4 mb-10">
      {tabs.map((t, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-full border border-[#1f3c44] text-sm transition 
          ${i === 0 ? "bg-[#0ea5e9] text-black border-[#0ea5e9]" : "text-gray-300"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}