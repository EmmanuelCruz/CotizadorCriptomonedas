import React from 'react'
import styled from "@emotion/styled";
import { useState } from 'react';

const Label = styled.label`
    color: white;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 20px;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const useSelectMonedas = () => (
        <>
            <Label htmlFor="selector">{label}</Label>
            <Select onChange={e => setState(e.target.value)} value={state} name="selecOpciones" id="selectOp">
                <option value="">-- Selecciona una opción --</option>

                {
                    opciones.map(opcion => (
                        <option key={opcion.id} value={opcion.id}>
                            {opcion.nombre}
                        </option>
                    ))
                }
            </Select>
        </>
    )

    return [ state, useSelectMonedas ]
}

export default useSelectMonedas
