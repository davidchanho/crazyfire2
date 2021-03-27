import React from "react";
import { CgBowl } from "react-icons/cg";
import { GiKnifeFork, GiSwordsPower } from "react-icons/gi";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";
import HowItWorksItem from "./HowItWorksItem";

const items = [
  {
    id: "hiw-1",
    title: "Grab a bowl and fill it up",
    icon: <CgBowl size={120} />,
  },
  {
    id: "hiw-2",
    title: "Bring it to grill and enjoy the show",
    icon: <GiSwordsPower size={120} />,
  },
  { id: "hiw-3", title: "Dig in!", icon: <GiKnifeFork size={120} /> },
];

function HowItWorks() {
  return (
    <Section>
      <SectionTitle>How it works</SectionTitle>
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item) => {
          return <HowItWorksItem key={item.id} {...item} />;
        })}
      </ul>
    </Section>
  );
}

export default HowItWorks;
