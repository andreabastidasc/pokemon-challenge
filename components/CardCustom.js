import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import pokemonService from '../services/pokemon'

export const CardCustom = ({pokemon}) => {
    const [pokemonOnly, setPokemonOnly] = useState()
    const [numero, setNumero] = useState(0)
    useEffect(() => {
      const getPokemonOnly = async() => {
        try {
          const pokemonResult = await pokemonService.getPokemonSpeciesByUrl(pokemon.url)
          setPokemonOnly(pokemonOnly)
          console.log(pokemonResult)
        } catch (error) {
          console.log('error', error)
        }
      }
      getPokemonOnly()
    },[])
    return (
        <div>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button onClick={() => setNumero(prev => prev + 1) } variant="primary">más</Button>
              <p>{numero}</p>
              <Button onClick={() => setNumero(prev => prev - 1) } variant="primary">menos</Button>
            </Card.Body>
          </Card>
        </div>
    )
}
