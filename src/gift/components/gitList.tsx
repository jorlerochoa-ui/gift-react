/* import type { Gif } from "../../mock-data/mock-data"

interface gift {

    gift: Gif[]
}
export const GiftList  = ({gift}:gift) => {
  return (
      <div className="gifts-container">
         {
             gift.map((item) =>(
     
                 <div key={item.id} className="gift-card">
                     <img src={item.url} alt="" />
                     <h3>{item.title}</h3>
                 </div>
             ))
         }
         </div>
  )
}
 */

 import type { Gif } from "../../mock-data/mock-data"
/*  interface gift {

    gift: Gif[]
}   */
export const GiftList  = ({gift}:{ gift: Gif[] }) => {


  return (
      <div className="gifts-container">
         {
             gift.map((item) =>(
     
                 <div key={item.id} className="gift-card">
                     <img src={item.url} alt="" />
                     <h3>{item.title}</h3>
                 </div>
             ))
         }
         </div>
  )
}
 