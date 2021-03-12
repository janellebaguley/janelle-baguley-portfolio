import aspen from '../../assets/aspen_colorado.jpg'
import './Home.css'

function Home(){
        return(
            <div>
                <div className='container-home' >
               
                    <img className='img' src={aspen} alt='Aspen Colorado Mountain in the fall. by: janelle baguley' height='100%' width = '100%'/>
                    <div className='title'>
                    Janelle Baguley
                    <section>
                    Designer, Artist and Full-stack Web Developer
                    </section>
                    </div>
                </div>
            </div>
        )
 }
export default Home