import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton } from 'components';
import AppointmentViewer from '../../components/AppointmentViewer/AppointmentViewer';
import PractitionerAvatar from '../../components/AppointmentViewer/PractitionerComponents/PractitionerAvatar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Sticky from "react-sticky";
import SimpleMapPage from '../../components/Map/SimpleMapPage'

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('../../../static/cclogo_big.png');
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
          </div>
          <div style={{width:"42%", backgroundColor:"#B2EBF2"}}>
           <div style={{width:"100%", padding:"10px", float:"center"}}>
              <AppointmentViewer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default class Home extends Component {
//   render() {
//     const styles = require('./Home.scss');
//     // require the logo image both from client and server
//     const logoImage = require('../../../static/cclogo_big.png');
//     return (
//       <div>
//         <div>
//           <div>
//             <div className={styles.logo}>
//               <p>
//                 <img src={logoImage}/>
//               </p>
//             </div>
//             <div style = {{
//               position: "absolute",
//               right:"0px",
//               top: "60px",
//               width: "100%",
//               height: "40px",
//               zIndex: "2",
//               background:"white"}}>
//                 <SearchBar/>
//             </div>
//             <div style={{backgroundColor:"#0097A7", width:"40%"}}>
//               <AppointmentViewer />
//             </div>
//             <div id="map" style={{width:"60%"}}>
//               <SimpleMapPage/>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }