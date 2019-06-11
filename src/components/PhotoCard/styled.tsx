import styled from 'styled-components'
import {thumbnailProperties} from '../../layout/spec'

export const PhotoCardContainer = styled.div`
	margin: 25px;
	padding: 25px;
	width: ${thumbnailProperties.width}px;
	border: 1px solid white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
`
export const PhotoCardTitle = styled.h2`
    font-weight: bold;
	font-size: 2rem;
`
export const PhotoCardText = styled.div`
	font-size: 1rem;
`
export const PhotoCardImage = styled.img`
	border: 1px solid white;
	border-radius: 5px;
	width: ${thumbnailProperties.width}px;
	height: ${thumbnailProperties.height}px;

`