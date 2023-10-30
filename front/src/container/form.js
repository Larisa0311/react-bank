export const REG_EXP_EMAIL = new RegExp(/^\S+@\S+\.\S+$/);
export const REG_EXP_PASSWORD = new RegExp(/^[a-zA-Z]\w{3,14}$/);

export class FormClass {
  FIELD_NAME = {};
  FOELD_ERROR = {};

  value = {};
  error = {};

  change = (name, value) => {
    const error = this.validate(name, value);
    this.value[name] = value;

    if (error) {
      this.setError(name, error);
      this.error[name] = error;
    } else {
      this.setError(name, null);
      delete this.error[name];
    }
  };

  setError = (name, error) => {
    const span = document.querySelector(`.field__error[name="${name}"]`);

    const field = document.querySelector(`.validation[name="${name}"]`);

    if (span) {
      span.classList.toggle("field__error--active", Boolean(error));
      span.innerText = error || "";
    }

    if (field) {
      field.classList.toggle("validation--active", Boolean(error));
    }
  };
}
