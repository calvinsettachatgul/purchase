import React, { useState, useEffect } from 'react';

import PurchaseCard from "./PurchaseCard";
import './PurchaseList.css'

let purchasesTest = [
    {
        "id": 1,
        "location": "https://picsum.photos/id/0/200",
        "purchaseDate": "2020-12-27T00:00:00.000Z",
        "category": "Food",
        "description": "connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!",
        "price": 99882,
        "name": "auxiliary generating microchip"
    },
    {
        "id": 2,
        "location": "https://picsum.photos/id/1/200",
        "purchaseDate": "2020-12-28T00:00:00.000Z",
        "category": "Technology",
        "description": "I&#x27;ll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
        "price": 69706,
        "name": "1080p backing up port"
    },
    {
        "id": 3,
        "location": "https://picsum.photos/id/2/200",
        "purchaseDate": "2020-12-29T00:00:00.000Z",
        "category": "Footwear",
        "description": "You can&#x27;t reboot the feed without transmitting the back-end SMS pixel!",
        "price": 8307,
        "name": "auxiliary generating panel"
    }
];

function PurchaseList() {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json');
          const jsonData = await response.json();
          setPurchases(jsonData);
        };
    
        fetchData();
      }, []); // The empty dependency 

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
