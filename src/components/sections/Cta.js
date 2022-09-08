import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const names = [
  "Joressa",
  "Ximena",
  "Luis",
  "Juan",
  "Pedro",
  "Maria",
  "Jose",
  "Adela",
]; //8
const comments = [
  "Hola",
  "Como estas",
  "Que tal",
  "Buenas tardes",
  "Buenas noches",
  "Buenos dias",
  "Buenas tardes",
  "Buenas noches",
]; // 8
const emails = [
  "@email.com",
  "@hotmail.com",
  "@gmail.com",
  "@yahoo.com",
  "@outlook.com",
  "@live.com",
  "@aol.com",
  "@icloud.com",
]; //8

const intRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [comment, setComment] = useState("");
  const [code, setCode] = useState("");

  const handleCode = (value) => {
    setCode(value);
    const index = intRandom(0, 8);
    if (value === "1234") {
      setName(names[index]);
      setEmail(names[index] + emails[intRandom(0, 8)]);
      setComment(comments[intRandom(0, 8)]);
    } else {
      setName("");
      setEmail("");
      setComment("");
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              ¿Te interesa formar parte de nuestro equipo?
            </h3>
          </div>
          <div className="cta-action">
            {/* <div className="m-10">Nombre</div> */}
            <Input
              id="text"
              type="text"
              label="text"
              labelHidden
              placeholder="Nombre"
              className="mt-16"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>

            <Input
              id="newsletter"
              type="email"
              label="Subscribe"
              labelHidden
              placeholder="Correo electrónico"
              className="mt-16"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>

            <Input
              id="textarea"
              type="textarea"
              label="textarea"
              labelHidden
              placeholder="Comentario"
              className="mt-16"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></Input>

            <Input
              id="text"
              type="text"
              label="text"
              labelHidden
              placeholder="Código"
              className="mt-16"
              value={code}
              onChange={(e) => handleCode(e.target.value)}
            ></Input>

            <Button tag="a" color="white" className="mt-16" wideMobile href="#">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
