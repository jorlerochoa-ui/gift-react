import { useRef, useState } from "react"
import {GetGift} from "../actions/getGifts"
import type {Gif} from "../interfaces/giftOne"
export const useGift =() =>{

const giftCache=useRef<Record<string, Gif[]>>({})
 const [PreviusTerm,setPreviusTerm]=useState<string[]>([]);
    const [newGift,setNewGift]=useState<Gif[]>([]);
    

    const handleClick=async (term:string)=>{
      if(giftCache.current[term]){
        setNewGift(giftCache.current[term]);
        return;
      }
      const gifSearch = await GetGift(term);
      setNewGift(gifSearch);
    };
    const handleSearch=async(query:string='')=>{

      query=query.trim();      
      if(query.length==0) return;
      if(PreviusTerm.includes(query)) return;
      setPreviusTerm([ ...PreviusTerm, query ]);
      const gifSearch = await GetGift(query);
      setNewGift(gifSearch);
      giftCache.current[query]=gifSearch;
      console.log(giftCache);
      
      
    };

    return {

        handleClick,
        handleSearch,
        newGift,
        PreviusTerm
    }

}