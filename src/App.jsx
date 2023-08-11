// import styled from 
import styled from 'styled-components'
import ProjectCard from './components/ProjectCard';
import AddNewProject from './components/AddNewProject';
import { useState } from 'react';
import Modal from './components/Modal';

const UpperPart = styled.div`
  display: flex;
  flex-wrap: wrap ;
  /* word-break: break; */
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh;
  width:100%;
  /* background-color: tea */
  
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const LowerPart = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

function App() {
  const [addModal,setAddModal] = useState(false);
  let keys=0;
  const [projects,addProjects] = useState([]);
  return (
    <>
    
   {addModal && <Modal setAddModal={setAddModal} addProjects={addProjects} projects={projects}></Modal>}
    <UpperPart>
      <h1>Projects I Gonna Make</h1>
    </UpperPart>
    <LowerPart>
      {projects.map((project,index)=>{keys++; return (<ProjectCard key={keys}>{project}</ProjectCard>)})}
      <AddNewProject setAddModal={setAddModal}></AddNewProject>
      
    </LowerPart>


    </>
  )
}

export default App;
