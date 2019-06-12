import styled from 'styled-components'
import {
    logoHeight,
    theme
} from '../spec'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${logoHeight}px;
    width: 100%;
    z-index: 20;
    background-color: ${theme.highlight}
`

export const HeaderTitle = styled.h1`
    font-weight: bold;
    font-size: 2.75rem;
`
