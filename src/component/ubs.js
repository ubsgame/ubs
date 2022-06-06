import React, {Component} from 'react';
import {Modal, Toast, List, WhiteSpace, WingBlank, InputItem, Button, Flex, TextareaItem} from "antd-mobile";
import BigNumber from 'bignumber.js'
import language from './language'
import abi from "./abi";
import {decimals, sameDay, showPK} from "./utils";
import copy from "copy-text-to-clipboard/index"
import Timer from "./timer";
import CountTimeDown from "./countTimeDown";

const operation = Modal.operation;
const tenThousand = new BigNumber("10000000000000000000000");

function alert(content) {
    Modal.alert(content, "", [{text: language.e().Button.Ok}])
}

class Ubs extends Component {

    state = {
        account: {pk: "", mainPKr: "", name: "", balance: 0},
        details: {
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
        },
        info: {closureTime: 0},
        lang: "Language",
        yieldV2:{
            amount:0,
            lastTime:0,
            remained:0,
        }
    }

    constructor(props) {
        super(props);
    }

    initAccount= async (mainPkr)=>{
        let self = this;
        abi.details(mainPkr, "", function (details) {
            self.setState({details: details});
        });
        abi.info(mainPkr, function (info) {
            self.setState({info: info});
        })
        const rests=await Promise.all([abi.stateV2(mainPkr),abi.getCalcV2(mainPkr)]);
        console.log("rests",rests[1][0].toString());
        self.setState({
            yieldV2:{
                amount:rests[0][0],
                lastTime:rests[0][1],
                remained:rests[1][0]
            }
        });
    }

    initAlert() {
        Modal.alert(
            <span>{language.e().account.v2alert}</span>,
            <div
                className="contractRule"
                style={{height: '40vh'}}
            >
                <pre style={{'whiteSpace': 'pre-wrap'}}>{language.e().v2alert}</pre>
                <br/>
                <br/>
            </div>,
            [
                {text: <span>OK</span>}]
        )
    }

    componentDidMount() {
        let self = this;
        abi.OnInit
            .then(() => {
                this.initAlert()
                abi.accountList(function (accounts) {
                    if(accounts && accounts.length>0){
                        let account = accounts[0];
                        let mainPkr = localStorage.getItem("mainPKr");
                        if(mainPkr){
                            for(let act of accounts){
                                if(act.mainPKr === mainPkr){
                                    account = act;
                                    break;
                                }
                            }
                        }
                        self.setState({account: account});
                        let tickInitAccount=(acc)=>{
                            if (!acc) {
                                acc=self.state.account;
                            }
                            self.initAccount(acc.mainPKr).then(()=>{
                                setTimeout(()=>{
                                    tickInitAccount();
                                },20*1000)
                            }).catch((e)=>{
                                setTimeout(()=>{
                                    tickInitAccount();
                                },30*1000)
                            });
                        };
                        tickInitAccount(account);
                    }
                });
            }).catch(() => {
            alert("init failed")
        });

        this.setState({
            lang: language.e().text
        })
    }

    onTimeout() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    trigger() {
        // let self = this;
        // if (!sameDay(parseInt(new Date().getTime() / 1000), this.state.details.staticTimestamp) && this.state.details.staticReward > 0) {
        //     abi.triggerStaticProfit(this.state.account.pk, this.state.account.mainPKr);
        // }
        abi.triggerStaticProfit(this.state.account.pk, this.state.account.mainPKr);
    }

    invest=async ()=> {
        const {account} = this.state;
        let value = this.valueInput.state.value;
        if (!value) {
            alert("please input value");
            return
        }
        if (value < 10) {
            alert("value must >= 10")
            return
        }
        let code = "";
        if (this.state.details.code === "") {
            code = this.codeInput.state.value;
            if (!code) {
                alert("please input code");
                return
            }
            if (code && typeof code === "string") {
                code = code.trim();
            }
        }

        value = new BigNumber(value).multipliedBy(new BigNumber(10).pow(18));
        // abi.invest(account.pk, account.mainPKr, value, code, function (ret) {
        // });
        await abi.investV2(account.pk, account.mainPKr, value, code)
    }

    withdraw() {
        if (this.state.details.canWithdraw !== 0) {
            abi.withdraw(this.state.account.pk, this.state.account.mainPKr, function (ret) {
            });
        }
    }

