import React, { Component } from "react";
import "./Form.css";

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ram: "",
      weight: "",
      company: "",
      type: "",
      submitted : false,
      touchscreen: false,
      ips: false,
      gpu:"",
      OpSys:"",
      cpu_name:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  

  

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { ram, weight, company,type,touchscreen,ips,gpu,OpSys,cpu_name } = this.state;

    if(ram && weight && company && type && touchscreen || ips && gpu && OpSys && cpu_name)
    {
        /////// backend calling
        this.setState({ram: "",
        weight: "",
        company: "",
        type: "",
        submitted : false,
        touchscreen: false,
        ips: false,
        gpu:"",
        OpSys:"",
        cpu_name:""})
      
    }
    else{
      alert("Fill all the inputs!")
    }

    console.log(
      "RAM: " +
        ram +
        "Weight: " +
        weight +
        " Company: " +
        company +
        " Type : "+ type+ 
        " Touchscreen : "+touchscreen+
        " IPS : "+ips+
        " GPU : "+gpu+
        " OpSys : "+OpSys+
        " cpu_name "+cpu_name
    );
  }

  render() {
    const { ram, weight, company, type,submitted, touchscreen,ips,gpu,OpSys,cpu_name } = this.state;

    return (
      <Container className="login-container">
        <Row>
          <Col sm={12} md={12}>
            <div className="login-title">Laptop Price Detector</div>
          </Col>
        </Row>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>RAM (GB)</label>
                <input
                  type="text"
                  className="form-control"
                  name="ram"
                  value={ram}
                  onChange={this.handleChange}
                />
                {submitted && !ram && (
                  <div className="error-block">RAM value is required</div>
                )}
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>Weight (kg)</label>
                <input
                  type="text"
                  className="form-control"
                  name="weight"
                  value={weight}
                  onChange={this.handleChange}
                />
                {submitted && !weight && (
                  <div className="error-block">Weight is required</div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>Company</label>
                <select
                id="dropdown"
                className="form-control"
                name="company"
                value={company}
                onChange={this.handleChange}
              >
                <option value="">Choose an option</option>
                <option value="Acer">Acer</option>
                <option value="Apple">Apple</option>
                <option value="Asus">Asus</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                <option value="MSI">MSI</option>
                <option value="Toshiba">Toshiba</option>
                <option value="Other">Other</option>
              </select>
                {submitted && !company && (
                  <div className="error-block">company is required</div>
                )}
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>Type</label>
                <select
                id="dropdown"
                className="form-control"
                name="type"
                value={type}
                onChange={this.handleChange}
              >
                <option value="">Choose an option</option>
                <option value="2 in 1 Convertible">2 in 1 Convertible</option>
                <option value="Gaming">Gaming</option>
                <option value="Netbook">Netbook</option>
                <option value="Notebook">Notebook</option>
                <option value="Ultrabook">Ultrabook</option>
                <option value="Workstation">Workstation</option>
              </select>
                {submitted && !type && (
                  <div className="error-block">Type is required </div>
                )}
                
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
            <div className="form-check">
              <input className="form-check-input" id="gridCheck" name="touchscreen" disabled={ips}   onChange={()=>this.setState({touchscreen:!this.state.touchscreen})} checked={this.state.touchscreen} style ={{defaultChecked: this.state.touchscreen}} type="checkbox"/>
              <label className="form-check-label" htmlFor="gridCheck">
                Touch Screen
              </label>
            </div>
            </Col>
            <Col sm={12} md={6}>
            <div className="form-check">
              <input className="form-check-input" id="gridCheck" name="ips" disabled={touchscreen}  onChange={()=>this.setState({ips:!this.state.touchscreen})} checked={this.state.ips} style ={{defaultChecked: this.state.ips}} type="checkbox"/>
              <label className="form-check-label" htmlFor="gridCheck">
                IPS
              </label>
            </div>
            </Col>
          </Row>
          <Row>
          <Col sm={12} md={6}>
              <div className="form-group">
                <label>GPU</label>
                <select
                id="dropdown"
                className="form-control"
                name="gpu"
                value={gpu}
                onChange={this.handleChange}
              >
                <option value="">Choose an option</option>
                <option value="AMD">AMD</option>
                <option value="ARM">ARM</option>
                <option value="Intel">Intel</option>
                <option value="Nvidia">Nvidia</option>
              </select>
                {submitted && !gpu && (
                  <div className="error-block">GPU is required </div>
                )}
                
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="form-group">
                <label>Operating System</label>
                <select
                id="dropdown"
                className="form-control"
                name="OpSys"
                value={OpSys}
                onChange={this.handleChange}
              >
                <option value="">Choose an option</option>
                <option value="Linux">Linux</option>
                <option value="Mac">Mac</option>
                <option value="Windows">Windows</option>
                <option value="Other">Other</option>
              </select>
                {submitted && !OpSys && (
                  <div className="error-block">Operating System is required </div>
                )}
                
              </div>
            </Col>
          </Row>
          <Row>
          <Col sm={12} md={6}>
              <div className="form-group">
                <label>CPU Name</label>
                <select
                id="dropdown"
                className="form-control"
                name="cpu_name"
                value={cpu_name}
                onChange={this.handleChange}
              >
                <option value="">Choose an option</option>
                <option value="AMD">AMD</option>
                <option value="Intel Core i3">Intel Core i3</option>
                <option value="Intel Core i5">Intel Core i5</option>
                <option value="Intel Core i7">Intel Core i7</option>
                <option value="Other">Other</option>
              </select>
                {submitted && !cpu_name && (
                  <div className="error-block">CPU Name is required </div>
                )}
                
              </div>
            </Col>
          </Row>



          <Row>
            <Col>
              <div className="form-group button-section">
                <button className="btn btn-primary">
                  Start to Predict <FontAwesomeIcon icon={faCaretRight} />{" "}
                </button>
              </div>
              
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}