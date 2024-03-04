import KeycloakService from "@/module/keycloak"
import axios from 'axios'
import qs from 'qs'

const TIMEOUT = 360000
const BASE_URL = 'http://localhost:8080'

const axiosInstance = axios.create({ 
	paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
})


const handleRequest = (config) => {
    const authService = new KeycloakService()
	if (authService.isInit() && authService.isAuthenticated()) {
		const token = authService.getAccessToken()
		config.headers["Authorization"] = `Bearer ${token}`
		config.headers["Pragma"] = "no-cache"
		config.headers["Cache-Control"] = "no-cache"
	}
	config.timeout = TIMEOUT
	return config
}
const handleRequestError = err => Promise.reject(err)

const handleResponse = (response) => {
	return response
};

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.interceptors.request.use(handleRequest, handleRequestError)
axiosInstance.interceptors.response.use(handleResponse);




export default axiosInstance

