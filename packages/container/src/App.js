import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import React from "react";
export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <hr />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
};
