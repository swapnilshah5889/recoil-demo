import MyButton from "./button.component";

const IncreaseButton = ({count, setCount}) => {

    function handleClick() {
        setCount(count+1);
    }

    return (
        <MyButton 
            btnText={"Increment"}
            onClick={handleClick}
            />
    );
}

export default IncreaseButton;