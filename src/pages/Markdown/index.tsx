import React, { useState, useEffect } from "react";
import Editor from "for-editor";
import { Tabs } from "antd";
import md from "./test.md";
import "./index.css";

const { TabPane } = Tabs;
export default () => {
  const [value, setValue] = useState("");
  const handleChange = (value: string): void => {
    setValue(value);
  };
  const onSave = (value: string): void => {
    console.log(value);
  };
  useEffect(() => {
    setValue(md);
    // const headerGroup = md
    //   .split(/[(\r\n)\r\n]+/)
    //   .filter((e: string) => e.startsWith("#"));
    // document.getElementsByTagName();
  }, [md]);
  return (
    <div>
      <Tabs defaultActiveKey="2">
        <TabPane tab="Edit" key="1">
          <Editor
            value={value}
            onChange={handleChange}
            onSave={onSave}
            style={{ boxShadow: "none", borderRadius: "0px" }}
            // previewerStyle={{background: "#fff"}}
          />
        </TabPane>
        <TabPane tab="Normal" key="2">
          <div
            style={{
              display: "flex",
              backgroundColor: "yellowgreen",
            }}
          >
            <Editor
              value={value}
              preview={true}
              toolbar={{}}
              style={{
                boxShadow: "none",
                borderRadius: "0px",
                width: "80%",
                border: "0px",
              }}
            />
            <div>目录</div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
