import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

export const getBySearchParams = async (params) => await axios({ method: "GET", url: `api/members/search`, params })
export const getKeycloakAccount = async () => await axios({ method: "GET", url: `api/account` })
export const getMemberInfoByUserId = async (userId) => await axios({ method: "GET", url: `api/members/account/${userId}` })


export const useGetBySearchParams = (params, enabled) => {
    return useQuery({ queryKey: ['MEMBER_LIST', params], queryFn: () => getBySearchParams(params), enabled })
}