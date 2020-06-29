import React from 'react'
import {useLocation} from 'react-router-dom'
import {Breadcrumb} from 'antd'
import menuConfig from './menu-config';


// 递归获得面包屑
function getNames(src, data){
  let result = [];
  const value = data.find(value=>{
    return value.id === src[0];
  });
  if(value){
    result.push({
      id: value.id,
      name: value.name
    });
    src.splice(0, 1);
    if(src.length > 0){
      result = result.concat(getNames(src, value.children));
    }
  }
  return result;
}

export default function AppBreadcrumb() {
  const {pathname} = useLocation();
  const [empty, ...arr] = pathname.split('/');
  const names = getNames(arr, menuConfig);
  

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {
        names.map(({id, name})=>(
          <Breadcrumb.Item key={id}>{name}</Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}
