import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Junte-se a nós para receber novidades exclusivas de destinos para
          viajar nas férias
          <br /> e pacotes promocionais para família!
        </p>
        <p className="footer-subscription-text">
          Esta assinatura pode ser cancelada a qualquer momento{" "}
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              placeholder="Seu E-mail"
              type="text"
              name="email"
            />
            <Button buttonStyle="btn--outline">Se inscreva</Button>
          </form>
        </div>

        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Sobre nós</h2>
              <Link to="/sign-up">Quem somos</Link>
              <Link to="/">Testemunhos</Link>
              <Link to="/">Carreiras</Link>
              <Link to="/">Investidores</Link>
              <Link to="/">Nossa política</Link>
            </div>
            <div class="footer-link-items">
              <h2>Contato</h2>
              <Link to="/">Fale Conosco</Link>
              <Link to="/">Ajuda</Link>
              <Link to="/">Destinos</Link>
              <Link to="/">Parceiros</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Videos</h2>
              <Link to="/">Envie um vídeo</Link>
              <Link to="/">Embaixadores</Link>
              <Link to="/">Agência</Link>
              <Link to="/">Seja um Influencer</Link>
            </div>
            <div class="footer-link-items">
              <h2>Redes Sociais</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
        <section class="social-media">
          <div class="social-media-wrap">
            <small class="website-rights">KAP © 2022</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Footer;
