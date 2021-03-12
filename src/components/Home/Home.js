import aspen from '../../assets/aspen_colorado.jpg'
import turtle from '../../assets/turtle.jpg'
import './Home.css'

function Home(){
        return(
            <div>
                <div className='container-home' >
               
                    <img className='img' src={turtle} alt='turtle' />
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