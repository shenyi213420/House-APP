import React, { Component } from 'react'
import './Houselist.css'
//公共组件：房产数据想
//props：key=obj, 描述：一个房产数据对象
export default class Houselist extends Component {
    render() {
        let obj = this.props.obj

        
        return (
            <div>
                {
                   <div className='house_div'>
                    <img src={obj.src}></img>
                    <div style={{ lineHeight: '25px', width: '30%' }}>
                        <h4 style={{ margin: '0' }}>{obj.name}</h4>
                        <p>{obj.area}</p>
                        <p>{obj.type}{obj.point}</p>
                    </div>

                    <h3 style={{ color: 'red', fontSize: '16px', width: '25%', margin: '0' }}>{obj.price}/平</h3>
                </div>
                }
            </div>
        )
    }
}
