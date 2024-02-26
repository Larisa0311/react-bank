import React, {
  // useState, useEffect, 
  useReducer, 
  // useRef, useMemo, useCallback, memo, lazy, Suspense, 
  createContext, 
  // useContext,
} from "react";

import { BrowserRouter, Routes, Route, 
  // Link, Navigate, useNavigate, useParams, 
}  from "react-router-dom";

import WelcomePage from "./page/welcome";
import SignupPage from "./page/signup";
import SignupConfirmPage from "./page/signup -confirm";

import AuthRoute from "./component/auth-route";
import PrivateAuthRoute from "./component/private-auth-route";

import { loadSession, saveSession } from "./utils/session";


const session = loadSession();

type AuthDataType = {
  token: string | null;
  user: { [key: string]: any};
}

type AUTH_DATA_ACTION = {
  type: AUTH_DATA_ACTION_TYPE;
  payload?: any;
};

export enum AUTH_DATA_ACTION_TYPE {
  LOGIN,
  LOGOUT,
}

type AuthContextType = {
  state: AuthDataType;
  dispatch: React.Dispatch<AUTH_DATA_ACTION>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const notSigninUser = {
  token: "",
  user: {},
};

const authDataReducer: React.Reducer<AuthDataType, AUTH_DATA_ACTION> = (
  state: AuthDataType,
  action: AUTH_DATA_ACTION 
) => {
  switch (action.type) {
    case AUTH_DATA_ACTION_TYPE.LOGIN:
      saveSession(action.payload);
      const session = loadSession();
      return session;
    case AUTH_DATA_ACTION_TYPE.LOGOUT:
      saveSession();  

      return notSigninUser;
      default:
        return state;
  }
};
const authDataInit = session ? session : notSigninUser;



const App: React.FC<{}> = () => {
const [authData, authDataDispatch] = useReducer(
  authDataReducer,
  authDataInit
);

const authContextData = {
  state: authData,
  dispatch: authDataDispatch,
}

  return (
   <AuthContext.Provider value={authContextData}>
    <BrowserRouter>
      <Routes>
     <Route 
      index 
        element={
          <AuthRoute>
              <WelcomePage />
          </AuthRoute>} 
      />
      <Route 
        path="/signup"
          element={
            <AuthRoute>
              <SignupPage />
            </AuthRoute>
          }
      />
      <Route 
        path="/signup-confirm"
          element={
            <PrivateAuthRoute>
              <SignupConfirmPage />
            </PrivateAuthRoute>
          }
      />
   
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
