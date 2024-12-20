import React from "react";
import { useContext } from "react";
import { data_list } from "../../../context";
import IconMusicsymbol from "../../Icons/IconMusicsymbol";
import IconPlus from "../../Icons/IconPlus";
import IconMelodies from "../../Icons/IconMelodies";
import './Topsong.css'
const Topsong = () => {
    const {Topsong,genre,trendingSongs,popularsongs,newReleaseSongs} = useContext(data_list)
    return (
    <div className="songsdisplay">
            <div className="topsong">
            <h1 className="weekly">Weekly Top <b className="songs">Songs</b></h1>
            <div className="contain-container">
            <div className="container">
            {Topsong.map((item,idx) => {

                 return (
    
                <div className="itemtopsong" key = {idx} >
                     <img src = {item.image} alt = '' />
                    <div className="des">
                        <h3 className="name">{item.name}</h3>
                        <div className="author">
                          <p className="singer">{item.singer}</p>
                          <IconMusicsymbol />
                        </div>
                        
                    </div>
                </div>
    
    
         )
        })}

            </div>
            <div className="iconplus">
                <div className="circle">
                    <span><IconPlus /></span>
                </div>
                <p className="viewall">View All</p>
            </div>
            </div>
            

            </div>
         <div className="topsong">
         <h1 className="weekly">New Release <b className="songs">Songs</b></h1>
         <div className="contain-container">
         <div className="container">
         {newReleaseSongs.map((item,idx) => {

              return (
 
             <div className="itemtopsong" key = {idx} >
                  <img src = {item.img} alt = '' />
                 <div className="des">
                     <h3 className="name">{item.name}</h3>
                     <div className="author">
                       <p className="singer">{item.author}</p>
                       <IconMusicsymbol />
                     </div>
                     
                 </div>
             </div>
 
 
      )
     })}

         </div>
         <div className="iconplus">
             <div className="circle">
                 <span><IconPlus /></span>
             </div>
             <p className="viewall">View All</p>
         </div>
         </div>
        

         </div>
    </div>
            
    )
}
export default Topsong;