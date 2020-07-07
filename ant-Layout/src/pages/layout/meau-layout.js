import {
  PieChartOutlined,
  BarsOutlined,
  FileImageOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { lazy } from 'react'


export default [
  {
    id: "home",
    name: "系统首页",
    icon: PieChartOutlined,
    path: '/home',
    component: lazy(() => import('../pages/home/Home')),
    permissions: [1, 2, 3, 4, 5]
  },
  {
    id: "person",
    name: "人员管理",
    icon: BarsOutlined,
    path: '/person',
    redirect: {
      from: '/person',
      to: '/person/list'
    },
    children: [
      {
        id: "list",
        name: "人员列表",
        path: '/person/list',
        component: lazy(() => import('../pages/person/list/PersonList')),
        permissions: [1, 2, 3, 4, 5]

      },
      {
        id: "add",
        name: "新增人员",
        path: '/person/add',
        component: lazy(() => import('../pages/person/add/PersonAdd')),
        permissions: [1]
      },
      {
        id: "modify",
        name: "编辑信息",
        path: '/person/modify',
        component: lazy(() => import('../pages/person/modify/PersonModify')),
        permissions: [1]
      },
    ],
  },

  {
    id: "department",
    path: '/department',
    name: "部门管理",
    icon: FileImageOutlined,
    children: [{
      name: "部门页面", id: "list", path: '/department/list', component: lazy(() => import('../pages/deparment/Department')),
      permissions: [1]
    }],
  },
  {
    id: "jurisdiction",
    name: "系统管理",
    path: '/jurisdiction',
    icon: TeamOutlined,
    children: [
      {
        name: "权限管理", id: "list", path: '/jurisdiction/list', component: lazy(() => import('../pages/jurisdiction/Jurisdiction')),
        permissions: [1, 2, 3, 4, 5]
      },
      {
        name: "分类列表", id: "cate", path: '/jurisdiction/cate',

        component: lazy(() => import('../pages/jurisdiction/Cat')),
        permissions: [1, 2, 3, 4, 5]
      },
    ],
  },
];
