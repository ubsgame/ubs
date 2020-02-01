import serojs from 'serojs'
import seropp from 'sero-pp'
import BigNumber from 'bignumber.js'
import {Toast} from 'antd-mobile'

const config = {
    name: "UBS",
    contractAddress: "4pxhiT1cw95CZa7u82SEghwtfRVBiYBJXGrDDAzzWfCRXvMNrseStwuPC5HCXTfpgCguDgKb2ER5Kqin7gBAt1mN",
    github: "https://github.com/ubsgame/ubs",
    author: "ubsgame",
    url: document.location.href,
    logo: document.location.protocol + '//' + document.location.host + '/ubs/logo.png'
}

const abi = [{
    "constant": false,
    "inputs": [{"name": "code", "type": "string"}],
    "name": "invest",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "triggerStaticProfit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "info",
    "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {
        "name": "",
        "type": "uint256"
    }, {"name": "", "type": "uint256"}, {"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "addr", "type": "address"}],
    "name": "registerNode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "reinvestValue", "type": "uint256"}],
    "name": "reinvest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "code", "type": "string"}],
    "name": "details",
    "outputs": [{"name": "json", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "addrs", "type": "address[]"}],
    "name": "setWithdrawAddrs",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"name": "_marketAddrs", "type": "address[]"}, {"name": "_codeServiceAddr", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}];

const caddress = config.contractAddress;
const contract = serojs.callContract(abi, caddress);

class Abi {

    constructor() {
        let self = this;
        self.OnInit = new Promise(
            (resolve, reject) => {
                seropp.init(config, function (rest) {
                    if (rest === 'success') {
                        console.log("init success");
                        return resolve()
                    } else {
                        return reject(rest)
                    }
                })
            }
        )
    }

    accountDetails(pk, callback) {
        let self = this;
        seropp.getAccountDetail(pk, function (item) {
            if ("[object Map]" === item.Balance.toString()) {
                callback({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: item.Balance.get("SERO")})
            } else {
                callback({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: item.Balance["SERO"]})
            }
        });
    }

    accountList(callback) {
        seropp.getAccountList(function (data) {
            let accounts = [];
            data.forEach(function (item, index) {
                if ("[object Map]" === item.Balance.toString()) {
                    accounts.push({
                        pk: item.PK,
                        mainPKr: item.MainPKr,
                        name: item.Name,
                        balance: item.Balance.get("SERO")
                    })
                } else {
                    accounts.push({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: item.Balance["SERO"]})
                }
            });
            callback(accounts)
        });
    }

    details(mainPkr, code, callback) {
        this.callMethod('details', mainPkr, [code], function (json) {
            if (!json || json === "0x0") {
                callback({
                    code: "",
                    parentCode: "",
                    value: 0,
                    returnValue: 0,
                    totalAynamicReward: 0,
                    canWithdraw: 0,
                    dynamicReward: 0,
                    staticReward: 0,
                    staticTimestamp: 0,
                    values: [],
                    childsCode: [],
                })
            } else {
                console.log("details", json);
                json = json.replace("\"parentCode\":\"\"\"\",", "");
                callback(JSON.parse(json));
            }
        });
    }

    info(from, callback) {
        this.callMethod('info', from, [], function (vals) {

            if (vals != "0x0") {
                callback({
                    closureTime: vals[0].toNumber(),
                    balance: vals[1],
                    fundAmount: vals[2],
                    investorCount: parseInt(vals[3]),
                    luckyCodes: vals[4].split(" ")
                });
            }

        });
    }

    setWithdrawAddrs(from, mainPKr, addrs, callback) {
        this.executeMethod('setWithdrawAddrs', from, mainPKr, [addrs], 0, callback);
    }

    triggerStaticProfit(from, mainPKr, callback) {
        this.executeMethod('triggerStaticProfit', from, mainPKr, [], 0, callback);
    }

    reinvest(from, mainPKr, value, callback) {
        this.executeMethod('reinvest', from, mainPKr, [value], 0, callback);
    }

    invest(from, mainPKr, value, code, callback) {
        this.executeMethod('invest', from, mainPKr, [code], value, callback);
    }

    withdraw(from, mainPKr, callback) {
        this.executeMethod('withdraw', from, mainPKr, [], 0, callback);
    }

    callMethod(_method, from, _args, callback) {
        let that = this;
        let packData = contract.packData(_method, _args);
        let callParams = {
            from: from,
            to: caddress,
            data: packData
        }

        seropp.call(callParams, function (callData) {
            if (callData !== "0x") {
                let res = contract.unPackData(_method, callData);
                if (callback) {
                    callback(res);
                }
            } else {
                callback("0x0");
            }
        });
    }


    executeMethod(_method, from, mainPKr, args, value, callback) {
        let that = this;

        let packData = contract.packData(_method, args);
        let executeData = {
            from: from,
            to: caddress,
            value: "0x" + value.toString(16),
            data: packData,
            gasPrice: "0x" + new BigNumber("1000000000").toString(16),
            cy: "SERO",
        };
        let estimateParam = {
            from: mainPKr,
            to: caddress,
            value: "0x" + value.toString(16),
            data: packData,
            gasPrice: "0x" + new BigNumber("1000000000").toString(16),
            cy: "SERO",
        }
        seropp.estimateGas(estimateParam, function (gas, err) {
            if (err) {
                Toast.fail("Unknow Gas Limit")
            } else {
                executeData["gas"] = gas;
                seropp.executeContract(executeData, function (res) {
                    if (callback) {
                        callback(res)
                    }
                })
            }
        });
    }
}

const alpha = new Abi();
export default alpha;
