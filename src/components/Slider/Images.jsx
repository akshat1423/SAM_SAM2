import React from 'react'
import styled from 'styled-components';
import SliderComp from './SliderComp';
import { Zoom } from 'react-awesome-reveal';

const Images = () => {
  return (
    <>
    <Container id='project'>
        <Zoom>
            <h1 style={{ pointerEvents: 'none' }}>
                <span className="green">SAM MEMORIES</span>
            </h1>
            <p></p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
    </>
  )
}

export default Images;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 4rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``