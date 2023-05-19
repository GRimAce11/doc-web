import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/upload.css"

const Upload = () => {
    return (
        <>
            <div className="card position-absolute top-50 start-50 translate-middle bg-transparent" style={{ border: 'none' }}>
                <div className="containerup text-center bg-transparent" style={{ height: '80px' }}>


                    <input type="file"
                        id="upload" accept='.dcm'
                        hidden />
                    <label htmlFor="upload" className="file-upload-label" style={{ backgroundColor: 'transparent' }}>
                        <h2 style={{ color: 'aliceblue' }}>Upload File (.dcm)</h2><i className="fas fa-upload fa-2xl" style={{ color: 'white' }} />
                    </label>
                </div>
            </div>

        </>
    )
}

export default Upload