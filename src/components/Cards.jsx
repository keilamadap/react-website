import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>
        Confira alguns dos pontos turísticos mais badalados
        <br /> do Rio Grande do Norte
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://github.com/keilamadap/react-website/blob/master/public/images/verao.jpg?raw=true"
              text="Praias paradisíacas com piscinas naturais para um dia inesquecível em Natal-RN"
              label="Aventura"
              path="/services"
            />
            <CardItem
              src="https://github.com/keilamadap/react-website/blob/master/public/images/praia_amor.jpg?raw=true"
              text="Viaje para a Praia do Amor localizada em Pipa-RN"
              label="Aventura"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://github.com/keilamadap/react-website/blob/master/public/images/forte_reis.jpg?raw=true"
              text="O Forte dos Reis Magos conta um pouco da história de Natal, localizado na Praia do Meio é uma das maiores atrações turísticas da cidade"
              label="Cultura"
              path="/services"
            />
            <CardItem
              src="https://github.com/keilamadap/react-website/blob/master/public/images/buggy.jpg?raw=true"
              text="Com emoção ou sem emoção? Conheça os passeios de buggy que tornam sua estadia inesquecível e radical"
              label="Aventura"
              path="/services"
            />
            <CardItem
              src="https://github.com/keilamadap/react-website/blob/master/public/images/cajueiro.jpg?raw=true"
              text="O maior cajueiro do MUNDO fica localizado em Pirangi ao norte de Natal"
              label="Natureza"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
