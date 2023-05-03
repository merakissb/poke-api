import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const FilterBar = ({ onSearch })  => {
  const handleChange = (event) => {
    const searchValue = event.target.value;
    onSearch(searchValue);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-around pb-3">
        <Col sm={6}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              size="lg"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
        </Col>
        <Col sm={3}>
          <Form.Select size='lg' aria-label="sort" className="me-2 rounded-pill">
            <option selected disabled>Ordenar</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
}

export default FilterBar;