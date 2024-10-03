import { useLoaderData } from "react-router-dom";

const Subject = () => {
    const subject = useLoaderData()
    return (<p>{`A subject: ${subject}`}</p>)
}

const loader = ({ params }) => {
    return params?.id
}

export default Subject
export { loader }