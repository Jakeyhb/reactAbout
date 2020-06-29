import React, { useCallback } from "react";
import { useLocation, useHistory } from 'react-router-dom'
import { Menu } from "antd";
import menuConfig from './menu-config';
const { SubMenu } = Menu;



export default function AppMenu() {
  // 监听路由的变化
  // console.log(params)

  const location = useLocation();
  console.log(location)

  const arr = location.pathname.split('/').splice(0, 3);
  console.log(arr)
  const openId = `/${arr[1]}`;//展开的一级目录 home
  const selectId = arr.join('/');//选中的一级/二级目录 接在一起
  console.log(selectId)

  const history = useHistory();
  // console.log(history)


  const onSelectAction = useCallback((params) => {
    // 切换路由
    // history栈里面添加一条新记录，这个时候用户点击浏览器的回退按钮可以回到之前的路径。
    history.push(params.key);
  }, [history]);

  /* !!!: 当history变化的时候，才会渲染页面 */

  return (
    <Menu theme="dark" defaultOpenKeys={[openId]} selectedKeys={[selectId]} mode="inline" onSelect={onSelectAction}>
      {
        menuConfig.map(data => {
          //有一级目录，和二级目录
          if (data.children) {
            return (
              <SubMenu key={`/${data.id}`} icon={<data.icon />} title={data.name}>
                {
                  data.children.map(item => (
                    <Menu.Item key={`/${data.id}/${item.id}`} children={item.name} />
                  ))
                }
              </SubMenu>
            )
          } else {
            //只有一级目录
            return (
              <Menu.Item key={`/${data.id}`} icon={<data.icon />} children={data.name} />
            )
          }
        })
      }
    </Menu>
  );
}
