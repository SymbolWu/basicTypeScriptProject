import React from "react";
import { Card, Avatar, Descriptions } from "antd";
import useInfo from "./useInfo";

const { Meta } = Card;

export default () => {
  const [info] = useInfo();
  return (
    <Card loading={info === null} style={{ width: "300px" }}>
      <Meta
        avatar={<Avatar src={info?.avatar} />}
        title={info?.name}
        description={
          <Descriptions column={1}>
            <Descriptions.Item label="Age">{info?.age}</Descriptions.Item>
            <Descriptions.Item label="Telephone">
              {info?.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {info?.address}
            </Descriptions.Item>
          </Descriptions>
        }
      />
    </Card>
  );
};
