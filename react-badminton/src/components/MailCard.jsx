import React from "react";
import { Space, Table, Tag } from 'antd';
import { LineHeightOutlined } from "@ant-design/icons";

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '300px'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Sender',
    dataIndex: 'sender',
    key: 'sender',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
      const color = status === 'read' ? 'green' : 'volcano';
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
    width:'100px',
    align:'center',
    onHeaderCell: () => ({
      style: { textAlign: 'left'},
    }),
  },
];
const data = [
  {
    key: '1',
    title: 'John Brown',
    status: 'read',
  },
  {
    key: '2',
    title: 'Jim Green',
    status: 'unread',
  },
  {
    key: '3',
    title: 'Joe Black',
    status: 'unread',
  },
  {
    key: '4',
    title: 'Wayne Hao',
    status: 'unread',
  },
  {
    key: '5',
    title: 'Yang',
    status: 'unread',
  },
  {
    key: '6',
    title: 'Alex',
    status: 'unread',
  },
  {
    key: '7',
    title: 'Daniel',
    status: 'read',
  },
  {
    key: '8',
    title: 'Max',
    status: 'unread',
  },
];

const MailCard = () => 
  <Table 
    columns={columns} 
    dataSource={data}
    pagination={false} 
    scroll={{ y: '315px'}}
    size="middle"
    onHeaderRow = {() => ({
      style: { height:'30px', padding:'0px', lineHeight:'0px', },
    })}
    />;
export default MailCard;