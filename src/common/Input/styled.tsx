import styled from 'styled-components'
import {
	textSizes, 
	standardMargin,
	airyPadding
} from '../../layout/spec'

export const InputContainer = styled.div`
    height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`
export const InputTitle = styled.div`
	margin-top: ${standardMargin}px;
	font-size:${textSizes.text};
`

export const InputField = styled.input`
	padding: ${airyPadding}px;
	width: 100px;
`

export const InputFieldLarge = styled.input`
	padding: ${airyPadding}px;
	width: 400px;
	height: 200px;
`