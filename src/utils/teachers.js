const getTeachers = async () => {

    try {
        const response = await fetch('http://localhost:3000/teachers')
        const data = await response.json()
        return data
    } catch (e) {
        console.error(`Error while fetching teachers: ${e}`)
        return []
    }

}

export { getTeachers }