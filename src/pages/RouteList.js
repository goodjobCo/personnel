import React from 'react';

import { Table } from 'antd';
import styled from 'styled-components';


const personnelNumberComparison = [
    {
      name: '沒有名字',
      id: 'g1iivfrxes6jHrmOptional'
    },
    {
        name: '賴建良',
        id: 'g1iivfrxes6j1701001'
    },
    {
        name: '洪黛君',
        id: 'g3b0pju2vdgj1701002'
    },
    {
        name: '李育修',
        id: 'g4gum8cctlnj1701003'
    },
    {
        name: '林彥如',
        id: 'g6vb5bc6wegj1701004'
    },
    {
        name: '王思涵',
        id: 'g745ylfzh21j1701005'
    },
    {
        name: '莊銘育',
        id: 'g917kzq5vvvj1701006'
    },
    {
        name: '莊銘昕',
        id: 'gc786zj39xaj1701007'
    },
]
const columns = [
  {
    title: '打卡網址',
    dataIndex: 'personnel',
    key: 'personnel',
    render: (_, row) => <><a href={`https://goodjobco.github.io/personnel/${row.id}/#/hrm/${row.id}`} target="_blank">{row.name}</a></>,
  },
  {
    title: '查詢網址',
    dataIndex: 'personnel',
    key: 'personnel',
    render: (_, row) => <><a href={`https://goodjobco.github.io/personnel/${row.id}/#/HrmList/${row.id}`} target="_blank">{row.name}</a></>,
  },
];

export const RouteList = props => {
  // 取得路由上使用者 id
  // const personnelNumber = props.match.params.id
  // 無法動態之前每月固定寫死
  const personnelNumber = 'gzybfooy8brj202104'
  
  return (
    <Table dataSource={personnelNumberComparison} columns={columns} />
  );
}