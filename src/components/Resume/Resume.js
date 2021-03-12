import {Link} from 'react-router-dom'
import resume_1 from '../../assets/resume_page1.jpeg'
import resume_2 from '../../assets/resume_page2.jpeg'
import './Resume.css'



function Resume(){
    return(
        <div className='resume'>      
            <Link to = 'https://docs.google.com/document/d/18x61qBYH9O8MHvFc8j6-9KbYQnqixP4TIik57MFT5vc/edit'>Resume</Link>
            <div className='container-resume'>
           <img src={resume_1} alt='resume'/>
           <img src={resume_2} alt='resume'/>
           </div>  
        </div>
    )
}
export default Resume