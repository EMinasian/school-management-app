import { Typography } from "@mui/material";

const CustomTitle = ({ children, intent }) => {

    if (intent === 'primary') {
        return (
            <Typography variant="h2" color="white" sx={{margin: 4, fontSize: 36, fontWeight: 600}}>
                { children }
            </Typography>
        )
    }
    return (
        <Typography color="white" variant="h3" sx={{margin: 2, fontSize: 24, fontWeight: 500}}>
            { children }
        </Typography>
    )

}

export default CustomTitle