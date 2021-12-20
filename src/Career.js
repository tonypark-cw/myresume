import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Kaon from "./Kaon";
import Future from "./Future";

import './Career.scss'



export default function Career(){

    let history = useHistory();

    let [kaon, kaonModify] = useState(false);
    let [future, futureModify] = useState(false);

    return(
        <div className="container">                      
            <div className="row text-center justify-content-center mb-5">
                <div className="col-xl-6 col-lg-8">
                    <br/>
                    <p className="text-muted">제 경력사항입니다.<br/> 각 시점을 클릭해주시면 제가 한 업무에대한 설명이 보여집니다.</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                <div className="inner-circle" onClick={() => {kaonModify(!kaon)}}></div>
                                <p className="h6 mt-3 mb-1">2018.03</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">가온미디어 입사</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                <div className="inner-circle"  onClick={() => {kaonModify(!kaon)}}></div>
                                <p className="h6 mt-3 mb-1">2019.04</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">가온미디어 퇴사</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                <div className="inner-circle" onClick={() => {futureModify(!future)}}></div>
                                <p className="h6 mt-3 mb-1">2020.10</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">퓨처젠 입사</p>
                            </div>
                        </div>
                        <div className="timeline-step mb-0">
                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                            <div className="inner-circle" onClick={() => {futureModify(!future)}}></div>
                                <p className="h6 mt-3 mb-1">2021.03</p>
                                <p className="h6 text-muted mb-0 mb-lg-0">퓨처젠 퇴사</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ul className='noneBullet'>
                {
                    kaon === true
                    ? <Kaon />
                    : null
                }
                {
                    future === true
                    ? <Future />
                    : null
                }
            </ul>
         
        </div> 
    )
}

