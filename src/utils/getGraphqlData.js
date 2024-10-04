const getGraphqlData = async (bodyObject) => {

    try {
        const response = await fetch('http://localhost:3000/graphql', {
            body: JSON.stringify(bodyObject),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

          });
          return await response.json();
    } catch (e) {
        console.error(`Error while fetching graphql data: ${e}`)
        return null
    }
}

export default getGraphqlData