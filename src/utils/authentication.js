
const registeration = async (email, password) => {
    try {
        const response = await fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        return true
    } catch (e) {
        console.error("registeration failed:", e)
        return false
    }
}

export { registeration }