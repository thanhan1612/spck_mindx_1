import React from "react";
import IconBackward from "../../Icons/IconBackward";
import IconForward from "../../Icons/IconForward";
import IconDot from "../../Icons/IconDot";
import './Slideshow.css'
const Slideshow = () => {
    const IconArray = Array(5).fill(null)
    return (
        <div className="banner">
            <div className="backward"><IconBackward /></div>
            <div className="info">
                <div className="info_music">
                <h2>Billie Eilish</h2>
                <p>You can have easy access to every song of billie eilish by just clicking on the <b className="listennow_word">Listen now</b> botton. You can also <b className="follow_word">follow</b> him too for suppurting him and keeping it up with what he dose.</p>
                <div className="banner_button">
                    <button className="listennow">
                        Listen Now
                    </button>
                    <button className="follow">
                        Follow
                    </button>
                </div>
                <div className="dotted">
                    {IconArray.map((item,idx) => {
                    return (
                     
                        <span><IconDot key = {idx} /></span>
                      
                    )
                })}
                </div>
              
                
            </div>
          
                <img src= "/src/images/banner.png" alt="banner" />
            </div>
            
            <div className="backward"  ><IconForward /></div>
            
        </div>
    )
}
export default Slideshow;