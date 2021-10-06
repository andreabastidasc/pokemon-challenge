/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import pokemonService from '../services/pokemon'
import styles from '../styles/Cards.module.scss'

export const CardCustom = ({ pokemon }) => {
  const [pokemonOnly, setPokemonOnly] = useState()
  useEffect(() => {
    const getPokemonOnly = async () => {
      try {
        const pokemonResult = await pokemonService.getPokemonSpeciesByUrl(pokemon.url)
        setPokemonOnly(pokemonResult)
      } catch (error) {
        console.log('error', error)
      }
    }
    getPokemonOnly()
  }, [pokemon])
  return pokemonOnly
    ? (
          <Col className='mt-4' xs={12} sm={12} md={6} lg={6} xl={4}>
            <div className={styles['tilt-box-wrap']}>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <span className={styles['t-over']}></span>
              <Card className={`${styles['pokemon-card']} ${styles['tilt-box']}`} >
               <Card.Img className={styles['pokemon-card-img']} variant="top" src={pokemonOnly.sprites.front_default} alt={pokemon.name} />
               <Card.Body className="pt-0">
                 <Card.Title className={styles['pokemon-card-title']}>{pokemonOnly.name}</Card.Title>
                 <Card.Text className={styles['pokemon-card-text']}>
                   <span>Weight:</span>{pokemonOnly.weight}
                 </Card.Text>
                 <Card.Text className={styles['pokemon-card-text']}>
                   <span>Abilities:</span>
                   <ul className={styles['pokemon-card-abilities-list']}>{pokemonOnly.abilities.map(abilities => <li key={abilities}>{abilities.ability.name}</li>)}</ul>
                 </Card.Text>
               </Card.Body>
             </Card>
             </div>
          </Col>
      )
    : null
}
