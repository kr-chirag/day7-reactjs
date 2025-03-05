import { useState } from "react";
import Notes from "./Notes";
import { useNotesContext } from "./NotesContext";

function NotesPage() {
    const notesContext = useNotesContext();
    if (!notesContext) throw new Error("notes context undefined");
    const [note, setNote] = useState<string>("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNote(e.target.value);
    }
    function handleAdd(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        e.preventDefault();
        notesContext?.addNote(note);
        setNote("");
    }
    return (
        <div>
            <input type="text" value={note} onChange={handleChange} />
            <button onClick={handleAdd}>add note</button>
            <Notes />
        </div>
    );
}

export default NotesPage;
