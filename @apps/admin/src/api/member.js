import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

const getBySearchParams = async (params) => {
    console.log('params', params)
    const result = (await axios({
        method: "GET",
        url: `api/members/search`,
        params,
    }))
    console.log('result', result);
    return result
}

export const useGetBySearchParams = (params) => {
    return useQuery({ queryKey: ['MEMBER_LIST', params], queryFn: () => getBySearchParams(params) })
}