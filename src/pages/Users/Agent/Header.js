import React, { Component } from 'react';
import { Form, Input, Select, Button, Table } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

const data = {
  10: '启用',
  11: '停用',
  21: '停用投注',
  31: '冻结',
  41: '拉黑',
};

const Item = {
  name: 'type',
  placeholder: '全部类型',
  rules: [{ required: true, message: '请选择类型' }],
};

@Form.create()
class AgentHeader extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  renderItem = (item, option) => {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormItem>
        {getFieldDecorator(item.name, {
          ...item,
        })(
          <Select placeholder={item.placeholder} style={{ width: 100 }}>
            {Object.keys(option).map(key => (
              <Option key={key} value={key}>
                {option[key]}
              </Option>
            ))}
          </Select>
        )}
      </FormItem>
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" style={{ fontSize: 12 }} onSubmit={this.handleSubmit}>
        {this.renderItem(Item, data)}

        <FormItem>
          <Select defaultValue="全部层级" style={{ width: 100 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Select defaultValue="全部等级" style={{ width: 100 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Select defaultValue="全部状态" style={{ width: 100 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Select defaultValue="全部" style={{ width: 80 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Select defaultValue="注册日期" style={{ width: 100 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default AgentHeader;
