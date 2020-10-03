import styled from 'styled-components';

export const MainDash = styled.div`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
`;

export const SubDash = styled.div`
    display: flex;
    padding: 10%;
    justify-content: center;
    @media only screen and (max-width: 1250px) {
        /* padding: 10%; */
        justify-content: center;  
        display: block;
        width: 100%;
        overflow: auto;
         }
`;


export const BaseImage = styled.div`
    @media only screen and (max-width: 1250px) {
        /* padding: 10%; */
        /* justify-content: center;   */
        width: 100%;
         }
`;


export const BaseText = styled.div`
    font-weight: bold;
    font-size: 40px;
    font-family: lato;
    color: #585858;
    text-align: center;
    @media only screen and (max-width: 1250px) {
        font-weight: bold;
        font-size: 15px;
        font-family: lato;
        text-align: center;    }
`;

export const ImageDiv = styled.img`
    width: 98%;
    @media only screen and (max-width: 1250px) {
        margin-top: 50px  }
`;

export const ImageMid = styled.img`
    width: 98%;
    @media only screen and (max-width: 1250px) {
        margin-top: 50px  }
`;

export const ImageInsta = styled.img`
    width: 100px;
    height: 100px;
`;

export const Desc = styled.div`
    width: 100%;    
`;
