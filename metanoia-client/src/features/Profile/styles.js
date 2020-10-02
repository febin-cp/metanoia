import styled from 'styled-components';

export const MainDash = styled.div`
    display: flex;
    padding: 20px 20px;
    justify-content: space-between;
    height: 100vh;
    overflow: auto;
`;

export const BaseImage = styled.div`
    font-weight: bold;
    font-size: 40px;
    font-family: lato;
    text-align: center;
    @media only screen and (max-width: 1250px) {
        font-weight: bold;
        font-size: 10px;
        font-family: lato;
        text-align: center;    }
`;

export const ImageDiv = styled.img`
    width: 98%;
`;

export const ImageMid = styled.img`
    width: 98%;
`;