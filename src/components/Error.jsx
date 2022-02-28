import styled from "styled-components"

export const Error = styled.p`
color: #D82148;
margin-left: 25px;
`

export const ErrorMessage = ()=>{
    return <Error>
         Hey Something went Wrong here! Please try again later
     </Error>
 }