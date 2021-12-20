import {Button} from "react-bootstrap";
import React,  {useState} from "react";
import "./About.css"

export default function About(){

    function Spec(){
        return (
            <div>
                <br/>
                <span>Java, Android</span><br/>
                <span>Spring Boot, Spring MVC</span><br/>
                <span>Python</span><br/>
                <span>HTML/JS/CSS</span><br/>
            </div>
        )
    }

    function Bias(){
        return (
            <div>
                <br/>
                <span>둥글다</span><br/>
                <span>피해를 끼치기 싫어한다</span><br/>
                <span>밝다</span><br/>
                <span>자신감있는</span><br/>
            </div>
        )
    }

    function Interest(){
        return (
            <div>
                <br/>
                <span>
                    <span>음악</span><br/>
                    <span>코딩</span><br/>
                    <span>인문학</span><br/>
                    <span>영화</span><br/>
                </span>
            </div>
        )
    }

    let [spec, specModify] = useState(false);
    let [interest, interestModify] = useState(false);
    let [bias, biasModify] = useState(false);

    return(
        <div className='about_main'>
            <br/>
            <h2>나를 나타내는 키워드</h2>
            <div className="about__container">
                <span onClick={() => {specModify(!spec); biasModify(false); interestModify(false);}}>
                    <h4>기술스펙</h4>
                    {
                        spec === true
                        ?<Spec></Spec>
                        : null
                    }
                </span>
            </div>
            <div className="about__container">
            <span onClick={() => {specModify(false); biasModify(!bias); interestModify(false);}}>
                    <h4>성향</h4>
                    {
                        bias === true
                        ?<Bias></Bias>
                        : null
                    }
                </span>
            </div>
            <div className="about__container">
                <span onClick={() => {specModify(false); biasModify(false); interestModify(!interest)}}>
                    <h4>관심사</h4>
                        {
                            interest === true
                            ?<Interest></Interest>
                            : null
                        }
                </span>
            </div>
            <br/>
            <a href='https://www.notion.so/HOME-0f52d70f321c4de5afc707d93b4edc66' target='_blank' rel='noreferer'><Button variant="outline-warning mybtn">Link to My Notion</Button></a>
        </div>
    )
}