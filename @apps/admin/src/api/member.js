import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

const getBySearchParams = async (params) => {
    const result = (await axios({
        method: "GET",
        url: `api/members/search`,
        params: {nameOrId:"홍지연"},
    }))
    return result
}

export const useGetBySearchParams = () => {
    return useQuery({ queryKey: ['LIST'], queryFn: getBySearchParams});
}