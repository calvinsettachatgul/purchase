import React, { useState, useEffect } from 'react';
import './PurchaseListMobile.css'
import PurchaseCardMobile from './PurchaseCardMobile';

function PurchaseListMobile() {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json');
          const jsonData = await response.json();
          setPurchases(jsonData);
        };
    
        fetchData();
      }, []); 

    return (
        <div>
            {purchases.map((purchase)=> {
                return <PurchaseCardMobile purchase={purchase} />
            })}

        </div>

    )
}

export default PurchaseListMobile;