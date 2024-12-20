import React from "react";
import IconBack from "../../Icons/IconBack";
import IconUser from "../../Icons/IconUser";
import IconHeart from "../../Icons/IconHeart";
import IconFb from "../../Icons/IconFb";
import IconInstagram from "../../Icons/IconInstagram";
import IconTwitter from "../../Icons/IconTwitter";
import IconWhatsapp from "../../Icons/IconWhatsapp";
import { useContext } from "react";
import './Albums.css'
import { data_list } from "../../../context";

const Albums = () => {
    const {Topsong,genre,trendingSongs,popularsongs} = useContext(data_list)
    return (
        <>
        <div className="albums">
            
            <div className="navbar1">
                <span><IconBack /></span>
                <div className="navbar_function">
                    <h1>Share</h1>
                    <h1>About</h1>
                    <h1>Premium</h1>
                    <span><IconUser /></span>
                </div>
            </div>
            <div className="trendingsongs1">
                <div className="wrap-container">
                <img src = '/src/images/trendingmusic.png' alt = ' ' />
                <div className="mix">
                    <h1>Trending Songs <b>mix</b> </h1>
                    <p>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
                    <div className="songsduration">
                        <p>20 songs</p>
                        <p>1h 36mins</p>
                    </div>
                </div>
                </div>
                
                <div className="playall">
                    <h1>Play All</h1>
                    <img src = '/src/images/Play.png' alt = '' />
                </div>
            
          </div>
            <div className="musictable">
                <table className="albumtable">
                    
                    <tr >
                        <th style = {{padding:'10px'}}></th>
                        <th style = {{padding:'10px'}}></th>
                        <th style = {{padding:'10px'}}></th>
                        <th style = {{padding:'10px'}}>Release Date</th>
                        <th style = {{padding:'10px'}}> Album</th>
                        <th style = {{padding:'10px'}}>Time</th>
                    </tr>
                   
                    <tbody>
                    {trendingSongs.map((item) => {
                        return (

                        <tr className="albumtr" >
                            <td style = {{padding:'10px'}}>{item.id}</td>
                            
                                <td style = {{padding:'10px'}}>{item.img}</td>
                                <td className="specialtd" style = {{padding:'10px'}}>{item.song} <br /> {item.artist}</td>
                                <td style = {{padding:'10px'}}>{item.releaseDate}</td>
                                <td style = {{padding:'10px'}}>{item.album}</td>
                                <td style = {{padding:'10px'}} className="tdheart"> <span><IconHeart /></span>{item.time} <p>...</p> </td>
                            
                        </tr>
                        )
                    
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="moreinfo">
            <div className="about">
                <h1>About</h1>
                <p>Melodies is a website that has been created for over 5 year’s now and it is one of the most famous music player website’s in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our premium pass’s.</p>
            </div>
           
                <div className="melodies-m">
                    <h1>Melodies</h1>
                    <div className="line"> </div>
                    <h2>Songs</h2>
                    <h2>Radio</h2>
                    <h2>Podcast</h2>
                </div>
                <div className="melodies-m">
                    <h1>Access</h1>
                    <div className="line"> </div>
                    <h2>Explore</h2>
                    <h2>Artists</h2>
                    <h2>Playlists</h2>
                    <h2>Albums</h2>
                    <h2>Trending</h2>
                </div>
                <div className="melodies-m">
                    <h1>Contact</h1>
                    <div className="line"> </div>
                    <h2>About</h2>
                    <h2>Policy</h2>
                    <h2>Social media</h2>
                    <h2>Support</h2>
                </div>
                <div className="socialmedia">
                    <h1 className="melodiescolor">Melodies</h1>
                    <div className="socialmediaplatforms">
                        <span><IconFb /></span>
                        <span><IconInstagram /></span>
                        <span><IconTwitter /></span>
                        <span><IconWhatsapp /></span>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Albums;