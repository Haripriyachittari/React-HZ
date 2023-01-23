import { useEffect, useState } from "react";
import { FETCH_RESTUARANT_PAGE } from "../config";

const useRestuarant = (id) => {
  const [restaraunt, setRestuarant] = useState();
  const getRestuarantDetails = async () => {
    const res = await fetch(FETCH_RESTUARANT_PAGE + id);
    const resJson = await res.json();
    // console.log(resJson);
    setRestuarant(resJson.data);
  };
  useEffect(() => {
    getRestuarantDetails();
  }, []);

  return restaraunt;
};
export default useRestuarant;
