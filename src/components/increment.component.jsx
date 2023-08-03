import MyButton from "./button.component";
import { useSetRecoilState } from "recoil";
import { countState } from "../store/atoms";

const IncreaseButton = () => {

    const setCount = useSetRecoilState(countState);
    function handleClick () {
        setCount((prevCount) => {return prevCount+1})
    }
    return (
        <MyButton 
            btnText={"Increment"}
            onClick={handleClick}
        />
    );
}

export default IncreaseButton;