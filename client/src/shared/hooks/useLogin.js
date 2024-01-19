import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginRequest } from '../../api'
import toast from 'react-hot-toast';

// get user email and password from navigate url "/auth"
export const useLogin = () => {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async (email, password) => {

        setIsLoading(true);

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false);

        if (response.error) {
            return toast.error(error.response?.response?.data || 'Error occured while Login in, please try again.')
        }

        const { userDetails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/');

    }

    return {
        login,
        isLoading
    }
}