const CheckLogin = () => {
    const token = sessionStorage.getItem('token');
    return token ? true : false
     
}

export default CheckLogin;