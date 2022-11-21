import React from "react";
import "../styles/Home.css";
import Card from "../components/Card/Card";
import Lottie from "react-lottie";
import * as HiAnimation from "../assets/HiAnimMan.json";
import { Link } from "react-router-dom";

const Home = () => {
  const handleBounce = (letter) => {
    if (!letter.classList.contains("b")) {
      letter.classList.add("b");
      setTimeout(() => {
        letter.classList.remove("b");
      }, 1000);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          customStyles={{ width: "55vw" }}
          customClassname="animationLTR"
          isLeft
        >
          <div style={{ padding: "10%" }} className={"animationDTT"}>
            <h1>
              Hey, I'm
              <div style={{ display: "flex", whiteSpace: "break-spaces" }}>
                {"Chirayu Agrawal".split("").map((letter, index) => (
                  <div
                    key={index}
                    onMouseOver={(event) => {
                      handleBounce(event.currentTarget);
                    }}
                    className="nameTag"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              A Fullstack Developer With 2 Years of Experience.
            </h1>
            <br />
            <p
              style={{
                fontSize: "20px",
                paddingTop: "20px",
                borderTop: "1px solid black ",
              }}
            >
              I am a Fullstack Developer Specialised in Frontend and Want to
              Design the best user experience the user ever had.
            </p>
          </div>
        </Card>
        <Card
          customStyles={{
            width: "100%",
            marginLeft: "-1vw",
          }}
          customClassname="animationRTL"
        >
          <div style={{ padding: "10%" }} className={"animationDTT"}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: HiAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={"100%"}
              width={"100%"}
            />
          </div>
        </Card>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card customStyles={{ width: "45vw" }} customClassname="animationLTR">
          <div style={{ padding: "10%" }} className={"animationDTT"}>
            <h1>About</h1>
            <p style={{ fontSize: "20px" }}>
              Want To know More About Me Click Here.
            </p>
          </div>
        </Card>
        <Card
          customStyles={{
            width: "100%",
            marginLeft: "-1vw",
          }}
          isLeft
          customClassname="animationRTL"
        >
          <Link to="/projects">
            <div style={{ padding: "10%" }} className={"animationDTT"}>
              <h1>Projects</h1>
              <p style={{ fontSize: "20px" }}>Click Here to see my projects.</p>
            </div>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
