
const host = `https://reqres.in/`;
const registrationUrl = 'api/register';
// const loginUrl = 'api/login';
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
    const response = await fetch(url, {
        method: 'get',
        body: JSON.stringify(data)
    });
    return response.json();
}

const api = {
    registration: (email, password) =>{
        return postData(`${host}${registrationUrl}`, {
            "email": email,
            "password": password
        })
    },
    usersList : (id) => {
        return getData(`${host}${usersUrl(id)}`)
    },
}

export default api;