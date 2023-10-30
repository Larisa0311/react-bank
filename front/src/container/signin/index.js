import "./index.css";

import BackButton from "../../component/back_button";
import { Header } from "../../component/header";
import { Heading } from "../../component/heading";
import { Field } from "../../component/field";
import { FieldPassword } from "../../component/field_password";
import { Footer } from "../../component/footer";
import Component from "../../component/page";
import { Button } from "../../component/button";
import { AlertLink } from "../../component/alert";
import { Form } from "../../component/form";

export function SigninPage() {
  // class SignupForm {
  //   static value = {};

  //   constructor(name, value) {
  //     this.name = name;
  //     this.value = value;
  //   }

  //   // const FIELD_ERROR = {
  //   // 	EMAIL: 'Type in your correct email',
  //   // 	PASSWORD:
  //   // 	  'Type in your password'
  //   //   }

  //   static validate = (name, value) => {
  //     return true;
  //   };
  //   // 	if (String(value).length < 1) {
  //   // 	  return this.FIELD_ERROR.EMAIL
  //   // 	}

  //   // 	if (name === this.FIELD_NAME.EMAIL) {
  //   // 	  if (!REC_EXP_EMAIL.test(String(value))) {
  //   // 		return this.FIELD_ERROR.EMAIL
  //   // 	  }
  //   // 	}

  //   // 	if (name === this.FIELD_NAME.PASSWORD) {
  //   // 	  if (!REC_EXP_PASSWORD.test(String(value))) {
  //   // 		return this.FIELD_ERROR.PASSWORD
  //   // 	  }
  //   // 	}  //   }

  //   static submit = () => {
  //     console.log(this.value);
  //   };

  //   static change = (name, value) => {
  //     console.log(name, value);
  //     if (this.validate(name, value)) this.value[name] = value;
  //   };
  // }

  // window.signupForm = SignupForm;

  // const handleButtonClick = () => {
  //   SignupForm.submit();
  // };

  // const handleInput = (e) => {
  //   SignupForm.change();
  // };

  return (
    <Component>
      <Header />
      <BackButton />
      <Form>
        <Heading title="Sign In" info="Select login method" />

        <Field
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          name="email"
          // onInput={handleInput}
        />
        <FieldPassword
          label="Password"
          name="password"
          placeholder="password"
          // onInputPassword={handleInput}
        />

        <AlertLink
          info="Forgot your password? "
          page="Restore"
          link="/recovery-confirm"
        />
        <Button
          buttonName="Continue"
          style={{ backgroundColor: "#775CE5", color: "white" }}
          link="/recovery"
          // onClick={handleButtonClick}
        />
      </Form>
      <Footer />
    </Component>
  );
}
