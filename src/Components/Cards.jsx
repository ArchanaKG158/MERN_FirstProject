import React from "react";
import { useNavigate } from "react-router-dom";

let card1 = {
  backgroundColor: "white",
  width: "350px",
  height: "500px",
  margin: "100px 100px",
  borderRadius: "20px",
  border: "3px solid black",
  boxShadow: "7px 20px 15px 10px grey",
};

let image1 = {
  width: "90px",
  height: "65px",
  transform: "translate(21%, 40%)",
};

let card2 = {
  backgroundColor: "white",
  width: "350px",
  height: "480px",
  padding: "10px",
  // margin: "200px 500px",
  borderRadius: "20px",
  border: "3px solid black",
  transform: "translate(140%, -119%)",
  boxShadow: " 7px 20px 15px 10px grey ",
};

let image2 = {
  width: "90px",
  height: "60px",
  transform: "translate(21%, 34%)",
};

let card3 = {
  backgroundColor: "white",
  width: "350px",
  height: "480px",
  padding: "10px",
  // margin: "200px 500px",
  borderRadius: "20px",
  border: "3px solid black",
  transform: "translate(258%, -218%)",
  boxShadow: " 7px 20px 15px 10px grey ",
};

let image3 = {
  width: "90px",
  height: "60px",
  transform: "translate(21%, 34%)",
};

export default function Cards() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <div style={card1}>
        <div style={image1}>
          <img
            style={{
              border: "2px solid black",
              width: "300px",
              height: "260px",
            }}
            src="https://img.freepik.com/free-photo/bird-with-yellow-head-red-feathers-sits-branch-with-flower-background_1340-38639.jpg?t=st=1693919319~exp=1693922919~hmac=952aae705e3d0de86f000ec54e766af5bfb5a3b1ca80067f2146c7fe3d900020"
            alt=""
          />

          <div
            style={{
              justifyContent: "center",
              transform: "translate(50%, 100%)",
              width: "150px",
              height: "11px",
            }}
          >
            <h2>Bird</h2>
          </div>
          <div
            style={{
              justifyContent: "center",
              transform: "translate(20%, 400%)",
              width: "220px",
              height: "11px",
            }}
          >
            <p> Morning Bird Image</p>
            <p>Size: 6 inches Height Up to 2 feet </p>
          </div>
        </div>
      </div>

      <div style={card2}>
        <div style={image2}>
          <img
            style={{
              border: "2px solid black",
              width: "300px",
              height: "250px",
            }}
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
            alt=""
          />
          <div
            style={{
              justifyContent: "center",
              transform: "translate(50%, 100%)",
              width: "150px",
              height: "11px",
            }}
          >
            <h2>Feather</h2>
          </div>
          <div
            style={{
              justifyContent: "center",
              transform: "translate(20%, 400%)",
              width: "220px",
              height: "11px",
            }}
          >
            <p> Magazine Image</p>
            <p>Size: 3 inches Height Up to 2 feet Photo </p>
          </div>
        </div>
      </div>

      <div style={card3}>
        <div style={image3}>
          <img
            style={{
              border: "2px solid black",
              width: "300px",
              height: "260px",
            }}
            src="https://play-lh.googleusercontent.com/l_Lm4yidvp_sfTkoDRdkF0lODJu72jkP4RfPqfPBlrk2X7b2qb0q88BUwt_7QzKSaLY"
            alt=""
          />

          <div
            style={{
              justifyContent: "center",
              transform: "translate(50%, 100%)",
              width: "150px",
              height: "11px",
            }}
          >
            <h2>Cute Anime</h2>
          </div>
          <div
            style={{
              justifyContent: "center",
              transform: "translate(20%, 400%)",
              width: "220px",
              height: "11px",
            }}
          >
            <p> Hello Rabbit</p>
            <p>Size: 8 inches Height Up to 2 feet </p>
          </div>
        </div>
      </div>
    </div>
  );
}
