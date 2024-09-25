import React from 'react';
import './Services.css';
import Ribbon from '../components/MovingRibbon';
import Reviews from '../components/review';


const Services = () => {
    return (
        <div className="serv-main">
            <div className="serv-header">
                <h1>OUR SERVICES</h1>
                <p>We provide Our Expertise To International Education</p>
            </div>
            <div className="serv-container">
                <div className="serv-box yellow-box">
                    <h2>CAREER COUNSELLING</h2>
                    <p>
                        Most students come to us confused, with a plethora of doubts and questions when choosing a career path. That is why we have a dedicated panel of expert coaches with over 12+ years of experience guiding students. In our long and systematic career counseling sessions, we assess your academic prowess and interests and brief you on various possible career pathways.
                    </p>
                    <button>EXPLORE</button>
                </div>
                <div className="serv-box purple-box">
                    <h2>SCHOLARSHIP GUIDANCE</h2>
                    <p>
                    No doubt studying abroad costs a lot. Sadly there are no alternatives to money. But the good news is if you have a high enough score, we can probably find you a scholarship. We ensure that all our students find good scholarship programs, so they don’t have a massive debt at the end of their degree but focus on your studies, and enjoy your life abroad. Don’t let your financial situation hold you back from your dreams.
                    </p>
                    <button>EXPLORE</button>
                </div>
                <div className="serv-box pink-box">
                    <h2>VISA GUIDANCE</h2>
                    <p>
                    Visa denial is, without doubt, the greatest fear of anyone dreaming of studying or working abroad. There are many reasons your visa may be denied. But with proper guidance, you can kiss those fears goodbye. Because – We are here to help!. Our students have an excellent record of visa clearance irrespective of the destination country. We can help you with visa interviews and provide guidance in order to make the process as easy and fast as possible.
                    </p>
                    <button>EXPLORE</button>
                </div>
                <div className="serv-box light-pink-box">
                    <h2>ADMISSION & APPLICATION, SOP</h2>
                    <p>
                    S’Chambers is the perfect place for seeking guidance on all things related to studying abroad. Our panel of experienced counsellors can help you choose the right university, plan your career pathway, and provide advice on admissions and applications. We can also help you get a great letter of recommendation and write a captivating statement of purpose. We will hold your hands in every step, from helping you clear entrance exams such as IELTS, TOFEL, etc., to choosing the university and job you desire to ensure you have a fulfilling life.
                    </p>
                    <button>EXPLORE</button>
                </div>
            </div>
            <div className='ribbon'>
                <Ribbon/>
            </div>
            <div className='rewi'>
                <Reviews/>
            </div>
        </div>
    );
};

export default Services;
