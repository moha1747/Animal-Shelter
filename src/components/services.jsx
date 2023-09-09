import React, { useState } from "react";
import "../styles/services.css";
import Petition from "./petition";

const Services = () => {
  const [signatures, setSignatures] = useState([]);
  return (
    <div className=" services__container">
      <section id="services">
        <div className="petition__header">
          <h2 style={{ color: "#fff" }}>Support Our Mission</h2>
        </div>
        <div className="petition__container">
          <div className="petition__parent">
            <div class="shadow div1__p">
              <p>
                Animal shelters are a beacon of hope for countless abandoned and
                distressed animals. They offer safety, care, and a chance at a
                new life. But they can't do it alone. These shelters need our
                support to continue their essential work. By backing our
                mission, you're giving every animal an opportunity for a loving
                home. Join us in making a difference. Every animal deserves
                kindness and care.
              </p>
            </div>

            <div class="div2 shadow div2__p">
              Signatures
              <br />
              <br />
              <br />
              Abbaas Mohamud,M
              {signatures.map((signature, idx) => (
                <div key={idx}>
                  {" "}
                  {signature.fullName}, {signature.hometown}
                </div>
              ))}
            </div>
          </div>

          <div className="div4__p">
            <Petition signatures={signatures} setSignatures={setSignatures} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
