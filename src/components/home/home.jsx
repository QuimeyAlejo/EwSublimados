import {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import styles from "./home.module.css";
import { ArrowRightCircle, Coin } from "react-bootstrap-icons";
import gorras from '../../assets/img/gorra1.webp'
import gorras2 from '../../assets/img/gorra2.webp'
import gorras3 from '../../assets/img/gorra 3.webp'
import remera1 from '../../assets/img/remera3.webp'
import remera2 from '../../assets/img/remera 2.webp'
import remera3 from '../../assets/img/remera1.webp'
import About from '../about/about';

function home() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.project} id="#productos">
      
      <About/><a id="inicio"></a>
      <Container>
        <Row>
          <Col>
            <div className="" data-aos="flip-left">
              <a id="productos"></a>
              <h2>Gorras</h2>
              <p>
                Para eventos, merchandaising, uso comercial o personal, gorras personalizadas en dft, 
                hacemos tu diseño una realidad
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>

                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={gorras}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Gorras</h4>
                          <span>
                            Gorras personalizadas en dtf para uso comercial, merchandaising ,algun tipo de evento 
                            o de uso personal
                            
                          </span>
                          <div>
                            <a href="https://www.instagram.com/p/Cv7368axLEO/">
                              <button className={styles.buttonCard}>
                                Ver Producto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={gorras3}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Gorras</h4>
                          <span>
                            Gorras personalizadas en dtf para uso comercial, merchandaising ,algun tipo de evento 
                            o de uso personal
                            
                          </span>
                          <div>
                            <a href="https://www.instagram.com/p/Cv7368axLEO/">
                              <button className={styles.buttonCard}>
                                Ver Producto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={gorras2}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Gorras</h4>
                          <span>
                            Gorras personalizadas en dtf para uso comercial, merchandaising ,algun tipo de evento 
                            o de uso personal
                            
                          </span>
                          <div>
                            <a href="https://www.instagram.com/p/Cv7368axLEO/">
                              <button className={styles.buttonCard}>
                                Ver Producto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                   
                  
                   
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
          
        </Row>
      </Container>
      
      <img
        className={styles.backgroundimageright}
        
        alt="img bg"
      />
      <Container>
      <Col>
            <div className="" data-aos="flip-left">
              <h2>Remeras</h2>
              <p>
                Produccion de indumentarias, como remeras en vinil textil y dtf
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>

                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={remera3}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Remera</h4>
                          <span>
                           Remera de algodon con imagen dtf personalizada
                            
                          </span>
                          <div>
                            <a href="https://www.instagram.com/p/Cw8PmhgxREN/?img_index=1">
                              <button className={styles.buttonCard}>
                                Ver Producto <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={remera2}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Remera Ketsal</h4>
                          <span>
                            
                          </span>
                          
                        </div>
                      </div>
                    </Col>
                  
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={remera1}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Remera</h4>
                          <span>
                            Remera de algodon con sublimado
                          </span>
                        
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
      </Container>
    </section>
    
  );
}

export default home;