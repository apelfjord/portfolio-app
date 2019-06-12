import styled from 'styled-components'
import {
	thumbnailProperties,
	standardMargin, 
	standardPadding,
	textSizes,
	theme
} from '../../layout/spec'

export const VideoCardContainer = styled.div`
	margin: ${standardMargin}px;
	padding: ${standardPadding}px;
	width: ${thumbnailProperties.width}px;
	background-color: ${theme.card};
	border: 1px solid ${theme.border};
	border-radius: 10px;
    height: auto;
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const VideoCardTitle = styled.h1`
	font-weight: bold;	
	font-size:${textSizes.title};
	padding-bottom: 0px;
`
export const VideoCardText = styled.div`
	font-size: ${textSizes.text};
	padding-top: ${standardPadding/2.5}px;
`
export const VideoCardFile = styled.video`
	max-width: 100%;
`