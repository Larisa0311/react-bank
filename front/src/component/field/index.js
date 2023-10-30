import "./index.css";

import { useState } from "react";

export function Field({ label, placeholder, type, name, onInput }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    onInput({ name }, setValue(e.target.value));
  };

  return (
    <>
      <div className="field">
        <label
          // for={name}
          className="field__label"
        >
          {label}
        </label>
        <input
          onInput={handleInput}
          type={type}
          className="field__input validation"
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
        />
      </div>
      <span className="field__error">Error</span>
    </>
  );
}
