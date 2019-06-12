import styled from 'styled-components'
import {
	thumbnailProperties,
	standardMargin,
	standardPadding,
	textSizes,
	theme
} from '../../layout/spec'

export const PhotoCardContainer = styled.div`
	margin: ${standardMargin}px;
	padding: ${standardPadding}px;
	background-color: ${theme.card};
	width: ${thumbnailProperties.width}px;
	border: 1px solid ${theme.border};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
`
export const PhotoCardTitle = styled.h2`
    font-weight: bold;
	font-size:${textSizes.title};
`
export const PhotoCardText = styled.div`
font-size: ${textSizes.text};
`
export const PhotoCardImage = styled.img`
	border: 1px solid ${theme.border};
	border-radius: 5px;
	width: ${thumbnailProperties.width}px;
	height: ${thumbnailProperties.height}px;

`