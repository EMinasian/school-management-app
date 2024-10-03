import { useLoaderData } from "react-router-dom";

const Teacher = () => {
    const teacher = useLoaderData()
    return (<p>{`A teacher: ${teacher}`}</p>)
}

const loader = ({ params }) => {
    return params?.id
}

export default Teacher
export { loader }