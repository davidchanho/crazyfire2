import React, { useState } from "react";
import HowItWorksItem from "./HowItWorksItem";
import {GiKnifeFork, GiSwordsPower} from 'react-icons/gi'
import {CgBowl} from 'react-icons/cg'

function HowItWorks() {
  const [items] = useState([
    { id: "hiw-1", title: "Grab a bowl and fill it up", icon: <CgBowl /> },
    { id: "hiw-2", title: "Bring it to grill and enjoy the show", icon: <GiSwordsPower/> },
    { id: "hiw-3", title: "Dig in!", icon: <GiKnifeFork/> },
  ]);

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item) => {
          return <HowItWorksItem key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
}

export default HowItWorks;
