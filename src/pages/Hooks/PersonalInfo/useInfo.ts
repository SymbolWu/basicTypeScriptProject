import { useState, useEffect } from "react";

interface userInfo {
  name: string;
  age: number;
  phone?: number;
  address?: string;
  avatar?: string;
}

export default function useInfo() {
  const [info, setUserInfo] = useState<userInfo | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setUserInfo({
        name: "Peter",
        age: 23,
        phone: 13255554444,
        address: "Wu Han",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return [info];
}
