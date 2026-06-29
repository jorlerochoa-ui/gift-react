import type { Giftinterface } from '../interfaces/giftInterfaces';
 export const GetGift=async(query:string)=>{
const api=import.meta.env.VITE_APY_KEY;

  const parametros = new URLSearchParams({
    api_key: api,           
    limit: '10', 
    offset: '0',
    lang: 'en',             
    q: query
  });

  const urlBase = 'https://api.giphy.com/v1/gifs/search';
  const urlCompleta = `${urlBase}?${parametros.toString()}`;

  const resp = await fetch(urlCompleta);
  const data = await resp.json() as Giftinterface;
 
 return data.data.map((gif)=>({

    'id':gif.id,
    'title':gif.title,
    'url':gif.images.original.url,
    'width':Number(gif.images.original.width),
    'height':Number(gif.images.original.height)

 }));

} 

/* 
import axios from 'axios';
import type {Gif} from '../interfaces/giftOne';
import type { Giftinterface } from '../interfaces/giftInterfaces';

export const GetGift = async (query: string): Promise<Gif[]> => {
  const api = 'Z7vHFKTMiQQX0SitfHAfcGh5g9GRYgWC';

  const resp = await axios.get<Giftinterface>(
    `https://api.giphy.com/v1/gifs/search`,{

        params: {
      api_key: api,
      limit: 25,
      offset: 0,
      lang: 'en',
      q: query
    }
    }
  );

  const res=resp.data.data.map((gif)=>({
    'id':gif.id,
    'title':gif.title,
    'url':gif.images.original.url,
    'width':Number(gif.images.original.width),
    'height':Number(gif.images.original.height)

  })
)
  return res;
}; */