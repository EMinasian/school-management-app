import { gql } from "graphql-request"
import getGraphqlData from "./getGraphqlData"

const getSubjects = async () => {

    const query = gql`
        query {
            subjects {
                id
                title
                description
                class
                teacherId
            }
        }
    `

    const { data } = await getGraphqlData(query)

    if (!data?.subjects) {
        return null
    }

    return data.subjects

}

export { getSubjects }