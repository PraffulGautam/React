import React from 'react'
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { ListGroupItem, ListGroup, Col, Row, InputGroup, FormControl } from "react-bootstrap";

export const AddressBook = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const addresses = [
        {
            id: 1,
            addressName: 'Polna 1, Wrocław'
        },
        {
            id: 2,
            addressName: 'Wrocławska 2, Warszawa'
        }
    ];

    const navLinks = addresses
        .filter(address => {
            const filter = searchParams.get('filter');
            if (!filter) return true;

            let name = address.addressName.toLowerCase();

            return name.startsWith(filter.toLowerCase());
        })
        .map(address => {
            return <ListGroupItem key={address.id}>
                <NavLink to={`/address/${address.id}`} key={address.id}>{address.addressName}</NavLink>
            </ListGroupItem>
    });

    const shouldDisplayNav = navLinks && navLinks.length ? <ListGroup>{navLinks}</ListGroup> : <p>There are no addresses.</p>;

    return addresses ? <Row>
        <Col sm="12">
            <nav>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="address-search">Search for an address</InputGroup.Text>
                    <FormControl aria-label="Search for an address"
                                 aria-describedby="address-search"
                                 value={searchParams.get("filter") || ""}
                                 onChange={event => {
                                     const filter = event.target.value;
                                     if (filter) {
                                         setSearchParams({ filter });
                                     } else {
                                         setSearchParams({});
                                     }
                                 }} />
                </InputGroup>
            </nav>
        </Col>
        <Col sm="3">
            {shouldDisplayNav}
        </Col>
        <Col sm="9">
            <Outlet/>
        </Col>
    </Row> : <Row>
        <p>There are no addresses.</p>
    </Row>
}

export default AddressBook;