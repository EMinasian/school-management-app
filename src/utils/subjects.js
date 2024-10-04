import { gql } from "graphql-request"
import getGraphqlData from "./getGraphqlData"

const getSubjectTitles = async () => {

    const query = gql`
        query {
            subjects {
                id
                title
            }
        }
    `

    const { data } = await getGraphqlData({ query })
    if (!data?.subjects) {
        return null
    }
    return data.subjects
}

const getSubjectById = async (subjectId) => {
    const query = gql`
        query {
            subjects(subjectId: ${subjectId}) {
                id
                title
                description
                class
                teacher {
                    id
                    firstname
                    lastname
                }
                students {
                    firstname
                    lastname
                }
            }
        }
    `

    const { data } = await getGraphqlData({ query })
    return data?.subjects?.[0]
}

export { getSubjectTitles, getSubjectById }