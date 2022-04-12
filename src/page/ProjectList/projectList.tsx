import React from "react";
import { Table } from 'antd'
import { User, ListItem } from './index.config'
import './index.less'
import { ColumnsType } from 'antd/es/table';
const Index = ({ list, users }: { list: ListItem[]; users: User[] }) => {
  const columns:ColumnsType<ListItem> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      align: "center",
    },
    {
      title: '部门',
      dataIndex: 'organization',
      key: 'organization',
      align: "center"
    },
    {
      title: '负责人',
      dataIndex: 'personId',
      key: 'personId',
      align: 'center',
      render: (text) => <span>{users.find(item => item.id === text)?.name || '不存在'}</span>
    },
  ]

  return <div className="project-list">
    <Table
      columns={columns}
      dataSource={list}
      rowKey="id"
    >
    </Table>
  </div>
}
export default Index