import { useEffect, useState } from "react";
import CustomList from "../Components/CustomList"
import { ListItem } from "@mui/material"
import TeacherListItem from "../Components/TeacherListItem"
import { getTeachers } from "../utils/teachers";

const TeachersList = () => {

    const [teachers, setTeachers] = useState([])
    
    useEffect(() => {
        const fetchTeachers = async () => {
            const teachersData = await getTeachers()
            setTeachers(teachersData)
        }
        fetchTeachers()
    }, [])

    return (
        <CustomList>
            {
                teachers.map(teacher => 
                    <ListItem key={teacher.id}>
                        <TeacherListItem teacher={teacher} />
                    </ListItem>
                )
            }
        </CustomList>
    )
}

export default TeachersList