import React, { Component } from 'react'
import './Map.css'
export default class Map extends Component {
 
    render() {
        return (
            <div id='container' style={{width:'100%',height:'100%'}}>
                
            </div>
        )
    }
    componentDidMount(){
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //保存this指向
        //因为作用域问题，访问所有全局作用域下面的变量或函数，都需要加上window.这个前缀
        let _this = this
          //实例化城市查询类
          var citysearch = new window.AMap.CitySearch();
          //自动获取用户IP，返回当前城市
          citysearch.getLocalCity(function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                  if (result && result.city && result.bounds) {
                      var cityinfo = result.city;//定位当前城市
                      var citybounds = result.bounds;//显示当前城市
                            //地图显示当前城市
                        map.setBounds(citybounds);
                  }
              } else {
                //   document.getElementById('info').innerHTML = result.info;
              }
          });
    }
}
