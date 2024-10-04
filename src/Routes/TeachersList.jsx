import { useEffect, useState } from "react";
import CustomList from "../Components/CustomList"
import CustomListItem from "../Components/CustomListItem";
import CustomTitle from "../Components/CustumTitle";
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
        <>
            <CustomTitle>
                Oversall List of Teachers
            </CustomTitle>
            <CustomList>
                {
                    teachers.map(teacher => 
                        <CustomListItem id={teacher.id} label={`${teacher.firstname} ${teacher.lastname}`} entity='teachers'/>
                    )
                }
            </CustomList>
        </>
    )
}

export default TeachersList