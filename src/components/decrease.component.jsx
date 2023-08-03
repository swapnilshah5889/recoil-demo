import MyButton from "./button.component";

const DecreaseButton = ({count, setCount}) => {
    
    function handleClick() {
        setCount(count-1);
    }

    return (
        <MyButton 
            btnText={"Decrement"}
            onClick={handleClick}
            />
    );
}

export default DecreaseButton;