import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/news.css"
import img1 from "../assets/rch1.png"
import img2 from "../assets/hi.png"
const News = () => {
    return (
        <>
            <center>
                <div className="containernws text-center">
                    <h2 style={{ color: 'white' }}> News </h2>
                    <br />
                    <div className="row row-cols-2 row-cols-lg-3 g-4 g-lg-3 bg-transparent">
                        <div className="col bg-transparent">
                            <div className="p-3 card bg-transparent" style={{ border: 'none' }}>
                                <div className="card bg-transparent" style={{ border: 'none' }}>
                                    <img src={img1} height="250px" width="200px" style={{ borderRadius: '20px' }} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'left', color: 'white' }}>Lunit Meets MDR CE Standards for 3D Breast Tomosynthesis AI Solution</h5>
                                    <p className="card-text fw-lighter" style={{ textAlign: 'left' }}>Mar 20, 2023&nbsp;-&nbsp;2 min read</p>
                                </div>
                            </div>
                        </div>
                        <div className="col bg-transparent">
                            <div className="p-3 card bg-transparent" style={{ border: 'none' }}>
                                <div className="card bg-transparent" style={{ border: 'none' }}>
                                    <img src={img2} height="250px" width="200px" style={{ borderRadius: '20px' }} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'left', color: 'white' }}>Lunit to present 5 Abstracts at the 2023 AACR Annual Meeting</h5>
                                    <p className="card-text fw-lighter" style={{ textAlign: 'left' }}>Mar 15, 2023&nbsp;-&nbsp;3 min read</p>
                                </div>
                            </div>
                        </div>
                        <div className="col bg-transparent">
                            <div className="p-3 card bg-transparent" style={{ border: 'none' }}>
                                <div className="card bg-transparent" style={{ border: 'none' }}>
                                    <img src={img1} height="250px" width="200px" style={{ borderRadius: '20px' }} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'left', color: 'white' }}>Lunit and Agfa Announce Lunit INSIGHT CXR's Integration in Agfa's MUSICA® Workstation;<br />Demonstration and Presentation to<br />be Showcased at ECR2023</h5>
                                    <p className="card-text fw-lighter" style={{ textAlign: 'left' }}>Feb 27, 2023&nbsp;-&nbsp;5 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></center>
        </>
    )
}

export default News