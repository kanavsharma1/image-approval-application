import styled from "styled-components"
import { Box } from "./Box"

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color:#5D8BF4;
`

export const Container = ()=>{

    return (
        <AppContainer>
           <Box/>
        </AppContainer>
    )
}