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
    <Section>
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

      <a href={facebook} target="_blank" rel="noreferrer" className='flex items-end'>
        <AiFillFacebook aria-label="go to our Facebook page" size={32} />
        Facebook
      </a>
      
      <a href={yelp} target="_blank" rel="noreferrer" className='flex items-end'>
        <FaYelp aria-label="go to our Yelp page" size={32} />
        Yelp
      </a>
    </Section>
  );
}

export default Address;
