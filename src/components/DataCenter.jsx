import { useState } from "react";
import data from "../assets/data.json";
import "./DataCenter.css";
export default function DataCenter() {
  const [value, setValue] = useState("");
  const filteredRecord = data.filter(
    (record) =>
      record.Customer.toLowerCase().includes(value.toLowerCase()) ||
      record.LastSeen.toLowerCase().includes(value.toLowerCase()) ||
      record.LatestPurchase.toLowerCase().includes(value.toLowerCase()) ||
      record.News.toLowerCase().includes(value.toLowerCase()) ||
      record.Orders.toLowerCase().includes(value.toLowerCase()) ||
      record.Segment.toLowerCase().includes(value.toLowerCase()) ||
      record.TotalSpent.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <>
      <label>Search:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by name, order, Total spent etc.."
      />
      <table border="1">
        <thead>
          <tr>
            <th>Customers</th>
            <th>Last Seen</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Latest Purchase</th>
            <th>News</th>
            <th>Segment</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecord.map((customer, index) => (
            <tr key={index}>
              <td>{customer.Customer}</td>
              <td>{customer.LastSeen}</td>
              <td>{customer.Orders}</td>
              <td>{customer.TotalSpent}</td>
              <td>{customer.LatestPurchase}</td>
              <td>{customer.News}</td>
              <td>{customer.Segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
