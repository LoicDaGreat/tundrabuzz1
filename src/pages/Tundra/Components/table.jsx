import PropTypes from "prop-types"
import React , {useState, useEffect }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody, Modal } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory, useParams} from "react-router-dom"
import { withTranslation } from "react-i18next"


import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../../DB/firebase-init";

function TundraTable() {

    const { id } = useParams();
    let history = useHistory();
    const [dataDb, setData] = useState();


    useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      let list_2 = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "data"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc?.id, ...doc.data(), 
                viewBtn : <button className="btn login-btn" onClick={() => history.push(`/province-details/${doc.id}`)}>View</button>});
        })

        let arr = []
        const keep = list.map(el =>  {
            if(el.Province === id){
              arr.push(el)
            }
        } )
        console.log(arr);
       setData(arr)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

console.log(dataDb);

  const column = [
   {label: "Area",field: "Area",sort: "asc",width: 150},
   {label: "District Municipality",field: "District Municipality",sort: "asc",width: 150},
   {label: "Local Municipality",field: "Local Municipality",sort: "asc",width: 150},
   {label: "View",field: "viewBtn",sort: "asc",width: 150},
  ];

 const data = { 
    columns: column,
    rows: dataDb,  
 } 

  return (
    <React.Fragment>
      <div className="page-content">

      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
          {
            /* 
            <div>
              <Link  className="btn login-btn w-md waves-effect waves-light" > + Add Tundra </Link>
            </div>
            */
          }
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