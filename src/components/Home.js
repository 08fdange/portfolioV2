import React from 'react';
import Viewer from './Viewer';
import styled from 'styled-components';

const Home = (props) => {
    return (
        <Container>
            <Content>
                <Intro>
                    <Name>
                        Frank D'Angelo
                        <UnderContainer>
                            <Underline />
                        </UnderContainer>
                    </Name>
                    <Occupation>
                        Full-Stack Developer
                    </Occupation>
                    <ViewerContainer>
                        <Viewer />
                    </ViewerContainer>
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
    @keyframes grow {
        from {font-size: 16px;}
        to {font-size: 64px;}
    }
    animation-name: grow;
    animation-duration: 1s;
    animation-timing-function: ease;
    font-family: 'Major Mono Display';
    font-size: 64px;
    margin-bottom: 10px;
    padding-bottom: 10px;
`
const UnderContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`
const Underline = styled.div`
    @keyframes underline {
        0% {width: 0;}
        
        50% {width: 100%;}
        
        100% {width: 0; margin-left: 100}
    }

    animation-name: underline;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    
    align-items: center;
    height: 2px;
    margin-top: 10px;
    background-color: white;
`
const ViewerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Occupation = styled.h3`

`

export default Home;
