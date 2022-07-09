import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from "../constants/monedas";
import { useEffect } from 'react';
import { objectOf } from 'prop-types';
import { useState } from 'react';
import Error from './Error';

const InputSumbit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
const Formulario = ({setMonedas}) => {
    const [ criptos, setCriptos ] = useState([])
    const [ error, setError ] = useState(false)
    const [ moneda, SelectMonedas ] = useSelectMonedas('Selecciona una moneda', monedas)
    const [ criptoMoneda, SelectCriptos ] = useSelectMonedas('Selecciona una criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const response = await fetch(url)
            const data = await response.json()

            const arrayCriptos = data.Data.map(dato => {
                const criptoMoneda = {
                    id: dato.CoinInfo.Name,
                    nombre: dato.CoinInfo.FullName
                }
                return criptoMoneda
            })

            setCriptos(arrayCriptos)

        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if([moneda, criptoMoneda].includes('')){
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptoMoneda
        })
    } 

    return (
        <>
            {
                error &&
                <Error>Todos los campos son obligatorios</Error> 
            }
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptos />
                <InputSumbit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario
