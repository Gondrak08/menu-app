
import { useState, useEffect } from "react";

const useFetchData = () => {

    const [burgers, setBurgers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchBurgers = async () => {
        setIsLoading(true);
        const url =  'https://free-food-menus-api-production.up.railway.app/burgers';
        // const options = {
        //   method: 'GET',
        //   headers: {
        //     'X-RapidAPI-Key': 'abbe50fa5amsh5a4d34d1ac5b682p13dc82jsndb80b7bde278',
        //     'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
        //   }
        // };
  
        try {
          const response = await fetch(url);
          const result = await response.json();
          setBurgers(result);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };
  
      fetchBurgers();
    }, []);
  
    return { burgers, isLoading };

};

export default useFetchData;