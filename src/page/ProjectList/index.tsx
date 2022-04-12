import React, { useState, useEffect } from "react";
import ProjectList from "./projectList";
import SearchPanel from "./searchPanel";
import { clearParamObject } from "common/until";
import qs from "qs";
import { useMount, useDebounce } from "hooks/useCustom";
import "./index.less";
const baseUrl = process.env.REACT_APP_BASE_URL;
const Index = () => {
  /**
   * 首页父组件
   */
  // 搜索参数
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  // 用户
  const [users, setUsers] = useState([]);
  // 列表
  const [list, setList] = useState([]);

  /**
   * 请求数据进行处理 防抖
   * */
  const debounceParams = useDebounce(param, 1000);
  // 用户数据 一开始请求
  useMount(() =>
    fetch(`${baseUrl}/users`).then(async (res) => {
      setUsers(await res.json());
    })
  );

  // 请求列表数据
  useEffect(() => {
    fetch(
      `${baseUrl}/projects?${qs.stringify(clearParamObject(debounceParams))}`
    ).then(async (res) => {
      setList(await res.json());
    });
  }, [debounceParams]);
  return (
    <div className="project-main">
      <SearchPanel param={param} setParam={setParam} users={users} />
      <ProjectList list={list} users={users} />
    </div>
  );
};
export default Index;
