import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const IconContainer = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center; justify-content: center;
    &:hover{background-color:white};
`
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
`
const Upper = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:7;
    /* background-color: white; */
    width: 100%;
`
const Lower = styled.div`
padding:10px;
direction: rtl;
color:black;
    flex:1;
    background-color: pink;
    width: 100%;
    display: flex;
    align-items: center;
`
const Card = (props)=>{
    return (<ProjectCard>
        <Upper><h2>{props.children}</h2></Upper>
        <Lower> <IconContainer><EditIcon/></IconContainer> <IconContainer><DeleteIcon/></IconContainer></Lower>
    </ProjectCard>)
}

export default Card;