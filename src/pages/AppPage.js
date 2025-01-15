import React, { useState } from 'react';

export default function NotesPage() {
  const [activeTab, setActiveTab] = useState("Enter Notes");

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-b-2 border-gray-200">
        {["Enter Notes", "Review Notes", "Review Claims", "Draft!"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab
              ? "border-b-4 border-blue-500 font-bold"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-700">
        Paste, type, upload, or drag in your notes
      </h1>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
          Upload Files
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
          Upload Audio
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
          Upload Folder
        </button>
      </div>

      {/* Textarea */}
      <textarea
        className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Start typing here..."
      ></textarea>

      {/* Continue Button */}
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Continue
      </button>
    </div>
  );
}