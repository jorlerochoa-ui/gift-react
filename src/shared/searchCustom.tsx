/* import { useEffect, useState } from "react";
interface props{
    description:string,
    placeholder?:string,
    handleSearch:(query:string)=>void
}
export const SearchCustom  = ({description, placeholder,handleSearch}:props) => {

  const [query, setquery] = useState("Jorler");
  useEffect(()=>{

    const crono=setTimeout(()=>{
      handleSearch(query)
    },700);
    return clearTimeout( crono);
    },[query,handleSearch]
  )
  const onquery=()=>{
    handleSearch(query);
    setquery("");
  };

  const handleKey=(key:string)=>{
    if(key=='Enter'){
        onquery();
    }
  }
  return (
    <div className="search-container">
        <input type="text" value={query}  placeholder={placeholder}
          onChange={(e) => setquery(e.target.value)}
          onKeyDown={(e)=>handleKey(e.key)
          }/>
        <button onClick={onquery}>{description}</button>
    </div>
  )
}
 */

import { useEffect, useState } from "react";
interface props{
    description:string,
    placeholder?:string,
    handleSearch:(query:string)=>void
}
export const SearchCustom  = (props:props) => {

  const [query, setquery] = useState("Jorler");
  useEffect(()=>{

    const crono=setTimeout(()=>{
      props.handleSearch(query)
    },700);
    return clearTimeout( crono);
    },[query,props.handleSearch]
  )
  const onquery=()=>{
    props.handleSearch(query);
    setquery("");
  };

  const handleKey=(key:string)=>{
    if(key=='Enter'){
        onquery();
    }
  }
  return (
    <div className="search-container">
        <input type="text" value={query}  placeholder={props.placeholder}
          onChange={(e) => setquery(e.target.value)}
          onKeyDown={(e)=>handleKey(e.key)
          }/>
        <button onClick={onquery}>{props.description}</button>
    </div>
  )
}
