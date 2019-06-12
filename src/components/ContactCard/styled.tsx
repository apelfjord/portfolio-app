import styled from 'styled-components'
import {textSizes} from '../../layout/spec'

export const ContactCardContainer = styled.div`
    height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContactCardTitle = styled.h1`
	font-size:${textSizes.title};
	color: red;
`
export const ContactCardText = styled.div`
	font-size:${textSizes.text};
	color: red;
`
