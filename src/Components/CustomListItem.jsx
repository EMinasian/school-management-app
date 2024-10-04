import { ListItemText, ListItem, Container, Link } from "@mui/material"

const CustomListItem = ({ id, label, entity }) => {
    
    if (!label) {
        return null
    }

    return (
        <ListItem key={id}>
            <ListItemText fontSize='' primary={label} sx={{fontSize: 30, color: '#0B192C'}}/>
            <Container sx={{display: 'flex', justifyContent: 'end'}}>
                <Link underline="hover" color="primary" href={`/dashboard/${entity}/${id}`}>More information</Link>
            </Container>

        </ListItem>
    )
}

export default CustomListItem