
import resume_1 from '../../assets/resume_page1.jpeg'
import resume_2 from '../../assets/resume_page2.jpeg'
import './Resume.css'



function Resume(){
    return(
        <div className='resume'>      
            
            <div className='container-resume'>
           <img src={resume_1} alt='resume'/>
           <img src={resume_2} alt='resume'/>
           </div>  
        </div>
    )
}
export default Resume