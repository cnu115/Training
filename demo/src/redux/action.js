// const Types = {
//     ADDITION: "ADDITION",
//     SUBTRACTION: "SUBTRACTION"
// };
import Types from "./reduxTypes";
// actions
const increaseCounter = (payload) => ({
    type: Types.ADDITION,
    payload: payload
});
const decreaseCounter = () => ({
    type: Types.SUBTRACTION,
});
const authentication = () => ({
    type: Types.AUTHENTICATION
});

const getPhotosRes = (data) => ({
    type: Types.GET_PHOTOS,
    photos: data
});

const getPhotosResStarted = () => ({
    type: Types.GET_PHOTOS_REQ,
});

const getPhotosResEnd = () => ({
    type: Types.GET_PHOTOS_REQ_END,
});

const getPhotos = () => {
    return async (dispatch) => {
        dispatch(getPhotosResStarted()) //before starting the api call
        // fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
        //     .then(response => response.data)
        const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosJson = await photos.json();
        dispatch(getPhotosRes(photosJson.slice(0,9)))
        // setTimeout(() => {
            dispatch(getPhotosResEnd()) //End of the api call
        // }, 500)
    }
}
const getUsers = () => {
    return async (dispatch) => {
       //loading action
        //api call
        // state data append
        //loading action end

    }
}

export default {
    increaseCounter,
    decreaseCounter,
    authentication,
    getPhotos
}