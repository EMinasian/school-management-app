import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CustomList from "../Components/CustomList";
import { getSubjectById, cancelEnrollment } from "../utils/subjects";
import CustomTitle from "../Components/CustomTitle";
import { ListItemText, ListItem, Typography, Button, Modal, FormGroup, TextField } from "@mui/material"


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
    const [openModal, setOpenModal] = useState(false)
    
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
            <Button sx={{backgroundColor: '#E2F1E7', padding: 2, margin: 2}} onClick={() => setOpenModal(true)}>Enroll Student</Button>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                >
                <form>
                    <FormGroup sx={{width: 500, height: 300, backgroundColor: '#E2F1E7', borderRadius: 5, display: 'flex', flexDirection: 'column', gap: 4, padding: 5, justifyContent:' center'}}>
                        <TextField
                            namme='studentId'
                            placeholder="Student's ID (student number)"
                            variant="standard"
                            onChange={null}
                        />
                        <TextField
                            namme='subjectId'
                            placeholder="Subject's code"
                            variant="standard"
                            onChange={null}
                        />
                        <Button onClick={null} sx={{ fontSize: 20, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6, color: 'white'}}>Submit</Button>
                    </FormGroup>
                </form>
            </Modal>
        </>
    )
}

const loader = ({ params }) => {
    return params?.id
}

export default Subject
export { loader }