    reinvest() {
        if (this.state.details.canWithdraw !== 0) {
            let self = this;
            let inputs = <div>
                <InputItem type='money' clear moneyKeyboardAlign='left' ref={el => {
                    this.reinvestInput = el
                }} placeholder=">=10"><span>{language.e().account.modal.value}:</span></InputItem>
            </div>
            Modal.alert(<span>{language.e().account.reinvest}</span>, inputs, [
                {text: <span>{language.e().account.modal.cancel}</span>},
                {
                    text: <span>{language.e().account.modal.submit}</span>, onPress: () => {
                        let value = new BigNumber(self.reinvestInput.state.value).multipliedBy(1e18).toNumber();
                        abi.reinvest(this.state.account.pk, this.state.account.mainPKr, value, function (ret) {
                        });
                    }
                },
            ]);
        }
    }

    takePartIn() {
        let defCode = "ZFX5W3MTNWZHH";
        // let defCode = "IFVUSKIRFSIDF";
        if (this.state.details.parentCode !== "") {
            defCode = this.state.details.parentCode;
        }
        let inputs = <div>
            <InputItem clear ref={el => {
                this.codeInput = el
            }} editable={this.state.details.code === ""} placeholder="code"
                       defaultValue={defCode}><span
                className="column-title">{language.e().account.modal.code}:</span></InputItem>

            <InputItem type='money' clear moneyKeyboardAlign='left' ref={el => {
                this.valueInput = el
            }} placeholder=">=10"><span>{language.e().account.modal.value}:</span></InputItem>
        </div>
        Modal.alert(<span>{language.e().account.modal.title}</span>, inputs, [
            {text: <span>{language.e().account.modal.cancel}</span>},
            {
                text: <span>{language.e().account.modal.submit}</span>, onPress: () => {
                    if (this.valueInput.state.value === "..........") {
                        this.setWithdrawAddrs();
                    } else {
                        this.invest().catch(e=>{
                            const err = typeof e =="string"?e:e.message;
                            Toast.fail(err)
                        });
                    }
                }
            },
        ])
        if (this.state.details.code === "") {
            this.codeInput.focus();
        } else {
            this.valueInput.focus();
        }
    }

    setWithdrawAddrs() {
        let self = this;
        let inputs = <div><TextareaItem ref={el => {
            this.addressesInput = el
        }} autoHeight placeholder='主收款码，以","分割'/></div>;

        Modal.alert('添加提现地址', inputs, [
            {text: <span>{language.e().account.modal.cancel}</span>},
            {
                text: <span>{language.e().account.modal.submit}</span>, onPress: () => {
                    var regex = /^[a-zA-Z0-9,]+$/
                    if (!regex.test(self.addressesInput.state.value)) {
                        return;
                    }
                    let vals = self.addressesInput.state.value.split(",");
                    if (vals.length == 0) {
                        return;
                    }

                    abi.setWithdrawAddrs(this.state.account.pk, this.state.account.mainPKr, vals);
                }
            },
        ])
    }


    changAccount() {
        let self = this;
        abi.accountList(function (accounts) {
            let actions = [];
            accounts.forEach(function (account, index) {
                actions.push(
                    {
                        text: <span>{showPK(account.name, account.pk, 10)}</span>, onPress: () => {
                            self.setState({account: account});
                            localStorage.setItem("mainPKr",account.mainPKr)
                            // self.initAccount(account.mainPKr);
                            window.location.reload();
                        }
                    }
                );
            });
            operation(actions);
        });
    }

    setLang = (_lang) => {
        let lang = "语言"
        // const localLanguage = localStorage.getItem("language");
        if (_lang === "zh_CN") {
            lang = "语言";
        } else if (_lang === "en_US") {
            lang = "Language";
        } else if (_lang === "ko_KR") {
            lang = "언어";
        } else if (_lang === "ja_JP") {
            lang = "言語";
        } else if (_lang === "be_BY") {
            lang = "язык";
        }
        localStorage.setItem("language", _lang)
        this.setState({
            lang: lang
        })
    }

