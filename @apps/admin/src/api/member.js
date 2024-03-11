import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

const getBySearchParams = async (params) => {
    const result = (await axios({
        method: "GET",
        url: `api/members/search`,
        params: {nameOrId:"김", centerId:29},
    }))
    return result
}

export const useGetBySearchParams = () => {
    return useQuery({ queryKey: ['LIST'], queryFn: getBySearchParams});
}