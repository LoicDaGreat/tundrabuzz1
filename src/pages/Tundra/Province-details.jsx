import PropTypes from "prop-types"
import React , {useState, useEffect }from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody, Modal } from "reactstrap";
import { MDBDataTable, MDBDataTableV5  } from "mdbreact"
import { withRouter, Link, useHistory, useParams} from "react-router-dom"
import { withTranslation } from "react-i18next"


import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../DB/firebase-init";

function ProvinceDetails() {

    const { id } = useParams();
    let history = useHistory();
    const [dataDb, setData] = useState();

    useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "data"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc?.id, ...doc.data(), 
            });
        })
        const res = list.find((_id) => _id.id === id )
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

console.log(dataDb);

  return (
    <React.Fragment>
      <div className="page-content">

      <Container fluid>

        <Row className="d-flex justify-content-around align-items-center" data-aos="fade-bottom">
      <h1> Province details </h1>
      </Row>

      <h1> {dataDb?.Area} </h1>

      </Container>

      </div>
    </React.Fragment>
  )
}

ProvinceDetails.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(ProvinceDetails))