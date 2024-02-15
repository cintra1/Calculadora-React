import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #000;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-family: Roboto, sans-serif;
    border-radius: 10px;
    input {
        width: 100%;
        height: 100px;
        background-color: #000;
        border: 0;
        font-size: 2rem;
        font-family: Roboto, sans-serif;
        padding: 0 10px;
        color: #fff;
        border-radius: 10px 10px 0 0;
        text-align: right; // Adicionado para alinhar o texto à direita
        margin-right: 10px; // Adicionado para dar um espaçamento à direita
    }
`;
