import React, { useContext, useState } from "react";
import IconBack from "../../Icons/IconBack";
import IconUser from "../../Icons/IconUser";
import IconHeart from "../../Icons/IconHeart";
import IconMusicsymbol from "../../Icons/IconMusicsymbol";
import IconPlus from "../../Icons/IconPlus";
import { data_list } from "../../../context";
import IconFb from "../../Icons/IconFb";
import IconInstagram from "../../Icons/IconInstagram";
import IconWhatsapp from "../../Icons/IconWhatsapp";
import IconTwitter from "../../Icons/IconTwitter";
import './Artists.css';

const Artists = () => {
    const { Topsong, popularsongs } = useContext(data_list);
    const [heart,setHeart] = useState({});
    const changeHeartColor = (id) => {
        // Toggle the heart color for a specific song by id
        setHeart((prev) => ({
            ...prev,
            [id]: !prev[id],  // Toggle between true and false for each song
        }));
    };
    const iconColor = heart? '#EE10B0':"#000";
    return (
        <div className="artist1">
            <div className="bilboard">
                <div className="navbar1">
                    <span><IconBack /></span>
                    <div className="navbar_function">
                        <h1>Share</h1>
                        <h1>About</h1>
                        <h1>Premium</h1>
                        <span><IconUser /></span>
                    </div>
                </div>
                <div className="bilboardname">
                    <h1 className="bilboardsinger">Eminem</h1>
                </div>
            </div>

            <div className="popularsongtable">
                <h1 className="populartext">Popular</h1>
                <div className="famoustable">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ padding: '10px' }}></th>
                                <th style={{ padding: '10px' }}></th>
                                <th style={{ padding: '10px' }}>Song</th>
                                <th style={{ padding: '10px' }}>Release Date</th>
                                <th style={{ padding: '10px' }}>Album</th>
                                <th style={{ padding: '10px' }}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popularsongs.map((item) => (
                                <tr className="artisttr" key={item.id}>
                                    <td style={{ padding: '10px' }}>{item.id}</td>
                                    <td style={{ padding: '10px' }}>{item.img}</td>
                                    <td className="specialtd" style={{ padding: '10px' }}>
                                        {item.song} <br /> {item.artist}
                                    </td>
                                    <td style={{ padding: '10px' }}>{item.releaseDate}</td>
                                    <td style={{ padding: '10px' }}>{item.album}</td>
                                    <td style={{ padding: '10px' }} className="tdheart">
                                    <span onClick={() => changeHeartColor(item.id)}>
                                            <IconHeart color={heart[item.id] ? '#EE10B0' : '#000'} />
                                        </span> {item.time} <p>...</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="showall">Show All</button>
                </div>
            </div>

            <div className="artistalbumbig">
                <h1>Artist's <b>Albums</b></h1>
                <div className="contain-container">
                    <div className="container1">
                        {Topsong.map((item, idx) => (
                            <div className="itemtopsong" key={idx}>
                                <img src={item.image} alt="" />
                                <div className="des">
                                    <h3 className="name">{item.name}</h3>
                                    <div className="author">
                                        <p className="singer">{item.singer}</p>
                                        <IconMusicsymbol />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="iconplus">
                        <div className="circle">
                            <span><IconPlus /></span>
                        </div>
                        <p className="viewall">View All</p>
                    </div>
                </div>
            </div>

            <div className="artistalbumbig">
                <h1>Singer's <b>Songs</b></h1>
                <div className="contain-container">
                    <div className="container1">
                        {Topsong.map((item, idx) => (
                            <div className="itemtopsong" key={idx}>
                                <img src={item.image} alt="" />
                                <div className="des">
                                    <h3 className="name">{item.name}</h3>
                                    <div className="author">
                                        <p className="singer">{item.singer}</p>
                                        <IconMusicsymbol />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="iconplus">
                        <div className="circle">
                            <span><IconPlus /></span>
                        </div>
                        <p className="viewall">View All</p>
                    </div>
                </div>
            </div>

            <div className="artistalbumbig">
                <h1>Artist's <b>Playlist</b></h1>
                <div className="contain-container">
                    <div className="container1">
                        {Topsong.map((item, idx) => (
                            <div className="itemtopsong" key={idx}>
                                <img src={item.image} alt="" />
                                <div className="des">
                                    <h3 className="name">{item.name}</h3>
                                    <div className="author">
                                        <p className="singer">{item.singer}</p>
                                        <IconMusicsymbol />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="iconplus">
                        <div className="circle">
                            <span><IconPlus /></span>
                        </div>
                        <p className="viewall">View All</p>
                    </div>
                </div>
            </div>
            <div className="artistalbumbig">
                <h1>Eminem Fans <b>Also Listen To</b></h1>
                <div className="contain-container">
                    <div className="container1">
                        {Topsong.map((item, idx) => (
                            <div className="itemtopsong" key={idx}>
                                <img src={item.image} alt="" />
                                <div className="des">
                                    <h3 className="name">{item.name}</h3>
                                    <div className="author">
                                        <p className="singer">{item.singer}</p>
                                        <IconMusicsymbol />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="iconplus">
                        <div className="circle">
                            <span><IconPlus /></span>
                        </div>
                        <p className="viewall">View All</p>
                    </div>
                </div>
            </div>
            <div className="moreinfo">
            <div className="about" style = {{paddingLeft:'20px'}}>
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
        </div>
    );
};

export default Artists;
