class LocalStorage {
  static setItem(key: string, value: any) {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      throw Error("写入LocalStorage失败");
    }
  }
  static getItem(key: string) {
    try {
      const stringValue = localStorage.getItem(key) || "";
      return JSON.parse(stringValue);
    } catch (error) {
      throw Error("读LocalStorage失败");
    }
  }
  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
