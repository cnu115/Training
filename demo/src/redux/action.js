// const Types = {
//     ADDITION: "ADDITION",
//     SUBTRACTION: "SUBTRACTION"
// };
import Types from "./reduxTypes";
// actions
const increaseCounter = () => ({
    type: Types.ADDITION,
});
const decreaseCounter = () => ({
    type: Types.SUBTRACTION,
});

export default {
    increaseCounter,
    decreaseCounter,
}