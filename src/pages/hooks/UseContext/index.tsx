import NotesContextProvider from "./NotesContext";
import NotesPage from "./NotesPage";

function index() {
    return (
        <NotesContextProvider>
            <NotesPage />
        </NotesContextProvider>
    );
}

export default index;
