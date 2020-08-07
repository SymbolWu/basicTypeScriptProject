const addZero = (number: number) => (number > 9 ? number : `0${number}`);
/**
 * 处理 2020-03-18T01:57:23.000+0000
 */
const getTimeFormatFromTTime = (tTime: string) => {
  let date = new Date(tTime.substr(0, 19));
  let Year = date.getFullYear();
  let Month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let Hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let Minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let Seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let over_time =
    Year + "/" + Month + "/" + d + " " + Hours + ":" + Minutes + ":" + Seconds;
  //***至此以上是将时间2020-03-18T01:57:23.000+0000转为正常时间格式，以下为将时间进行增加8小时解决时区差异的操作***
  let time = new Date(Date.parse(over_time));
  time.setTime(time.setHours(time.getHours() + 8));
  let Y = time.getFullYear() + "年";
  let M = addZero(time.getMonth() + 1) + "月";
  let D = addZero(time.getDate()) + " ";
  // let h = addZero(time.getHours()) + ":";
  // let m = addZero(time.getMinutes()) + ":";
  // let s = addZero(time.getSeconds());
  return Y + M + D; // + " " + h + m + s;
};
