import "./index.css";

import { useState } from "react";

export function FieldPassword({ label, name, placeholder, onInputPassword }) {
  const [value, setValue] = useState("");

  class FieldPassword {
    static toggle = (target) => {
      target.toggleAttribute("show");

      const input = target.previousElementSibling;
      const type = input.getAttribute("type");

      if (type === "password") {
        input.setAttribute("type", "text");
      } else {
        input.setAttribute("type", "password");
      }
    };
  }
  const fieldPassword = FieldPassword;

  const handleToggleClick = () => {
    fieldPassword.toggle(this);
  };

  const handleInput = (e) => {
    onInputPassword({ name }, setValue(e.target.value));
  };

  return (
    <>
      <div className="field field--password">
        <label
          // for={name}
          className="field__label"
        >
          {label}
        </label>

        <div className="field__wrapper">
          <input
            type="password"
            className="field__input validation"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onInput={handleInput}
          />
          <span onClick={handleToggleClick} className="field__icon"></span>
        </div>
      </div>
      <span className="field__error">Error</span>
    </>
  );
}
