import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <h1>
                About Page
            </h1>
            <button onClick={() => navigate('/')}>HOME</button>
        </div>
    )
}

export default About;