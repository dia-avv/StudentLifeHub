import openmic from '../assets/openmic.png';
import career from '../assets/career.png';
import basketball from '../assets/basketball.png';

const events = [
    {
        name: "Open Mic Night", 
        date: "February 20, 2025", 
        time: "7:00 PM - 10:00 PM",
        location: "Student Lounge", 
        description: "Show off your talent! Sing, recite poetry, or perform stand-up comedy in a fun, relaxed environment.",
        image: openmic
    },
    {
        name: "Career Fair 2025",
        date: "March 5, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Univeristy Hall",
        description: "Meet top employers, submit your resume, and explore internship and job opportunities.",
        image: career
    },
    {
        name: "Basketball Championship Finals",
        date: "March 12, 2025",
        time: "6:00 PM - 9:00 PM",
        location: "Campus Gymnasium",
        description: "Cheer for your team as they battle for the championship title in an intense final match!",
        image: basketball
    }
]

export default function CampusEvents() {
    return (
        <>
        <div className="top">
            <h1>Upcoming Events on Campus</h1>
            <h3>Stay updated with the latest events happening at our university!</h3>
        </div>
            <div className="eventsContainer">
                {events.map((event, index) => (
                    <div className="event" key={index}>
                        <div className='textContainer'>
                            <h2 className='eventTitle'>{event.name}</h2>
                            <h4><b>Date: </b>{event.date}</h4>
                            <h4><b>Time: </b>{event.time}</h4>
                            <h4><b>Location: </b>{event.location}</h4>
                            <p>{event.description}</p>
                        </div>
                        <img src={event.image} alt={event.name} style={{width: "200px", height: "250px", objectFit: "cover"}}/>
                    </div>
                ))}
            </div>
        </>
    )
}