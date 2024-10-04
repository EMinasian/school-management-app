import { Typography } from "@mui/material";

const CustomTitle = ({ children }) => {
    return (
        <Typography variant="h2" color="white">
            { children }
        </Typography>
    )
}

export default CustomTitle