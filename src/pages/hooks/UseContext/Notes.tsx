import { memo } from "react";
import { useNotesContext } from "./NotesContext";

function Notes() {
    console.log("rendering notes...");

    const notesContext = useNotesContext();
    if (!notesContext) throw new Error("notes context undefined");
    return (
        <div>
            {notesContext.notes.map((note, idx) => (
                <p key={idx}>
                    {note}{" "}
                    <button onClick={() => notesContext.deleteNote(idx)}>
                        delete
                    </button>
                </p>
            ))}
        </div>
    );
}

export default memo(Notes);
