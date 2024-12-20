import React from "react";
import IconLoading from "../Icons/IconLoading";
import './LoadingPage.css'
const LoadingPage = () => {
    return (
        <div className="loadingpage">
            <img src = '/src//images/backgroundimg.png' alt = ''/>
            <div className="content">
                <span className="iconmelodies"><img src = '/src/images/MelodiesLogo.png' alt = 'logo'/></span>
                <p className="loading">Loading <span className="loadingicon"><IconLoading /></span></p>
            </div>
          
        </div>
    )
}
export default LoadingPage;