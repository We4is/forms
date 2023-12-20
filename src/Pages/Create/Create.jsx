import { useState } from "react";
import "./Create.scss";

export default function Create({ addNewForm, length }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  function getInfo() {
    if (title !== "" || body !== "") {
      const info = {
        id: length + 1,
        title: title,
        body: body,
      };
      addNewForm(info);
    }
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          name="body"
          placeholder="body"
          onChange={(event) => setBody(event.target.value)}
        />
      </form>
      <button onClick={getInfo}>Добавить</button>
    </>
  );
}
