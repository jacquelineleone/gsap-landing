import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div class="hero-image-start"></div>
      <div class="preloader">
        <p class="preloader__text">
          <span>Say hello to N3</span>
        </p>
        <div class="preloader__background"></div>
      </div>
      <header class="header">
        <p class="header__menu">Menu</p>
        <p class="header__logo">N3</p>
        <button class="button">Order</button>
      </header>
      <div class="hero__wrapper">
        <section class="hero">
          <div class="hero__image">
            <img src="./hero.jpg" alt="N3 Bike" />
          </div>
          <div class="hero__content">
            <p class="hero__caption">
              <span>More details. More fun.</span>
            </p>
            <h1 class="hero__title">
              <span>
                <span>A new way to </span>
              </span>
              <span>
                <span>ride in style.</span>
              </span>
            </h1>
            <button class="hero__button button button--white">Explore</button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
