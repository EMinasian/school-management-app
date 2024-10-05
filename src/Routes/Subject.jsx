import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import CustomList from "../Components/CustomList";
import { getSubjectById, cancelEnrollment, enrollStudent, updateSubjectInfo } from "../utils/subjects";
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

const StudentsList = ({ students, handleRemove, setOpenModal }) => {

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
            <Button sx={{backgroundColor: '#E2F1E7', padding: 2, margin: 2}} onClick={() => setOpenModal(true)}>Enroll Student</Button>
        </>
    )
}

const SubjectInfoSection = ({ title, description, setEditMode }) => {

    return (
        <>
            <CustomTitle intent='primary'>
                {title}
            </CustomTitle>
            <Typography color="white" paragraph sx={{fontSize: 18}}>
                {description}
            </Typography>
            <Button onClick={() => {setEditMode(true)}} sx={{ fontSize: 16, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6, color: 'white'}}>Edit</Button>
        </>
    )
}

const Subject = () => {
    const subjectSlug = useLoaderData()

    const [subject, setSubject] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const studentIdRef = useRef();
    const titleRef = useRef(null);
    const descriptionRef = useRef('some');
    
    useEffect(() => {
        const fetchTeachers = async () => {
            const subjectData = await getSubjectById(subjectSlug)
            setSubject(subjectData)
            setFormData(prev => ({...prev, title: subjectData.title, description: subjectData?.description}))
        }
        fetchTeachers()
    }, [])

    if (!subject) {
        return null
    }

    const { id: subjectId, title, description, students, teacher } = subject

    const handleStudentRemove = async (studentId) => {
        const newSubjectData = await cancelEnrollment(subjectId, studentId)
        setSubject(newSubjectData)
    }

    const handleSubmitEmrollment = async () => {
        const newSubjectData = await enrollStudent(subjectId, studentIdRef.current.value)
        setOpenModal(false)
        setSubject(newSubjectData)
    }

    const handleSave = async () => {
        const newSubjectData = await updateSubjectInfo(subjectId, formData.title, formData.description)
        setEditMode(false)
        setSubject(newSubjectData)
    } 


    return (
        <>
            {
                editMode ? 
                    <form>
                        <FormGroup sx={{width: 500, height: 300, backgroundColor: '#E2F1E7', borderRadius: 5, display: 'flex', flexDirection: 'column', gap: 4, padding: 5, justifyContent:' center'}}>
                            <TextField
                                name='title'
                                variant="standard"
                                value={formData.title}
                                onChange={(e) => { setFormData(prev => ({ ...prev, title: e.target.value })) }}
                            />
                            <TextField
                                name='description'
                                placeholder={description}
                                variant="standard"
                                value={formData.description}
                                onChange={(e) => { setFormData(prev => ({ ...prev, description: e.target.value })) }}
                            />
                            <Button onClick={handleSave} sx={{ fontSize: 16, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6, color: 'white'}}>Save</Button>
                        </FormGroup>
                    </form> :
                    <SubjectInfoSection title={title} description={description} setEditMode={setEditMode}/>
            }
            <Typography color="white" paragraph sx={{fontSize: 18, fontWeight: 600, marginTop: 10}}>
                {`Teacher: ${teacher.firstname} ${teacher.lastname}`}
            </Typography>
            <StudentsList students={students} handleRemove={handleStudentRemove} setOpenModal={setOpenModal} />
            
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                >
                <form>
                    <FormGroup sx={{width: 500, height: 300, backgroundColor: '#E2F1E7', borderRadius: 5, display: 'flex', flexDirection: 'column', gap: 4, padding: 5, justifyContent:' center'}}>
                        <TextField
                            name='studentId'
                            placeholder="Student's ID (student number)"
                            variant="standard"
                            inputRef={studentIdRef}
                        />
                        <Button onClick={handleSubmitEmrollment} sx={{ fontSize: 20, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6, color: 'white'}}>Submit</Button>
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