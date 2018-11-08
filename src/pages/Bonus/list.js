import React, { Component } from 'react';
import {
  Tabs,
  Steps,
  Row,
  Col,
  Form,
  Input,
  Icon,
  Button,
  Checkbox,
  Radio,
  Select,
  Card,
} from 'antd';
import TableForm from './TablesForm';
import styles from './list.less';

const FormItem = Form.Item;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const inputs = {
  profitElement: [
    {
      a: '',
      s: '',
      d: '',
      f: '',
    },
  ],
  dayElememt: [
    {
      q: '',
      w: '',
      e: '',
      r: '',
    },
  ],

  totalElement: [
    {
      z: '',
      x: '',
      c: '',
      v: '',
    },
  ],
};

const el = {
  profit: inputs.profitElement,
  day: inputs.dayElememt,
  total: inputs.totalElement,
};

const generateId = (() => {
  let i = 0;
  return () => {
    i += 1;
    return i;
  };
})();

class Rows extends Component {
  renderProfit = ary => {
    const { getFieldDecorator } = this.props.form;
    const index = this.props.index || '';
    const span = 5;

    const element = ary.map((el, i) => (
      <Col span={span} key={i}>
        <FormItem label={el.label} style={{ marginBottom: 10 }}>
          {getFieldDecorator(`${el.name}${index}`, {
            rules: el.rules,
          })(<Input {...el.props} />)}
        </FormItem>
      </Col>
    ));
    return element;
  };

  render() {
    const el = this.props.rule;
    const index = this.props.index || '';

    return (
      <Row>
        {this.renderProfit(el)}
        {index ? (
          <Col span={4} style={{ padding: '40px 0 0 20px' }}>
            <Button type="primary" onClick={this.props.handleRemove}>
              remove
            </Button>
          </Col>
        ) : (
          <Col span={4} style={{ padding: '40px 0 0 20px' }}>
            <Button type="primary" onClick={this.props.handleAdd}>
              add
            </Button>
          </Col>
        )}
      </Row>
    );
  }
}

@Form.create()
class ListTab extends Component {
  state = {
    visible: false,
    add: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputs);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleRemove = index => {
    const newadd = this.state.add;
    newadd.splice(index, 1);
    this.setState({ add: newadd });
  };

  handleAdd = () => {
    const index = 1;
    const newadd = this.state.add;
    newadd.push(
      <Rows
        index={index}
        key={generateId()}
        handleRemove={this.handleRemove.bind(null, index - 1)}
        gutter={16}
        form={this.props.form}
        rule={el.profit}
      />
    );
    this.setState({
      add: newadd,
    });
  };

  handleChange = value => {
    console.log(`selected ${value}`);
  };

  choiceRule = (rule, value, callback) => {
    if (!value) {
      callback();
    }
    callback();
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const visible = this.state.visible;

    return (
      <TabPane {...this.props} className={styles.list}>
        <Row style={{ padding: '20px 0px' }}>
          <Select placeholder="请选择层级" style={{ width: 120 }} onChange={this.handleChange}>
            <Option value="jack">1</Option>
            <Option value="lucy">2</Option>
            <Option value="disabled">3</Option>
            <Option value="Yiminghe">4</Option>
          </Select>
        </Row>

        <Card
          title="Card title"
          extra={
            <Button type="primary" onClick={() => this.setState({ visible: !visible })}>
              编辑
            </Button>
          }
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Row gutter={24} style={{ paddingTop: 35, display: `${visible ? 'block' : 'none'}` }}>
          <Col span={4} style={{ paddingTop: 10 }}>
            <Steps direction="vertical" size="small" current={7} status="wait">
              <Step title="分红层级" style={{ height: 80 }} status="process" />
              <Step title="派发方式" style={{ height: 80 }} status="process" />
              <Step title="奖金模式" style={{ height: 80 }} status="process" />
              <Step title="分红规则" style={{ height: 80 }} status="process" />
              <Step title="分红策略" style={{ height: 80 }} status="process" />
              <Step title="分红周期" style={{ height: 80 }} status="process" />
              <Step title="分红条件" style={{ height: 80 }} status="process" />
            </Steps>
          </Col>
          <Col span={20}>
            <Form onSubmit={this.handleSubmit} className={styles.form}>
              <FormItem>
                <span>1</span>
              </FormItem>

              <FormItem>
                {getFieldDecorator('radio-group', {})(
                  <RadioGroup>
                    <Radio value="a">手动</Radio>
                    <Radio value="b">自动</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('radio-group')(
                  <RadioGroup>
                    <Radio value="a">奖金金额</Radio>
                    <Radio value="b">奖金比例</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('rules', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your rules',
                    },
                    { validator: this.choiceRule },
                  ],
                })(
                  <RadioGroup>
                    <Radio value="profit">盈亏</Radio>
                    <Radio value="day">日量</Radio>
                    <Radio value="total">总量</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('radio-group')(
                  <RadioGroup>
                    <Radio value="a">盈利不累计</Radio>
                    <Radio value="b">盈利永久累计</Radio>
                    <Radio value="c">盈利累计到下一期</Radio>
                    <Radio value="c">累计累计当月</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('radio-group')(
                  <RadioGroup>
                    <Radio value="a">每天1期</Radio>
                    <Radio value="b">每周1期</Radio>
                    <Radio value="c">每月1期</Radio>
                    <Radio value="c">每月2期</Radio>
                    <Radio value="c">每月3期</Radio>
                  </RadioGroup>
                )}
              </FormItem>

              {/* 根据条件 render 分红条件 */}
              {(getFieldValue('rules') ? el[getFieldValue('rules')] : el.profit).map(
                (item, index, inputs) => {
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
                          // this.setState({ inputs: [...inputs, inputs[0]] });
                          inputs.push(inputs[0]);
                          this.forceUpdate();
                        }}
                      >
                        添加
                        {index}
                      </Button>
                      <Button
                        type="primary"
                        onClick={e => {
                          const newinputs = inputs;
                          newinputs.splice(index, 1);
                          inputs = newinputs;
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
                }
              )}

              {/* 盈亏分红条件 */}

              <FormItem>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default ListTab;
