import type { LinksFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation} from "@remix-run/react";
import styles from "./NewNote.css";

const NewNote = () => {
  const navigation = useNavigation();
  const data = useActionData()

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" action="/notes" id="note-form">
      {data?.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Note"}
        </button>
      </div>
    </Form>
  );
};

export default NewNote;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
