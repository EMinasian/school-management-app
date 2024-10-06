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
                    firstname
                    lastname
                }
                students {
                    id
                    firstname
                    lastname
                }
            }
        }
    `

    const { data } = await getGraphqlData({ query })
    return data?.subjects?.[0]
}

const cancelEnrollment = async (subjectId, studentId) => {
    const query = gql`
        mutation {
            deleteEnrollment(subjectId: ${subjectId}, studentId: ${studentId}) {
                id
                title
                description
                class
                teacher {
                    firstname
                    lastname
                }
                students {
                    id
                    firstname
                    lastname
                }
            }
        }
`

    const { data } = await getGraphqlData({ query })
    return data?.deleteEnrollment?.[0]
}

const enrollStudent = async (subjectId, studentId) => {
    const query = gql`
        mutation {
            enrollStudent(subjectId: ${subjectId}, studentId: ${studentId}) {
                id
                title
                description
                class
                teacher {
                    firstname
                    lastname
                }
                students {
                    id
                    firstname
                    lastname
                }
            }
        }
`

    const response = await getGraphqlData({ query })

    if (response.errors) {
        const { errors } =  response
        
        if (errors?.[0]?.message === "FOREIGN KEY constraint failed") {
            return { error: 'notExisting' }
        } else {
            return { error: 'dataBase' }
        }
    }

    const { data } = response
    return data?.enrollStudent?.[0]
}

const updateSubjectInfo = async (subjectId, title, description) => {

    const query = gql`
        mutation {
            editSubject(subjectId: ${subjectId}, title: "${title}", description: "${description}") {
                id
                title
                description
                class
                teacher {
                    firstname
                    lastname
                }
                students {
                    id
                    firstname
                    lastname
                }
            }
        }
`

    const { data } = await getGraphqlData({ query })
    return data?.editSubject?.[0]
}

export { getSubjectTitles, getSubjectById, cancelEnrollment, enrollStudent, updateSubjectInfo }