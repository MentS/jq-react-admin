import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Alert } from 'antd';
import { connect } from 'dva';
import JSEncrypt from 'jsencrypt';
import { md5 } from '@/utils/md5';
import { getPublicKey } from '@/services/login';
import styles from './Login.less';

const FormItem = Form.Item;

// function mapState(a, b) {
//   console.log(a, b);
// }

// function mapDis(a, b) {
//   console.log(a, b);
// }

// @connect(
//   mapState,
//   mapDis
// )

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'login/changeImg' });
  }

  handleChangeImg = e => {
    dispatch({ type: 'login/changeImg' });
  };

  rendermessage = context => {
    if (context) {
      return (
        <Alert message={context} type="error" showIcon style={{ marginBottom: 20, height: 32 }} />
      );
    }

    return null;
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { dispatch } = this.props;

        const res = await getPublicKey();
        if (res.key === -1) {
          console.log(res.message);
        }
        const encrypt = new JSEncrypt();
        const publicKey = res.message;
        encrypt.setPublicKey(publicKey);
        values.passwordenc = encrypt.encrypt(md5(values.passwordenc));

        const { securityCodeId } = this.props.login;

        dispatch({
          type: 'login/login',
          payload: { ...values, securityCodeId },
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { message, securityCodeId } = this.props.login;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.login}>
        {this.rendermessage(message)}

        <FormItem>
          {getFieldDecorator('loginName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('passwordenc', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>

        <FormItem>
          <Row>
            <Col span={12}>
              {getFieldDecorator('securityCode', {
                rules: [{ required: true, message: 'Please input your securityCodeId!' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <img
                onClick={this.handleChangeImg}
                src={`http://testmango.38c8.com/code/imgCode?securityId=${securityCodeId}`}
                style={{ height: 32, width: '100%' }}
              />
            </Col>
          </Row>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
