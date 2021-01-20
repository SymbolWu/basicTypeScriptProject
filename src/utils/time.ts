export default class TimeTool {
  /**
   * @description 补零
   * @param {*} number 数字
   */
  private static addZero = (number: number): number | string =>
    number > 9 ? number : number.toString().padStart(2, "0");
  /**
   * @description 根据时间戳获取基本时间信息
   * @param {number} timestamp 时间戳
   */

  static getBasicTimeInfo = (timestamp: number | null = null) => {
    let date = timestamp ? new Date(timestamp) : new Date();
    return {
      year: date.getFullYear(),
      month: TimeTool.addZero(date.getMonth() + 1),
      day: TimeTool.addZero(date.getDate()),
      weekDay: date.getDay(),
      hour: TimeTool.addZero(date.getHours()),
      minute: TimeTool.addZero(date.getMinutes()),
      monthWithEn: date.toDateString(),
    };
  };

  static getDate = (): string => {
    const { year, month, day } = TimeTool.getBasicTimeInfo();
    return `${year}年${month}月${day}日`;
  };

  static getWeekDay = (): string => {
    const { weekDay } = TimeTool.getBasicTimeInfo();
    return `星期${"日一二三四五六".charAt(weekDay)}`;
  };

  static getCurrentTimeFrame = (): string => {
    const { hour } = TimeTool.getBasicTimeInfo();
    let timeFrame = hour >= 12 ? (hour >= 18 ? "晚上" : "下午") : "上午";
    return timeFrame;
  };

  static getDateUseEnFormat = (timestamp: number | null = null): string => {
    const { monthWithEn } = TimeTool.getBasicTimeInfo(timestamp);
    const eleArr = monthWithEn.split(" ");
    eleArr.shift();
    return eleArr.join(" ");
  };
}
