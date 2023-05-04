import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getPokemons } from './services/pokeService';
import PokeCard from './PokeCard';
import FilterBar from './FilterBar';
import Alert from '../alert/Alert'
import Dictionary from '../utils/dictionary/es';

const PokeContainer = () => {

  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const fetchPokemons = async () => {
    try {
      const response = await getPokemons();
      setPokemons(response);
      setShowAlert(false);
    } catch (error) {
      setShowAlert(true);
    }
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleSort = (sortType) => {
    setSortType(sortType);
  };

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons();
    }
  }, [pokemons]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedPokemons = [...filteredPokemons];

  if (sortType === 'asc') {
    sortedPokemons.sort();
  } else if (sortType === 'desc') {
    sortedPokemons.reverse();
  }

  return (
    <Container className='mt-2'>
      <FilterBar onSearch={handleSearch} onSort={handleSort} />
      {showAlert && (
        <Alert
          variant='warning'
          message={Dictionary.alert.warning.message}
        />
      )}
      <Row>
        {sortedPokemons.map((pokemon) => (
          <Col key={pokemon.id} md={2}>
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokeContainer;
