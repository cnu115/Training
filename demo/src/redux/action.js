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
const authentication = () => ({
    type: Types.AUTHENTICATION
})

export default {
    increaseCounter,
    decreaseCounter,
    authentication
}