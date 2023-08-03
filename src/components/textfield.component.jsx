import { useRecoilValue } from "recoil";
import { countState } from "../store/atoms";

const MyTextField = () => {
    const count = useRecoilValue(countState); 
    return (
        <div>
            <text>{count}</text>
        </div>
    )
}

export default MyTextField;