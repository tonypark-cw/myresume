import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Career from './Career';

function Intro(){

    let [detail, detailModify] = useState(false);

    return (
        <div className='intro'>
            <h2>Welcome to My Page.</h2>
            <br/>
            <p>안녕하세요</p>
            <p>취미가 많은 개발자 박찬우입니다.</p>
            <p>제 경력과 학습내용은 아래 버튼을 누르시면 확인하실 수 있습니다.</p>
            <br/>
            {
                detail === true
                ? <Career></Career>
                : null
            }
            <br/>
            {
                detail === true
                ?<Button variant="light" onClick={() => {detailModify(!detail)}}>Hide</Button>
                :<Button variant="light" onClick={() => {detailModify(!detail)}}>Show More</Button>
            }
            
            
        </div>
    )
}

export default Intro;