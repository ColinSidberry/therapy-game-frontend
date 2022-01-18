import { Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Homepage from "./Homepage";


/** Routes for App
 * 
 * Props: 
 * - signupUser
 * - loginUser
 * 
 * State: 
 * - none
 * 
 * App -> Routes
 */
function Routes({ signupUser, loginUser }) {
  console.log("* Routes");

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <LoginForm loginUser={loginUser} />
      </Route>
      <Route exact path="/signup">
        <SignupForm signupUser={signupUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;