import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CustomList from "../Components/CustomList";
import CustomListItem from "../Components/CustomListItem";
import { getSubjectById } from "../utils/subjects";
import CustomTitle from "../Components/CustomTitle";
import { Typography } from "@mui/material";

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
    const { title, description, students } = subject


    return (
        <>
            <CustomTitle intent='primary'>
                {title}
            </CustomTitle>
            <Typography color="white" paragraph sx={{fontSize: 18}}>
                {description}
            </Typography>
            <CustomTitle>
                Enrolled students:
            </CustomTitle>
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