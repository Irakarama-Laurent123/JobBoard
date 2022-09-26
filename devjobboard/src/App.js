import { Fragment } from "react";
import Header from "./components/Layout/Header";
import FullProfile from "./components/Profile/FullProfile";

function App() {
  return (
    <Fragment>
      <Header />
      <FullProfile />
    </Fragment>
  );
}

export default App;
