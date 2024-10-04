import { useEffect, useState } from "react";
import CustomList from "../Components/CustomList"
import CustomListItem from "../Components/CustomListItem";
import CustomTitle from "../Components/CustumTitle";
import { getSubjectTitles } from "../utils/subjects";

const SubjectsList = () => {

    const [subjects, setSubjects] = useState([])
    
    useEffect(() => {
        const fetchTeachers = async () => {
            const subjectsData = await getSubjectTitles()
            setSubjects(subjectsData)
        }
        fetchTeachers()
    }, [])

    return (
        <>
            <CustomTitle>
                Oversall List of Subjects
            </CustomTitle>
            <CustomList>
                {
                    subjects.map(sujbect => 
                        <CustomListItem id={sujbect.id} label={sujbect.title} entity='subjects'/>
                    )
                }
            </CustomList>
        </>
    )
}

export default SubjectsList