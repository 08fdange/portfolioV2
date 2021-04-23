import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <Content>
                <Icon href='https://www.linkedin.com/in/frankdangelodev/' target='_blank' rel='noreferrer'>
                    <img src='/images/linkedin.svg' alt='linkedin' />
                </Icon>
                <Icon href='https://github.com/08fdange' target='_blank' rel='noreferrer'>
                    <img src='/images/github.svg' alt='github' />
                </Icon>
                <Icon href='mailto:frankdangelodev@gmail.com' target='_blank'>
                    <img src='/images/email.svg' alt='email' />
                </Icon>
            </Content>
        </Container>
    )
}

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    background-color: black;
    height: 70px;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled.a`
    margin: 10px 15px;
    img{
        width: 40px;
        height: 40px;
        transition: transform 330ms ease-in-out;
        &:hover {
            transform: scale(2.0);
        }
    }
`

export default Footer;
