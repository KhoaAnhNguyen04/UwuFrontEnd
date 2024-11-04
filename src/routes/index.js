import SignupForm from "../components/LogInComponent/SignupForm";
import LoginForm from "../components/LogInComponent/LoginForm";
import Dashboard from "../pages/StudentPages/Dashboard/Dashboard";
import FriendBox from "~/components/FriendList";
import MemberLayout from "~/components/MembershipComponent";
import Review from "~/components/BookList/Review";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/log-in", component: LoginForm },
  { path: "/sign-up", component: SignupForm },
  { path: "/friend", component: FriendBox },
  { path: "/membership", component: MemberLayout },
  { path: "/review", component: Review },
];

export { routes };
