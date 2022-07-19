import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function QueryStringExample(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  //Get the value from the URL query string
  //Example: http//localhost:3000/example?place=Miami&destType=Hotel
  const place = searchParams.get("place");
  const destType = searchParams.get("destType");

  useEffect(() => {
    console.log("place =>", place);
    console.log("destType =>", destType);
  }, []);

  return (
    <>
      <h2>QueryStringExample</h2>
      <p>Open the console to see the logged query string values</p>
    </>
  );
}
