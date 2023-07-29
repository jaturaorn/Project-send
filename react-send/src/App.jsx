import { Navigation } from "./components";
import { Form } from "./Form";
import Product from "./components/Product.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    const loadData = async () => {
      try {
        setLoading(true);
        let response = await axios.get(
          `https://stockradars.co/assignment/data.php`,
          {
            signal: abortController.signal,
          }
        );
        setDatas(response.data);
      } catch (error) {
        console.error("An error feching", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    return () => abortController.abort();
  }, []);
  console.log(datas);

  return (
    <div>
      <Navigation />
      <Form />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex flex-wrap my-4">
            {datas.map((data) => (
              <Product key={data.name} data={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
