import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getPokemons } from './services/pokeService';
import PokeCard from './PokeCard';
import FilterBar from './FilterBar';

const PokeContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');


  const fetchPokemons = async () => {
    const pokemons = await getPokemons();
    setPokemons(pokemons);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleSort = (sortType) => {
    setSortType(sortType);
  };

  if (pokemons.length === 0) {
    fetchPokemons();
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedPokemons = [...filteredPokemons];

  if (sortType === "asc") {
    sortedPokemons.sort();
  } else if (sortType === "desc") {
    sortedPokemons.reverse();
  }

  return (
    <Container>
      <FilterBar onSearch={handleSearch} onSort={handleSort} />
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
