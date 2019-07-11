import React, { Component } from 'react'
import './Chat.css'
import { Button } from 'antd-mobile'
import { WingBlank } from 'antd-mobile'
export default class Chat extends Component {
    render() {
        return (
            <div className='chat'>
                <WingBlank>
               <div className='chat_box'>
                    <img src={require('../../assets/imgs/icon_head.jpg')} style={{width:'120px',height:'120px',borderRadius:'50%'}}></img>
                    <p>置业顾问:<label>沈一</label></p>
                    <p>专业服务诚信做人诚信做事！</p>
                    <Button type="primary" onClick={this.clickBtn.bind(this)}>登录</Button>
                </div>
                </WingBlank>
                
            </div>
        )
    }
    clickBtn(){
        window.location.href = '#/login'
    }
}
