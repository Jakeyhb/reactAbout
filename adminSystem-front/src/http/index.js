import 'whatwg-fetch'
import apiObj from './api'
import { message } from 'antd'

class Http{
  async get(url, data = {}){
    try {
      let query = '';
      Object.entries(data).forEach(([key, value], index)=>{
        query += `${index === 0 ? '?' : '&'}${key}=${value}`;
      })
      const response = await fetch(url+query, {
        method: 'GET'
      });
      const result = await response.json();;
      
      if(result.code === 0){
        return result;
      }else{
        //处理错误
        message.error(result.message);
      }
        
    } catch (error) {
       //处理错误 
       message.error('请求失败');
    }
  }

  async post(url, data = {}){
    try {
      
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      const result = await response.json();;
      if(result.code === 0){
        return result;
      }else{
        //处理错误
        message.error(result.message);
      }
        
    } catch (error) {
       //处理错误 
       message.error('请求失败');
    }
  }
}

export const api = apiObj;
export default new Http();


