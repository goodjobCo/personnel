import React from 'react';

import { Table } from 'antd';
import styled from 'styled-components';


const personnelNumberComparison = [
  {
    name: '沒有名字',
    id: 'g1iivfrxes6jHrmOptional'
  },
  {
    name: '1號箱豚缸',
    id: 'g1iivfrxes6j1701001'
  },
  {
    name: '2號石狗公',
    id: 'g3b0pju2vdgj1701002'
  },
  {
    name: '3號兩性缸',
    id: 'g4gum8cctlnj1701003'
  },
  {
    name: '4號大花枝',
    id: 'g6vb5bc6wegj1701004'
  },
  {
    name: '5號裸胸鯙',
    id: 'g745ylfzh21j1701005'
  },
  {
    name: '6號蝦虎缸',
    id: 'g917kzq5vvvj1701006'
  },
  {
    name: '7號鱟缸',
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

export const NmmstFishRouteList = props => {

  return (
    <Table dataSource={personnelNumberComparison} columns={columns} />
  );
}
// 海洋嘉年華2.0
// /nmmstFish/#/NmmstFishList/g1iivfrxes6j1701001