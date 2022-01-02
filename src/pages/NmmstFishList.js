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

export const NmmstFishList = props => {
  // 取得路由上使用者 id
  const personnelNumber = props.match.params.id

  const columns = [
    {
      title: '缸體',
      dataIndex: 'personnel',
      key: 'personnel',
    },
    {
      title: '海水比重',
      dataIndex: 'seawater',
      key: 'seawater',
    },
    {
      title: '下藥紀錄',
      dataIndex: 'medication',
      key: 'medication',
    },
    {
      title: '上午餵食',
      dataIndex: 'morning',
      key: 'morning',
    },
    {
      title: '下午餵食',
      dataIndex: 'afternoon',
      key: 'afternoon',
    },
    {
      title: '是否添加硝化菌0.5cc',
      render: (_, row) => <>{row.nitrifying ? 'V' : ''}</>,
    },
    {
      title: '是否添加小蘇打',
      render: (_, row) => <>{row.soda ? 'V' : ''}</>,
    },
    {
      title: '是否添加氫氧化鈣',
      render: (_, row) => <>{row.hydroxide ? 'V' : ''}</>,
    },
    {
      title: '缸壁藻類水垢清潔',
      render: (_, row) => <>{row.cylinderWall ? 'V' : ''}</>,
    },
    {
      title: '出水口藻類清潔',
      render: (_, row) => <>{row.outlet ? 'V' : ''}</>,
    },
    {
      title: '蛋白機清洗',
      render: (_, row) => <>{row.proteinMachine ? 'V' : ''}</>,
    },
    {
      title: '過濾白棉更換',
      render: (_, row) => <>{row.filterSponge ? 'V' : ''}</>,
    },
    {
      title: '不正常設備',
      dataIndex: 'unusual',
      key: 'unusual',
    },
    {
      title: '魚口增減',
      dataIndex: 'fish',
      key: 'fish',
    },
    {
      title: '突發事項/處理',
      dataIndex: 'emergency',
      key: 'emergency',
    },
    {
      title: '維護人員',
      dataIndex: 'maintainPersonnel',
      key: 'maintainPersonnel',
    },
    // {
    //   title: '加總',
    //   render: (_, row) => <>{personnelNumberComparison[row.personnel]}</>,
    // },
    {
      title: '交接建議',
      dataIndex: 'remarks',
      key: 'remarks',
    },
  ];

  const [checkedStorageList, setCheckedStorageList] = useState([]);

  useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(config);
      const database = app.database()
      database.ref(`/nmmstFish/nmmstFishNumber${personnelNumber}`).once("value", e => {
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