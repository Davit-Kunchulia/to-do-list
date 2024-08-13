import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState({
    todo: "",
  });

  const [submittedText, setSubmittedText] = useState("");
  const [clear, setClear] = useState(true);

  const Submit = (e) => {
    e.preventDefault();
    setSubmittedText(text.todo);
    setText({ todo: " " });
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <input
          placeholder="..."
          onChange={(e) => {
            setText((prev) => ({ ...prev, todo: e.target.value }));
          }}
          value={text.todo}
        />
        <button type="submit">add</button>
      </form>
      {/* {submittedText && <h2>{submittedText}</h2>} */}
      <h2>
        {submittedText}
        <button
          onClick={() => {
            setClear(!clear);
          }}
        >
          cls
        </button>
      </h2>
    </div>
  );
};

export default Todo;
