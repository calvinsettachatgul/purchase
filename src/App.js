import React, { useState, useEffect } from 'react';
import PurchaseList from "./PurchaseList";

import './App.css'
import PurchaseListMobile from './PurchaseListMobile';

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return { width };
  }


function App() {
    const { width } = useViewport();
    const breakpoint = 620;
    const mobile = width < breakpoint;
  
    return( 
        <div>
            <h1 className="title">Purchases</h1>
            {mobile ? <PurchaseListMobile /> : <PurchaseList />}
        </div>
    );
}


export default App;