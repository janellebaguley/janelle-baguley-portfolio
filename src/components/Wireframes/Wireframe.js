import blush_wf from '../../assets/blush_wf.jpeg'
import calendar_wf from '../../assets/calendar_wf.jpeg'
import checkout_wf from '../../assets/checkout_wf.jpeg'
import designs_wf from '../../assets/designs_wf.jpeg'
import event_wf from '../../assets/event_wf.jpeg'
import furniture_wf from '../../assets/furniture_wf.jpeg'
import group_wf from '../../assets/group_wf.jpeg'
import portfolio_wf from '../../assets/portfolio_wf.jpeg'
import './Wireframe.css'

function Wireframes() {
        return(
            <div>
                <section className='wireframe-container'>
                    <img src={blush_wf} alt='blush wireframe'/>
                    <img src={furniture_wf} alt='furniture'/>
                    <img src={designs_wf} alt='designs'/>
                    <img src={checkout_wf} alt='checkout'/>
                    <img src={event_wf} alt='event'/>
                    <img src={calendar_wf} alt='calendar'/>
                    <img src={group_wf} alt='group'/>
                    <div className='portfolio'>
                    <img src={portfolio_wf} alt='portfolio'/></div>
                </section>
            </div>
        )
}
export default Wireframes