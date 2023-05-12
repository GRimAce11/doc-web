import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/resrch.css"
import img1 from "../assets/rch1.png"
import img2 from "../assets/pexels-drew-rae-580679.jpg"
const Research = () => {
    return (
        <>
            <center>
                <div className="containerrch">
                    <center>
                        <h2 style={{ color: 'white' }}>Saving Lives Through Technology</h2>
                        <br />
                    </center>
                    <div className="row row-cols-1 row-cols-md-2 g-1">
                        <div className="col-sm-6 mb-3 mb-sm-0" style={{paddingLeft:'50px'}}>
                            <div className="card bg-transparent" style={{width:'600px'}} id="carocard">
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval={2000}>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={img1} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={img2} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                        </div>
                                    </div>
                                    <div className="card-img-overlay bg-transparent">
                                        <p className="card-text bg-transparent" style={{ textAlign: 'left', color: 'white' }}>Cancer Screening AI</p>
                                        <h5 className="card-title bg-transparent" style={{ textAlign: 'left', color: 'white' }}>AI for Cancer detection</h5>
                                        <p className="card-text bg-transparent" style={{ textAlign: 'left', color: 'white' }}>By detecting early-stage cancers, AI enables management that can<br />increase chance of survival</p>
                                        <div className="d-flex flex-row bg-transparent">
                                            <div className="p-2 bg-transparent"><button style={{ border: 'none', backgroundColor: 'transparent', paddingTop: '100px' }}><i className="fa-solid fa-circle-arrow-right fa-2xl" style={{ color: '#ffffff' }} /></button></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0" style={{paddingRight:'50px'}}>
                            <div className="card bg-transparent" style={{width:'600px'}} id="carocard">
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval={2000}>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={img1} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={img2} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                        </div>
                                    </div>
                                    <div className="card-img-overlay bg-transparent">
                                        <p className="card-text bg-transparent" style={{ textAlign: 'left', color: 'white' }}>Cancer Screening AI</p>
                                        <h5 className="card-title bg-transparent" style={{ textAlign: 'left', color: 'white' }}>AI for Cancer detection</h5>
                                        <p className="card-text bg-transparent" style={{ textAlign: 'left', color: 'white' }}>By detecting early-stage cancers, AI enables management that can<br />increase chance of survival</p>
                                        <div className="d-flex flex-row bg-transparent">
                                            <div className="p-2 bg-transparent"><button style={{ border: 'none', backgroundColor: 'transparent', paddingTop: '100px' }}><i className="fa-solid fa-circle-arrow-right fa-2xl" style={{ color: '#ffffff' }} /></button></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Research