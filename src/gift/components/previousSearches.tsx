
//import type {FC} from 'react';
interface Props {
  searches: string[];
  handleEvent:(term:string)=>void;
}
//export const PreviusSearch: FC<Props> = ({searches,handleEvent}) => {
export const PreviusSearch=({searches,handleEvent}:Props) => {
  return (
      <div className="previous-searches">
        <h2>previas</h2>
        <ul className="previous-searches-list">
        {
            searches.map((item)=>(
                <li key={item} onClick={() => handleEvent(item)}>{item}</li>

            ))
        }
        
        </ul>
    </div>
  )
}
