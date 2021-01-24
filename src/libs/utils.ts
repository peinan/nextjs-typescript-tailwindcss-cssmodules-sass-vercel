export const getDateTimeStr = unixtime => {
    let dt = new Date(unixtime)
    let YYYY = dt.getFullYear()
    let MM = String(dt.getMonth() + 1).padStart(2, '0')
    let DD = String(dt.getDate()).padStart(2, '0')
    let HH = String(dt.getHours()).padEnd(2, '0')
    let mm = String(dt.getMinutes()).padStart(2, '0')
    return `${YYYY}-${MM}-${DD} ${HH}:${mm}`
}
