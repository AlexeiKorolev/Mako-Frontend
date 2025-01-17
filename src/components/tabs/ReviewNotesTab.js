import React, { useState } from 'react';
import { useGlobal } from '../../context/GlobalContext';
import { questionsSectionOrder } from '../../constants/constants';

export default function ReviewNotesTab() {
    const { questions } = useGlobal();
    const [expandedSections, setExpandedSections] = useState(questionsSectionOrder.reduce((acc, section) => {
        acc[section] = true; // Start with all sections expanded
        return acc;
    }, {}));

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="flex justify-center">
            <div className="w-[70%] p-4">
                <h1 className="text-2xl font-bold mb-6">Review Notes</h1>

                {questionsSectionOrder.map((section) => (
                    <div key={section} className="mb-8">
                        {/* Section Header with Toggle */}
                        <div
                            onClick={() => toggleSection(section)}
                            className="flex items-center cursor-pointer bg-blue-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 capitalize flex-grow">
                                {section.replace(/_/g, ' ')}
                            </h2>
                            <span className="text-gray-600 text-xl">
                                {expandedSections[section] ? '−' : '+'}
                            </span>
                        </div>

                        {/* Questions and Answers */}
                        {expandedSections[section] && questions[section]?.map((qa, index) => (
                            <div key={index} className="mb-6 mt-4 ml-4">
                                {/* Question */}
                                <p className="font-bold text-gray-700 mb-2">
                                    {qa.question}
                                </p>

                                {/* Answer */}
                                <textarea
                                    value={qa.answer}
                                    readOnly
                                    className="w-full p-3 bg-gray-50 border rounded-lg min-h-[100px] text-gray-600"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
} 