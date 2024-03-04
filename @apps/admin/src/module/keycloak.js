import Keycloak from "keycloak-js"

const KEYCLOAK_CONFIG = {
	url: 'http://localhost:9080',
	realm: 'jhipster',
	clientId: 'web_app',
}

export default class KeycloakService {
    static #instance;
    kc;
	authCheck;
      
	constructor() {
		if (KeycloakService.#instance) return KeycloakService.#instance
		this.kc = new Keycloak(KEYCLOAK_CONFIG)
		KeycloakService.#instance = this
	}

	isInit() { return Boolean(this.kc) }

	isAuthenticated() { return this.kc.authenticated }

	async isEmailVerified() {
		if (!this.kc.authenticated) return false
		const keyclockProfile = await this.kc.loadUserProfile()
		return keyclockProfile && keyclockProfile.emailVerified
	}

	init(renderCallback) {
		this.kc.init({ onLoad: "check-sso" })
			.then((authenticated) => this.handleAuthenticated(renderCallback, authenticated))
			.catch((error) => this.handleError(renderCallback, error))
	}

	startInvervalCheck() {
		this.authCheck = setInterval(async () => await this.tokenValidation(), 5000)
	}

	endIntervalCheck() {
		clearInterval(this.authCheck)
	}

	handleAuthenticated(renderCallback, authenticated) {
		if (!authenticated) console.warn("인증되지 않은 접근입니다")
		if (authenticated) this.startInvervalCheck()
		renderCallback(authenticated)
	}

	handleError(renderCallback, error) {
		console.error(error)
		renderCallback("ERROR")
	}

	getAccessToken() {
		return this.kc.token
	}

	async tokenValidation() {
		if (this.isAuthenticated() === false) throw "tokenValidation: not authenticated"
		if (this.remainTokenTime() <= 0) await this.updateToken()
	}

	async updateToken() {
		try {
			const refreshed = await this.kc.updateToken(5)
			console.log(refreshed ? "Refreshed Token" : "Token Still valid")
		} catch (e) {
			const check = confirm("세션이 만료되었습니다. 메인으로 돌아갑니다.")
			if (check) await this.logout()
			throw Error("tokenValidation: sessionExpired")
		}
	}

	remainTokenTime() {
		const exp = this.kc.tokenParsed.exp
		const now = new Date().getTime() / 1000
		return exp - now // seconds
	}

	login() {
		this.kc.login()
	}

	async logout() {
		localStorage.clear() // localStorage 에 저장된 모든 storage 삭제
		await this.kc.logout()
		this.endIntervalCheck()
	}
}