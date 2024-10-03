import { ListItemText } from "@mui/material"

const TeacherListItem = ({ teacher }) => {
    
    if (!teacher) {
        return null
    }

    const { firstname, lastname } = teacher

    return (
        <ListItemText fontSize='' primary={`${firstname} ${lastname}`} sx={{fontSize: 30, color: '#0B192C'}}/>
    )
}

export default TeacherListItem