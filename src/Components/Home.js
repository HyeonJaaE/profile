import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container about">
                <div className="title">
                    <h3>ABOUT ME</h3>
                </div>

                <p className="">
                    프론트엔드 개발자 이현재입니다.
                    <br />
                    <br /> HTML, CSS, JavaScript, React, Git
                </p>
                <a href="/resume_이현재.pdf">RESUME</a>
            </div>

            <div className="container" id="portfolio">
                <div className="portfolio">
                    <div className="title" style={{ textAlign: "right" }}>
                        <h3>PORTFOLIO</h3>
                    </div>
                    <div className="portfolio-img text-center">
                        <div>
                            <a href="#p1">
                                <img src="./vsclicker.png"></img>
                            </a>
                            <p>밸런스게임 - Vs Clicker</p>
                        </div>
                        <div>
                            <img src="./cat3.jpg"></img>
                            <p>나만의 라이브러리(개발중)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron d-flex" id="p1" style={{ height: "20rem" }}>
                <div className="col-3 pt-4">
                    <p>React 기반 웹 애플리케이션</p>
                </div>
                <div className="col-6 pt-4">
                    <p>Stack</p>
                    <hr className="bg-secondary" />
                    HTML · CSS · JS · React · Redux · Boostrap · Firebase
                    <br />
                    Firebase API - 사용자 인증(Redux), 파일 업로드, 글 작성, 호스팅
                    <br />
                </div>
                <div className="col-3 pt-4">
                    <p>Link</p>
                    <hr className="bg-secondary" />
                    <a href="https://vsclicker.web.app/">https://vsclicker.web.app/</a>
                    <br />

                    <a href="https://github.com/HyeonJaaE/vsClicker">
                        https://github.com/HyeonJaaE/vsClicker
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
