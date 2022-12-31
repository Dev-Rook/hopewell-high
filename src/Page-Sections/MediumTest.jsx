import React from "react";
import useAxios from "../Hooks/useAxios";

const MediumTest = () => {
  const url = `https://v1.nocodeapi.com/rook/medium/pDNJmkPbbfRzkJLY`;
  const { data, loading, error } = useAxios(url);
  return (
    <div>
      MediumTest
      {data.}
    </div>
  );
};

export default MediumTest;
