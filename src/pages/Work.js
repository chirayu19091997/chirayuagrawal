import React from "react";
import Projects from "../utils/Projects";
import Card from "../components/Card/Card";

const Work = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Projects.map((item, index) => {
        return (
          <Card customStyles={{ width: "70vw", height: "80vh" }}>
            <div style={{ padding: "10%" }} className={"animationDTT"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <h3 style={{ display: "flex", paddingBottom: "2vh" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{ paddingTop: "2vh", borderTop: "1px solid black" }}
                  >
                    {item.description}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  {item.techstack.map((techItem, techIndex) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          minWidth: "50px",
                          background: "lightgray",
                          borderRadius: "999px",
                          padding: "5px",
                          margin: "0 4px",
                          justifyContent: "center",
                        }}
                      >
                        {techItem}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Work;
