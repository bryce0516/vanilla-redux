import React from "react";
import { Dropdown, Menu, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";

/**
 * @param {object} param
 * @param {() => void} param.logout
 */

export default function Settings({ logout }) {
  return (
    <>
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>Sign Out</Menu.Item>
        </Menu>
      }
      trigger={['click']}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingOutlined />}/>
    </Dropdown>


      {/* <button className="btn" onClick={logout} style={{backgroundColor:'#bbada0'}}>
        Sign Out
        <SettingOutlined />
      </button> */}
    </>
  );
}
