export default function MessageCard({
  icon,
  title,
  tag,
  time,
  description,
  actions = [],
  link,
  type,
}) {
  return (
    <div
      className={`p-5 rounded-xl border border-[#1f3c44] bg-[#102e37]/60 backdrop-blur 
      ${type === "highlight" ? "border-[#0ea5e9]" : ""}`}
    >
      <div className="flex justify-between items-start">

        {/* ICON + TEXT */}
        <div className="flex gap-4">
          <div className="text-2xl">{icon}</div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-white">{title}</h3>

              {tag && (
                <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              )}
            </div>

            <p className="text-gray-400 mt-1 text-sm">{description}</p>

            {link && (
              <button className="text-[#0ea5e9] mt-2 text-sm">
                {link} ↗
              </button>
            )}

            {actions.length > 0 && (
              <div className="flex gap-3 mt-4">
                {actions.map((act, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded-md text-sm 
                    ${i === 0 ? "bg-[#0ea5e9] text-black" : "border border-[#1f3c44] text-gray-300"}`}
                  >
                    {act}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-gray-500 text-sm">{time}</div>
      </div>
    </div>
  );
}