import { HeaderGifts } from "./shared/headerCustom"
import { SearchCustom } from "./shared/searchCustom"
import { PreviusSearch } from "./gift/components/previousSearches"
import { GiftList } from "./gift/components/gitList"
import  { useGift } from "./gift/hooks/useGifts"

export const GiftApp  = () => {

  const {handleClick,handleSearch,newGift,PreviusTerm}=useGift()
   
    return(
    <> 
    <HeaderGifts title="Buscador" description="gift perfecto"></HeaderGifts>
    <SearchCustom description="buscar Gifts" placeholder="busca" handleSearch={handleSearch}></SearchCustom>
    <PreviusSearch searches={PreviusTerm} handleEvent={handleClick}></PreviusSearch>
    <GiftList gift={newGift}></GiftList>
   
    </>
    )
  
}
