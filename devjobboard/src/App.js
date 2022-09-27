import { Fragment } from "react";
import Header from "./components/Layout/Header";
import FullProfile from "./components/Profile/FullProfile";
import Profiles from "./Submission/Submission.json";

function App() {
  const ProfileList = Profiles.map((profile, i) => (
    <FullProfile
      key={i}
      id={profile.id}
      name={profile.name}
      image={profile.image}
      email={profile.email}
      linkedin={profile.linkedin}
      website={profile.website}
      github={profile.github}
      job={profile.jobTitle}
      location={profile.location}
    />
  ));

  return (
    <Fragment>
      <Header />
      {ProfileList}
    </Fragment>
  );
}

export default App;
