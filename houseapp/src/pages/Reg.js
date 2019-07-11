import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputItem, Checkbox, WingBlank, Button, WhiteSpace } from 'antd-mobile'
import { Regpost } from '../apis/apis'
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            acc: '',//账号
            pwd: '',//密码
        }
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <InputItem
                        clear
                        placeholder="请输入账号"
                        val={this.state.acc}
                        onChange={(val) => { this.setState({ acc: val }) }}
                    >
                    </InputItem>
                    <InputItem
                        clear
                        type="password"
                        placeholder="请输入密码"
                        val={this.state.pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                    ></InputItem>
                    <InputItem
                        clear
                        type="text"
                        placeholder="请输入验证码"
                        extra="获取验证码"
                    ></InputItem>
                    <AgreeItem >
                        <a onClick={(e) => { e.preventDefault() }}>我已同意<label style={{ color: '#2455A5' }}>《用户服务协议》及《隐私权政策》</label></a>
                    </AgreeItem>

                    <Button type="primary" onClick={this.clickReg.bind(this)}>注册</Button>
                    <WhiteSpace size="sm" />
                    <Link to='/login' style={{ color: '#2455A5' }}>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    async clickReg() {
        let res = await Regpost(this.state.acc, this.state.pwd)
        if (res.data == 'ok') {
            window.location.href = '#/login'
        }

    }
}
