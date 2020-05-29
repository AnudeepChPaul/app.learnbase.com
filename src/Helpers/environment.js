class Environment {
    static isProdMode() {
        return process.env.NODE_ENV === 'production'
    }

    static getAuthPageUrl() {
        return process.env.AUTH_PAGE_URL
    }
}

export default Environment
