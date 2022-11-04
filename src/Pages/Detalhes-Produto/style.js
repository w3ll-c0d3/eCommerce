import styled from "styled-components";


// Default
const ContainerStyled = styled.div`
    text-align: center;
    height: 50vh;
    width: 100%;
`
export const DescriptionStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-height: 100%;
    width: 100%;
    margin-top: 2rem;
    padding: 20px;
`
export const DescriptionText = styled.span`
    max-height: 100%;
`
export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100px;
`
export const Button = styled.button`
    text-align: center;
    height: 50px;
    width: 25%;
`
export default ContainerStyled