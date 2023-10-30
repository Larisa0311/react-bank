import "./index.css";

import BackButton from "../../component/back_button";
import { Header } from "../../component/header";
import { Heading } from "../../component/heading";
import { Field } from "../../component/field";
import { Footer } from "../../component/footer";
import Component from "../../component/page";
import { Button } from "../../component/button";
import { Form } from "../../component/form";

export function SignupConfirmPage() {
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
        <Heading title="Confirm account" info="Write the code you received" />

        <Field
          label="Code"
          placeholder="123456"
          type="text"
          name="code"
          // onInput={handleInput}
        />

        <Button
          buttonName="Confirm"
          style={{ backgroundColor: "#775CE5", color: "white" }}
          link="/balans"
          // onClick={handleButtonClick}
        />
      </Form>
      <Footer />
    </Component>
  );
}
