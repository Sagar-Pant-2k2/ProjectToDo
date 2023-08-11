import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Modal from "./Modal";
const ProjectCard = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:300px;
margin:10px;
background-color: black;
color:white;
height: 300px;
border-radius: 20px;
overflow: hidden;
&:hover{background-color: #4f4c4c};
`

export default ({setAddModal})=>{
    const [hover,setHover] = useState(false);
    const IconStyle = {
        "font-size" : "100px",
        "color" : hover ? 'black' :'white'
    }
    return (
    <ProjectCard>
        <AddIcon onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={IconStyle} onClick = {()=>{setAddModal(true)}}/>
    </ProjectCard>)
};