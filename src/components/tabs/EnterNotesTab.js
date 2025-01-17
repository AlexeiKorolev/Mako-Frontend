import React, { useState } from 'react';
import { useGlobal } from '../../context/GlobalContext';
import { testPatent } from '../../logic/APICalls';

export default function EnterNotesTab() {
    const { notes, setNotes, files, setFiles, setActiveTab, setQuestions } = useGlobal();
    const [isLoading, setIsLoading] = useState(false);

    const handleFileSelect = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles]);
    };

    const handleAudioSelect = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles]);
    };

    const handleFolderSelect = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles]);
    };

    const removeFile = (indexToRemove) => {
        setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const goToNotesReview = async () => {
        setIsLoading(true);
        try {
            await testPatent(notes, setQuestions);
            setActiveTab("Review Notes");
        } catch (error) {
            console.error('Error analyzing notes:', error);
            alert('Failed to analyze notes. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen justify-between p-4">
            {/* Top Section */}
            <div className="flex flex-col items-center">
                {/* Title */}
                <h1 className="text-xl font-semibold text-gray-700 mt-[40px] mb-8">
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
                {files.length > 0 && (
                    <div className="w-full max-w-xl mb-8 border rounded-lg p-2 bg-white">
                        <ul className="space-y-2 max-h-[170px] overflow-y-auto pr-2">
                            {files.map((file, index) => (
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
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center">
                {/* Textarea */}
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-[900px] h-40 p-4 border-2 border-gray-390 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-[50px] mt-[10px] placeholder-gray-500"
                    placeholder="Enter your notes here..."
                ></textarea>

                {/* Continue Button */}
                <button
                    onClick={() => goToNotesReview()}
                    disabled={isLoading}
                    className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow text-lg font-semibold mb-[250px] ${
                        isLoading 
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-blue-700'
                    }`}
                >
                    {isLoading ? 'Processing...' : 'Continue'}
                </button>
            </div>
        </div>
    );
} 