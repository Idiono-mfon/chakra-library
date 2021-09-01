import { Route, Switch } from "react-router-dom";
import { url } from "../config/Url";
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import StaffSection from "./StaffSection";

const MainPages = () => {
  const { homeUrl, signInUrl, staffSectionUrl } = url;
  return (
    <Switch>
      <Route exact path={homeUrl} component={Home}></Route>
      <Route exact path={signInUrl} component={SignUpForm}></Route>
      <Route exact path={staffSectionUrl} component={StaffSection}></Route>
    </Switch>
  );
};

export default MainPages;
