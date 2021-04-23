import React from 'react';
import styled from 'styled-components';

const Home = (props) => {
    return (
        <Container>
            <Content>
                <Intro>
                    <Name>
                        Frank D'Angelo
                    </Name>
                    <Occupation>
                        Full-Stack Developer
                    </Occupation>
                </Intro>
                <BgImage />
            </Content>

        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`
const Content = styled.div`
    margin-bottom: 10vh;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    color: white;
`;
const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/images/background.jpg');
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;
const Intro = styled.div`

`
const Name = styled.div`
    font-family: 'Major Mono Display';
    font-size: 64px;
    margin-bottom: 20px;
`
const Occupation = styled.h3`

`

export default Home;
