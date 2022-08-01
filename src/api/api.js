// 
import service from "../service.js";

//登陆接口
export function login(data){
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

//学生列表查询接口
export function reqStudentList(params){
    return service({
        method: 'get',
        url: '/students',
        params
    })
}