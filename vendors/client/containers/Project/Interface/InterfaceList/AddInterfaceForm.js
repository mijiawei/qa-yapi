/* eslint-disable */
import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select, Button } from 'antd';
import axios from 'axios'
import constants from '../../../../constants/variable.js'
import { handleApiPath, nameLengthLimit } from '../../../../common.js'
const HTTP_METHOD = constants.HTTP_METHOD;
const HTTP_METHOD_KEYS = Object.keys(HTTP_METHOD);
var sname = "";
const FormItem = Form.Item;
const Option = Select.Option;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class AddInterfaceForm extends Component {
  static propTypes = {
    form: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    catid: PropTypes.number,
    catdata: PropTypes.array
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values, () => {
          this.props.form.resetFields();
        });
          console.log("I'm a boy1");
          console.log(values);
          console.log(values['ip']);
            sname =  values['sname'];
          axios.get('http://101.132.148.57:8888', {
              params: { 'ip':values['ip'],
              'user': values['user'],
              'password': values['password'],
              'post': values['post'],
              'database': values['database'],
              'sql': values['sql']}
          }).then(function (response) {
              
           //   console.log(response.data);
          //    console.log(response.data[0]);
              console.log(sname);
              var data = response.data[0][sname];
              var jsonData = JSON.stringify(data);
            //  var result =  JSON.parse(jsonData);
             //    console.log(result);
             //    console.log(jsonData);
              console.log('aaaa');
                 var storage=window.localStorage;  
                 storage["a"]=jsonData;
                //  storage["b"]=ss;
                 var a=storage.a;
                //   var b=storage.b;
                 console.log(a);
                // console.log(b);
              console.log('aaaa');    
          }).catch(function (error) {
              console.log(error);
          });

      }
    });

     console.log("I'm a boy");

  }

  handlePath = (e) => {
    let val = e.target.value
    this.props.form.setFieldsValue({
      path: handleApiPath(val)
    })
  }
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const prefixSelector = getFieldDecorator('method', {
      initialValue: 'GET'
    })(
      <Select style={{ width: 75 }}>
        {HTTP_METHOD_KEYS.map(item => {
          return <Option key={item} value={item}>{item}</Option>
        })}
      </Select>
      );
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };


    return (

      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="接口分类"
        >
          {getFieldDecorator('catid', {
            initialValue: this.props.catid ? this.props.catid + '' : this.props.catdata[0]._id + ''
          })(
            <Select>
              {this.props.catdata.map(item => {
                return <Option key={item._id} value={item._id + ""}>{item.name}</Option>
              })}
            </Select>
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="接口名称"
        >
          {getFieldDecorator('title', {
            rules: nameLengthLimit('接口')
          })(
            <Input placeholder="接口名称" />
            )}
        </FormItem>


          <FormItem
              {...formItemLayout}
              label="数据库地址"
          >
              {getFieldDecorator('ip', {

              })(
                  <Input placeholder="数据库地址ip" />
              )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="数据库账户名"
          >
              {getFieldDecorator('user', {

              })(
                  <Input placeholder="数据库账户名" />
              )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="数据库密码"
          >
              {getFieldDecorator('password', {

              })(
                  <Input placeholder="数据库密码 " />
              )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="数据库端口"
          >
              {getFieldDecorator('post', {

              })(
                  <Input placeholder="数据库端口" />
              )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="数据库库名"
          >
              {getFieldDecorator('database', {

              })(
                  <Input placeholder="数据库库名" />
              )}
          </FormItem>
 
         <FormItem
              {...formItemLayout}
              label="数据库命令"
          >
              {getFieldDecorator('sql', {

              })(
                  <Input placeholder="数据库命令：select/insert/update/delete" />
              )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="返回值名"
          >
              {getFieldDecorator('sname', {

              })(
                  <Input placeholder="数据库json返回的key值" />
              )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="接口路径"
          >
              {getFieldDecorator('path', {
                  rules: [{
                      required: true, message: '请输入接口路径!'
                  }]
              })(
                  <Input onBlur={this.handlePath} addonBefore={prefixSelector} placeholder="/path" />
              )}
          </FormItem>
        <FormItem
          {...formItemLayout}
          label="注"
        >
          <span style={{ color: "#929292" }}>详细的接口数据可以在编辑页面中添加</span>
        </FormItem>
        <FormItem className="catModalfoot" wrapperCol={{ span: 24, offset: 8 }} >
          <Button onClick={this.props.onCancel} style={{ marginRight: "10px" }}  >取消</Button>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            提交
          </Button>
        </FormItem>

      </Form>

    );
  }
}

export default Form.create()(AddInterfaceForm);
