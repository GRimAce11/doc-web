// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import "../styles/upload.css"

// class Upload extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         file: null,
//       };
//       this.handleFileChange = this.handleFileChange.bind(this);
//     }
//     handleFileChange(event) {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = () => {
//           const fileData = reader.result;
//           const fileExtension = file.name.split('.').pop().toLowerCase();
//           const validExtensions = ['dcm'];
//           if (validExtensions.indexOf(fileExtension) !== -1) {
//             this.setState({ file: fileData });
//             this.props.onValidFile();
//           } else {
//             alert('Invalid file type!');
//             this.props.onInvalidFile();
//           }
//         };
//         reader.readAsDataURL(file);
//       }
      

// render() {
//     return (
//         <>
//             <div className="card position-absolute top-50 start-50 translate-middle bg-transparent" style={{ border: 'none' }}>
//                 <div className="containerup text-center bg-transparent" style={{ height: '80px' }}>
                   

//                     <input type="file" 
//                     id="upload"     
//                      hidden onChange={this.handleFileChange} />
//                     <label htmlFor="upload" className="file-upload-label" style={{ backgroundColor: 'transparent' }}>
//                         <h2 style={{ color: 'aliceblue' }}>Upload File (.dcm)</h2><i className="fas fa-upload fa-2xl" style={{ color: 'white' }} />
//                     </label>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Upload;