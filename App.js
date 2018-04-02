import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Button, Container, Header,
  Content, Form, Item,
  Input, Label, ListItem,
  Text, Right, Radio,
  Picker
} from 'native-base';

export default class App extends Component<Props> {

  constructor(props) {

    super(props);

    this.state = {
      income: true,
      expense: false,
      category: undefined
    };

  }

  changeIncome = () => this.setState({ income: true, expense: false });
  changeExpense = () => this.setState({ income: false, expense: true });

  onCategoryChange(value: string) {
    this.setState({
      category: value
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content padder>
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

            <Picker
              mode="dropdown"
              placeholder="Choose a Category"
              selectedValue={this.state.category}
              onValueChange={this.onCategoryChange.bind(this)}
              style={{marginLeft: 8, marginRight: 14}}
            >
              <Item label="Food" value="food" />
              <Item label="Drink" value="drink" />
              <Item label="Health" value="health" />
              <Item label="Travel" value="travel" />
            </Picker>

            <Item floatingLabel>
              <Label>Amount</Label>
              <Input />
            </Item>

            <Item floatingLabel>
              <Label>Note</Label>
              <Input />
            </Item>

            <Button block style={{marginTop: 50}}>
              <Text>Submit</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}
