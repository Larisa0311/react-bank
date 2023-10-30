import "./index.css";
import { FormClass, REG_EXP_EMAIL, REG_EXP_PASSWORD } from "../form";

import BackButton from "../../component/back_button";
import { Header } from "../../component/header";
import { Heading } from "../../component/heading";
import { Field } from "../../component/field";
import { FieldPassword } from "../../component/field_password";
import { Footer } from "../../component/footer";
import Component from "../../component/page";
import { Button } from "../../component/button";
import { AlertLink, Alert } from "../../component/alert";
import { Form } from "../../component/form";

export function SignupPage() {
  class SignupForm extends FormClass {
    FIELD_NAME = {
      EMAIL: "email",
      PASSWORD: "password",
    };

    FIELD_ERROR = {
      IS_EMPTY: "Type a value in the field",
      EMAIL: "Type in your correct email",
      PASSWORD: "Type in your password",
    };

    validate = (name, value) => {
      if (String(value).length < 1) {
        return this.FIELD_ERROR.IS_EMPTY;
      }

      if (name === this.FIELD_NAME.EMAIL) {
        if (!REG_EXP_EMAIL.test(String(value))) {
          return this.FIELD_ERROR.EMAIL;
        }
      }

      if (name === this.FIELD_NAME.PASSWORD) {
        if (!REG_EXP_PASSWORD.test(String(value))) {
          return this.FIELD_ERROR.PASSWORD;
        }
      }
    };

    submit = () => {
      console.log(this.value);
    };
  }

  const signupForm = new SignupForm();

  const handleButtonClick = () => {
    signupForm.submit();
  };

  const handleInput = (e) => {
    signupForm.change();
  };

  return (
    <Component>
      <Header />
      <BackButton />
      <Form>
        <Heading title="Sign Up" info="Choose a registration method" />

        <Field
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          name="email"
          onInput={handleInput}
        />
        <FieldPassword
          label="Password"
          name="password"
          placeholder="password"
          onInputPassword={handleInput}
        />

        <AlertLink
          info="Already have an account? "
          page="Sign In"
          link="/signin"
        />
        <Button
          buttonName="Continue"
          style={{ backgroundColor: "#775CE5", color: "white" }}
          link="/signup-confirm"
          onClick={handleButtonClick}
        />
        <Alert err="A user with the same name is already exist" />
      </Form>
      <Footer />
    </Component>
  );
}
