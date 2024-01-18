import { Note } from "~/types/note";
import { LinksFunction } from "@remix-run/node";
import styles from "./NoteList.css";

interface Prop {
  notes: Note[];
}

const NoteList = ({ notes }: Prop) => {
  return (
    <ul id="note-list">
      {notes.map((note: Note, index: number) => {
        return (
          <li key={note.id} className="note">
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{note.title}</h2>
              </header>
              <p>{note.content}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default NoteList;
