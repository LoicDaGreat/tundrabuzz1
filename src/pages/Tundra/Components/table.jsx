import PropTypes from "prop-types"
import React , {useState }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody, Modal } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory} from "react-router-dom"
import { withTranslation } from "react-i18next"

// import Breadcrumb from "../../components/Common/Breadcrumb";
// import MetaTagComp from "../../components/Common/MetaTags";

function TundraTable() {

    let history = useHistory();

    const [dataDb, setData] = useState(
      [
        {
          property_name :"Gallagher",
          property_code :"234",
          unit_name :"floor 5",
          total_rooms :10,
          pament_method :"Cash",
          late_fee :"Penalty",
          late_fee_cost : 400,
          Frequency :"Monthly",
    
          viewBtn : <button className="btn login-btn" onClick={() => history.push(`/tundra-details/${1}`)}>View</button>,
    
          editBtn : <button className="btn btn-primary" 
          onClick={() => history.push(`/tundra`)}>Edit</button>,
    
          deleteBtn : <button className="btn btn-danger" 
          onClick={() =>console.log("delete")}>Delete</button>,
    
        }
      ]
    );

    



  const column = [
   {label: "Property Name",field: "property_name",sort: "asc",width: 150},
   {label: "Property Code",field: "property_code",sort: "asc",width: 150},
   {label: "Property Type",field: "pament_method",sort: "asc",width: 150},
   {label: "Number of Units",field: "unit_name",sort: "asc",width: 150},
   {label: "View",field: "viewBtn",sort: "asc",width: 150},
   {label: "Edit",field: "editBtn",sort: "asc",width: 150},
   {label: "Delete",field: "deleteBtn",sort: "asc",width: 150},
  ];

 const data = { 
  columns: column,
  rows: dataDb,  
 } 
 

  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTagComp meta_tags="Tundra" />
      <Breadcrumb default="Dashboard" title="Tundra" />

      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
          <div>
            <Link  className="btn login-btn w-md waves-effect waves-light" > + Add Tundra </Link>
          </div>
          </Row>
        </div>

        <Row className="d-flex justify-content-around align-items-center" data-aos="fade-bottom">
        <CardBody>
          <Card className="bd-rds">
            <CardBody>
              <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover  data={data} fullPagination />            
            </CardBody>
          </Card>
        </CardBody>
      </Row>

      </Container>

      </div>
    </React.Fragment>
  )
}

TundraTable.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(TundraTable))