import { Link,useNavigate } from "react-router-dom"

export const Nav = () =>{
    const navigate = useNavigate();
    return (
    <div>
        <Link to="/" >Home</Link>  |   
        <button onClick={()=>navigate("/about")}>About</button> | 
        <Link to="/contact">Contact</Link>
    </div>);
}