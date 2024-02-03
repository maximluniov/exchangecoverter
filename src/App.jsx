import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Compare from "./components/Compare";
import Footer from "./components/Footer";

function App() {

  const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';


  const [rates,setRates] = useState([]);


    const getData = useCallback (async ()=> {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8aacf717ebmsh79ec9b5fce71425p11c990jsn28b98958a685',
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
      };
       await fetch(url, options)
        .then(response => response.json())
        .then(response => setRates(response.rates));
    },[])
    

  useEffect(() => {
    getData();
  }, [getData])

//   useEffect(() => {
//   let arr = Object.entries(rates);
//   arr.forEach(([key, value]) => {
//     console.table(key, value);
// });
//   }, [rates])





  return (
    <div className="App bg-slate-100 min-h-lvh font-bold">
      <Header {...rates} />
      <div className="flex flex-col items-center">You can convert chosen values у</div>
      <Compare {...rates} />
      <Footer></Footer>
    </div>
  );
}

export default App;
