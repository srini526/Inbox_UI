import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 fixed top-0 left-0 h-full bg-[#0b2630] border-r border-[#1f3c44] p-6">
        <h1 className="text-xl font-semibold mb-10">InterviewReady AI</h1>

        <button className="w-full bg-[#06b6d4] text-black font-semibold py-3 rounded-lg">
          ✉️ Compose Message
        </button>

        <div className="mt-10 space-y-4">
          <div className="text-white font-medium">Inbox</div>
          <div className="text-gray-400">Starred</div>
          <div className="text-gray-400">Sent</div>
          <div className="text-gray-400">Trash</div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-2xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Mobile Sidebar Drawer */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)}></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-[#0b2630] border-r border-[#1f3c44] p-6 z-50">
            <button
              className="text-right text-white text-xl block ml-auto"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h1 className="text-xl font-semibold mt-4 mb-10">InterviewReady AI</h1>

            <button className="w-full bg-[#06b6d4] text-black font-semibold py-3 rounded-lg">
              ✉️ Compose Message
            </button>

            <div className="mt-10 space-y-4">
              <div className="text-white font-medium">Inbox</div>
              <div className="text-gray-400">Starred</div>
              <div className="text-gray-400">Sent</div>
              <div className="text-gray-400">Trash</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}