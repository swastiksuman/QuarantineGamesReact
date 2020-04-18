import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import WhackAMole from './Games/WhackAMole/WhackAMole';

const HomeTabs = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    
  </Tab>
  <Tab eventKey="profile" title="Whack A Mole">
   <WhackAMole></WhackAMole>
  </Tab>
  <Tab eventKey="contact" title="Coming Soon" disabled>

  </Tab>
</Tabs>
    )
}

export default HomeTabs;