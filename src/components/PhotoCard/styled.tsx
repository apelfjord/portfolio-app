import styled from 'styled-components'
import {
	thumbnailProperties,
	standardMargin,
	standardPadding,
	textSizes,
	theme
} from '../../layout/spec'

type OwnProps = {
	border: boolean,
}
export const PhotoCardContainer = styled.div<OwnProps>`
	padding: ${props => (props.border ? standardPadding/5 : standardPadding) }px;
	margin: ${standardPadding}px;
	background-color: ${theme.card};
	width: ${thumbnailProperties.width}px;
	border: 1px solid ${theme.border};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
	box-shadow: 2.5px 2.5px 5px gray;
`
export const PhotoCardTitle = styled.h2`
    font-weight: bold;
	font-size:${textSizes.title};
	padding-bottom: 0px;
`
export const PhotoCardText = styled.div`
	padding-top: ${standardPadding/2.5}px;
	font-size: ${textSizes.text};
`
export const PhotoCardImage = styled.img`
	border: 1px solid ${theme.border};
	border-radius: 5px;
	width: ${thumbnailProperties.width}px;
	height: ${thumbnailProperties.height}px;

`