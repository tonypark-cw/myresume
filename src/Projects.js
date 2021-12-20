import React from 'react'
import "./Projects.css"

export default function Projects() {
    return (
        <div>
            <p className="project__container">
                <a href="http://github.com/tonypark-cw"><img alt="ToRootGit" className="root_git" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"></img></a>
                <span>
                    <span>개발자 :  TonyPark</span>
                    <span><a href="http://github.com/tonypark-cw"><img className="git_Icon" alt="ToMovieRatingGit" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/react-movierating">🎈React로 만든 MovieRating앱</a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/todochrome/">🎈VanillaJS로 만든 TODO앱</a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/painterjs/">🎈VanillaJS로 만든 Painter</a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/goyange/">🎈고양이 이미지 검색 페이지</a></span><br/>
                </span>
            </p>
        </div>
    )
}
