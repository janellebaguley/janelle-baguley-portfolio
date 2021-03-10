import blush from '../assets/blush.jpeg'
import calendar from '../assets/calendar.jpeg'

function Projects() {
        return(
            <div>
                <section>
                    <h2>Projects</h2>
                    <section>
                        <img src={blush} alt='wirefram for blush'/>
                    <h5>My first fullstack project was created on behalf of my sister-
                    in-law, who is working on going in to business for herself
                    as a boutique furniture and design shop owner. This project
                    is called Blush Restoration and Design. I learned how to use
                    nodemailer, specifically for the purpose of her being able to 
                    receive emails from clients requesting quotes and scheduling
                    for the Christmas Tree decoration portion of her business. 
                    You can view the github here, as the project is not yet finished.</h5>
                    </section>
                    <section>
                        <img src={calendar} alt='calendar'/>
                    <h5>My second fullstack project was working in a group 
                    environment while attending Devmountain. We learned how
                    to work as a group and push and pull our updates in to github.
                    This project is called Band Social and the premise of the site 
                    is to allow different musical groups to connect, find new 
                    musical group members and also display their events. The piece
                    I was incharge of was creating a calendar for the events 
                    and wireframes for both the calendar/events page and the
                    group page. You can view the github here, as the project is not yet finished.</h5>
                    </section>
                </section>
            </div>
        )
}
export default Projects