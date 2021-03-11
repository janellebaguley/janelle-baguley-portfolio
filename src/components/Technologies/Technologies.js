import css3 from '../../assets/css3.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github-icon-1.svg'
import html5 from '../../assets/html5.svg'
import javascript from '../../assets/logo-javascript.svg'
import node from '../../assets/nodejs-2.svg'
import postgres from '../../assets/postgresql.svg'
import react from '../../assets/react-1.svg'
import slack from '../../assets/slack.svg'
import './Technologies.css'

function Technologies() {
        return(
            <div>
                <section className='technologies-container'>
                    <img src={css3} alt='CSS3'/>
                    <img src={git} alt='Git'/>
                    <img src={github} alt='Github'/>
                    <img src={html5} alt='HTML5'/>
                    <img src={javascript} alt='JavaScript'/>
                    <img src={node} alt='Nodejs'/>
                    <img src={postgres} alt='PostgreSQL'/>
                    <img src={react} alt='React'/>
                    <img src={slack} alt='Slack'/>
                </section>
            </div>
        )
}
export default Technologies