import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProject,deleteProject } from '../actions/projectActions';
import ProjectModal from '../components/ProjectModal';
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import ProjectModalUpdate from '../components/ProjectModalUpdate';
import './AdminDashboard.css'

const AdminDashboard = () => {
const dispatch = useDispatch();
const {projectList, loading}= useSelector((state) => state.project)
useEffect(() =>{
    dispatch(getProject())
}, [dispatch])
const handleDeleteProject = (projectId) => {
  dispatch(deleteProject(projectId))
}
  return (
    <div>
         <ProjectModal/>
        {loading && <p>Loading...</p>}
        {projectList.map(el =>(
            <>
            <h4>{el.Title}</h4>
            <h6>{el.desc}</h6>
            <img src={el.image} alt="project img" width="360" />
            <div className="d-flex justify-content-between">
          <button className='btn btn-primary'><ProjectModalUpdate project={el}/></button>
          <button className='btn btn-danger'width='20px' onClick={()=>handleDeleteProject(el._id)}>Supprimer</button>
          
          </div> 
            </>
           
            
      ))
}
</div>      
)}
    
        /* {loading && <p>Loading...</p>}
      {projectList.map(el =>(
           <>
           <div className='containerproject'>
             <div className='image'>
      <img src={el.image} alt="project img" width="360" />
      </div>
      <div class='popup-image'>
          <span>
            &times;
          </span>
          <img src={el.image} alt="project img" width="360" />
      </div>
          {el.Title}
          {el.desc}
          <div className="d-flex justify-content-between">
          <button className='btn btn-primary'><ProjectModalUpdate project={el}/></button>
          <button className='btn btn-danger'width='20px' onClick={()=>handleDeleteProject(el._id)}>Supprimer</button>
          
          </div>
        
        </div>
             
        </>
   
          ))}
     
 */


     /* <ProjectModal/>
        {loading && <p>Loading...</p>}
        {projectList.map(el =>(
            <>
            <h4>{el.Title}</h4>
            <h6>{el.desc}</h6>
            <img src={el.image} alt="project img" width="360" />
            <button onClick={()=>handleDeleteProject(el._id)}>Delete</button>
            <ProjectModalUpdate project={el}/>
            </>
            
        ))} */
        
    
    
  

export default AdminDashboard