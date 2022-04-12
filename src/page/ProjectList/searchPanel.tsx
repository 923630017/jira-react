import React from 'react';
import { Input, Select } from 'antd';
import './index.less'
import { User, Parmas } from './index.config'
const { Option } = Select
interface SearchStateProps {
    param: Parmas;
    setParam: (params: Parmas) => void;
    users: User[]
}
const Index = ({ param, setParam, users}: SearchStateProps) => {

    /**
     * 搜索页面
     * */
    return <div className="search-panel">
        <Input
            style={{ width: 160 }}
            value={param.name}
            onChange={({ target }) =>
                setParam({
                    ...param,
                    name: target.value
                })}
        />
        <Select style={{ width: 100 }} value={param.personId} onChange={(value) => {
            setParam({
                ...param,
                personId: value
            })
        }}>
            <Option value=''>负责人</Option>
            {
                users.map((item) => <Option value={item.id} key={item.id}>{item.name}</Option>)
            }
        </Select>
    </div>
}
export default Index