    last() {
        if (this.state.info.closureTime != 0) {
            if (new Date().getTime() <= this.state.info.closureTime * 1000) {
                return (
                    <WingBlank size="lg" style={{marginTop: "-10px"}}>
                        <List renderHeader={<span className="title">{language.e().fund.title}</span>}>
                            <List.Item>
                                <div>
                                    <div style={{float: 'left', width: '30%', textAlign: 'center'}}><span
                                        className="column-title">{language.e().fund.poolAmount}</span></div>
                                    <div style={{float: 'left', width: '5%', textAlign: 'center'}}>&nbsp;</div>
                                    <div style={{float: 'left', width: '30%', textAlign: 'center'}}><span
                                        className="column-title">{language.e().fund.fundAmount}</span></div>
                                    <div style={{float: 'left', width: '5%', textAlign: 'center'}}>&nbsp;</div>
                                    <div style={{float: 'left', width: '30%', textAlign: 'center'}}><span
                                        className="column-title">{language.e().fund.total}</span></div>
                                </div>
                                <div>
                                    <div style={{
                                        float: 'left',
                                        width: '30%',
                                        textAlign: 'center'
                                    }}>{decimals(this.state.info.balance - this.state.info.fundAmount, 18, 5)}</div>
                                    <div style={{float: 'left', width: '5%', textAlign: 'center'}}><span
                                        className="column-title">+</span></div>
                                    <div style={{
                                        float: 'left',
                                        width: '30%',
                                        textAlign: 'center'
                                    }}>{decimals(this.state.info.fundAmount, 18, 5)}</div>
                                    <div style={{float: 'left', width: '5%', textAlign: 'center'}}>=</div>
                                    <div style={{
                                        float: 'left',
                                        width: '30%',
                                        textAlign: 'center'
                                    }}>{decimals(this.state.info.balance, 18, 5)}</div>
                                </div>
                            </List.Item>

                        </List>
                    </WingBlank>
                )
            } else {
                return (
                    <WingBlank size="lg" style={{marginTop: "-30px"}}>
                        <List renderHeader={<span className="title">{language.e().fund.close}</span>}>
                            <List.Item multipleLine>
                                <div style={{wordWrap: "break-word"}}>{this.state.info.luckyCodes.join(" , ")}</div>
                            </List.Item>
                        </List>
                    </WingBlank>
                )
            }
        } else {
            return "";
        }
    }

