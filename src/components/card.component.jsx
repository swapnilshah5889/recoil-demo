import IncreaseButton from "./increment.component";
import DecreaseButton from "./decrease.component";

const MyCard = ({count, setCount}) => {

    return (
        <div style={{display:"flex", justifyContent:"space-evenly", width:"100vw"}} >
            <IncreaseButton count={count} setCount={setCount}/>      
            <DecreaseButton count={count} setCount={setCount}/>      
        </div>
    )
}

export default MyCard;