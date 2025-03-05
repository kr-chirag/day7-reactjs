import { createContext, useContext, useEffect, useState } from "react";

interface NotesContextInterface {
    notes: string[];
    addNote: (note: string) => void;
    deleteNote: (index: number) => void;
}

const NotesContext = createContext<NotesContextInterface | undefined>(
    undefined
);

export const useNotesContext = () => useContext(NotesContext);

function NotesContextProvider({ children }: { children: React.ReactNode }) {
    const [notes, setNotes] = useState<string[]>(
        JSON.parse(localStorage.getItem("notes") ?? "[]")
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function addNote(note: string): void {
        setNotes([...notes, note]);
    }

    function deleteNote(index: number): void {
        setNotes(notes.filter((note, idx) => idx !== index));
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContextProvider;
