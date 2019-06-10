import styled from 'styled-components'
import {logoHeight} from '../spec'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${logoHeight}px;
    width: 100%;
    background-color: #282c34;
    color: white;
    z-index: 20;
`

export const HeaderTitle = styled.h1`
    font-weight: bold;
    font-size: 2.75rem;
`
