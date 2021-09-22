import { Route, Switch } from "react-router-dom";
import { url } from "../config/Url";
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import StaffSection from "./StaffSection";
import StatWidget from "./StatWidget";

const MainPages = () => {
  const { homeUrl, signInUrl, staffSectionUrl, statistics } = url;
  return (
    <Switch>
      <Route exact path={homeUrl} component={Home}></Route>
      <Route exact path={signInUrl} component={SignUpForm}></Route>
      <Route exact path={staffSectionUrl} component={StaffSection}></Route>
      <Route exact path={statistics} component={StatWidget}></Route>
    </Switch>
  );
};

export default MainPages;
