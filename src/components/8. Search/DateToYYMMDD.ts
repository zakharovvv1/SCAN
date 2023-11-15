export const DateToYMDNow = () => {
  const date = new Date();
  const dateArr = date.toLocaleDateString().split("");
  const year = dateArr.slice(6).join("");
  const day = dateArr.slice(0, 2).join("");
  const moths = dateArr.slice(3, 5).join("");
  return `${year}-${moths}-${day}`;
};

export const CompareDates = (dateOfStart: any, dateOfEnd: any) => {
  if (dateOfStart === "" && dateOfEnd === "") {
    return false;
  }
  const dateStart = new Date(dateOfStart);
  const dateEnd = new Date(dateOfEnd);
  return dateStart >= dateEnd;
};
