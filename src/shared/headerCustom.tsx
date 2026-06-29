
interface props{

    title:string,
    description:string
}
export const HeaderGifts  = (props:props) => {
  return (
     <div className="content-center">
         <h1 >{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}
