import React from "react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";
import { useAppContext } from "../../context";

function Address() {
  const {
    address: { street, suite, city, state, zipcode },
    phone,
    socialMedia: { facebook, yelp },
  } = useAppContext();

  return (
    <section className="flex flex-col items-center text-start">
      <h3>Address</h3>
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
        <a href={facebook} target="_blank">
          <AiFillFacebook />
        </a>
        <a href={yelp} target="_blank">
          <FaYelp />
        </a>
      </div>
    </section>
  );
}

export default Address;
