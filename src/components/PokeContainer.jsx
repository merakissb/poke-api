import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getPokemons } from './services/pokeService';
import PokeCard from './PokeCard';
import FilterBar from './FilterBar';

const PokeContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPokemons = async () => {
    const pokemons = await getPokemons();
    setPokemons(pokemons);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  if (pokemons.length === 0) {
    fetchPokemons();
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <FilterBar onSearch={handleSearch} />
      <Row>
        {filteredPokemons.map((pokemon) => (
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
