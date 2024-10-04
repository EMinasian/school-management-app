import { gql } from "graphql-request"
import getGraphqlData from "./getGraphqlData"

const getTeachers = async () => {

    const query = gql`
        query {
            teachers {
                id
                firstname
                lastname
                email
                room
            }
        }
    `

    const { data } = await getGraphqlData({ query })

    if (!data?.teachers) {
        return null
    }

    return data.teachers

}

export { getTeachers }