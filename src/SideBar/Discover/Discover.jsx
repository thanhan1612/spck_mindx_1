import React, { useContext, useState } from "react";
import { useEffect } from "react";
import './Discover.css';
import IconPlus from "../../Icons/IconPlus";
import { data_list } from "../../../context";
const Discover = () => {
    const {Topsong, genre,moodsongs,artistlikethat} = useContext(data_list)
    console.log(genre)
    
    return (
        <div className="discover1">
            
            <div className="moodplaylist">
            <h1 className="genre">
                    Music <b className="genreword">Genres</b>               
                </h1>
            </div>
            <div className="tracks">
                
                    {genre.map((item) => {
                        return (
                        <div className="track">
                        <img src = {item.image} alt = "" />
                        
                            <h3 className="title_genre">{item.genre}</h3>
                       
                        </div>
                    )
                    })}
                    <div className="itemplus">
                        <div className="circleblack">
                            <IconPlus />
                        </div>
                        
                        <h3 className="viewalltext">View all</h3>
                    </div>
            </div>
            <div className="moodplaylist">
            <h1 className="genre">
                    Mood <b className="genreword">Playlists</b>               
                </h1>
            </div>
            <div className="tracks">
                
                    {moodsongs.map((item) => {
                        return (
                        <div className="track1">
                        <img src = {item.img} alt = "" />
                        
                           
                       
                        </div>
                    )
                    })}
                    <div className="itemplus">
                        <div className="circleblack">
                            <IconPlus />
                        </div>
                        
                        <h3 className="viewalltext">View all</h3>
                    </div>
            </div>
            <div className="moodplaylist">
            <h1 className="genre">
                    Popular <b className="genreword">Artists</b>               
                </h1>
            </div>
            <div className="tracks">
                
                    {artistlikethat.map((item) => {
                        return (
                        <div className="track11">
                        <img src = {item.image} alt = "" />
                        <h3>{item.name}</h3>
                           
                       
                        </div>
                    )
                    })}
                    <div className="itemplus">
                        <div className="circleblack">
                            <IconPlus />
                        </div>
                        
                        <h3 className="viewalltext">View all</h3>
                    </div>
            </div>
            
            </div>
        
    )
}
export default Discover;