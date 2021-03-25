import React from "react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";
import { useAppContext } from "../../context";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";

function Address() {
  const {
    address: { street, suite, city, state, zipcode },
    phone,
    socialMedia: { facebook, yelp },
  } = useAppContext();

  return (
    <Section id="address">
      <SectionTitle>Address</SectionTitle>
      <address>
        <p>{street}</p>
        <p>Suite {suite}</p>
        <p>
          {city}, {state}, {zipcode}
        </p>
      </address>
      <a href={`tel:${phone}`} className="flex">
        {" "}
        <AiFillPhone /> {phone}
      </a>
      <div className="flex">
        <a href={facebook} target="_blank" rel="noreferrer">
          <AiFillFacebook aria-label="go to our Facebook page" />
        </a>
        <a href={yelp} target="_blank" rel="noreferrer">
          <FaYelp aria-label="go to our Yelp page" />
        </a>
      </div>
    </Section>
  );
}

export default Address;
