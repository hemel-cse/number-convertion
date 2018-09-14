import React, { Component } from 'react';
import { Button, Layout, Row, Col, Card, Input, Divider, message } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

class App extends Component {

  constructor(props) {
    super(props);

    this.handleChangeBinToDec = this.handleChangeBinToDec.bind(this);
    this.handleChangeBinToDecInp = this.handleChangeBinToDecInp.bind(this);
    this.handleChangeBinToOct = this.handleChangeBinToOct.bind(this);
    this.handleChangeBinToOctInp = this.handleChangeBinToOctInp.bind(this);

    this.state = {
      BinToDec: "",
      BinToDecRes: "",
      BinToOct: "",
      BinToOctRes: "",

    };
  
  }

  handleChangeBinToDecInp(e) {
    e.preventDefault();

    this.setState({BinToDec: e.target.value});

  }

  handleChangeBinToDec() {

    let bin = parseInt(this.state.BinToDec, 2);

    if(isNaN(bin)){
      message.error("Invaliid Binary Number", 2, this.setState({
      BinToDec: "",
      BinToDecRes: ""
      }));
    }
    else {
      let bindec = bin.toString(10);
      this.setState({
      BinToDecRes: bindec,
     });
    }
  }

  handleChangeBinToOctInp(e) {
    e.preventDefault();

    this.setState({BinToOct: e.target.value});

  }

  handleChangeBinToOct() {

    let bin = parseInt(this.state.BinToOct, 2);

    if(isNaN(bin)){
      message.error("Invaliid Binary Number", 2, this.setState({
      BinToOct: "",
      BinToOctRes: ""
      }));
    }
    else {
      let binoct = bin.toString(8);
      this.setState({
      BinToOctRes: binoct,
     });
    }
  }

  render() {
    return (
      <Layout>
        <Header className="App-header">Number Conversion</Header>
        <Layout>
          <Content>
            <Row gutter={8} justify="center" type="flex">
              <Col span={12}>
                <div className="App-card">
                  <Card title="Binary to Decimal">
                    <Input 
                      defaultValue="1010"
                      value={this.state.BinToDec} 
                      onChange={this.handleChangeBinToDecInp}
                      onPressEnter={this.handleChangeBinToDec}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeBinToDec}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: {this.state.BinToDecRes}</h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Binary to Octal">
                    <Input 
                      defaultValue="123"
                      value={this.state.BinToOct} 
                      onChange={this.handleChangeBinToOctInp}
                      onPressEnter={this.handleChangeBinToOct}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeBinToOct}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: {this.state.BinToOctRes}</h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Binary to Octal">
                    <Button type="primary">Convert</Button>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Binary to Octal">
                    <Button type="primary">Convert</Button>
                  </Card>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer className="App-footer">Copyright - BUBT</Footer>
      </Layout>
    );
  }
}

export default App;
