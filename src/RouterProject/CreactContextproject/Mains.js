import{ useContext, useEffect, useState } from "react";
import { Context } from "./ApiLink";
import SearchBar from "./SearchBar";
import axios from "axios";
const Main = () => {
  const url = useContext(Context);

  //  console.log(url);
  const [Result, setResult] = useState([]);
  const [Loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(false)
    const fetching = async () => {
      try {
        
        const response = await axios.get(url);
        // console.log(response);
        setResult(response.data.drinks);
        setLoading(true)

      } catch (error) {
        console.error(error);
      }
    };
    fetching();
  }, [url]);
  return (
    <>
      <SearchBar />
     {Loading ? ( <div className="cocktail">
        {Result.map((drinks) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb } = drinks;
          return (
            <>
            <div className="cocktailAlign" key={idDrink}>
           
              <h4>{strAlcoholic}</h4>
              <img src={strDrinkThumb} alt={strAlcoholic} className="img" />
              <span>{strDrink}</span>
            </div>
            </>
          );
        })}
      </div>):<div className="loading-circle"></div>
       }
    </>
  );
};

export default Main;
