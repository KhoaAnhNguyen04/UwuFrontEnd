import SignupForm from "../components/LogInComponent/SignupForm";
import LoginForm from "../components/LogInComponent/LoginForm";
import Dashboard from "../pages/StudentPages/Dashboard/Dashboard";
import FriendBox from "~/components/FriendList";
import MemberLayout from "~/components/MembershipComponent";
import Review from "~/components/BookList/Review";
import BookPage from "~/components/BookPage";
import UploadForm from "~/components/MovieUpload";
import MyBookPage from "~/components/MyBookPage/MyBookPage";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: LoginForm },
  { path: "/sign-up", component: SignupForm },
  { path: "/friend", component: FriendBox },
  { path: "/membership", component: MemberLayout },
  { path: "/review", component: Review },
  { path: "/book", component: BookPage },
  { path: "/admin-form", component: UploadForm },
  { path: "/my_book", component: MyBookPage },
];

export { routes };
