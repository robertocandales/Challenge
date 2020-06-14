import React, { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import { MainWrapper, Wrapper, WrapperButton, Typography, CardStyle, H1 } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones, nextFivePokemons } from '../../redux/actions/pokeActions';
import { PokemonDetails } from './../pokemonDetails/index';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pokemones() {
  const { url, path } = useRouteMatch();
  const { pokemones, loadding, limit, offset } = useSelector((store) => store.pokemones);
  const dispatch = useDispatch();
  const [loading1, setloading1] = useState(false);
  useEffect(() => {
    dispatch(getPokemones({ limit: limit, offset: offset }));
  }, [limit, offset, dispatch]);

  //Pagination
  const nextHandler = async (e) => {
    e.preventDefault();
    setloading1(true);
    await dispatch(nextFivePokemons());
    setloading1(false);
  };

  return (
    <>
      <H1>Pokemon Challenge</H1>
      <MainWrapper>
        <Wrapper>
          {loadding && loading1 ? (
            <Spinner animation='border' variant='dark' />
          ) : (
            pokemones.map((pokemon, index) => (
              <CardStyle
                key={index}
                style={index % 2 ? { backgroundColor: '#800000' } : { backgroundColor: '#FFF5EE' }}>
                <Link to={`${url}${pokemon.name}`}>
                  <Typography style={index % 2 ? { color: 'snow' } : { color: 'dark' }}>
                    {' '}
                    {pokemon.name}
                  </Typography>
                </Link>
              </CardStyle>
            ))
          )}
          <form onClick={(e) => nextHandler(e)}>
            <WrapperButton type='submit'>Next</WrapperButton>
          </form>
        </Wrapper>
        <>
          <Route path={`${path}:name`} component={PokemonDetails} />
        </>
      </MainWrapper>
    </>
  );
}

export default Pokemones;
