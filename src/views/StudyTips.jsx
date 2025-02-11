import planner from '../assets/planner.png';
import flashcards from '../assets/flashcards.png';
import study from '../assets/study.png';

export default function StudyTips() {
    return (
        <>
        <div className='top'>
            <h1>Study Tips</h1>
            <h3>Learn the most useful study tips recommended by previous students!</h3>
        </div>
        <div className='allTips'>
        <div className="tipsSection">
            <h2>Time Management</h2>
            <p><b>1. Prioritize Tasks:</b> Use a planner or digital app (like Notion or Google Calendar) to schedule your study sessions, deadlines, and breaks.</p>
            <p><b>2. The Pomodoro Technique: </b>Study for 25 minutes, then take a 5-minute break to stay focused.</p>
            <p><b>3. Avoid Multitasking </b>Focus on one task at a time to improve efficiency.</p>
            <img src={planner} />
        </div>
        <div className='tipsSection'>
            <h2>Effective Study Methods</h2>
            <p><b>1. Active Recall: </b>Instead of just reading, test yourself on what you’ve learned.</p>
            <p><b>2. The Feynman Technique: </b>Teach concepts in simple terms as if explaining to a 5-year-old.</p>
            <p><b>3. Mind Mapping: </b>Create visual diagrams to understand complex topics.</p>
            <p><b>4. Study Groups: </b>Discussing with peers helps reinforce knowledge.</p>
            <img src={flashcards} />
        </div>
        <div className='tipsSection'>
            <h2>Exam Prep</h2>
            <p><b>1. Start Early: </b>Don’t cram! Spread your study sessions over weeks.</p>
            <p><b>2. Practice Past Papers: </b>Get familiar with the exam format and question styles.</p>
            <p><b>3. Take Care of Yourself: </b>Sleep well, eat healthy, and stay hydrated for better focus.</p>
            <p><b>4. Simulate Exam Conditions: </b>Practice under timed conditions to reduce stress on the actual day.</p>
            <img src={study} />
        </div>
        </div>
        </>
    )
}