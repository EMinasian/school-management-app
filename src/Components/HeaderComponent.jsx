import { List, Link } from "@mui/material"

const HeaderComponent = ({items}) => {
    return(
        <List sx={{backgroundColor: '#1E3E62', padding: 1, display: 'flex', gap: 1}}>
            {
                items.map(({ href, label }) => 
                    <Link underline="none" color="white" href={href} sx={{ fontSize: 24, fontWeight: 600, paddingY: 1, paddingX: 3, background: '#FF6500', borderRadius: 2, minWidth: 6}}>
                        {label}
                    </Link>
                )
            }
        </List>
    )
}

export default HeaderComponent