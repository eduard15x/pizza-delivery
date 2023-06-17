// convert date to string in format YEAR-MM-DD
export const convertDate = (date) => {
    const createDate = new Date(date);
    const convertedDate =`
        ${createDate.getFullYear()}-${createDate.getMonth() + 1 < 10 ?  '0' + (createDate.getMonth() + 1)   : createDate.getMonth() + 1 }-${createDate.getDate()}
    `;
    return convertedDate;
};