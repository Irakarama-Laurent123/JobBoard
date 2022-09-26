import React from "react";
import Card from "../UI/Card";
import ProfileAddress from "./ProfileAddress";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileLink from "./ProfileLink";

const FullProfile = () => {
  return (
    <section className="my-12 flex flex-row gap-12 flex-wrap justify-evenly mx-52">
      <Card>
        <ProfileImage />
        <ProfileInfo />
        <ProfileLink />
        <ProfileAddress />
      </Card>
    </section>
  );
};

export default FullProfile;
