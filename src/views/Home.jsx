import studentLife from '../assets/studentlife.png';

export default function Home() {
    return (
        <>
        <h1>Student Life Hub</h1>
        <h3 style={{marginBottom: "50px"}}>Welcome to the website every student needs!</h3>
        <img src={studentLife} alt="Student Reading" style={{marginBottom: "30px"}}/>
        <p>On our website you can find Study Tips, Campus Events and many more!</p>
        </>
    )
}