

const MyButton = ({btnText, onClick}) => {

    return (
        <div>
            <button onClick={onClick}>{btnText}</button>
        </div>
    );
}

export default MyButton;