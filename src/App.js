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
    this.handleChangeBinToHex = this.handleChangeBinToHex.bind(this);
    this.handleChangeBinToHexInp = this.handleChangeBinToHexInp.bind(this);

    this.handleChangeOctToBin = this.handleChangeOctToBin.bind(this);
    this.handleChangeOctToBinInp = this.handleChangeOctToBinInp.bind(this);
    this.handleChangeOctToDec = this.handleChangeOctToDec.bind(this);
    this.handleChangeOctToDecInp = this.handleChangeOctToDecInp.bind(this);
    this.handleChangeOctToHex = this.handleChangeOctToHex.bind(this);
    this.handleChangeOctToHexInp = this.handleChangeOctToHexInp.bind(this);

    this.handleChangeDecToBin = this.handleChangeDecToBin.bind(this);
    this.handleChangeDecToBinInp = this.handleChangeDecToBinInp.bind(this);
    this.handleChangeDecToOct = this.handleChangeDecToOct.bind(this);
    this.handleChangeDecToOctInp = this.handleChangeDecToOctInp.bind(this);
    this.handleChangeDecToHex = this.handleChangeDecToHex.bind(this);
    this.handleChangeDecToHexInp = this.handleChangeDecToHexInp.bind(this);

    this.handleChangeHexToBin = this.handleChangeHexToBin.bind(this);
    this.handleChangeHexToBinInp = this.handleChangeHexToBinInp.bind(this);
    this.handleChangeHexToOct = this.handleChangeHexToOct.bind(this);
    this.handleChangeHexToOctInp = this.handleChangeHexToOctInp.bind(this);
    this.handleChangeHexToDec = this.handleChangeHexToDec.bind(this);
    this.handleChangeHexToDecInp = this.handleChangeHexToDecInp.bind(this);

    this.state = {
      BinToDec: "",
      BinToDecRes: "",
      BinToOct: "",
      BinToOctRes: "",
      BinToHex: "",
      BinToHexRes: "",
      OctToBin: "",
      OctToBinRes: "",
      OctToDec: "",
      OctToDecRes: "",
      OctToHex: "",
      OctToHexRes: "",
      DecToBin: "",
      DecToBinRes: "",
      DecToOct: "",
      DecToOctRes: "",
      DecToHex: "",
      DecToHexRes: "",
      HexToBin: "",
      HexToBinRes: "",
      HexToOct: "",
      HexToOctRes: "",
      HexToDec: "",
      HexToDecRes: "",
    };
  
  }

  handleChangeBinToDecInp(e) {
    e.preventDefault();

    this.setState({BinToDec: e.target.value});

  }

  handleChangeBinToDec() {

    let bin = parseInt(this.state.BinToDec, 2);

    if(isNaN(bin)){
      message.error("Invalid Binary Number", 2, this.setState({
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
      message.error("Invalid Binary Number", 2, this.setState({
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

  handleChangeBinToHexInp(e) {
    e.preventDefault();

    this.setState({BinToHex: e.target.value});

  }

  handleChangeBinToHex() {

    let bin = parseInt(this.state.BinToHex, 2);

    if(isNaN(bin)){
      message.error("Invalid Binary Number", 2, this.setState({
      BinToHex: "",
      BinToHexRes: ""
      }));
    }
    else {
      let binhex = bin.toString(16);
      this.setState({
      BinToHexRes: binhex,
     });
    }
  }

  handleChangeOctToBinInp(e) {
    e.preventDefault();

    this.setState({OctToBin: e.target.value});

  }

  handleChangeOctToBin() {

    let oct = parseInt(this.state.OctToBin, 8);

    if(isNaN(oct)){
      message.error("Invalid Octan Number", 2, this.setState({
      OctToBin: "",
      OctToBinRes: ""
      }));
    }
    else {
      let octbin = oct.toString(2);
      this.setState({
      OctToBinRes: octbin,
     });
    }
  }

  handleChangeOctToDecInp(e) {
    e.preventDefault();

    this.setState({OctToDec: e.target.value});

  }

  handleChangeOctToDec() {

    let oct = parseInt(this.state.OctToDec, 8);

    if(isNaN(oct)){
      message.error("Invalid Octan Number", 2, this.setState({
      OctToDec: "",
      OctToDecRes: ""
      }));
    }
    else {
      let octdec = oct.toString(10);
      this.setState({
      OctToDecRes: octdec,
     });
    }
  }

  handleChangeOctToHexInp(e) {
    e.preventDefault();

    this.setState({OctToHex: e.target.value});

  }

  handleChangeOctToHex() {

    let oct = parseInt(this.state.OctToHex, 8);

    if(isNaN(oct)){
      message.error("Invalid Octan Number", 2, this.setState({
      OctToHex: "",
      OctToHexRes: ""
      }));
    }
    else {
      let octhex = oct.toString(16);
      this.setState({
      OctToHexRes: octhex,
     });
    }
  }

  handleChangeDecToBinInp(e) {
    e.preventDefault();

    this.setState({DecToBin: e.target.value});

  }

  handleChangeDecToBin() {

    let dec = parseInt(this.state.DecToBin, 10);

    if(isNaN(dec)){
      message.error("Invalid Decimal Number", 2, this.setState({
      DecToBin: "",
      DecToBinRes: ""
      }));
    }
    else {
      let decbin = dec.toString(2);
      this.setState({
      DecToBinRes: decbin,
     });
    }
  }

  handleChangeDecToOctInp(e) {
    e.preventDefault();

    this.setState({DecToOct: e.target.value});

  }

  handleChangeDecToOct() {

    let dec = parseInt(this.state.DecToOct, 10);

    if(isNaN(dec)){
      message.error("Invalid Decimal Number", 2, this.setState({
      DecToOct: "",
      DecToOctRes: ""
      }));
    }
    else {
      let decoct = dec.toString(8);
      this.setState({
      DecToOctRes: decoct,
     });
    }
  }

  handleChangeDecToHexInp(e) {
    e.preventDefault();

    this.setState({DecToHex: e.target.value});

  }

  handleChangeDecToHex() {

    let dec = parseInt(this.state.DecToHex, 10);

    if(isNaN(dec)){
      message.error("Invalid Decimal Number", 2, this.setState({
      DecToHex: "",
      DecToHexRes: ""
      }));
    }
    else {
      let dechex = dec.toString(8);
      this.setState({
      DecToHexRes: dechex,
     });
    }
  }

  handleChangeHexToBinInp(e) {
    e.preventDefault();

    this.setState({HexToBin: e.target.value});

  }

  handleChangeHexToBin() {

    let hex = parseInt(this.state.HexToBin, 16);

    if(isNaN(hex)){
      message.error("Invalid Hexa Decimal Number", 2, this.setState({
      HexToBin: "",
      HexToBinRes: ""
      }));
    }
    else {
      let hexbin = hex.toString(2);
      this.setState({
      HexToBinRes: hexbin,
     });
    }
  }

  handleChangeHexToOctInp(e) {
    e.preventDefault();

    this.setState({HexToOct: e.target.value});

  }

  handleChangeHexToOct() {

    let hex = parseInt(this.state.HexToOct, 16);

    if(isNaN(hex)){
      message.error("Invalid Hexa Decimal Number", 2, this.setState({
      HexToOct: "",
      HexToOctRes: ""
      }));
    }
    else {
      let hexoct = hex.toString(8);
      this.setState({
      HexToOctRes: hexoct,
     });
    }
  }

  handleChangeHexToDecInp(e) {
    e.preventDefault();

    this.setState({HexToDec: e.target.value});

  }

  handleChangeHexToDec() {

    let hex = parseInt(this.state.HexToDec, 16);

    if(isNaN(hex)){
      message.error("Invalid Hexa Decimal Number", 2, this.setState({
      HexToDec: "",
      HexToDecRes: ""
      }));
    }
    else {
      let hexdec = hex.toString(10);
      this.setState({
      HexToDecRes: hexdec,
     });
    }
  }

  render() {
    return (
      <Layout>
        <Header className="App-header">Number Conversion</Header>
        <Layout>
          <Content>
            <Row gutter={8} justify="center">
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
                    <h3>Result: <b>{this.state.BinToDecRes}</b></h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Binary to Octal">
                    <Input 
                      defaultValue="1010"
                      value={this.state.BinToOct} 
                      onChange={this.handleChangeBinToOctInp}
                      onPressEnter={this.handleChangeBinToOct}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeBinToOct}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.BinToOctRes}</b></h3>
                  </Card>
                </div>
              </Col>
              </Row>
              <Row gutter={8} justify="center">
              <Col span={12}>
                <div className="App-card">
                  <Card title="Binary to Hexa-Decimal">
                    <Input 
                      defaultValue="1010"
                      value={this.state.BinToHex} 
                      onChange={this.handleChangeBinToHexInp}
                      onPressEnter={this.handleChangeBinToHex}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeBinToHex}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.BinToHexRes}</b></h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Octal to Binary">
                    <Input 
                      defaultValue="123"
                      value={this.state.OctToBin} 
                      onChange={this.handleChangeOctToBinInp}
                      onPressEnter={this.handleChangeOctToBin}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeOctToBin}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.OctToBinRes}</b></h3>
                  </Card>
                </div>
              </Col>
              </Row>
              <Row gutter={8} justify="center">
              <Col span={12}>
                <div className="App-card">
                  <Card title="Octal to Decimal">
                    <Input 
                      defaultValue="123"
                      value={this.state.OctToDec} 
                      onChange={this.handleChangeOctToDecInp}
                      onPressEnter={this.handleChangeOctToDec}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeOctToDec}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.OctToDecRes}</b></h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Octal to Hexa-Decimal">
                    <Input 
                      defaultValue="123"
                      value={this.state.OctToHex} 
                      onChange={this.handleChangeOctToHexInp}
                      onPressEnter={this.handleChangeOctToHex}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeOctToHex}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.OctToHexRes}</b></h3>
                  </Card>
                </div>
              </Col>
              </Row>
              <Row gutter={8} justify="center">
              <Col span={12}>
                <div className="App-card">
                  <Card title="Decimal to Binary">
                    <Input 
                      defaultValue="123"
                      value={this.state.DecToBin} 
                      onChange={this.handleChangeDecToBinInp}
                      onPressEnter={this.handleChangeDecToBin}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeDecToBin}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.DecToBinRes}</b></h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Decimal to Octal">
                    <Input 
                      defaultValue="123"
                      value={this.state.DecToOct} 
                      onChange={this.handleChangeDecToOctInp}
                      onPressEnter={this.handleChangeDecToOct}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeDecToOct}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.DecToOctRes}</b></h3>
                  </Card>
                </div>
              </Col>
              </Row>
              <Row gutter={8} justify="center">
              <Col span={12}>
                <div className="App-card">
                  <Card title="Decimal to Hexa-Decimal">
                    <Input 
                      defaultValue="123"
                      value={this.state.DecToHex} 
                      onChange={this.handleChangeDecToHexInp}
                      onPressEnter={this.handleChangeDecToHex}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeDecToHex}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.DecToHexRes}</b></h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Hexa-Decimal to Binary">
                    <Input 
                      defaultValue="123"
                      value={this.state.HexToBin} 
                      onChange={this.handleChangeHexToBinInp}
                      onPressEnter={this.handleChangeHexToBin}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeHexToBin}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.HexToBinRes}</b></h3>
                  </Card>
                </div>
              </Col>
              </Row>
              <Row gutter={8} justify="center">
              <Col span={12}>
                <div className="App-card">
                  <Card title="Hexa-Decimal to Octal">
                    <Input 
                      defaultValue="123"
                      value={this.state.HexToOct} 
                      onChange={this.handleChangeHexToOctInp}
                      onPressEnter={this.handleChangeHexToOct}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeHexToOct}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.HexToOctRes}</b></h3>
                  </Card>
                </div>
              </Col>
              <Col span={12}>
                <div className="App-card">
                  <Card title="Hexa-Decimal to Decimal">
                    <Input 
                      defaultValue="123"
                      value={this.state.HexToDec} 
                      onChange={this.handleChangeHexToDecInp}
                      onPressEnter={this.handleChangeHexToDec}  
                      /> 
                    <p></p>
                    <Button type="primary" onClick={this.handleChangeHexToDec}>Convert</Button>
                    <Divider/>
                    <span>&nbsp;</span>
                    <h3>Result: <b>{this.state.HexToDecRes}</b></h3>
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
