import { ListItemText, ListItem } from "@mui/material"

const CustomListItem = ({ id, label }) => {
    
    if (!label) {
        return null
    }

    return (
        <ListItem key={id}>
            <ListItemText fontSize='' primary={label} sx={{fontSize: 30, color: '#0B192C'}}/>
        </ListItem>
    )
}

export default CustomListItem