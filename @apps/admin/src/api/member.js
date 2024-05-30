import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

export const getBySearchParams = async (params) => {
    const result = (await axios({
        method: "GET",
        url: `api/members/search`,
        params,
    }))
    return result.data
}

export const useGetBySearchParams = (params, enabled) => {
    return useQuery({ queryKey: ['MEMBER_LIST', params], queryFn: () => getBySearchParams(params), enabled })
}