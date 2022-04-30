import axios from "axios";

const register = async (email, password, username) => {
    try {
        const response = await axios.post('http://localhost:5000/api/signup', {email, password, username});
        return response.data
    } catch (err) {
        console.log(err)
    }
};

const login = async(email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/login', {email, password});
        console.log(response)
        document.cookie = response.data.token
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const authService = {
    register,
    login
  };
  
export default authService