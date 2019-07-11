import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, WhiteSpace, InputItem, WingBlank, Button } from 'antd-mobile'
import '../components/components.css'
import { Loginpost } from '../apis/apis'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            acc: '',//用户名
            pwd: '',//密码
            errorText: 'none'//错误提示是否隐藏
        }
    }
    render() {
        return (
            <div>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />

                <Flex justify="center">

                    <img src={require('../assets/imgs/logo.png')}></img>

                </Flex>

                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank>
                    <InputItem
                        placeholder="用户名"
                        clear
                        value={this.state.acc}
                        onChange={(val)=>{this.setState({acc:val})}}
                    >
                        <img src={require('../assets/imgs/icon_acc.png')}></img>
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        type='password'
                        value={this.state.pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    >
                        <img src={require('../assets/imgs/icon_pwd.png')}></img>
                    </InputItem>
                </WingBlank>
                {/* 错误提示 */}
                <WingBlank>
                    <p style={{ color: 'red', margin: '0 0 5px 15px', display: this.state.errorText }} >请输入正确的账号或密码</p>
                </WingBlank>
                {/* 登录按钮 */}
                <WingBlank>
                    <Button type="primary" onClick={this.clickLogin.bind(this)}>登录</Button><WhiteSpace />
                </WingBlank>
                {/* 提示 */}
                <WingBlank>
                    <div className='hint'>
                        <Link to='/reg' style={{ color: '#2455A5' }}>点击进行注册</Link>
                        <Link to='/forgetpwd' style={{ color: '#2455A5' }}>忘记密码</Link>
                    </div>
                </WingBlank>
                <div className='protocol'>登录/注册即代表同意《归予居房产用户协议》</div>
            </div>
        )
    }
    //点击登录
    async clickLogin() {
        let res = await Loginpost(this.state.acc, this.state.pwd)
        // console.log(res);
        
        if (res.data == 'ok'){
            //持久保存数据
            localStorage.setItem('acc',this.state.acc)
            //登陆成功
            window.location.href = '#/'
        }else{
            this.setState({
                errorText:'block'
            })
        }
    }
}
