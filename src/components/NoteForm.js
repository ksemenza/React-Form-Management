import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
    title: "",
    body: ""
  });
  // onChange handler to control inputs
  const handleChanges = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Note Title</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        placeholder="title"
        value={note.title}
      />
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
