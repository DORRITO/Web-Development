import React from 'react'
// import {Container, Dropdown, Header, Image, Menu} from 'semantic-ui-react'

// import profileImage from './../images/profileimage.jpg';
import Services from './Services';

const servNamesArr = ['Ceremony Photos', 'Group Photos Pictures', 'Select Printed Proofs', 'Reception Pictures', 'Hardbound Photo Book', 'Digital Proofs of all Photos', 'Second Photographer'];
const silvArr = [true, true, true, false, false, false, false, '$1200'];
const goldArr = [true, true, true, true, true, false, false, '$2000'];
const platArr = [true, true, true, true, true, true, true, '$2500'];

const Weddings = () => (
    <div>
    <h1>CHIGGA BOOM weddings</h1>
        <Services serviceNames={servNamesArr} silver={silvArr} gold={goldArr} plat={goldArr}/>
    </div>
)

export default Weddings;