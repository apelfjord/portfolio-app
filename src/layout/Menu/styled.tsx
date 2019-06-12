import styled from 'styled-components'
import {
    menuWidth,
    logoHeight,
} from '../spec'

export const MenuContainer = styled.div`
    min-width: ${menuWidth}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 22px;
    position: fixed;
    top: ${logoHeight}px;
    bottom: 
    z-index: 10;
`