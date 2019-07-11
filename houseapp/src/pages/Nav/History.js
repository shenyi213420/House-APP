import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import Houselist from '../../components/Houselist'
class History extends Component {
    render() {
        let { HistoryList } = this.props
        return (
            <div>
                  <WingBlank>
                <p style={{display:HistoryList.length==0?'block':'none'}}>您还没有浏览足迹哟~</p>
                <WhiteSpace size="lg" />
                <div className='guessLike' style={{display:HistoryList.length==0?'none':'block'}}>

                  
                        浏览记录
                            {/* 渲染房产数据 */}
                        {

                            HistoryList.map(obj =>  <Houselist key={obj.id} obj={obj}/>)
                        }
                  
                </div>
                </WingBlank>
            </div>
        )
    }

}
export default connect((state) => {
    return {
        HistoryList: state.HistoryList
    }
})(History)