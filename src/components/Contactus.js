import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/contactus.css"

const Contactus = () => {
    return (
        <>
            <section className="contact">
                <div className="content">
                    <h2>Contact Us</h2>
                    {/* <p>abcddddd</p> */}
                </div>
                <div className="containercon">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="false" />
                            </div>
                            <div className="text" style={{ paddingTop: '20px', color: '#fff' }}>
                                <h3>Address</h3>
                                <p>abcd...</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa-solid fa-phone" aria-hidden="true" /></div>
                            <div className="text" style={{ paddingTop: '20px', color: '#fff' }}>
                                <h3>Phone No</h3>
                                <p>507-475-6094</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-envelope" aria-hidden="true" />
                            </div>
                            <div className="text" style={{ paddingTop: '20px', color: '#fff' }}>
                                <h3>Email</h3>
                                <p>chethanayak0007@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* </div>     */}
                    <div className="contactForm">
                        <form />
                        <h2>Send Message</h2>
                        <div className="inputbox">
                            <input type="text" name required="required" style={{ borderRadius: '10px', color:'black',opacity:'70%',textAlign:'center' }} />
                            <span style={{ color: '#fff' }}>Full Name</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name required="required" style={{ borderRadius: '10px', color:'black',opacity:'70%',textAlign:'center'}} />
                            <span style={{ color: '#fff' }}>Email</span>
                        </div>
                        <div className="inputbox">
                            <textarea required="required" style={{ borderRadius: '10px', height: '100px',color:'black',opacity:'70%',textAlign:'center'}} defaultValue={""} />
                            <span style={{ color: '#fff' }}>Type your Message...</span>
                        </div>
                        <div className="inputbox">
                            <input style={{ borderRadius: '10px' }} type="submit" name defaultValue="Submit" />
                        </div>
                    </div>
                </div><table>
                </table>
            </section>
        </>
    )
}

export default Contactus