import styled from 'styled-components'
import {textSizes} from '../../layout/spec'

export const AdminHomeContainer = styled.div`
    height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const AdminHomeTitle = styled.h1`
	font-size:${textSizes.title};
	color: red;
`
export const AdminHomeText = styled.div`
	font-size:${textSizes.text};
	color: red;
`
