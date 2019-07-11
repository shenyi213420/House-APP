import React, { Component } from 'react'
import ctiy from '../json/city.json'
import { WingBlank } from 'antd-mobile'

import BScroll from 'better-scroll'
export default class SelectCity extends Component {
    render() {
        return (

            <div>
                <div style={{ background: '#2455A5', color: '#fff', marginBottom:'20px',fontSize: "20px", lineHeight: '40px', textAlign: 'center' }}>城市选择</div>
                {/* 右侧浮动 */}
                <div onTouchMove={this.touchMove.bind(this)} style={{ position: 'fixed', right: '2px', width: '14px', top: '25%' }}>
                    {
                        ctiy.city.map(obj => <div className='s_city_cls'>
                            {obj.title}
                        </div>)
                    }
                </div>
                {/* 左侧区域 */}
                <WingBlank>
                    <div id="city_box" style={{ position: 'fixed', width: '90%', height: '100%', overflow: 'auto' }}>

                        <ul className='content' style={{ padding: '0', margin: '0' }}>
                            {/* 热门城市 */}
                            <div>
                                <h4 style={{ backgroundColor: '#F7F7F7', lineHeight: '26px', paddingLeft: '16px' }}>热门城市</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {
                                        ctiy.topcity.map(obj => <div style={{ width: '25%', textAlign: 'center' }}>{obj}</div>)
                                    }
                                </div>
                            </div>
                            {/* 城市列表 */}
                            <div>

                                {
                                    ctiy.city.map(obj => <div id={obj.title}>
                                        {/* 城市标题 */}
                                        <h4 style={{ backgroundColor: '#F7F7F7', lineHeight: '26px', paddingLeft: '16px', marginBottom: '0' }}>{obj.title}</h4>
                                        {/* 城市详情 */}
                                        <div>
                                            {
                                                obj.lists.map(name => <div style={{ backgroundColor: '#FFF', borderBottom: '1px solid #dfdfe8', padding: '20px 0 20px 20px' }}>
                                                    {name}
                                                </div>)
                                            }
                                        </div>
                                    </div>)

                                }
                            </div>
                        </ul>
                    </div>
                </WingBlank>
            </div>

        )
    }
    //滑动事件
    touchMove(e) {
        // H5新增移动端事件： 监听的是手指按压屏幕后，连续移动
        // 获取当前用户手指的详细信息
        // console.log(e.touches[0].clientX);
        // console.log(e.touches[0].clientY);
        let curElt = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
        // console.log(curElt);
        if(curElt && curElt.className == 's_city_cls')
        //让左侧面板滚动到指定DIV上
        this.Leftbox.scrollToElement(document.getElementById(curElt.innerHTML),300)
        
    }
    componentDidMount() {
        this.Leftbox = new BScroll('#city_box')
    }
}
