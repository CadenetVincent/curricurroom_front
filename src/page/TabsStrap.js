import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import FTable from './FTable';
import FText from './FText';

const TabsStrap = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <div className="custom_header_tabs">
            Size info
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <div className="custom_header_tabs">
            Image
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <div className="custom_header_tabs">
            Graph
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            <div className="custom_header_tabs">
            Text
            </div>
          </NavLink>
        </NavItem>

      </Nav>

      <TabContent activeTab={activeTab}>

        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {props.info_size}
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          {props.generate_img(props.actual_image)}
        </TabPane>

        <TabPane tabId="3">
          <FTable submit_graph={props.submit_graph}/>
        </TabPane>

        <TabPane tabId="4">
          <FText submit_text={props.submit_text}/>
        </TabPane>

      </TabContent>
    </div>
  );
}

export default TabsStrap;