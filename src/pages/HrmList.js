import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import config from '../config/config';
import { Table } from 'antd';
import styled from 'styled-components';

const personnelNumberComparison = {
  'g1iivfrxes6jHrmOptional': '',
  'g1iivfrxes6j1701001': '賴建良',
  'g3b0pju2vdgj1701002': '洪黛君',
  'g4gum8cctlnj1701003': '李育修',
  'g6vb5bc6wegj1701004': '林彥如',
  'g745ylfzh21j1701005': '王思涵',
  'g917kzq5vvvj1701006': '莊銘育',
  'gc786zj39xaj1701007': '莊銘昕',
}

const Frame = styled.div`
  width: 100%;
//   max-width: 500px;
  margin: 0 auto;
  padding: 0 10px;
  .ant-btn.ant-btn-circle{
    width: calc(50% - 20px);
    height: 100px;
    margin: 0px 10px;
    border-width: 8px;
    font-size: 2.5em;
    border-radius: 25px;
  }
  .ant-btn-block,.ant-input,.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    min-height: 60px;
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
  .ant-form-item{
    margin-bottom: 0;
  }
`;

export const HrmList = props => {
  // 取得路由上使用者 id
  const personnelNumber = props.match.params.id

  const columns = [
    {
      title: '姓名',
      dataIndex: 'personnel',
      key: 'personnel',
      render: (_, row) => <>{personnelNumber === 'g1iivfrxes6jHrmOptional' ? row.personnel: personnelNumberComparison[row.personnel]}</>,
    },
    {
      title: '專案',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '開始日',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: '時間',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '結束日',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: '時間',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '加總',
      render: (_, row) => <>{personnelNumberComparison[row.personnel]}</>,
    },
    {
      title: '備註',
      dataIndex: 'remarks',
      key: 'remarks',
    },
  ];

  const [checkedStorageList, setCheckedStorageList] = useState([]);

  useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(config);
      const database = app.database()
      database.ref(`/personnel/personnelNumber${personnelNumber}`).once("value", e => {
        setCheckedStorageList(e.val())
      })
    } else {
      const app = firebase.app();
    }
  }, [personnelNumber]);

  return (
    <Frame>
      <Table dataSource={Object.values(checkedStorageList)} columns={columns} />
    </Frame>
  );
}