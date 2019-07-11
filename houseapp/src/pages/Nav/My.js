import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WingBlank, List } from 'antd-mobile'
import './My.css'
const Item = List.Item;
export default class My extends Component {
    constructor() {
        super()
        this.state = {
            texts: '登录/注册',
            icons: [
                { id: '1', icon: 'icon_my_02', text: '钱包' },
                { id: '2', icon: 'icon_my_04', text: '优惠' },
                { id: '3', icon: 'icon_my_01', text: '积分' },
            ],
            details: [
                { id: '1', icon: 'inco_my_03', text: '我的积分' },
                { id: '2', icon: 'inco_my_05', text: '我的订阅' },
                { id: '3', icon: 'inco_my_07', text: '微聊联系人' },
                { id: '10' },
                { id: '4', icon: 'inco_my_06', text: '房贷计算器' },
                { id: '5', icon: 'inco_my_09', text: '我的房子' },
                { id: '6', icon: 'inco_my_08', text: '我的看房记录' },
                { id: '7', icon: 'inco_my_10', text: '我的问答' },
                { id: '11' },
                { id: '8', icon: 'inco_my_04', text: '设置' },
                { id: '9', icon: 'inco_my_11', text: '意见反馈' }
            ],
        }
    }
    render() {
        return (
            <div>
                {/* 头部 */}

                <div className='top_my'>
                    <WingBlank>
                        <div className='top_mybox'>
                            <div style={{ display: 'flex' }}>
                                <img src={require('../../assets/imgs/icon_head.jpg')} style={{ width: '50px', height: '50px', marginRight: '15px' }}></img>
                                <div onClick={this.clickTitle.bind(this)} style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '12px' }} to='/reg'>{this.state.texts}</div>
                                <label>可以与经纪人发起聊天</label>
                            </div>
                            <img src={require('../../assets/imgs/icon_my_03.png')} style={{ width: '20px', height: '20px' }}></img>
                        </div>
                        <div className='top_myboxs'>
                            {
                                this.state.icons.map(obj => <div className='top_mydiv' key={obj.id}>
                                    <p style={{ margin: '0' }}>0</p>
                                    <div className='mybox'>
                                        <img src={require('../../assets/imgs/' + obj.icon + '.png')}></img>
                                        <label style={{ marginLeft: '10px', marginRight: '15px' }}>{obj.text}</label>
                                    </div>

                                </div>)
                            }
                        </div>
                    </WingBlank>
                </div>
                <p className='cutoff'></p>
                {/* 详情 */}
                <List>
                    {
                        this.state.details.map(obj => {
                            if (obj.icon) {
                                return <Item key={obj.id}
                                    thumb={require('../../assets/imgs/' + obj.icon + '.png')}
                                    arrow="horizontal"
                                    onClick={this.clickList.bind(this,obj.id)}
                                >{obj.text}</Item>
                            }
                            else {
                                //没又icon返回一个分栏
                                return <div key={obj.id} style={{ background: '#f6f6f6', height: '6px' }}></div>
                            }
                        })
                    }

                </List>
            </div>
        )
    }
    //跳转到响应页面
    clickList(id) {
        switch (id) {
            case '1': return window.location.href = '#/login'
        }
    }
    //登录注册名修改
    clickTitle() {
        //切换hash值，改变浏览器地值
        if(this.state.texts == '登录/注册'){
            window.location.href = '#/login'
        }
    }
    componentDidMount() {
        if (localStorage.getItem('acc')) {
            //用户登录
            this.setState({
                texts: localStorage.getItem('acc', this.state.acc)
            })
        }
    }
}
