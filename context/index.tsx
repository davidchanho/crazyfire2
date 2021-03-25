import React, { createContext, PropsWithChildren, useContext } from "react";

interface IBusinessHours {
  day: string;
  open: number | "CLOSED";
  close: number | "CLOSED";
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  state: string;
  zipcode: string;
}

interface ISocialMedia {
  facebook: string;
  yelp: string;
}

interface IAppState {
  name: string;
  slogan: string;
  phone: string;
  address: IAddress;
  businessHours: IBusinessHours[];
  socialMedia: ISocialMedia;
}

const AppState: IAppState = {
  name: "Crazy Fire Mongolian Grill",
  slogan: "Fire up the moment",
  phone: "910-826-3646",
  address: {
    street: "1800 Skibo Rd.",
    suite: "300",
    city: "Fayetteville",
    state: "NC",
    zipcode: "28303",
  },
  businessHours: [
    { day: "monday", open: 11, close: 21 },
    { day: "tuesday", open: 11, close: 21 },
    { day: "wednesday", open: 11, close: 21 },
    { day: "thursday", open: 11, close: 21 },
    { day: "friday", open: 11, close: 22 },
    { day: "saturday", open: 11, close: 22 },
    { day: "sunday", open: "CLOSED", close: "CLOSED" },
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/crazyfiremongolian/",
    yelp: "https://www.yelp.com/biz/crazy-fire-mongolian-grill-fayetteville",
  },
};

const AppContext = createContext(AppState);

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppContext.Provider value={AppState}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const app = useContext(AppContext);
  return app;
};
