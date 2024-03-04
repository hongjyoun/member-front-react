import axios from "@/api"
import { useQuery } from '@tanstack/react-query'

export default class MemberService {
    getBySearchParams(params) {
        const result = new Promise((resolve, reject) => {
            const configs = {
                method: "GET",
                url: `api/members/search`,
                params: {nameOrId:"홍지연"},
            }
            axios(configs)
                .then(res => resolve(res))
                .catch(error => reject(error))
        })
        return result;
    }
}

// export const useGetBySearchParams = async () => {
//     const result = await getBySearchParams();
//     console.log(result);
//     return useQuery({ queryKey: ['LIST'], queryFn: getBySearchParams});
// }