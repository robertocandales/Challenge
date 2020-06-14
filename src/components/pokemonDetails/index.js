import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getPokeInfo } from '../../redux/actions/pokeActions';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Wrapper,
  WrapperAbilities,
  WrapperImage,
  WrapperButton,
  Typography,
  IMG,
  CardStyle,
  H3,
} from './styles';

export const PokemonDetails = () => {
  const dispatch = useDispatch();
  const { pokeInfo } = useSelector((store) => store.pokemones);
  let { name } = useParams();
  const [test, settest] = useState('');

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ShowAbilityLoading, setShowAbilityLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(getPokeInfo(name));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (test !== name) {
    settest(name);

    fetchData();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(getPokeInfo(name));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, setLoading, name]);

  if (loading) {
    return <Spinner animation='border' variant='dark' />;
  }
  //GET Request to get abilities
  const showAbilityHandler = async (e, URL) => {
    e.preventDefault();
    setShowAbilityLoading(true);
    const res = await axios.get(URL);
    setSkills(res.data.effect_entries);
    setShowAbilityLoading(false);
  };

  return pokeInfo ? (
    <Wrapper>
      <Typography> {name} </Typography>
      <WrapperAbilities>
        {pokeInfo.abilities.map((s, index) => (
          <WrapperButton key={index} onClick={(e) => showAbilityHandler(e, s.ability.url)}>
            {s.ability.name}
          </WrapperButton>
        ))}
      </WrapperAbilities>
      <WrapperImage>
        <IMG src={pokeInfo.sprites.front_default} alt='' />
        <IMG src={pokeInfo.sprites.back_default} alt='' />
      </WrapperImage>
      {ShowAbilityLoading && skills.legth ? (
        <Spinner animation='border' variant='dark' />
      ) : (
        <>
          {skills.map((skill, index) => (
            <CardStyle key={index}>
              <>
                {skill.language.name === 'de' ? <H3>Deutschland</H3> : <H3>English</H3>}{' '}
                {skill.effect}
              </>
            </CardStyle>
          ))}
        </>
      )}
    </Wrapper>
  ) : (
    <h1>No data found</h1>
  );
};
