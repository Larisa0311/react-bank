import React, {useContext} from "react";

import "../../normalize.css";
import "./index.css";

import Button from "../../component/button";
import BackButton from "../../component/back-button";
import Page from "../../component/auth-page";
import Header from "../../component/header"
import Heading from "../../component/heading";
import Grid from "../../component/grid";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password";
import AnotherAction from "../../component/another-action";
import Alert from "../../component/alert";

import {
	Form, 
	REG_EXP_EMAIL, 
	REG_EXP_PASSWORD, 
	
	ALERT_STATUS, 
	FIELD_ERROR, 
} from "../../utils/form";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { AUTH_DATA_ACTION_TYPE } from "../../App";

const SigninPage: React.FC = () => {
 const auth = useContext(AuthContext);
 const navigate = useNavigate();

 class SigninForm extends Form {
	FIELD_NAME = { 
		EMAIL: "email",
		PASSWORD: "password",
	 };

	 validate: (name: string, value: string) => FIELD_ERROR | null = (
		name: string,
		value: string
	 ) => {
		if (value?.length < 1) {
			return FIELD_ERROR.EMPTY;
		}

		if (value?.length > 40) {
			return FIELD_ERROR.BIG;
		}

		if (name === this.FIELD_NAME.EMAIL) {
			if (!REG_EXP_EMAIL.test(String(value))) {
				return FIELD_ERROR.EMAIL;
			}
		}

		if (name === this.FIELD_NAME.PASSWORD) {
			if (!REG_EXP_PASSWORD.test(String(value)))
			return FIELD_ERROR.PASSWORD;
		}

		return null;
	 };

	 submit = async () => {
		if (this.disabled) {
			this.validateAll();
			this.firstValidate = true;
		} else {
			this.setAlert(ALERT_STATUS.PROGRESS, "Loading...");

			try {
				const res = await fetch(`http://localhost:4000/signin`, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: this.convertData(),
				  });
		
				  const data = await res.json();
		
				  if (res.ok) {
					auth?.dispatch({
					  type: AUTH_DATA_ACTION_TYPE.LOGIN,
					  payload: data.session,
					});
		
					navigate("/signup-confirm");
				  } else {
					this.setAlert(ALERT_STATUS.ERROR, data.message);
				  }
				} catch (error) {
				  this.setAlert(
					ALERT_STATUS.ERROR,
					"Registration failed, please try again!"
				  );
				}
			  }
			};
		
			convertData = () => {
			  return JSON.stringify({
				[this.FIELD_NAME.EMAIL]: this.value[this.FIELD_NAME.EMAIL],
				[this.FIELD_NAME.PASSWORD]: this.value[this.FIELD_NAME.PASSWORD],
			  });
			};
		  }

const signin = new SigninForm();
return (
	<Page>
		<Header />
		<BackButton />
	
		<Heading title="Sign in" subtitle="Select login method" />
		<Grid big>
			<Field
			label="Email"
			name="email"
			type="email"
			placeholder="email"
			onInput={(e) => signin.change(e.target.name, e.target.value)} 
			/>
			<FieldPassword
			label="Password"
			name="password"
			type="password"
			placeholder="password"
			onInput={(e) => signin.change(e.target.name, e.target.value)} 
			/>
			<AnotherAction
			text="Forgot your password?"
			button="Restore"
			onClick={() => navigate("/recovery")} 
			/>
			<Button text="Continue" onClick={() => signin.submit()} disabled />
			<Alert />
		</Grid>
	</Page>
);
};

export default SigninPage;