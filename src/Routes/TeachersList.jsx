import { useLoaderData } from "react-router-dom";
import CustomList from "../Components/CustomList"
import teachers from "../mockData/teachers.json"
import { ListItem } from "@mui/material"
import TeacherListItem from "../Components/TeacherListItem"

const TeachersList = () => {
    const teachers = useLoaderData()
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

const loader = () => {
    return teachers
}

export default TeachersList
export { loader }