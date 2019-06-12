import styled from 'styled-components'
import {
	thumbnailProperties,
	standardMargin, 
	standardPadding,
	textSizes
} from '../../layout/spec'

export const VideoCardContainer = styled.div`
	margin: ${standardMargin}px;
	padding: ${standardPadding}px;
	width: ${thumbnailProperties.width}px;
	border: 1px solid white;
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
`
export const VideoCardText = styled.div`
	font-size: ${textSizes.text};
`
export const VideoCardFile = styled.video`
	border: 1px solid white;
	max-width: 100%;
`