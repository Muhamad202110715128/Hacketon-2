import { Container, Row, Col, Card, } from "react-bootstrap";
import LogoImage from '../assets/img/logo-tbnindonesia.png'
import WhoWeAre from '../assets/img/ww.png'
import PBD from '../assets/img/pbd.png'
import Frame from '../assets/img/Frame.png'
import Restoration from '../assets/img/Restoration.png'
import Empowerment from '../assets/img/Empowerment.png'
import Action from '../assets/img/MaskGroup.png'
import Peduli from '../assets/img/Peduli.png'
import Uang from '../assets/img/Uang.png'
import Koneksi from '../assets/img/conectsi.png'

const HomePage = () => {
  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 d-flex align-items-center '>
        <Container>
          <Row className="header-box ">
            <Col>
            <h1> TBN INDONESIA</h1>
            <p>We help you live <br /> carbon neutral</p>
            <button className="me-3 ms-4">Calculate Impact</button>
            </Col>
          </Row>

          <Row className="header-card d-flex justify-content-center">
          <Col>
            <Card className="card1" >
              <Card.Body>
                <Card.Title>Be a Volunteer</Card.Title>
                <Card.Text>
                Join our suport community who share their time, telent and treasure
                </Card.Text>
                <button className="rounded-circle">=</button>
                <Card.Link className="card-link" href="#">Discover More</Card.Link>
              </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className="card2 position-absolute end-0">
              <Card.Body>
                <Card.Title>Upliftting Poverty</Card.Title>
                <Card.Text>
                We take an ecosystem approach to suport social enterprises serving marginalized community in asia
                </Card.Text>
                <button className="rounded-circle">=</button>
                <Card.Link className="card-link" href="#">Discover More</Card.Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </header>

      <Card className="hd-card">
        <Container className="d-flex align-items-center">
        <Row>
              <Col>
              <Card className="card3 ">
                <Card.Body className="mb-0 text-white ">
                  <Card.Title className="fs-1 ">Collaboration for a sustainable future</Card.Title>
                  <br />
                  <Card.Text className="mb-2">
                  Lately, there has been a noticeable rise in collaborations between companies from diverse industries aimed at tackling environmental and social challenges. These partnerships blend unique perspectives and expertise to foster innovative solutions, spur progress, and generate positive impact. Through collective efforts, businesses
                   can harness their resources and influence to build a more sustainable and fair world for future generations.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
                <div>
                  <img className="logo" src={LogoImage} alt="" />
                </div>
              </Col>
            </Row>
        </Container>
    </Card>
    <Card className="hd-card2 border border-white">
        <Container className="d-flex align-items-center">
        <Row>
              <Col>
                <div>
                  <img className="wwa" src={WhoWeAre} alt="" />
                </div>
              </Col>
              <Col>
              <Card className="card4 border border-white ">
                <Card.Body className="mb-0 ">
                  <Card.Title className="title ">Who <span>We Are</span></Card.Title>
                  <br />
                  <Card.Text className="isi mb-2">
                  <span> TBN Indonesia, </span> a social foundation that focuses on social transformation through entrepreneurship, has a website that is less than optimal in communicating its mission and vision, as well as attracting investors and partners. 
                  This results in a lack of awareness and participation in TBN Indonesia's programs, which impacts the social impact it aims to achieve.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
        </Container>
    </Card>

    <div className="w-full flex justify-between bg-slate-900 text-white mx-9 py-2 rounded-[40px] mt-4">
      <img src={PBD} alt="" />
    </div>

    <Card className="hd-card3 ">
        <Container className="d-flex align-items-center">
        <Row>
              <Col>
              <Card className="card">
                <Card.Body className="mb-0 ">
                  <Row className="flex justify-between">
                    <Col>
                      <Card.Title className="title1 ">Our <span>Value</span></Card.Title>
                    </Col>
                    <Col>
                      <Card.Text className="isi1 ">
                      We believe that nature and humans can live together for the preservation of Indonesia's nature.
                      </Card.Text>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Col className="flex text-center">  
                      <img src={Frame} alt="" />
                      <Card.Title className="title mt-2 text-secondary fs-3">Collaboration </Card.Title>
                      <Card.Text className="isi  p-3">
                      We believe in the collaborative power of the collective, where all faiths, all sectors, across national borders, align and work together to amplify restoration and empowerment efforts.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Empowerment} alt="" />
                      <Card.Title className="title mt-2 text-secondary fs-3">Empowerment </Card.Title>
                      <Card.Text className="isi p-3">
                      Social entrepreneurs, business owners, and leaders are trained and equipped with business know-how, leadership skills, and character development, enabling transformative change through gateways of faith, purpose, and inner leadership.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Restoration} alt="" />
                      <Card.Title className="title mt-2 text-secondary fs-3">Restoration </Card.Title>
                      <Card.Text className="isi p-3">
                      The dignity of work and economic empowerment is restored by enterprises and markets, moving from charity and philanthropy to long-term sustainability.
                      </Card.Text>
                    </Col>
                  </Row>

                </Card.Body>
              </Card>
              </Col>
            </Row>
        </Container>
    </Card>

    <Card className="hd-card4 ">
        <Container className="d-flex align-items-center text-white">
        <Row>
              <Col>
              <Card className="card">
                <Card.Body className="mb-0 ">
                  <Row className="flex justify-between text-white">
                    <Col>
                      <Card.Title className="title1">SETH</Card.Title>
                    </Col>
                    <Col>
                      <Card.Text className="isi ">
                      The SETH (Social Enterprise Training Hub) programme helps high-potential post-revenue social enterprises to be more investment-ready through business scaling support, 
                      tailored expertise and investment pitch coaching.
                      </Card.Text>
                    </Col>
                  </Row>

                  <Row className="set-card mt-5 text-white">
                    <Col className=" flex text-center">  
                      <img src={Action} alt="" />
                      <Card.Title className="title">Action-oriented curriculum </Card.Title>
                      <Card.Text className="isi">
                      The programme structure is 25% theory and 75%  <br />application. Every cohort is curated according to the industry interest of participating investors. 
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Koneksi} alt="" />
                      <Card.Title className="title">Empowerment </Card.Title>
                      <Card.Text className="isi">
                      Business mentors, specialist advisors, and coaches  <br /> support on business model, strategy, operations and 
                      personal development.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Peduli} alt="" />
                      <Card.Title className="title ">High touch peer support and evaluation </Card.Title>
                      <Card.Text className="isi mt-2">
                      Peers comment on each other’s business model, as well as evaluate and score each other’s performance.
                      </Card.Text>
                    </Col>
                    <Col className="flex text-center">
                      <img src={Uang} alt="" />
                      <Card.Title className="title">Early involvement of prospective investors </Card.Title>
                      <Card.Text className="isi ">
                      Investor network members are aware of the pool of <br />
                      SETH applicants and can serve as business mentors, <br />
                      specialist advisors, or coaches.
                      </Card.Text>
                    </Col>
                  </Row>

                </Card.Body>
              </Card>
              </Col>
            </Row>
        </Container>
    </Card>
    </div>
  )
}

export default HomePage