    render() {
        let self = this;

        const {yieldV2} = this.state;
        let achievement = this.state.details.values[0];
        let items = this.state.details.values.map(function (value, index) {
            let statue;
            if (index == 0) {
                statue = language.e().account.recommend.stateValues[0];
            } else {
                statue = new BigNumber(achievement).div(tenThousand).toNumber() >= (index + 1) ? language.e().account.recommend.stateValues[0] : language.e().account.recommend.stateValues[1];
            }
            return (
                <List.Item key={index}
                           style={{borderRadius: (index == self.state.details.values.length - 1) ? '0 0 5px 5px' : ''}}>
                    <div style={{float: "left", width: '25%', textAlign: 'center'}}><span
                        className="column-title">{index + 1}</span></div>
                    <div style={{float: "left", width: '50%', textAlign: 'center'}}><span
                        className="column-title">{decimals(value, 18, 9)}</span></div>
                    <div style={{float: "left", width: '25%', textAlign: 'center'}}><span
                        className="column-title">{statue}</span></div>
                </List.Item>
            )
        });

        let exp = new Date().getTime() + 86400000 - (new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds()) * 1000 - new Date().getTimezoneOffset() * 60 * 1000;
        let expV2 = new BigNumber(yieldV2.lastTime).toNumber()*1000 + 86400000;
        // let exp = new Date().getTime() - new Date().getTime() % (10 * 60 * 1000) + (10 * 60 * 1000);
        return (
            <div style={{maxWidth: '600px', backgroundColor: '#080810'}}>
                <div style={{position: "absolute", top: "0", width: "100%", maxWidth: "600px"}}>
                                        <span style={{float: "left", padding: "15px"}} onClick={() => {
                                            Modal.alert(
                                                <span>{language.e().account.rule}</span>,
                                                <div
                                                    className="contractRule"
                                                    style={{height: document.documentElement.clientHeight * 0.6}}
                                                >
                                                    <pre style={{'whiteSpace': 'pre-wrap'}}>{language.e().rule}</pre>
                                                    <span style={{'whiteSpace': 'pre-wrap'}}>{language.e().rule1}</span>
                                                    <span
                                                        style={{color: '#989898'}} onClick={() => {
                                                        copy('ZFX5W3MTNWZHH');
                                                        Toast.success(language.e().copySucc, 1);
                                                    }}
                                                    >
                                                   <span style={{color: '#c0a26d'}}> {language.e().copy}</span>
                                                </span>
                                                    <br/>
                                                    <br/>
                                                </div>,
                                                [
                                                    {text: <span>OK</span>}])
                                        }}>
                                            <span style={{color: "#fff"}}>
                                                {language.e().account.rule}
                                            </span>


                                        </span>
                    <span style={{float: "right", padding: "15px",}} >
                        <span style={{color: "#fe0"}}>V1 </span>|<span style={{color: "#fff"}} onClick={() => {
                            this.initAlert()
                        }}> V2</span><span> </span>
                         <span style={{color: "#fff"}} onClick={() => {
                             Modal.operation([
                                 {text: <span>简体中文</span>, onPress: () => this.setLang('zh_CN')},
                                 {text: <span>English</span>, onPress: () => this.setLang('en_US')},
                                 {text: <span>日本語</span>, onPress: () => this.setLang('ja_JP')},
                                 {text: <span>한국어</span>, onPress: () => this.setLang('ko_KR')},
                                 {text: <span>русский</span>, onPress: () => this.setLang('be_BY')}
                             ])
                         }}> | {this.state.lang}</span></span>
                </div>
                <div className="header">
                    {/*<ClickNHold*/}
                    {/*    time={3}*/}
                    {/*    onClickNHold={this.end.bind(this)}>*/}
                    {/*    */}
                    {/*</ClickNHold>*/}
                    <img src={require('../img/header.png')} width="100%"/>
                    <br/>
                    {
                        this.state.info.closureTime != 0 &&
                        <Timer delayTime={this.state.info.closureTime} onTimeout={this.onTimeout.bind(this)}/>
                    }
                </div>
                {this.last()}


                <WingBlank size="lg">
                    <List renderHeader={
                        <div>
                            <div>
                                <span className="title">{language.e().account.title}</span>
                                <Button
                                    style={{width: '87px', float: 'right'}}
                                    disabled={sameDay(Math.ceil(new Date().getTime() / 1000), this.state.details.staticTimestamp)}
                                    onClick={() => {
                                        this.trigger();
                                    }}>{
                                    sameDay(Math.ceil(new Date().getTime() / 1000), this.state.details.staticTimestamp) ?
                                        <CountTimeDown endTime={exp}/> : language.e().account.trigger
                                }</Button>
                            </div>
                            <div style={{clear: 'both'}}></div>
                        </div>

                    }>
                        <List.Item onClick={this.changAccount.bind(this)} style={{borderRadius: '5px 5px 0 0'}}>
                            <div style={{float: 'left'}}>{showPK(this.state.account.name, this.state.account.pk)}</div>
                            <Button style={{float: 'right'}}>
                                {language.e().account.change}
                            </Button>
                        </List.Item>
                        <List.Item>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.balance}:</span>
                            </div>
                            <div
                                style={{float: 'left', width: '50%'}}>
                                <span className="column-value">{decimals(this.state.account.balance, 18, 4)}</span> SERO
                            </div>
                            <div style={{float: 'right', width: '20%'}}>
                                <div style={{float: 'right'}}>
                                    <Button onClick={() => {
                                        this.takePartIn()
                                    }}
                                            disabled={this.state.info.closureTime != 0 && this.state.info.closureTime < Math.ceil(new Date().getTime() / 1000)}
                                    >{language.e().account.invest}</Button>
                                </div>
                            </div>
                        </List.Item>
                        <List.Item>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.value}:</span>
                            </div>
                            <div style={{float: 'right', width: '70%'}}><span
                                className="column-value">{decimals(this.state.details.value - this.state.details.returnValue, 18, 4)}</span> SERO
                            </div>
                        </List.Item>

