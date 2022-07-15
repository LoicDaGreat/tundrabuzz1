import React from "react"
import MetaTags from 'react-meta-tags';

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  Container,
} from "reactstrap"

// import images
import  Eastern_Cape  from "../../../assets/images/provinces/Eastern_Cape.png"
import  Free_State  from "../../../assets/images/provinces/Free_State.png"
import  Gauteng  from "../../../assets/images/provinces/Gauteng.png"
import  KZN from "../../../assets/images/provinces/KZN.png"
import  Limpopo from "../../../assets/images/provinces/Limpopo.png"
import  Mpumalanga  from "../../../assets/images/provinces/Mpumalanga.png"
import  North_West from "../../../assets/images/provinces/North_West.png"
import  Northern_Cape  from "../../../assets/images/provinces/Northern_Cape.png"
import  Western_Cape  from "../../../assets/images/provinces/Western_Cape.png"

import { Link } from "react-router-dom"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

const Provinces = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Cards | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          {/* <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Cards" /> */}

          <Row>
          <Col md={4}>
              <Card>
              <CardBody>
                <CardImg top className="img-fluid" src={North_West} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">NORTH WEST</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   

            <Col md={4}>
              <Card>
              <CardBody>
                <CardImg top className="img-fluid" src={Free_State} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">FREE STATE</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   

            <Col md={4}>
                
              <Card>
                <CardBody>
                <CardImg top className="img-fluid" src={Gauteng} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">GAUTENG</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   
          </Row>

          <Row>
            <Col md={4}>
              <Card>
              <CardBody>
                <CardImg top className="img-fluid" src={KZN} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">KWA-ZULU NATAL</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   

            <Col md={4}>
              <Card>
              <CardBody>
                <CardImg top className="img-fluid" src={Limpopo} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">LIMPOPO</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   

            <Col md={4}>
                
              <Card>
                <CardBody>
                <CardImg top className="img-fluid" src={Mpumalanga} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">MPUMALANGA</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   
          </Row>

          <Row>
          <Col md={4}>
              <Card>
              <CardBody>
                <CardImg top className="img-fluid" src={Eastern_Cape} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">EASTERN CAPE</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   
    
            <Col md={4}>
              <Card>
              <CardBody>
                <CardImg top className="img-fluid" src={Northern_Cape} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">NORTHERN CAPE</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   

            <Col md={4}>
                
              <Card>
                <CardBody>
                <CardImg top className="img-fluid" src={Western_Cape} alt="Veltrix" />
                </CardBody>
                <CardBody>
                  <CardTitle className="h4">WESTERN CAPE</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="text-center">
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light">
                    Button
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>   
          </Row>




        </Container>
      </div>
    </React.Fragment>
  )
}
export default Provinces
