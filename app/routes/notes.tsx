import { redirect, type LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { getStoredNotes, storedNotes } from "~/data/notes";
import { Note } from "~/types/note";

const NotesPage = () => {
  const notes: unknown = useLoaderData<Note>();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes as Array<Note>} />
    </main>
  );
};

export default NotesPage;

// triggered when a get request reaches this route
export const loader = async () => {
  const notes = await getStoredNotes();
  return notes;
};

// triggered when a non-get request reaches this route
export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log("☄️ formData: ", formData);
  const noteData = Object.fromEntries(formData);

  // handle form validations
  if (noteData.title.trim().length < 5) {
    return { message: "Invalid title - must be at least 5 characters long" };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storedNotes(updatedNotes);
  return redirect("/notes");
};

// inject some <link> tags in the head element of our HTML page
export const Links: LinksFunction = () => [
  ...newNoteLinks(),
  ...noteListLinks(),
];
