import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as registerRequest } from '../../api'
import toast from 'react-hot-toast';

// get user email and password from navigate url "/auth"
export const useRegister = () => {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const register = async (email, password, username) => {

        setIsLoading(true);

        const response = await registerRequest({
            email,
            password,
            username
        })

        setIsLoading(false);

        if (response.error) {
            return toast.error(error.response?.response?.data || 'Error occured while Register in, please try again.')
        }

        const { userDetails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/');

    }

    return {
        register,
        isLoading
    }
}