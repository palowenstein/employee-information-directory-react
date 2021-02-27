import React from "react";
import { Row, Col } from 'antd';
import './style.css';

const SearchResults = (props) => {
  return (
    <div>

      <Row type="flex" align="middle" justify="center">
      <Col span={24}>
      <table class="table" style={{textAlign: "center", margin: "0 auto", width: "100%", maxWidth: 1200, border: "1px solid #9228ae"}}>
        <thead>
          <tr>
            <th scope="col" style={{paddingLeft: 30}}>Visual</th>
            <th scope="col">Last<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">First<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">@<span onClick={props.handleSort}><i id="email" className={props.class}></i></span></th>
            <th scope="col">#<span onClick={props.handleSort}><i id="phone" className={props.class}></i></span></th>
            <th scope="col">Place<span onClick={props.handleSort}><i id="location" className={props.class}></i></span></th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((results) => (
          <tr>
          <td><img src={results.picture.medium} alt="Employee Photo" style={{paddingLeft: 15}} /></td>
          <td> {results.name.last}</td>
          <td> {results.name.first}</td>
          <td> {results.email}</td>
          <td> {results.phone}</td>
          <td>{results.location.country}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </Col>
      </Row>

      <Row type="flex" align="middle" justify="center" className="footerRow">
      <Col span={24}>
      <h6 className="copyright">&copy; 2021 Pierre Andr&eacute; Lowenstein for UCLA Coding Bootcamp.</h6>
      </Col>
      </Row>

    </div>
  );
}

export default SearchResults;