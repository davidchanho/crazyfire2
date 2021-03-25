import NHead from "next/head";
import React from "react";
import { useAppContext } from "../../../context";

function Head() {
  const { name } = useAppContext();

  return (
    <NHead>
      <title>{name}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta lang="en" />
      <meta
        name="description"
        content="All you can eat Mongolian styled stir fry in Fayetteville, NC"
      />
    </NHead>
  );
}

export default Head;
