import styled from 'styled-components'
import {centerWithMenu} from '../spec'

export const MenuContainer = styled.div`
    min-width: ${centerWithMenu}px;
    background-color: black;
    min-height: 100vh;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid white;
`

export const MenuTitle = styled.p`
    font-size: 22px;
    color: white;
`
