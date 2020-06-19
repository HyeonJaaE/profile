import React, { useState } from "react";

const Resume = () => {
    const divs = [];
    for (var i = 0; i < 144; i++) {
        divs.push(<div className="col-4 col-sm-2 box"></div>);
    }
    divs[1] = <div className="col-4 col-sm-2 box box-text">INTERNET</div>;
    divs[2] = <div className="col-4 col-sm-2 box box-text">HTML</div>;
    divs[3] = <div className="col-4 col-sm-2 box box-text">CSS</div>;
    divs[4] = <div className="col-4 col-sm-2 box box-text">JavaScript</div>;
    divs[7] = <div className="col-4 col-sm-2 box box-text">NPM, YARN</div>;
    divs[8] = <div className="col-4 col-sm-2 box box-text">React</div>;
    divs[10] = <div className="col-4 col-sm-2 box box-text">Webpack</div>;
    divs[13] = <div className="col-4 col-sm-2 box box-text">VCS(Git)</div>;
    divs[14] = (
        <div
            className="col-4 col-sm-2 box box-text"
            onClick={() => {
                window.alert("123");
                divs[14] = <div className="col-4 col-sm-2 box box-text">VCS(Git)</div>;
                setBoard([...divs]);
            }}
        >
            보안
        </div>
    );

    const [board, setBoard] = useState(divs);

    return (
        <div
            className="container-fulid"
            style={{
                background: "url(http://api.thumbr.it/whitenoise-361x370.png?)",
                /*background:
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/330px-Ash_Tree_-_geograph.org.uk_-_590710.jpg)",*/
            }}
        >
            <div className="row m-0">{board}</div>
        </div>
    );
};

export default Resume;
