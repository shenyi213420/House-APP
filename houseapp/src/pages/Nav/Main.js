import React, { Component } from 'react'
import { Carousel, Grid, WingBlank } from 'antd-mobile'
import './Main.css'
import { getHouseList } from '../../apis/apis'
import Houselist from '../../components/Houselist'
import { connect} from 'react-redux'
const data = [
    { icon: 'house1', text: '新房' },
    { icon: 'house2', text: '二手房' },
    { icon: 'house3', text: '租房' },
    { icon: 'house4', text: '商铺写字楼' },
    { icon: 'house5', text: '卖方' },
    { icon: 'house6', text: '海外房产' },
    { icon: 'house7', text: '小区房价' },
    { icon: 'house8', text: '问答' }
].map((val) => ({
    icon: require('../../assets/imgs/' + val.icon + '.png'),
    text: val.text
}));

const data1 = [
    { icon: 'icon_money', text: '我要贷款' },
    { icon: 'icon_zhisi', text: '房贷计算' },
    { icon: 'icon_sum', text: '知识' },
    { icon: 'icon_sao', text: '扫一扫' }
].map((val) => ({
    icon: require('../../assets/imgs/' + val.icon + '.png'),
    text: val.text
}));
 class Main extends Component {
    constructor() {
        super()
        
        this.state = {
            data: ['login-banner', 'login-banner_1', 'login-banner_2'],
            imgHeight: 176,
            city: '定位中',//定位
            houseList: []
        }
    }
    async componentWillMount() {
        //获取房产数组
        let res = await getHouseList()
        // console.log(res);
        
        this.setState({
            houseList: res.data
        })


    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <div className='top_box'>
                    {/* 定位 */}
                    <label onClick={this.clickCtiy.bind(this)}>{this.state.city}▼</label>
                    {/* 搜索框 */}
                    <div className='top_search' onClick={this.clickSearch.bind(this)}>
                        <img src={require('../../assets/imgs/icon_search.png')}></img>
                        <label>挑好房，就上归予居APP</label>
                    </div>
                    {/* 地图 */}
                    <img className='top_map' onClick={this.clickMap.bind(this)} src={require('../../assets/imgs/icon_map.png')}></img>
                </div>
                {/* 轮播 */}
                <Carousel
                    autoplay//是否自动切换
                    infinite={true}//	是否循环播放
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../assets/imgs/' + val + '.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>

                {/* 导航 */}
                <Grid data={data} hasLine={false} />
                <p className='cut_off'></p>
                {/* 房产百科 */}
                <div className='encyclopedia'>房产全百科<label>专业的买房攻略</label></div>
                <Grid data={data1} hasLine={false} />
                <p className='cut_off'></p>
                {/* 猜你喜欢 */}
                <div className='guessLike'>
                    
                    <WingBlank>
                    猜你喜欢
                            {/* 渲染房产数据 */}
                            {

                                this.state.houseList.map(obj =>   <div key={ obj.id } onClick={this.clickHouse.bind(this,obj)}>
                               <Houselist obj={obj}/>
                            </div>)
                            }
                    </WingBlank>
                </div>
            </div>
        )
    }
    //房产信息数据
    clickHouse(obj){
        // console.log(obj);
        this.props.dispatch({
            type:'changeHouse',
            obj
        })
        
    }
    componentDidMount() {
        //保存this指向
        //因为作用域问题，访问所有全局作用域下面的变量或函数，都需要加上window.这个前缀
        let _this = this
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    //当前城市信息
                    _this.setState({ city: cityinfo })

                }
            } else {
                //   document.getElementById('info').innerHTML = result.info;
            }
        });
    }
    //城市
    clickCtiy() {
        window.location.href = '#/selectcity'
    }
    //搜索
    clickSearch() {
        window.location.href = '#/search'
    }
    //地图
    clickMap() {
        window.location.href = '#/map'
    }
}
export default connect()(Main)