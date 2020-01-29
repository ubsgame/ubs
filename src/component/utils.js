import BigNumber from "bignumber.js";

function getDate(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

export function formatDate(time) {
    const Y = time.getFullYear();
    const M = getDate(time.getMonth() + 1);
    const d = getDate(time.getDate());
    const h = getDate(time.getHours());
    const m = getDate(time.getMinutes());
    // var s =getDate(time.getSeconds());
    return `${h}:${m} ${Y}/${M}/${d}`;

}

export function showPrice(price, decimalPlaces) {
    if (price) {
        let ret = new BigNumber(price).dividedBy(new BigNumber("1000")).toFixed(decimalPlaces);
        return trimNumber(ret);
    } else {
        return "0.000";
    }
}

export function decimals(val, decimal, decimalPlaces) {
    if (!val || val === 0) {
        return "0";
    }
    let text = new BigNumber(val).dividedBy(new BigNumber(10).pow(decimal)).toFixed(decimalPlaces, 1);
    return trimNumber(text)
}

export function sameDay(time1, time2) {
    return parseInt(time1 / 24 / 3600) === parseInt(time2 / 24 / 3600)
    // return parseInt(time1 / 600) === parseInt(time2 / 600)
}

export function showPK(name, pk, len) {
    if (!pk) {
        return "";
    }
    if (!len) {
        len = 8;
    }
    return name + " " + pk.slice(0, len) + "..." + pk.slice(-len)
}

function trimNumber(numberStr) {
    if (numberStr.indexOf(".") > -1 && numberStr.charAt(numberStr.length - 1) == '0') {
        for (var i = numberStr.length - 1; i > 0; i--) {
            if (numberStr.charAt(i) != '0') {
                if (numberStr.charAt(i) == '.') {
                    return numberStr.substring(0, i);
                } else {
                    return numberStr.substring(0, i + 1);
                }
            }
        }
    }
    return numberStr;
}
