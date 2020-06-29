import {
  PieChartOutlined,
  UserOutlined,
  BarsOutlined,
  FileImageOutlined,
  PayCircleOutlined,
  BookOutlined,
  TeamOutlined,
  WalletOutlined,
} from "@ant-design/icons";

export default [
  {
    id: "home",
    name: "系统首页",
    icon: PieChartOutlined,
  },
  {
    id: "product",
    name: "产品管理",
    icon: BarsOutlined,
    children: [
      {
        id: "list",
        name: "产品列表",
        children: [
          { id: "add", name: "新增商品" },
          { id: "modify", name: "修改商品" },
        ],
      },
      { name: "分类管理", id: "cate" },
    ],
  },
  {
    id: "image",
    name: "图片管理",
    icon: FileImageOutlined,
    children: [{ name: "广告管理", id: "ad" }],
  },
  {
    id: "trading",
    name: "交易管理",
    icon: PayCircleOutlined,
    children: [
      { name: "交易信息", id: "info" },
      { name: "订单管理", id: "order" },
      { name: "交易金额", id: "amount" },
      { name: "订单处理", id: "handle" },
    ],
  },
  {
    id: "pay",
    name: "支付管理",
    icon: WalletOutlined,
    children: [
      { name: "账户管理", id: "acount" },
      { name: "支付方式", id: "way" },
      { name: "支付配置", id: "setting" },
    ],
  },
  {
    id: "vip",
    name: "会员管理",
    icon: UserOutlined,
    children: [
      {
        name: "会员列表",
        children: [
          // { id: "", name: "新增商品" },
          { id: "modify", name: "编辑等级" },
        ], id: "list"
      },
      { name: "等级管理", id: "level" },
    ],
  },
  {
    id: "article",
    name: "文章管理",
    icon: BookOutlined,
    children: [
      { name: "文章列表", id: "list" },
      { name: "分类管理", id: "cate" },
    ],
  },
  {
    id: "manager",
    name: "管理员管理",
    icon: TeamOutlined,
    children: [
      { name: "店员列表", id: "list" },
      { name: "分类列表", id: "cate" },
    ],
  },
];
