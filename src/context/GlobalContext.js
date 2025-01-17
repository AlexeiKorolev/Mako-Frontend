import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [notes, setNotes] = useState('');
    const [files, setFiles] = useState([]);
    const [questions, setQuestions] = useState({});
    const [claims, setClaims] = useState([]);
    const [draft, setDraft] = useState('');
    const [chat, setChat] = useState([]);
    const [activeTab, setActiveTab] = useState("Enter Notes");

    return (
        <GlobalContext.Provider
            value={{
                notes,
                setNotes,
                files,
                setFiles,
                questions,
                setQuestions,
                claims,
                setClaims,
                draft,
                setDraft,
                chat,
                setChat,
                activeTab,
                setActiveTab,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
    }
    return context;
} 