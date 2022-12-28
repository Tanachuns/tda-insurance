import styled from "styled-components";

export const Flexarea = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-item: center;
`

export const StyledBox = styled.div `
    height: 350px;
    width: 300px;
    display: block;
    text-align: center;
    margin: 5px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;

`

export const CardHeader = styled.div `
    heigh: 85px;
    width: 300px;
    margin-top: 0;
    padding-top : 0;
    border-radius: 15px 15px 0 0;
`
export const CardBody = styled.div `
    heigh: 265px;
    width:300px;
    margin: 0;
`

export const StyledImage = styled.img `
    width: 300px;
    position: relative;
    border-radius: 15px 15px 0 0;
`