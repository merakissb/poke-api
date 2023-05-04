import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Dictionary from '../utils/dictionary/es';

const FilterBar = ({ onSearch, onSort })  => {
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    onSearch(searchValue);
  };

  const handleSort = (event) => {
    const sortValue = event.target.value;
    onSort(sortValue);
  };

  return (
    <Row className='justify-content-around my-4'>
      <Col md={6}>
        <Form>
          <Form.Control
            type='search'
            size='lg'
            placeholder={Dictionary.filterBar.searchPlaceholder}
            className='me-2 rounded-pill my-2'
            aria-label='Search'
            onChange={handleSearch}
          />
        </Form>
      </Col>
      <Col md={4}>
        <Form.Select
          size='lg'
          aria-label='sort'
          className='me-2 rounded-pill my-2'
          onChange={handleSort}
        >
          <option selected disabled>{Dictionary.filterBar.sortPlaceholder}</option>
          <option value='asc'>{Dictionary.filterBar.option.asc}</option>
          <option value='desc'>{Dictionary.filterBar.option.desc}</option>
        </Form.Select>
      </Col>
    </Row>
  );
}

export default FilterBar;