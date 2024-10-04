import { useEffect, useState } from "react";
import CustomList from "../Components/CustomList"
import CustomListItem from "../Components/CustomListItem";
import { getSubjects } from "../utils/subjects";

const SubjectsList = () => {

    const [subjects, setSubjects] = useState([])
    
    useEffect(() => {
        const fetchTeachers = async () => {
            const subjectsData = await getSubjects()
            setSubjects(subjectsData)
        }
        fetchTeachers()
    }, [])

    return (
        <CustomList>
            {
                subjects.map(sujbect => 
                    <CustomListItem id={sujbect.id} label={sujbect.title} />
                )
            }
        </CustomList>

    )
}

export default SubjectsList