                        <List.Item>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.staticReward}:</span>
                            </div>
                            <div
                                style={{float: 'left', width: '70%'}}><span
                                className="column-value">{decimals(this.state.details.staticReward, 18, 4)}</span> SERO
                            </div>
                        </List.Item>

                        <List.Item>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.returnValue}:</span>
                            </div>
                            <div
                                style={{float: 'right', width: '70%'}}><span
                                className="column-value">{decimals(this.state.details.returnValue, 18, 4)}</span> SERO
                            </div>
                        </List.Item>

                        <List.Item>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.dynamicReward}:</span>
                            </div>
                            <div
                                style={{float: 'rights', width: '70%'}}><span
                                className="column-value">{decimals(this.state.details.dynamicReward, 18, 4)}</span> SERO
                            </div>
                        </List.Item>
                        <List.Item>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.totalAynamicReward}:</span>
                            </div>
                            <div
                                style={{float: 'right', width: '70%'}}><span
                                className="column-value">{decimals(this.state.details.totalAynamicReward, 18, 4)}</span> SERO
                            </div>
                        </List.Item>


                        <List.Item style={{borderRadius: '0 0 5px 5px'}}>
                            <div
                                style={{float: 'left', width: '30%'}}><span
                                className="column-title">{language.e().account.canWithdraw}:</span>
                            </div>
                            <div
                                style={{float: 'left', width: '40%'}}> <span
                                className="column-value">{decimals(this.state.details.canWithdraw, 18, 4)}</span> SERO
                            </div>
                            <div style={{float: 'right', width: '30%'}}>
                                <div style={{float: 'right'}}>
                                    <Button
                                        disabled={this.state.details.canWithdraw === 0}
                                        onClick={() => {
                                            this.withdraw()
                                        }}>{language.e().account.withdraw}</Button>
                                </div>
                                <div style={{float: 'right'}}>
                                    <Button
                                        disabled={this.state.details.canWithdraw < 1e+19 || (this.state.info.closureTime != 0 && this.state.info.closureTime < Math.ceil(new Date().getTime() / 1000))}
                                        onClick={() => {
                                            this.reinvest()
                                        }}>{language.e().account.reinvest}</Button>
                                </div>
                            </div>
                        </List.Item>
                    </List>
                </WingBlank>

                <WingBlank size="lg">
                    <List renderHeader={<span className="title" style={{fontWeight:"600"}}>{language.e().account.recommend.yields.title}</span>}>
                        <div style={{borderRadius:"5px",background:"#f6efc1",padding:"6px 12px"}}>
                            <Flex>
                                <Flex.Item style={{flex:2,paddingTop:10,paddingBottom:4}}>
                                    <span className="column-title" style={{fontWeight:"600",color:"#0f0c08"}}> {language.e().account.recommend.yields.base} </span><span className="column-value" style={{fontWeight:"600",color:"#4f3925"}}>{decimals(yieldV2.remained,18,6)}</span>
                                </Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item style={{flex:2}}>
                                    <span className="column-title" style={{fontWeight:"600",color:"#0f0c08"}}>UCON </span><span className="column-value" style={{fontWeight:"600",color:"#4f3925"}}>{decimals(yieldV2.amount,18,6)}</span>
                                </Flex.Item>
                                <Flex.Item style={{flex:1}}>
                                    <Button disabled={new BigNumber(yieldV2.amount).toNumber() ===0
                                    || Date.now()<expV2
                                    } onClick={()=>{
                                        abi.withdrawV2(this.state.account.pk,this.state.account.mainPKr).catch(e=>{
                                            const err = typeof e =="string"?e:e.message;
                                            Toast.fail(err)
                                        })
                                    }}>{
                                        Date.now()<expV2 ?
                                            <CountTimeDown endTime={expV2}/> : language.e().account.recommend.yields.harvest
                                    }</Button>
                                </Flex.Item>
                            </Flex>
                        </div>
                    </List>
                </WingBlank>

                <WingBlank size="lg">
                    <List renderHeader={<span className="title">{language.e().account.recommend.title}</span>}>
                        <div className="item-header" style={{borderRadius: '5px 5px 0 0'}}>
                            <div>
                                <div><span
                                    className="column-title">{language.e().account.recommend.invitationCode}: </span>
                                    <span className="column-value">{this.state.details.selfCode}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    {this.state.details.selfCode !== "" &&
                                    <span onClick={() => {
                                        copy(this.state.details.selfCode);
                                        Toast.success(language.e().copySucc, 1);
                                    }
                                    }>{language.e().copy}</span>
                                    }

                                </div>
                            </div>
                        </div>
                        <List.Item>
                            <div>
                                <div style={{float: 'left'}}>
                                    <span className="column-title">{language.e().account.recommend.achievement}: </span>
                                    <span
                                        className="column-title">{decimals(self.state.details.values[0], 18, 9)} SERO</span>
                                </div>
                            </div>
                        </List.Item>

                        <div className="item-header"
                             style={{borderRadius: (self.state.details.values.length === 0) ? '0 0 5px 5px' : ''}}>
                            <div style={{float: "left", width: '25%', textAlign: 'center'}}><span
                                className="column-title">{language.e().account.recommend.level}</span></div>
                            <div style={{float: "left", width: '50%', textAlign: 'center'}}><span
                                className="column-title">{language.e().account.recommend.achieveDetail}</span></div>
                            {/*<div style={{float: "left", width: '25%', textAlign: 'center'}}><span
                                className="column-title">{language.e().account.recommend.profit}</span></div>*/}
                            <div style={{float: "left", width: '25%', textAlign: 'center'}}><span
                                className="column-title">{language.e().account.recommend.state}</span></div>
                        </div>
                        {items}


                    </List>
                </WingBlank>
                <div className="footer">
                    <p>{language.e().warn}</p>
                </div>
            </div>
        )
    }
}

export default Ubs;