import React from "react";
import { Navbar, Nav, FormControl, Button, InputGroup, } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSearch } from "@fortawesome/free-solid-svg-icons";
import youtube from "./youtube.png"

function Navigate(){
    return  (
        <div>
<Navbar bg="light" expand="lg">
<Nav className="mr-auto">
<Navbar.Brand href="#home"><FontAwesomeIcon icon={faBars}/></Navbar.Brand>
<img src={youtube} height="33" width="120" alt="text here" />
</Nav>
<InputGroup className="mr-sm-2">
    <FormControl
      placeholder="Search"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch}/></Button>
    </InputGroup.Append>
  </InputGroup>
</Navbar>
            </div>
    )
 }

export default Navigate;