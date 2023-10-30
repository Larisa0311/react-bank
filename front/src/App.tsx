import React from "react";

import { SignupPage } from "./container/signup";
import { WelcomPage } from "./page/welcom_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupConfirmPage } from "./container/signup-confirm";
import { SigninPage } from "./container/signin";

function App() {
  return (
    //   <AuthContext.Provider value={authContextData}>
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            // <AuthRoute>
            <WelcomPage />
            // </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            // <AuthRoute>
            <SignupPage />
            // </AuthRoute>
          }
        />
        <Route
          path="/signin"
          element={
            // <AuthRoute>
            <SigninPage />
            // </AuthRoute>
          }
        />
        <Route
          path="/signup-confirm"
          element={
            // <AuthRoute>
            <SignupConfirmPage />
            // </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    //
  );
}

export default App;
