import {Link} from 'react-router-dom'

function About () {
        return(
            <div>
                <section>
                    <h2>About</h2>
                    <h5>I am first and foremost a designer and artist.
                        I’ve attended school first at SLCC (Salt Lake
                        Community College) in the fashion design 
                        department and then when the program no 
                        longer had classes to create a degree I 
                        switched to illustration design. While in school
                        I decided that my time would be better spent 
                        in Fine Arts and transferred to Westminster 
                        College where I completed my schooling and
                        Bachelor’s degree in fine arts. After working in
                        the corporate world as customer service I 
                        decided I want to yet again expand upon my
                        design knowledge and took a certification course
                        for UX Design, which was completed in 2016. 
                        I was hired by Salesforce shortly after completion of 
                        this course as a Customer support engineer. I 
                        learned how to use SQL, Linux and to trouble shoot
                        Retail point of sale and management systesm. 
                        When I found out in August of 2020 that my 
                        teammates and I would be laid off I decided it
                        was time to switch fields again and went back 
                        to school to learn Web development. You can view 
                        my resume <Link to='/resume'>here.</Link></h5>
                </section>
            </div>
        )
}
export default About