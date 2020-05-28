class Environment {
    static isProdMode() {
        return process.env.NODE_ENV === 'production'
    }
}

export default Environment
