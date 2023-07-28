import React, { useState } from "react";
import StockChart from "./components/StockChart";
import StockTradeStats from "./components/StockTradeStats";

function App() {
	const [data, setData] = useState(null);
  return (
    <div style={{background:"#f3eeee"}}>
      <h1>Stock Trade Statistics</h1>
      <StockTradeStats setData={setData} />
      {data && <StockChart data={data} /> }
    </div>
  );
}

export default App;
