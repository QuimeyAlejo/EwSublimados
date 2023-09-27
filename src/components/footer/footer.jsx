import React from "react";
import { Link } from "react-router-dom";
import ig from "../../assets/img/instagram.svg";
import { Nav } from "react-bootstrap";
export default function footer() {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <div className="container">
          <nav className="row">
            <a id="contacto"></a>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">Contacto</li>
              <li className="font-weight-bold mb-2">+54 9 341 327 0205</li>
              <li className="font-weight-bold mb-2">xxxxxxx@gmail.com</li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5493413270205&text=Hola, Ew Subliminados"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">
                Rosario, Santa Fe , Argentina
              </li>
              <li className="font-weight-bold mb-2">Av Siempre Viva 123</li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">
                <Nav.Link href="/">Inicio</Nav.Link>
              </li>
              <li className="font-weight-bold mb-2">
                <Nav.Link to="#productos">Productos</Nav.Link>
              </li>
              <li className="font-weight-bold mb-2">
                <Nav.Link to="#nosotros">Quienes somos</Nav.Link>
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">Redes</li>
              <li className="font-weight-bold mb-2">
                <Link
                  to="https://www.instagram.com/ewsublimados/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img src={ig} alt="img" style={{ marginRight: "10px" }} />
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
