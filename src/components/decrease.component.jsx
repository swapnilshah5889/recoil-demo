import MyButton from "./button.component";
import { useSetRecoilState } from "recoil";
import { countState } from "../store/atoms";

const DecreaseButton = () => {
    
    const setCount = useSetRecoilState(countState);
    function handleClick() {
        setCount(prevCount => prevCount-1)
    }
    return (
        <MyButton 
            btnText={"Decrement"}
            onClick={handleClick}
        />
    );
}

export default DecreaseButton;