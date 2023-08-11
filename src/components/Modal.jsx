import { useState } from "react";
import styled from "styled-components";

const OverLay = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #00000083;
    position: fixed;
    z-index: 1000;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Modal = styled.div`
    background-color: white;
    color :black;
    font-size: 32px;
    font-weight: bold;
    max-width: 500px;
    min-width: 400px;
    height: 400px;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    
`
const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: green;
    color:white;
    border-radius: 20px;
    border:none; 
    
    &:hover{
        background-color: #31b331;
    }
`
export default ({setAddModal,addProjects,projects})=>
    {
        const [newProject,setNewProject] = useState(null);
        return (
            <OverLay onClick={()=>setAddModal(false)}>
        <Modal onClick={(e)=>{
            e.stopPropagation();
        }}>
            <div>Add New Project</div>
            <div>
                <input style={{width:"200px",height:"32px",padding:"10px",margin:"10px",fontSize:"24px" }}onChange={(e)=>setNewProject(e.target.value)} value={newProject} onKeyDown={(e)=>{e.key==='Enter' && newProject.length!==0 && addProjects([...projects,newProject]); e.key==='Enter' && setAddModal(false);}}></input>
            </div>
            <Button  onClick={()=>{setAddModal(false); addProjects([...projects,[newProject]]);}}><h2>SAVE</h2></Button>
            
        </Modal>

    </OverLay>
        )
    
    }