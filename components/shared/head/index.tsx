import NHead from "next/head";
import React from "react";
import { useAppContext } from "../../../context";

function Head() {
  const { name } = useAppContext();

  return (
    <NHead>
      <title>{name}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="All you can eat Mongolian styled stir fry in Fayetteville, NC"
      />
      <script>
        {process.env.NODE_ENV == "production"
          ? "window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}"
          : ""}
      </script>
    </NHead>
  );
}

export default Head;
