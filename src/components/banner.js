//import loremIpsum from 'lorem-ipsum';
import { Container, Row, Col } from "react-bootstrap"
//import { ArrowRigightCircle } from "react-bootstrap-icons"
import surpriseImg from "../assets/img/2.svg"
import { useState, useEffect } from 'react';

export const Banner = () =>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Saina uu? Bi Murun bainaa. Tsetsegnees ch huurhun Ari-daa tursun udriin mend hurgeyee"];
    const [delta,setDelta]=useState(200-Math.random()*90);
    const [text,setText]=useState('');
    const period=2000;
    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick()
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])
    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }



    return (
        
        <section className="banner" id="home">
            
            <Container>
                
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Happy Birthday!
                        </span>
                        <h1>
                            {``}<span className="wrap">{text}</span>
                        </h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={surpriseImg} alt="Surprise img"/>
                    </Col>
                </Row>
                    
            </Container>
            <div className="birthdayCard">     
    <div className="cardFront">
      <h3 className="happy">Happy Birthday&#128151; </h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY BIRTHDAY</h3>
      <p>Erhem hundet Ari-d</p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      </p>
      <p className="name">Murun</p>
    </div>
  </div>
        </section>
    );
}