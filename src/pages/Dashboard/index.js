import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Tundra</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Tundra Dashboard</li>
                </ol>
              </Col>

             
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard