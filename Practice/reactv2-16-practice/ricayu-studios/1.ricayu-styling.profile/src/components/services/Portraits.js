import React from 'react'
// import {Container, Dropdown, Header, Image, Menu} from 'semantic-ui-react'

// import profileImage from './../images/profileimage.jpg';
import Services from './Services';

const servNamesArr = ['Studio Photo Shoot', 'Select Printed Proofs', 'On Location Shoot', 'Second Location', 'Digital Proofs of all Photos', 'Hardbound Photo Book', 'Outfit Changes (Silver: 1, Gold: 2, Plat: 3)'];
const silvArr = [true, true, false, false, false, false, true, '$175'];
const goldArr = [true, true, true, false, false, false, true, '$275'];
const platArr = [true, true, true, true, true, true, true, '$500'];

const Portraits = () => (
    <div>
        <h1>CHIGGA BOOM contact</h1>
        <Services serviceNames={servNamesArr} silver={silvArr} gold={goldArr} plat={platArr} title='Portraits/Senior Pictures:' subTitle="Additional fees for travel outside of Yuma not included"/>
    </div>
)

export default Portraits;