import axios from "axios"
import {useState} from "react";
import {API_PREFIX} from "../constants/index"
import {useRecoilState} from "recoil";
import {authAtom} from "../components/store/authStore";

export const useData = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [success, setSuccess] = useState(false);

    const auth = useRecoilState(authAtom)
    const call = async ({link, method, data}) => {
        const _config = {
            method: method || "GET",
            url: link,
            headers: {
                accept: "application/json",
                ...((auth?.token) && {'Authorization': "Bearer " + (auth.token)})
            },
            baseURL: API_PREFIX,
            data
        };
        try {
            setLoading(true)
            setError(null)
            setStatus(null)
            setSuccess(false)
            setData(null)

            const response = await axios(_config)
            setData(response.data)
            setStatus(response.status)
            if (response.status === 200 || response.status === 201)
                setSuccess(true)
        } catch (ex) {
            if(ex.response?.status)
            {
                setError(ex.response?.data)
                setStatus(ex.response.status)
            }
            else{
                setError("Server error")
                setStatus(500)
            }

        } finally {
            setLoading(false)
        }

    }
    return {
        call,
        loading,
        data,
        status,
        error,
        success
    }
}