
const host = `https://reqres.in/`;
const registrationUrl = 'api/register';
const loginUrl = 'api/login';
const userViewUrl = (id) => `api/users/${id}`
const usersUrl = (id) =>  `api/users?page=${id}`;

const postData = async (url = '', data = {}) =>{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

const getData = async (url = '', data = {}) =>{
    console.log(url)
    const response = await fetch(url, {
        method: 'get',
        // body: JSON.stringify(data)
    });
    console.log(response)
    return response.json();
}

const api = {
    registration: (email, password) =>{
        return postData(`${host}${registrationUrl}`, {
            "email": email,
            "password": password
        })
    },
    login: (email, password) =>{
        return postData(`${host}${loginUrl}`, {
            "email": email,
            "password": password
        })
    },
    usersList : (id) => {
        return getData(`${host}${usersUrl(id)}`)
    },
    userView : (id) => {
        return getData(`${host}${userViewUrl(id)}`)
    }
}

export default api;