import React from 'react';
import firebase from 'firebase';

import config from '../config/config';
import { Formik, Form } from 'formik';
import { Table, Modal } from 'antd';
import styled from 'styled-components';
import NormalUserDataViewAndEdit from './components/NormalUserDataViewAndEdit';
import initFormikValues from './utils/initFormikValues';
import getValidationSchema from './utils/getValidationSchema'

const Frame = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 15px;
  .ant-btn.ant-btn-circle{
    width: 160px;
    height: 160px;
    border-width: 15px;
    font-size: 2.5em;
  }
  .ant-btn-block,.ant-input,.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    min-height: 45px;
    font-size: 1.2em;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item{
    line-height: 45px
  }
  .ant-select-item{
    min-height: auto;
    padding: 20px 10px;
    font-size: 1.2em;
  }
`;

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

export const RouteList = props => {
  // 取得路由上使用者 id
  // const personnelNumber = props.match.params.id
  // 無法動態之前每月固定寫死
  const personnelNumber = 'gzybfooy8brj202104'
  
  return (
    <div>
      打卡記錄網址
      {personnelNumberComparison.map(item => (
        <div><a href={`https://goodjobco.github.io/personnel/${item.id}/#/hrm/${item.id}`} target="_blank">{item.name}</a></div>
      ))}      
    </div>
  );
}