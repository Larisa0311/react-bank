import "./index.css";

export function Form({ children }) {
  return (
    <>
      <form className="form">{children}</form>
    </>
  );
}
