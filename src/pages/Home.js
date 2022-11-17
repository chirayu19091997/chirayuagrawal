import React from "react";
import "../styles/Home.css";
import Card from "../components/Card/Card";
import Lottie from "react-lottie";
import * as HiAnimation from "../assets/HiAnimMan.json";

const Home = () => {
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
              Hey, I'm Chirayu Agrawal, <br />A Fullstack Developer With 2 Years
              of Experience.
            </h1>
            <br />
            {/* <hr style={{ border: "1px solid black" }} />
            <br /> */}
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
              height={400}
              width={400}
            />
          </div>
        </Card>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          customStyles={{ width: "45vw" }}
          customClassname="animationLTR"
          isLeft
          gradientShaders={{ right: "#1565C0", left: "#b92b27" }}
        >
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
          <div style={{ padding: "10%" }} className={"animationDTT"}>
            <h1>Projects</h1>
            <p style={{ fontSize: "20px" }}>Click Here to see my projects.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
