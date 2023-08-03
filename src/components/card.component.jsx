import IncreaseButton from "./increment.component";
import DecreaseButton from "./decrease.component";

const MyCard = () => {

    return (
        <div style={{display:"flex", justifyContent:"space-evenly", width:"100vw"}} >
            <IncreaseButton />      
            <DecreaseButton />      
        </div>
    )
}

export default MyCard;