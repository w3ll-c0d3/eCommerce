import styled from "styled-components";

export const Container = styled.div`
background-color: #D3D3D3;
`

export const ContainerContent = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1612px) {
      grid-template-columns: repeat(4, 1fr);   
    }  
    @media (max-width: 1512px) {
      grid-template-columns: repeat(3, 1fr);   
    }  
    @media (max-width: 1050px) {
      grid-template-columns: repeat(2, 1fr);
    }  
    @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
    }  
      cursor: pointer;
`


export const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 2rem;
  margin: 2rem;
  height: 23rem;
  width: 20rem;
  justify-self: center; 
  text-align: center;
  line-height: 3rem;
  font-size: 0.75rem;
  font-weight: 350;
  transition: all 0.3s ease-out;
  &:hover {
        transform: scale(1.1); 
        color: #151E3D;
        font-size: 0.9rem;
       
  }
`
export const Foto = styled.img`
  width:200px;
  height:200px;
  border-radius: 200px;
`


