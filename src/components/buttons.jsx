import React from "react";
import "./buttons.css";

const Buttons = () => {
  return (
    <div className="btn-panel">
      <div className="btn1str">
        <div className="btn ac bg-grey">AC</div>
        <div className="btn plus-minus bg-grey">+/-</div>
        <div className="btn percent bg-grey">%</div>
        <div className="btn divs bg-orange">/</div>
      </div>
      <div className="btn2str">
        <div className="btn seven">7</div>
        <div className="btn eigth">8</div>
        <div className="btn nine">9</div>
        <div className="btn mylt bg-orange">X</div>
      </div>
      <div className="btn3str">
        <div className="btn four">4</div>
        <div className="btn five">5</div>
        <div className="btn six">6</div>
        <div className="btn minus bg-orange">-</div>
      </div>
      <div className="btn4str">
        <div className="btn one">1</div>
        <div className="btn two">2</div>
        <div className="btn three">3</div>
        <div className="btn plus bg-orange">+</div>
      </div>
      <div className="btn5str">
        <div className="btn zero">0</div>
        <div className="btn -dot">.</div>
        <div className="btn eqqual1 bg-orange">=</div>
      </div>
    </div>
  );
};
export default Buttons;
