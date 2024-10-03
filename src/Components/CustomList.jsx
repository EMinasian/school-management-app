import { List } from "@mui/material"

const CustomList = ({ children }) => {

    return (
        <List sx={{backgroundColor: '#FFF5CD', width: '75%', borderRadius: '10px'}}>
            { children }
        </List>
    )
}

export default CustomList