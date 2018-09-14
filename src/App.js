import React, { Component } from 'react';
import { Button, Layout, Row, Col, Card, Input } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

class App extends Component {

  constructor(props) {
    super(props);

    this.handleChangeBinToDec = this.handleChangeBinToDec.bind(this);
    this.handleChangeBinToDecInp = this.handleChangeBinToDecInp.bind(this);
    this.handleChangeBinToOct = this.handleChangeBinToOct.bind(this);

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
    
    this.setState({
      BinToDecRes: "ok"
    });
  }

  handleChangeBinToOctInp(e) {
    e.preventDefault();

    this.setState({BinToOct: e.target.value});

  }

  handleChangeBinToOct() {
    
    this.setState({
      BinToOctRes: "ok"
    });
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
                    <br/>
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
