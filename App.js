import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Container, Header,
  Content, Form, Item,
  Input, Label, ListItem,
  Text, Right, Radio
} from 'native-base';

export default class App extends Component<Props> {

  constructor(props) {

    super(props);

    this.state = {
      income: true,
      expense: false
    };

  }

  changeIncome = () => this.setState({ income: true, expense: false });
  changeExpense = () => this.setState({ income: false, expense: true });

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <ListItem>
              <Text style={{flex: 1}}>Income</Text>
              <Right style={{flex: 0}}>
                <Radio onPress={this.changeIncome} selected={this.state.income} />
              </Right>
            </ListItem>
            <ListItem>
              <Text style={{flex: 1}}>Expense</Text>
              <Right style={{flex: 0}}>
                <Radio onPress={this.changeExpense} selected={this.state.expense} />
              </Right>
            </ListItem>
            <Item regular>
              <Input placeholder='Amount' />
            </Item>
            <Item regular>
              <Input placeholder='Description' />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
