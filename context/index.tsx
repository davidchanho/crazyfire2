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

interface IHeroCarousel {
  name: string;
  img: string;
}

interface IAppState {
  name: string;
  slogan: string;
  phone: string;
  address: IAddress;
  businessHours: IBusinessHours[];
  socialMedia: ISocialMedia;
  heroCarousel: IHeroCarousel[];
}

const address: IAddress = {
  street: "1800 Skibo Rd.",
  suite: "300",
  city: "Fayetteville",
  state: "NC",
  zipcode: "28303",
};

const businessHours: IBusinessHours[] = [
  { day: "monday", open: 11, close: 21 },
  { day: "tuesday", open: 11, close: 21 },
  { day: "wednesday", open: 11, close: 21 },
  { day: "thursday", open: 11, close: 21 },
  { day: "friday", open: 11, close: 22 },
  { day: "saturday", open: 11, close: 22 },
  { day: "sunday", open: "CLOSED", close: "CLOSED" },
];

const socialMedia: ISocialMedia = {
  facebook: "https://www.facebook.com/crazyfiremongolian/",
  yelp: "https://www.yelp.com/biz/crazy-fire-mongolian-grill-fayetteville",
};

const heroCarousel: IHeroCarousel[] = [
  {
    name: "b1",
    img: "https://via.placeholder.com/650/FF0000",
  },
  {
    name: "b2",
    img: "https://via.placeholder.com/650/0000FF",
  },
  {
    name: "b3",
    img: "https://via.placeholder.com/650/008000",
  },
];

const AppState: IAppState = {
  name: "Crazy Fire Mongolian Grill",
  slogan: "Fire up the moment",
  phone: "910-826-3646",
  address,
  businessHours,
  socialMedia,
  heroCarousel,
};

const AppContext = createContext(AppState);

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  return <AppContext.Provider value={AppState}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const app = useContext(AppContext);
  return app;
};
