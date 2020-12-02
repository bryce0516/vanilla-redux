import React from "react";
import { Dropdown, Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";

/**
 * @param {object} param
 * @param {() => void} param.logout
 */

export default function Settings({ logout }) {
  return (
    <>
      <button className="btn" onClick={logout} style={{backgroundColor:'#bbada0'}}>
        Sign Out
        <SettingOutlined />
      </button>
    </>
  );
}
