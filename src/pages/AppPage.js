import React, { useState } from 'react';
import EnterNotesTab from '../components/tabs/EnterNotesTab';
import ReviewNotesTab from '../components/tabs/ReviewNotesTab';
import ReviewClaimsTab from '../components/tabs/ReviewClaimsTab';
import DraftTab from '../components/tabs/DraftTab';
import { useGlobal } from '../context/GlobalContext';

export default function NotesPage() {
  const { activeTab, setActiveTab } = useGlobal();

  const tabs = ["Enter Notes", "Review Notes", "Review Claims", "Draft!"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Enter Notes":
        return <EnterNotesTab />;
      case "Review Notes":
        return <ReviewNotesTab />;
      case "Review Claims":
        return <ReviewClaimsTab />;
      case "Draft!":
        return <DraftTab />;
      default:
        return <EnterNotesTab />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Tabs */}
      <div className="flex w-full border-b-2 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 px-4 py-2 ${activeTab === tab
              ? "border-b-4 border-blue-500 font-bold"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}