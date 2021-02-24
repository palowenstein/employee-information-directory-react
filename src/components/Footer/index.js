import React from 'react';
import { Row, Col } from 'antd';
import './style.css';

class Footer extends React.Component {
  render() {
    return <div>

            <Row type="flex" align="middle" justify="center" className="footerRow">

            <Col span={24}>
            <h6 className="copyright">&copy; 2021 Pierre Andr&eacute; Lowenstein for UCLA Coding Bootcamp.</h6>
            </Col>

            </Row>

            </div>
  }
};

export default Footer;