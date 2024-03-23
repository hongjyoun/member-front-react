import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

const getBySearchParams = async (params) => {
    const result = (await axios({
        method: "GET",
        url: `api/members/search`,
        params,
    }))
    return result
}

export const useGetBySearchParams = (params) => {
    return useQuery({ queryKey: ['MEMBER_LIST', params], queryFn: () => getBySearchParams(params) })
}