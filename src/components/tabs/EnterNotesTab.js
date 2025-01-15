import React, { useState } from 'react';

export default function EnterNotesTab() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const handleAudioSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const handleFolderSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const removeFile = (indexToRemove) => {
        setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="flex flex-col items-center p-4">
            {/* Title */}
            <h1 className="text-xl font-semibold text-gray-700 mt-[30px] mb-8">
                Paste, type, upload, or drag in your notes
            </h1>

            {/* Buttons */}
            <div className="flex space-x-4 mb-8">
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.txt"
                            className="hidden"
                            onChange={handleFileSelect}
                        />
                        Upload Documents
                    </label>
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            multiple
                            accept="audio/*"
                            className="hidden"
                            onChange={handleAudioSelect}
                        />
                        Upload Audio
                    </label>
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            multiple
                            webkitdirectory=""
                            directory=""
                            className="hidden"
                            onChange={handleFolderSelect}
                        />
                        Upload Folder
                    </label>
                </button>
            </div>

            {/* File List */}
            {selectedFiles.length > 0 && (
                <div className="w-full max-w-xl mb-8 border rounded-lg p-2 bg-white">
                    <ul className="space-y-2 max-h-[170px] overflow-y-auto pr-2">
                        {selectedFiles.map((file, index) => (
                            <li key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-gray-700 truncate flex-1">{file.name}</span>
                                <button
                                    onClick={() => removeFile(index)}
                                    className="text-gray-500 hover:text-red-500 ml-2"
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Textarea */}
            <textarea
                className="w-[900px] h-40 p-4 border-2 border-gray-390 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-[30px] placeholder-gray-500"
                placeholder="Enter your notes here..."
            ></textarea>

            {/* Continue Button */}
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-lg font-semibold mt-[30px]">
                Continue
            </button>
        </div>
    );
} 