// src/components/StockTradeStats.js
import React, { useState } from "react";
import { fetchStockData } from "../api";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

const StockTradeStats = ({ setData }) => {
  const [symbol, setSymbol] = useState("");
  const [date, setDate] = useState("");
  const [stats, setStats] = useState(null);

  const handleSearch = async () => {
    if (symbol && date) {
      const statistics = await fetchStockData(symbol, date);
      setStats(statistics);
      setData(statistics);
    }
  };
  return (
    <div className="container">
      <Form>
        <Form.Group className="sub-text">
          <Form.Label className="stock-label">Stock Symbol </Form.Label>
          <Form.Control
            className="stock-input"
            type="text"
            placeholder="Enter stock symbol (e.g., AAPL)"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="sub-text">
          <Form.Label className="date-input">Date </Form.Label>
          <Form.Control
            className="stock-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="btn" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      <div className="stats">
      {stats && (
        <div>
          <h2>
            Stock Trade Statistics for {symbol} on {date}
          </h2>
          <p className="stats-info">Open: {stats?.o}</p>
          <p className="stats-info">High: {stats?.h}</p>
          <p className="stats-info">Low: {stats?.l}</p>
          <p className="stats-info">Close: {stats?.c}</p>
          <p className="stats-info">Volume: {stats?.v}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default StockTradeStats;
