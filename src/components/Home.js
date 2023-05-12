import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/style.css"
import "../styles/btnstyle.css"
import bgvid from "../assets/bgvid2.mp4"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div>
                <center>
                    <section className="video-background">
                        <video src={bgvid} autoPlay muted />
                    </section>
                </center>
                <section className="contenthm bg-transparent">
                    <center>
                        <div className="containerhm">
                            <Link to ="/upload" className="button">
                                <div className="button__line" />
                                <div className="button__line" />
                                <span className="button__text">Get Report</span>
                                <div className="button__drow1" />
                                <div className="button__drow2" />
                            </Link>
                        </div>
                    </center>
                </section>
            </div>
        </>
    )
}

export default Home