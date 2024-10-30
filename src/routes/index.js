import SignupForm from "../components/LogInComponent/SignupForm";
import LoginForm from "../components/LogInComponent/LoginForm";
import Dashboard from "../pages/StudentPages/Dashboard/Dashboard";
import FriendList from "~/components/FriendList/FriendList";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/log-in", component: LoginForm },
  { path: "/sign-up", component: SignupForm },
  { path: "/friend", component: FriendList },
];

export { routes };
