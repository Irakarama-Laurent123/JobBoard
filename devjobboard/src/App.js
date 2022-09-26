import { useState, useEffect, Fragment } from "react";
import Header from "./components/Layout/Header";
import FullProfile from "./components/Profile/FullProfile";

function App() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("../public/Submission/Submission.json");

      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }

      const responseData = await response.json();

      const loadedProfiles = [];

      for (const id in responseData) {
        loadedProfiles.push({
          id,
          name: responseData[id].name,
          image: responseData[id].img,
          email: responseData[id].email,
          website: responseData[id].website,
          linkedin: responseData[id].linkedin,
          github: responseData[id].github,
          jobTitle: responseData[id].jobTitle,
          location: responseData[id].location,
        });
      }
      setProfile(loadedProfiles);
      setIsLoading(false);
    };

    fetchProfile().catch((e) => {
      setIsLoading(false);
      setHttpError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center text-2xl text-black">
        <p>Loading...😅</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="flex items-center justify-center text-2xl text-red-600">
        <p>{httpError}</p>
      </section>
    );
  }

  const ProfileList = profile.map((profiles) => (
    <FullProfile
      key={profiles.id}
      id={profiles.id}
      name={profiles.name}
      image={profile.image}
      email={profiles.email}
      linkedin={profiles.linkedin}
      website={profiles.website}
      github={profiles.github}
      job={profiles.jobTitle}
      location={profiles.location}
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
