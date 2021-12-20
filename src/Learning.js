import React from "react";
import './Learning.css'

export default function Learning(){

 
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-5">학습 기간</h4>
                            <div class="hori-timeline" dir="ltr">
                                <ul class="list-inline events">
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                            <div class="event-date bg-soft-primary text-primary">2019.12</div>
                                            <br/>
                                            <h5 class="font-size-16">[Java] 웹개발 과정 참여</h5>
                                            <p class="text-muted">가온미디어 퇴사후 웹개발 과정 참여</p>
                                            <a href='https://docs.google.com/document/d/1ZLYnTgk0cbINNDPZdLQIl3kwVfOx7KLkxSBYVItLMU8/edit#heading=h.gjdgxs' target='_blank' rel='noreferer'>
                                                <div class="btn btn-primary btn-sm" >
                                                    웹포트폴리오
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                            <div class="event-date bg-soft-success text-success">2020.07</div><br/>
                                            <h5 class="font-size-16">[Java] 웹개발 과정 수료</h5>
                                            <p class="text-muted">웹개발 과정 수료 후 퓨처젠 입사</p>
                                            <a href='https://github.com/tonypark-cw/web_project/tree/master' target='_blank' rel='noreferer'>
                                                <div class="btn btn-primary btn-sm" >
                                                    레포지토리
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                            <div class="event-date bg-soft-danger text-danger">2021.05</div><br/>
                                            <h5 class="font-size-16">[Python] 데이터분석 과정 참여</h5>
                                            <p class="text-muted">퓨처젠 퇴사 후 데이터분석 과정 참여</p>
                                            <a href='https://docs.google.com/presentation/d/17G-UAs0iliFfq37kmjNZJXuF_feRzWDXIy7hcqw8r5o/edit#slide=id.p1' target='_blank' rel='noreferer'>
                                                <div class="btn btn-primary btn-sm" >
                                                    데이터분석PPT
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                            <div class="event-date bg-soft-warning text-warning">2021.12</div><br/>
                                            <h5 class="font-size-16">[Python] 데이터분석 과정 수료</h5>
                                            <p class="text-muted">커리어 발전 진행중...</p>
                                            <a href='https://datastudio.google.com/reporting/0212448d-8ec8-4a50-869b-79685aac75b4/page/Ao3eC' target='_blank' rel='noreferer'>
                                                <div class="btn btn-primary btn-sm" >
                                                    결과페이지
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}