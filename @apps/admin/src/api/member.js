import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

const getBySearchParams = async (params) => {
    const result = (await axios({
        method: "GET",
        url: `api/members/search`,
        params,
    }))
    console.log('result', result);
    return result
}

export const useGetBySearchParams = (params) => {
    return useQuery({ queryKey: ['MEMBER_LIST'], queryFn: () => getBySearchParams(params) })
}