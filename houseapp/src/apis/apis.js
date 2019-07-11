import axios from 'axios'
import qs from 'qs'

const IP = 'http://172.16.12.172:80/'

//登录 acc:账号  pwd:密码
export function Loginpost(acc,pwd){
    return axios.post(IP + 'login.php',qs.stringify({acc,pwd}))
}
//注册 acc:账号  pwd:密码
export function Regpost(acc,pwd){
    return axios.post(IP + 'reg.php',qs.stringify({acc,pwd}))
}
//首页房产信息
export function getHouseList(){
    return axios.get(IP + 'gethouselist.php')
}