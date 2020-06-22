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
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron d-flex" id="p1" style={{ height: "20rem" }}>
                <div className="col-3 pt-4">
                    <p>포트폴리오 1</p>
                </div>
                <div className="col-6 pt-4">
                    <p>Link</p>
                    <hr className="bg-secondary" />
                    홈페이지 -<a href="https://vsclicker.web.app/">https://vsclicker.web.app/</a>
                    <br />
                    GitHub -
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
