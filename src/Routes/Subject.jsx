import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CustomList from "../Components/CustomList";
import { getSubjectById, cancelEnrollment } from "../utils/subjects";
import CustomTitle from "../Components/CustomTitle";
import { ListItemText, ListItem, Typography, Button } from "@mui/material"


const StudentListItem = ({ id, firstname, lastname, handleRemove }) => {
    if (!firstname || !lastname || !id) {
        return null
    }

    return (
        <ListItem key={id}>
            <ListItemText fontSize='' primary={`${firstname} ${lastname}`} sx={{fontSize: 30, color: '#0B192C'}}/>
            <Button onClick={(e) => { handleRemove(id)} }>Remove</Button>
        </ListItem>
    )
}

const StudentsList = ({ students, handleRemove }) => {

    return (
        <>
            <CustomTitle>
                Enrolled students:
            </CustomTitle>
            <CustomList>
                {
                    students?.map(student => {
                        const { id: studentId, firstname, lastname } = student
                        return <StudentListItem id={studentId} firstname={firstname} lastname={lastname} handleRemove={handleRemove}/>
                    })
                }
            </CustomList>
        </>
    )
}

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

    const { id: subjectId, title, description, students } = subject

    const handleStudentRemove = async (studentId) => {
        const newSubjectData = await cancelEnrollment(subjectId, studentId)
        setSubject(newSubjectData)
    }


    return (
        <>
            <CustomTitle intent='primary'>
                {title}
            </CustomTitle>
            <Typography color="white" paragraph sx={{fontSize: 18}}>
                {description}
            </Typography>
            <StudentsList students={students} handleRemove={handleStudentRemove} />
        </>
    )
}

const loader = ({ params }) => {
    return params?.id
}

export default Subject
export { loader }