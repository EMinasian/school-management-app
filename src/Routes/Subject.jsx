import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CustomList from "../Components/CustomList";
import CustomListItem from "../Components/CustomListItem";
import { getSubjectById } from "../utils/subjects";

const Subject = () => {
    const subjectSlug = useLoaderData()

    const [subject, setSubject] = useState(null)
    
    useEffect(() => {
        const fetchTeachers = async () => {
            const subjectData = await getSubjectById(subjectSlug)
            setSubject(subjectData)
        }
        fetchTeachers()
    }, [])

    if (!subject) {
        return null
    }


    console.log(subject)
    const { students } = subject


    return (
        <>
            <CustomList>
                {
                    students.map(student => 
                        <CustomListItem id={student} label={`${student.firstname} ${student.lastname}`} />
                    )
                }
            </CustomList>
        </>
    )
}

const loader = ({ params }) => {
    return params?.id
}

export default Subject
export { loader }