export const DateToYMDNow = () => {
  const date = new Date();
  const dateArr = date.toLocaleDateString().split("");
  const year = dateArr.slice(6).join("");
  const day = dateArr.slice(0, 2).join("");
  const moths = dateArr.slice(3, 5).join("");
  return `${year}-${moths}-${day}`;
  console.log("🚀 ~ file: DateToYYMMDD.ts:7 ~ DateToYMDNow ~ moths:", moths);
  console.log("🚀 ~ file: DateToYYMMDD.ts:6 ~ DateToYMD ~ day:", day);
  console.log("🚀 ~ file: DateToYYMMDD.ts:4 ~ dateToYMD ~ dateArr:", year);
};
