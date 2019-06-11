import styled from 'styled-components'
import {centerWithMenu, logoHeight} from '../spec'

export const MenuContainer = styled.div`
    min-width: ${centerWithMenu}px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 22px;
    color: white;
    position: fixed;
    top: ${logoHeight}px;
    z-index: 10;
`