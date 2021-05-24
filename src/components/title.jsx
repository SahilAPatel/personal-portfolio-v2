import React from "react"
//import "./stars.scss"
import Typed from "react-typed"


const Title = () => {
    return (
        <div id="home" className="intro route bg-image background">
            <div className="intro-content display-table">
            <div className="table-cell">
                <div className="container">
                    <h1 className="intro-title mb-4">Sahil Patel</h1>
                    <div className="grid-container">
                        <p className="intro-subtitle">I'm probably&nbsp;</p>
                        <p className="intro-subtitle">
                            <span className="text-slider-items"></span>
                            <strong className="text-slider">
                            <Typed
                                strings={[
                                    "developing code",
                                    "playing videogames",
                                    "drinking coffee",
                                    "reading a book",
                                    "playing basketball",
                                    "doing leetcode",
                                    "listening to a podcast",
                                    "doing homework",
                                    "thinking about sushi",
                                    "listening to music"
                                ]}
                                typeSpeed={80}
                                backDelay={1100}
                                backSpeed={30}
                                loop
                            />
                            </strong>
                        </p>
                    </div>

                    <p className="pt-3">
                        <a
                        className="btn btn-primary btn js-scroll px-4"
                        href="#work"
                        role="button"
                        >
                        View My Work
                        </a>
                    </p>
                </div>
            </div>
            </div>
        </div>
    );

}

export default Title;
