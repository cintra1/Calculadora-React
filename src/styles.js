import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #ffff; /* fallback for old browsers */
   
    font-size: 2rem;
    border-radius: 10px;
    `

export const Content = styled.div`
    width: 180%;
    max-width: 300px;
    padding: 7px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
    background-color: #000;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

