import { useState } from "react";
import ReuseInput from "../reuesable/ReuseInput";

export default function Input({ onchangeHandler, values }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <ReuseInput
          onChange={(e) => onchangeHandler("initialInvestment", e.target.value)}
          content="initial investment"
          value={values.initialInvestment}
        />
        <ReuseInput
          onChange={(e) => onchangeHandler("annualInvestment", e.target.value)}
          content="annual investment"
          value={values.annualInvestment}
        />
      </div>
      <div className="input-group">
        <ReuseInput
          onChange={(e) => onchangeHandler("expectedReturn", e.target.value)}
          content="expected return"
          value={values.expectedReturn}
        />
        <ReuseInput
          onChange={(e) => onchangeHandler("duration", e.target.value)}
          content="duration"
          value={values.duration}
        />
      </div>
    </section>
  );
}
