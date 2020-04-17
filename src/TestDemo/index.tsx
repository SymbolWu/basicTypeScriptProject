import React from 'react';
import { Button, Collapse } from 'antd';
import styles from './style.less';

const { Panel } = Collapse;
interface TestProps {
  title: string
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function callback(key: any) {
  console.log(key);
}

const Test: React.FC<TestProps> = (props) => {
  const { title } = props;
  const getTitle = (value: string): string => {
    const newTitle: string = `Current:${value}`;
    return newTitle
  }
  return (
    <div className={styles.title}>
      {getTitle(title)}
      <Button type="primary">Test</Button>
      <div className={styles.collapse}>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          className={styles.container}
        >
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
export default Test;