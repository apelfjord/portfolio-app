import styled from 'styled-components'

import {
	textSizes
} from '../../layout/spec'

export const GalleryContainer = styled.div`
	width: 100%;
	min-height: 100vh - 175px;
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
`
export const GalleryTitle = styled.h1`
	font-size: ${textSizes.title}
    font-weight: bold;

`
export const GalleryText = styled.div`
	font-size: ${textSizes.text}
`
