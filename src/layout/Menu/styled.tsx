import styled from 'styled-components'
import {centerWithMenu, logoHeight} from '../spec'

export const MenuContainer = styled.div`
    min-width: ${centerWithMenu}px;
    background-color: black;
    min-height: 100vh;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: white;
    position: fixed;
    top: ${logoHeight}px;
    z-index: 10;
`