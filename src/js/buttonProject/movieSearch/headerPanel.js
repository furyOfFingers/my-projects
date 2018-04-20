import React from 'react';
import ReactDOM from "react-dom";
import {
 Navbar, Nav, NavItem, Breadcrumb,Media
} from 'react-bootstrap';

export default class Header extends React.Component {
  
  render() {
    return (
      <Navbar>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Breadcrumb className="BGNone">
                <Breadcrumb.Item href="#">Search</Breadcrumb.Item>
                <Breadcrumb.Item href="#">My movies</Breadcrumb.Item>
              </Breadcrumb>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem className="textMiddle" href="#">
              John Doe
            </NavItem>
            <NavItem >
              <Media.Right>
                <img className="aloe" width={60} height={60} src="data:image/jpeg;base64,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" alt="thumbnail" />
              </Media.Right>
            </NavItem>
          </Nav>
        </Navbar>
    )
  }
};