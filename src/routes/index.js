import SignupForm from "../components/LogInComponent/SignupForm";
import LoginForm from "../components/LogInComponent/LoginForm";

const routes = [
  { path: "/log-in", component: LoginForm },
  {
    path: "/sign-up",
    component: SignupForm,
  },
];

export { routes };
