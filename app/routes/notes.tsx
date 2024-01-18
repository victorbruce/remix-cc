import type { LinksFunction } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default NotesPage;

export const action = () => {
  
}

export const Links: LinksFunction = () => [...newNoteLinks()];
