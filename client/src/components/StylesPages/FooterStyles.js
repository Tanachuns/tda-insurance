import styled from "styled-components";

export const FooterBody = styled.div `
    background: #0f0e9f;
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    @media screen and (max-width: 768px) {
        width: auto;
    }    
`

export const FooterGrid = styled.div `
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 30% 30%;
    padding: 0px 30px 0px 30px;
`

export const FooterGridBox = styled.div `
    margin: 0px;
    padding: 15px;
    display: flex-box;
    justified-content: flex-start;
    text-align: left;
    position: relative;
`

export const FooterTopic = styled.h3 `
    margin: 0px;
    padding: 0px;
    color: #fff;
    font-size: 15px;
`

export const FooterTxt = styled.p `
    color: #fff;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
`