import React from "react";
import "./App.css";

export default function question1() {
  return (
    <div className="question1">
      <p className="question_title">Que cherchez-vous ?</p>
      <div className="op">
        <div className="op1">
          <p>Box Internet</p>
          <img src={router} alt="router" className="router" />
        </div>
        <div className="op2">
          <p>Box Internet + Forfait</p>
          <img src={router_mobile} alt="router" className="router" />
        </div>
      </div>
    </div>
  );
}
