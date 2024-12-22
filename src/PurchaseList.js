import React, { useState, useEffect } from 'react';

import PurchaseCard from "./PurchaseCard";
import './PurchaseList.css'

function PurchaseList() {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json');
          const jsonData = await response.json();
          setPurchases(jsonData);
        };
    
        fetchData();
      }, []); 

    return (<div>

<table className="purchaseList">
        <tr className="header">
          <th>Name</th>
          <th>Location</th>
          <th>Purchase Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>   </th>
        </tr>
      <tbody>
        {purchases.map((purchase) => (
            <PurchaseCard purchase={purchase} />
        ))}
      </tbody>
    </table>


    </div>)
};

export default PurchaseList;
