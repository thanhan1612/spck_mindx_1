import React from "react";
import { Topsong } from "./data/data_topsong";
import { genre } from "./data/data_genre";
import { createContext } from "react";
import { trendingSongs } from "./data/data_trendingsongs";
import { newReleaseSongs } from "./data/data_newreleasesong";
import { moodsongs } from "./data/data_moonsong";
import { artistlikethat } from "./data/data_artistlikethat";
import popularsongs from "./data/data_popularsongs";
export const data_list = createContext();

export const Myprovider = ({children}) => {
    return (
        <data_list.Provider value = {{Topsong,genre,trendingSongs,popularsongs,newReleaseSongs,moodsongs,artistlikethat}}>
            {children}
            
        </data_list.Provider>
    )
}



