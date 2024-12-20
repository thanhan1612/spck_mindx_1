import React from "react";
import IconHome from "../../Icons/IconHome";
import IconSafari from "../../Icons/IconSafari";
import IconAlbum from "../../Icons/IconAlbum";
import IconRecentlyadded from "../../Icons/IconRecentlyadded";
import IconMostplayed from "../../Icons/IconMostplayed";
import IconFavourite from "../../Icons/IconFavourite";
import IconYourplaylist from "../../Icons/IconYourplaylist";
import IconAddPlaylist from "../../Icons/IconAddPlaylist";
import IconArtist from "../../Icons/IconArtist";
import IconSetting from "../../Icons/IconSetting";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Menu.css'
import IconLogOut from "../../Icons/IconLogOut";
const Menu = () => {
    const navigate = useNavigate();
    const [isclick,setIsclick] = useState(null);
    
    const handleclick = (classname) => {
            setIsclick(classname);
            navigate(`/${classname}`);
    }
    const new_style = (className) =>({backgroundColor:  isclick === className ? "#FF3780" : "",display:'flex', flexDirection: "row",alignItems: "center",color:"white",gap:"10px",width: "226px", borderRadius: "9px" })
    return (
        <div className="menu">
            <h3>Menu</h3>
            <div className="home" onClick={() => handleclick('')} style={new_style('home')}>
                <IconHome />
                <p>Home</p>
            </div>
            <div className="discover" onClick={() => handleclick('discover')} style={new_style('discover')}>
                <IconSafari />
                <p>Discover</p>
            </div>
            <div className="album" onClick={() => handleclick('album')} style={new_style('album')}>
                <IconAlbum />
                <p>Albums</p>
            </div>
            <div className="artist" onClick={() => handleclick('artist')} style={new_style('artist')}>
                <IconArtist />
                <p>Artists</p>
            </div>
            <h3>Library</h3>
            <div className="recentlyadded" onClick={() => handleclick('recentlyadded')} style={new_style('recentlyadded')}>
                <IconRecentlyadded />
                <p>Recently Added</p>
            </div>
            <div className="mostplayed" onClick={() => handleclick('mostplayed')} style={new_style('mostplayed')}>
                <IconMostplayed />
                <p>Most Played</p>
            </div>
            <h3>Playlist and Favourite</h3>
            <div className="yourfavourite" onClick={() => handleclick('yourfavourite')} style={new_style('yourfavourite')}>
                <IconFavourite />
                <p>Your Favourites</p>
            </div>
            <div className="yourplaylist" onClick={() => handleclick('yourplaylist')} style={new_style('yourplaylist')}>
                <IconYourplaylist />
                <p>Your Playlist</p>
            </div>
            <div className="addplaylist" onClick={() => handleclick('addplaylist')} style={new_style('addplaylist')}>
                <IconAddPlaylist />
                <p>Add Playlist</p>
            </div>
            <h3>General</h3>
            <div className="setting" onClick={() => handleclick('setting')} style={new_style('setting')}>
                <IconSetting />
                <p>Setting</p>
            </div>
            <div className="logout" onClick={() => handleclick('logout')} style={new_style('logout')}>
                <IconLogOut />
                <p>Log Out</p>
            </div>
        </div>
    )
    
    
}
export default Menu;