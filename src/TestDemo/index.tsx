import React from 'react';
import styles from './style.less';

interface TestProps {
  title: string
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
    </div>
  )
}
export default Test;