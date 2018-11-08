import React, { PureComponent, Fragment } from 'react';
import { Button, Input, Form, Col, Row } from 'antd';

const FormItem = Form.Item;

@Form.create()
class TableForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.value,
      value: props.value,
      inputs: JSON.parse(JSON.stringify(props.value)),
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(' data', this.state.data);
    console.log(' inputs', this.state.inputs);

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ data: [values] });
        console.log('setState data', this.state.data);
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        {this.state.inputs.map((item, index) => {
          const cols = Object.keys(item).map((key, _index) => (
            <Col span={5} key={_index}>
              <FormItem>
                {getFieldDecorator(`${key}${index}`, {
                  rules: [{ required: true, message: `Please ${key}` }],
                })(<Input />)}
              </FormItem>
            </Col>
          ));

          const actions = (
            <Col span={4} key="action">
              <Button
                type="primary"
                onClick={e => {
                  const inputs = this.state.inputs;
                  this.setState({ inputs: [...inputs, inputs[0]] });
                }}
              >
                添加
                {index}
              </Button>
              <Button
                type="primary"
                onClick={e => {
                  const newinputs = this.state.inputs;
                  newinputs.splice(index, 1);
                  this.setState({ inputs: newinputs });
                  this.forceUpdate();
                }}
              >
                删除
                {index}
              </Button>
            </Col>
          );

          cols.push(actions);
          return (
            <Row gutter={16} key={index}>
              {cols}
            </Row>
          );
        })}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default TableForm;
