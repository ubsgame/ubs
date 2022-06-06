class Language {

    e = () => {
        const lang = localStorage.getItem("language");
        if (lang === "zh_CN") {
            return this.zh_CN;
        } else if (lang === "en_US") {
            return this.en_US;
        } else if (lang === "be_BY") {
            return this.be_BY;
        } else if (lang === "ja_JP") {
            return this.ja_JP;
        } else if (lang === "ko_KR") {
            return this.ko_KR;
        } else {
            let localUtc = new Date().getTimezoneOffset() / 60;
            if (localUtc === -8) {
                return this.zh_CN;
            } else {
                return this.en_US;
            }
        }
    }

    en_US = {
        text: "Language",
        warn: "Venture capital, cautious participation.",
        copySucc: "Copy success",
        copy: "Copy",
        Button: {
            Ok: "Ok",
            Cancel: "Cancel"
        },
        fund: {
            title: "Guarantee funds [Start]",
            poolAmount: "Pool of funds",
            fundAmount: "Guarantee fund",
            total: "Total",
            close: "Lucky codes"
        },
        account: {
            title: "Account",
            change: "Change",
            balance: "Balance",
            invest: "Invest",
            withdraw: "Withdraw",
            reinvest: "Reinvest",
            amount: "Amount",
            trigger: "Trigger Income",
            staticReward: "Daily Fixed Income",
            dynamicReward: "Daily Referral Income",
            canWithdraw: "Collect Amount",
            value: "Fixed Income Limit",
            returnValue: " Total Fixed Income ",
            totalAynamicReward: " Total Referral Income",
            rule: "Contract Rule",
            v2alert: "UBS V2 ANNOUNCEMENT",

            modal: {
                title: "Invest",
                code: "Invitation code",
                value: "Value",
                cancel: "Cancel",
                submit: "Submit"
            },
            records: {
                id: "ID",
                title: "Records",
                time: "Remaining days",
                amount: "Amount",
                profit: "Profit",
                total: "Total",
                state: "Can Withdraw",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Recommend info",
                invitationCode: "Invitation code",
                inviteNumber: "Number of invitations",
                achievement: "Achievement",

                level: "Level",
                count: "Count",
                profit: "Share profit",
                achieveDetail: "Achievement",
                state: "Can Gain",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"Yield",
                    base:"POWER",
                    harvest:"Harvest"
                }
            }
        },
        v2alert:`
It is a great honor to be with you for more than 2 years in the development of UBS. At this moment, we are very excited to share with you

- From the UBS ecological development route, a new and independent UBS V2 version is about to be launched. V2 will form a perfect DeFi ecological closed loop with V1.

- V2 includes a variety of innovative DeFi technologies, such as mixed tokens that can unify power, bonus pool reward empowerment, and U medal NFT, etc.

- V2 is already in the inner testing stage and is expected to be officially launched in July 2022. The current UBS will be defined as the UBS V1 version When V2 is launched, and the [V1] [V2] version switch button will be added to this interface.

Hope all U fans are happy to mine and have a good day!

For more details about V2, please visit our Medium
https://medium.com/@YouCoin/the-innovative-and-upgraded-ubank-v2-bd49c4268e47
`,
        rule: `
UBS Bank Contract Rules

I. Use recommendation code as link relation

Ii. Scope of participation: ≥10 SERO

Iii. Personal finance income (Static Income)
1) Upon participation, all SERO flow into the same UBS bank contract pool, and the account immediately shows a static return quota of three times the investment amount, which can be increased indefinitely.
2) Static income is released in accordance with 1.5% of the bank contract pool every day, weighted by the amount of static income of each account, until the static income is three times of the investment, and the contract stops
3) Daily settlement of static returns (UTC 00:00), which can be withdrawn or reinvested by "triggering returns" and then flowing into "collection"

Iv. Performance reward income (sharing income)
1) Permanently enjoy 100% of the static income of a layer shared
2) If the direct share performance reaches 20,000 SERO, you can enjoy 10% of the static revenue of the second layer shared
3) For each additional 10,000 SERO of direct sharing performance, 10% of the static revenue of the additional layer will be enjoyed by the shared person, up to a maximum of 20 layers
4) Income sharing burns, that is, when calculating the income sharing, the smaller of the principal of the sharing person and the shared person shall be calculated. If the actual investment amount reaches 100,000 and above SERO, the bonus will not be burned
5) Daily settlement of income sharing, automatic implementation of "collection and collection", withdrawal and reinvestment

V. Additional mining income UCON
1) Based on UBS 2.0 technology, UBS series ecological rights management token UCON will be officially issued on 9/9/2021 00:00 UTC. 60% of UCON's daily circulation will be automatically issued to UBS bank users as a reward for investment and mining
2) Mining authorization: After the first "investment" is made in UBS bank and successful, the account is deemed to be authorized to invest in mining, and the account will automatically trigger the function of issuing UCON tokens. PS: You must click "Invest" for the first time to activate authorization, and "reinvest" for the first time cannot be authorized. After authorization, "Reinvest" can be used normally
3) How to obtain mining reward UCON: After successfully authorized mining in THE new UBS interface, all future investment/re-investment (including the first investment for obtaining authorization) in the new UBS interface can receive corresponding UCON
4) How to calculate and collect UCON revenue
- Each account can collect UCON once every 24 hours. The amount of UCON can be collected will also change in real time with the increase of other users' new investment. The statistical interval is calculated according to the 24h interval for each account to be collected.
- UCON per collection = UCON daily circulation * Account mining weight ratio [Account mining does not collect SERO/ all account mining does not collect SERO]
- Since the account is authorized to activate the mining function, all SERO invested/reinvested are counted as the SERO that the account has participated in mining, minus the SERO released by the account to the collection every day, and the difference is the SERO that the account has not collected in mining. All investment volume will continue to accumulate until the account mining is not collected SERO, not eliminated according to the natural day.

Vi. Allocation scheme: 94% of each investment amount will be allocated to the address of UBS Bank contract pool, 4% to the address of development team as technical service fee, and 2% to the address of UBS Foundation bonus pool as platform governance fund. Smart contract will be automatically allocated

Vii. Open source system, data on the chain, code written, decentralized accounting, no back door, can not be tampered with, automatic operation, automatic distribution.

Viii. The system discloses contract rules and default recommendation codes, and players can actively participate without referees.

Developer philosophy:
Make wealth more free
Make finance simpler
Make life better`,
        rule1: 'Default referral code:ZFX5W3MTNWZHH'
    };


    zh_CN = {
        text: "语言",
        warn: "风险投资 谨慎参与",
        copySucc: "复制成功",
        copy: "复制",
        Button: {
            Ok: "确定",
            Cancel: "取消"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "我的账户",
            change: "切换",
            balance: "账户余额",
            invest: "投资",
            withdraw: "提现",
            reinvest: "复投",
            trigger: "触发收益",
            staticReward: "当天静态收益",
            dynamicReward: "当天分享收益",
            canWithdraw: "收款归集",
            value: "静态收益额度",
            returnValue: "累计静态收益",
            totalAynamicReward: "累计分享收益",
            v2alert: "UBS V2公告",
            rule: "合约规则",
            modal: {
                title: "投资",
                code: "分享码",
                value: "金额",
                cancel: "取消",
                submit: "提交"
            },
            recommend: {
                title: "我的业绩",
                invitationCode: "分享码",
                inviteNumber: "直推人数",
                achievement: "直推有效业绩",

                level: "层级",
                count: "人数",
                profit: "分享收益",
                achieveDetail: "有效业绩",
                state: "状态",
                stateValues: ["可拿", "不可拿"],
                yields:{
                    title:"收成",
                    base:"算力",
                    harvest:"收取",
                }
            }
        },
        v2alert:`
非常荣幸与您在UBS生态发展中，一起经历了2年余时间，此刻，我们非常激动与您分享：

- 由UBS生态发展路线，现即将创新推出UBS V2版本，V2将与V1形成完美的DeFi生态闭环

- V2包括了多样化的创新DeFi技术，如混合币种统一算力、分红池赋能、U荣誉勋章NFT等

- UBS V2现已处于内测阶段，预计将于2022年7月正式推出。当V2推出后，现UBS将定义为UBS V1版本，将于本界面增加【V1】【V2】版本切换按键

祝所有U粉们愉快挖矿，享受美好一天！

关于V2更多详细内容，请进入我们的Medium查阅
https://medium.com/@YouCoin/the-innovative-and-upgraded-ubank-v2-bd49c4268e47
`,
        rule: `
UBS银行合约规则
   
一、以推荐码作为链接关系

二、参与范围：≥10 SERO 

三、个人理财收益（静态收益）
    1) 参与后，所有SERO流入进同一个UBS银行合约池，且该账户立即显示出投资额三倍的静态收益额度，此额度可无限追加
    2) 静态收益每天按照银行合约池的1.5%释放，按每个账户静态收益额度权重加权释放，直到静态收益三倍于投资额，合约停止
3) 静态收益每日结算（UTC 00:00），通过“触发收益”后流入进“收款归集”，可提现可复投

四、业绩奖励收益（分享收益）
    1）永久享受一层被分享人静态收益的100% 
    2）直接分享业绩达20,000 SERO，可享受二层被分享人静态收益的10% 
    3）直接分享业绩每增加10,000 SERO，可增加享受多一层被分享人静态收益的10%，最高可享受20层 
    4）分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。实际投资币量达到100,000及以上SERO则奖金无烧伤 
5）分享收益每日结算，自动执行进“收款归集”，可提现可复投

五、额外挖矿收益UCON
1）基于UBS 2.0技术，于9/9/2021 00:00 UTC正式发行产出UBS系列生态权益治理代币UCON，UCON每天发行量60%自动执行给UBS银行用户，作为UBS银行投资挖矿奖励
2）挖矿授权：第一笔在UBS银行点“投资”并成功后，视为同意账户投资挖矿的授权，同时将自动触发账户发行UCON代币的功能。PS：第一笔必须点“投资”才能激活授权，第一笔点“复投”无法获得授权，授权后“复投”可正常使用
3）如何获得挖矿奖励UCON：在UBS新界面成功授权挖矿后，以后在UBS新界面参与的投资/复投（包括为了获得授权的第一笔投资），都可以获得相应UCON
4）UCON收成量如何计算及收取
-每个账户每24小时可收取一次UCON，可收取量随着其它用户新投资量的增加，UCON可收取量也会实时变化，统计区间按每个账户等待收取的24h时间间隔进行统计，每次可收取量如下计算：
-每次可收取UCON= UCON每天发行量*账户挖矿权重比例【账户挖矿未归集SERO/所有账户挖矿未归集SERO】
-自账户授权激活挖矿功能开始，投资/复投的所有SERO计为该账户参与挖矿的SERO，减去每天该账户释放到收款归集的SERO，差额即为该账户挖矿未归集的SERO。所有投资量将持续累积至账户挖矿未归集SERO，不按自然天消除。

六、分配方案：每笔投资币量，其中94%分配至UBS银行合约池地址，4%作为技术服务费分配至开发团队地址，2%作为平台治理基金分配至UBS基金会分红池地址，智能合约自动执行分配

七、系统开源，数据上链，代码写定，去中心化记账，没有后门，不可篡改，自动运行，自动分发。

八、系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
    
开发者理念：
    让财富更自由 
    让金融更简单
    让生活更美好`,
        rule1: '默认推荐码：ZFX5W3MTNWZHH'
    };


    ja_JP = {
        text: "言語",
        warn: "ベンチャーキャピタル",
        copySucc: "コピー成功",
        copy: "コピー",
        Button: {
            Ok: "確認する",
            Cancel: "キャンセルする"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "マイアカウント",
            change: "スイッチ",
            balance: "口座残高",
            invest: "投資する",
            withdraw: "撤退",
            reinvest: "再投資",
            amount: "私の収入",
            trigger: "トリガー収入",
            staticReward: "毎日の固定収入",
            dynamicReward: "毎日の紹介収入",
            canWithdraw: "金額を集める",
            value: "固定収入限界",
            returnValue: "累積固定収入",
            totalAynamicReward: " 累積紹介収入",
            v2alert: "UBS V2 ANNOUNCEMENT",
            rule: "契約ルール",

            modal: {
                title: "投資",
                code: "招待コード",
                value: "量",
                cancel: "キャンセル",
                submit: "提出すること"
            },
            records: {
                id: "ID",
                title: "私の投資",
                time: "有効期限",
                amount: "元本金額",
                profit: "利益",
                state: "状態",
                total: "Total",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "私のパフォーマンス",
                invitationCode: "招待コード",
                inviteNumber: "招待数",
                achievement: "直販",

                level: "レベル",
                count: "ピープル",
                achieveDetail: "私の業績",
                state: "状態",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"利回り",
                    base:"パワー",
                    harvest:"収穫"
                }
            }
        },
        v2alert:`
It is a great honor to be with you for more than 2 years in the development of UBS. At this moment, we are very excited to share with you

- From the UBS ecological development route, a new and independent UBS V2 version is about to be launched. V2 will form a perfect DeFi ecological closed loop with V1.

- V2 includes a variety of innovative DeFi technologies, such as mixed tokens that can unify power, bonus pool reward empowerment, and U medal NFT, etc.

- V2 is already in the inner testing stage and is expected to be officially launched in July 2022. The current UBS will be defined as the UBS V1 version When V2 is launched, and the [V1] [V2] version switch button will be added to this interface.

Hope all U fans are happy to mine and have a good day!

For more details about V2, please visit our Medium
https://medium.com/@YouCoin/the-innovative-and-upgraded-ubank-v2-bd49c4268e47
`,
        rule: `
UBS銀行契約ルール

1.推奨コードをリンク関係とする

2.参加范囲:≧10 SERO

3. 個人の財テク(静的利益)
1)参加後、すべてのSEROが同じUBS銀行の契約プールに流入し、その口座は直ちに投資額の3倍の静的な利益額を表示する。この額は無限に追加される。
2)静的収益は毎日銀行の契約プールの1.5%で放出され、各口座の静的収益額に重みを付けて放出され、静的収益が投資額の3倍になるまで契約は停止する
3)静的収益毎日決済(UTC 00:00)、「トリガ収益」を介して「集金帰集」への流入、引き出し復投が可

4. そのインセンティブリターン(収益の分け合い)
1)永続的に共有された人々の静的な収益の100%を享受する
2) 20,000 SEROの実績を直接共有すれば、二層の被シェア者の静的収益の10%を享受できる
3)直接分かち合う業績が10,000 SERO増加するごとに、より多くの層の分かち合う人の静的な利益の10%を享受することができ、最大20層まで享受することができる
4)分け合い収益にやけどがある。つまり、分け合い収益を計算するとき、分け合う人と分け合う人の元金のうち、どちらかが小さい人で計算する。実際の投資コインの量が100,000以上であればボーナス火傷なし
5)収益を分かち合って毎日決算して、自働実行進「集金帰集」、引き出して復投できる

5. 追加の採掘収益UCON
1) UBS 2.0技術に基づいて、9/9/2021 00:00 UTCにUBSシリーズのエコ権益管理のためのクラウドファンディングUCONを正式に発行します。UCONは毎日発行量の60%をUBS銀行の利用者に自働的に実行します。UBS銀行の投資インセンティブとして
2)マイニングの承認:最初のUBS銀行への「投資」に成功すると、マイニングへの口座投資の承認に同意したものとみなし、同時に口座によるUCONトークンの発行を自動的にトリガーする機能。PS: 1筆目は必ず「投資」をポイントしなければ許可を活性化できなくて、1筆目のポイント「復投」は許可を得ることができなくて、許可后に「復投」は正常に使用することができます
3)マイニング・インセンティブUCONの獲得:UBSの新しいインタフェースでマイニングの承認に成功した后、UBSの新しいインタフェースで参加する投資/復投(承認のための最初の投資を含む)で、それぞれのUCONを取得することができる
4) UCON収獲はどうなるか
- 各アカウントは24時間ごとにUCONを受け取ることができるが、他のユーザーの新規投資が増えるにつれ、UCONの受け取ることができる量はリアルタイムで変化する。統計区間は、各アカウントが受け取るのを待つ24hの時間間隔で集計され、一度に受け取ることができる量は以下のように計算される。
- 1回あたりUCONを徴収できる= UCON 1日あたりの発行量*口座マイニングウエイト割合【口座マイニング未帰集SERO/すべての口座マイニング未帰集SERO】
-マイニング機能をアカウントに付与してから、投資/復投したすべてのSEROがマイニングに参加したSEROとなり、毎日このアカウントが集金されたSEROから差し引いた差額がマイニング未集金のSEROとなります。すべての投資は、口座がマイニングされていないSEROに蓄積され、自然発生的には解消されない。

6. 分配案:1回の投資コインの量、うち94%はUBS銀行の契約プールのアドレスに分配し、4%は技術サービス料として開発チームのアドレスに分配し、2%はプラットフォームのガバナンス基金としてUBS財団の配当プールのアドレスに分配し、スマートコントラクトは自動的に分配を実行する

7. システムはオープンソースで、データはチェーンを巻いて、コードは定を書いて、分散化台帳を記録して、バックドアがなくて、改竄できないで、自働的に運行して、自働的に配布します。

8. システムは契約規則とデフォルトの推荐コードを公開して、プレーヤーは推荐人がない場合に自発的に参与することができます。

開発者のコンセプト:
富をもっと自由に
ファイナンスをシンプルにする
生活をよりよいものにする`,
        rule1: 'デフォルトの紹介コード：ZFX5W3MTNWZHH'
    };


    be_BY = {
        text: "язык",
        warn: "Венчурный капитал",
        copySucc: "Копирование успешно",
        copy: "копия",
        Button: {
            Ok: "Подтверждение",
            Cancel: "отменен"
        },
        fund: {
            title: "Защитный фонд [Инициирование]",
            poolAmount: "Фонд пула",
            fundAmount: "Фонд защиты",
            total: "Общая сумма",
            close: "Список победителей"
        },

        account: {
            title: "Мой аккаунт",
            change: "менять",
            balance: "Остаток средств",
            invest: "Вкладывать деньги",
            withdraw: "Снять со счета",
            reinvest: "Реинвестировать",
            amount: "Мой доход",
            trigger: " Доход триггера ",
            staticReward: " Ежедневный фиксированный доход ",
            dynamicReward: " Реферальный ежедневный доход ",
            canWithdraw: " Собрать сумму ",
            value: " Фиксированный лимит дохода ",
            returnValue: " Общий фиксированный доход ",
            totalAynamicReward: " Общий доход рефералов ",
            v2alert: "UBS V2 ANNOUNCEMENT",
            rule: "Правило договора",
            game: {
                title: "Фонд защиты [Старт]",
                poolAmount: "Пул Фонд",
                fundAmount: "Фонд защиты",
                all: "Общая сумма"
            },
            modal: {
                title: "инвестиции",
                code: "Код приглашения",
                value: "Сумма",
                cancel: "Отмена",
                submit: "покоряться"
            },
            records: {
                id: "ID",
                title: "мои инвестиции",
                time: "Дата окончания срока",
                amount: "Основная сумма",
                profit: "прибыль",
                state: "Положение дел",
                total: "общий",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Мое выступление",
                invitationCode: "Код приглашения",
                inviteNumber: "Количество приглашений",
                achievement: "Прямые продажи",

                level: "уровень",
                count: "Количество людей",
                achieveDetail: "Мое достижение",
                state: "Положение дел",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"Даходнасць",
                    base:"ПИТАНИЕ",
                    harvest:"Ураджай"
                }
            }
        },
        v2alert:`
It is a great honor to be with you for more than 2 years in the development of UBS. At this moment, we are very excited to share with you

- From the UBS ecological development route, a new and independent UBS V2 version is about to be launched. V2 will form a perfect DeFi ecological closed loop with V1.

- V2 includes a variety of innovative DeFi technologies, such as mixed tokens that can unify power, bonus pool reward empowerment, and U medal NFT, etc.

- V2 is already in the inner testing stage and is expected to be officially launched in July 2022. The current UBS will be defined as the UBS V1 version When V2 is launched, and the [V1] [V2] version switch button will be added to this interface.

Hope all U fans are happy to mine and have a good day!

For more details about V2, please visit our Medium
https://medium.com/@YouCoin/the-innovative-and-upgraded-ubank-v2-bd49c4268e47
`,
        rule: `
Правила банковского контракта UBS

1, использовать рекомендуемый код как связь

2, участв диапазон: ≥ 10 их всех

3, частные финансовые доходы (статические доходы)
1) после участия все серо перетекаются в Один и тот же банк контрактов UBS, и этот счет немедленно показывает трехкратную статическую доходность для инвестиций, которую можно бесконечно увеличить
2) статическая прибыль освобождается каждый день в размере 1,5% от банковских резервов контрактов, в рамках статической линии прибыли на каждый счет до тех пор, пока статическая прибыль не утроится в размере инвестиций и договор не прекращается
3) ежедневный расчет статических доходов (UTC 00:00), который может быть рекапитализирован и рекапитализирован с помощью «триггетирования прибыли»

4, вознаграждение за заслуги (обмен доходами)
1) постоянный доступ к 100% от общего дохода от статического состояния человека на одном этаже
2) прямое распределение результатов составляет 20 000 серо и может получать 10% от общей выручки от 2 - го уровня
3) прямое распространение результатов на 10 000 серо может увеличить удовольствие от дополнительного уровня на 10% от общей статической прибыли, полученной от человека, до 20 этажей
4) делиться полученными доходами имеет ожог, т.е. подсчитать, что при расчете прибыли, полученной при расчете прибыли, в зависимости от того, кто поделится ею с кем-либо меньшим из тех, кто делится с кем-либо первичным золотом. Реальные вложения в серо достигают 100 000 и выше, а бонусы не обгорели
5) ежедневный расчет за долю прибыли, автоматическое внедрение в "коллегиальную сборку денежных средств", с тем чтобы снять наличные и повторно вложить их

5, дополнительные доходы от добычи руды от UCON
1) в соответствии с технологией UBS 2.0 (9/9/2021 00:00:00 UTC) официальный выпуск продукции в рамках серии экологических прав и прав (UCON), выпускаемой компанией UBS, автоматически реализуется пользователям UBS в качестве вознаграждения за инвестиции в добычу руды в UBS bank в размере 60% в день
2) разрешение на добычу полезных ископаемых: после того, как первая «инвестиция» в точку «инвестирование» в UBS bank point была успешной, она рассматривается как разрешение на инвестирование в добычу рудника, которое автоматически запустило бы на счет возможность выпуска UCON жетонами. PS: для активации разрешения на проведение первого этапа необходимо ставить точки «инвестирования», а для начала «повторное вложение» не может быть лицензировано, и после этого «повторное вложение» может использоваться в нормальном режиме
3) как следует наградить UCON за успешное разрешение на разработку нового интерфейса UBS инвестициями/реинвестициями (включая первые инвестиции в новый интерфейс UBS), которые впоследствии будут вовлечены в новый интерфейс UBS
4) как рассчитывается и взимается объем сбора UCON
- каждый счет может быть взимаем UCON каждые 24 часа, поскольку количество новых инвестиций других пользователей растет, а сбор UCON может изменяться в реальном времени, и статистические интервалы измеряются по 24h интервалу между каждым счетом, ожидающим получения:
- каждый раз, когда вы получаете от UCON= UCON ежедневный выпуск
- начиная с того момента, как аккаунт санкционировал активацию функций добычи руды, все серо, вложенные в этот счет/реинвестиционные вложения, предназначенные для участия в его добыче, за исключением серо, который каждый день высвобождается на счет, предназначенный для получения денег, а именно серо, который не был интегрирован в этот счет. Все капиталовложения будут накапливаться до тех пор, пока не будут собраны счета для добычи руды, которые не будут интегрированы в серо и не будут устранены естественным путем.
-
6, схема распределения: 94% от суммы вложений выделяется в адрес банка UBS, 4% в качестве платы за техническое обслуживание в адрес группы разработчиков, 2% в качестве фонда по управлению платформами в качестве диверсионных адресов фонда UBS и автоматическое распределение складных контрактов

7, Седьмая: открытый код, цепь данных, кодирование, децентрализованное ведение отчетности, без задней двери, неподделанное, автоматическое управление, автоматическое распространение.

8, системные правила открытых контрактов и по умолчанию рекомендуемые коды, в которых игрок может принимать активное участие без рекомендаций.

Идея разработчика:
Сделать богатство более свободным
Сделать финансы проще
Сделать жизнь лучше`,
        rule1: 'Реферальный код по умолчанию:ZFX5W3MTNWZHH'
    };

    ko_KR = {
        text: "언어",

        warn: "벤처 캐피탈",
        copySucc: "복사 성공",
        copy: "복사",
        Button: {
            Ok: "확인",
            Cancel: "취소"
        },
        fund: {
            title: "보호 기금 [시작]",
            poolAmount: "기금 풀",
            fundAmount: "보호 기금",
            total: "총액",
            close: "수상자 목록"
        },
        account: {
            title: "내 계정",
            change: "스위치",
            balance: "계좌 잔액",
            invest: "사다",
            withdraw: "철수",
            reinvest: "재투자",
            amount: "나의 소득",
            trigger: "소득 트리거",
            staticReward: "일일 고정 수입",
            dynamicReward: "추천 일일 소득",
            canWithdraw: "금액 수집",
            value: "고정 수입 한도",
            returnValue: "누적 고정 수입",
            totalAynamicReward: " 누적 추천 소득",
            v2alert: "UBS V2 ANNOUNCEMENT",
            rule: "계약 규칙",
            game: {
                title: "보호 기금 [시작]",
                poolAmount: "자금 수영장",
                fundAmount: "보호 기금",
                all: "총액"
            },
            modal: {
                title: "투자",
                code: "초대 코드",
                value: "금액",
                cancel: "취소",
                submit: "제출"
            },
            records: {
                id: "ID",
                title: "내 투자",
                time: "만료일",
                amount: "교장",
                profit: "이익",
                state: "지위",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "내 공연",
                invitationCode: "초대 코드",
                inviteNumber: "초대장 수",
                achievement: "직접 판매",

                level: "수평",
                count: "사람",
                achieveDetail: "나의 업적",
                state: "지위",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"수율",
                    base:"Power",
                    harvest:"수확"
                }
            }
        },
        v2alert:`
It is a great honor to be with you for more than 2 years in the development of UBS. At this moment, we are very excited to share with you

- From the UBS ecological development route, a new and independent UBS V2 version is about to be launched. V2 will form a perfect DeFi ecological closed loop with V1.

- V2 includes a variety of innovative DeFi technologies, such as mixed tokens that can unify power, bonus pool reward empowerment, and U medal NFT, etc.

- V2 is already in the inner testing stage and is expected to be officially launched in July 2022. The current UBS will be defined as the UBS V1 version When V2 is launched, and the [V1] [V2] version switch button will be added to this interface.

Hope all U fans are happy to mine and have a good day!

For more details about V2, please visit our Medium
https://medium.com/@YouCoin/the-innovative-and-upgraded-ubank-v2-bd49c4268e47
`,
        rule: `
UBS 은행 계약 규정

一.추천코드를링크관계로한다

二. 참여 범위:10 SERO 이상

三. 개인재정수익 (정태수익)
1) 참여 후, 모든 SERO는 동일한 UBS 은행 계약 풀에 유입되며, 해당 계좌는 즉시 투자액의 3배의 정적수익한도를 나타내며,이 한도는 무제한 추가될 수 있다
2) 정지된 수익은 매일 은행계약풀의 1.5%에 따라 풀리며, 각 계좌의 정지된 수익한도액의 가중치에 따라 풀리며, 정지된 수익이 투자액의 3배가 될 때까지 계약은 정지된다
3) 매일 고정 수익 결산 (UTC 00:00),"촉발 수익"을 통해"추금"으로 유입, 인출 및 재투자 가능

四. 업적장려수익 (배당수익)
1) 영구적으로 피배당자의 정적수익의 100%를 향유한다
2) 직접 공유 실적이 20,000 SERO에 달하며, 2 층 공유 대상자의 정적 수익의 10%를 누릴 수 있다
3) 직접 공유 실적이 10,000 SERO 증가할 때마다 피공유 대상자는 정적 수익의 10%를 한 층 더 누릴 수 있으며, 최대 20 층까지 혜택을 받을 수 있습니다
4) 배당수익에 화상을 입었을 경우 배당수익을 계산할 때 배당받은 사람과 피배당받은 사람의 원금 량자중 비교적 작은것으로 계산한다.SERO는 실제 투자금액이 100,000 코인 이상인 경우, 상금은 무화상이다
5)나누어가지는수익은매일결산하며,자동적으로"수금입금"에들어가며,인출할수있고재투자할수있습니다

五. 추가 채굴 수익 UCON
1) utc는 UBS 2.0기술을 기반으로 UBS 생태계 보호 토큰인 UCON을 9/9/2021 00:00에 공식 발행하며, UCON은 매일 발행량의 60% 가 자동으로 UBS 은행 고객에게 실행되며, 이는 채굴 노력에 대한 UBS 은행의 보너스이다
2) 채굴 허가:UBS 은행 지점에서의 첫"투자"는 채굴 투자 계좌를 승인하는 것으로 간주되며,이 계좌는 자동으로 UCON 토큰을 발행하게 된다.ps:첫 번째 포인트에서"투자"를 클릭해야만 라이선스를 활성화할 수 있습니다. 첫 번째 포인트에서"리플레이"는 라이선스를 받을 수 없습니다. 라이선스 후"리플레이"는 정상적으로 사용할 수 있습니다
3) 채굴 보상 UCON 획득 방법:UBS 인터페이스에서 성공적으로 채굴 허가를 받은 후, UBS 인터페이스에 대한 투자/재투자 (라이선스 획득을 위한 첫 번째 투자 포함)에 참여하면 UCON을 획득할 수 있는가
4) UCON 수확량을 어떻게 계산하고 수취하는가
-계좌당 24시간에 한번씩 UCON을 받을 수 있다. 다른 유저들의 신규 투자가 증가함에 따라 UCON 수금량이 실시간으로 달라진다. 계정당 수금을 기다리는 24시간 간격으로 계산한다. 1회 수금량은 다음과 같다.
-매번 UCON = UCON 일일 발행량 * 계정 채굴 가중치 [계정 채굴 미채굴 SERO/모든 계정 채굴 미채굴 SERO]
-채굴 기능이 활성화되는 계정의 권한이 부여된 이후로, 투자/재투자된 모든 SERO는 채굴 계정이 참여한 SERO로 계산되며,이 계정에서 매일 채굴 이력에 방출되는 SERO를 뺀 차액은 채굴 이력이 없는 SERO의 차액이다.모든 투자금액은 계좌채굴 미집합 SERO까지 지속적으로 누적되며, 자연적으로 제거되지 않는다.

六. 분배 방안:매 투자 동전량 중 94%는 UBS 은행 계약 풀 주소로, 4%는 기술서비스 비용으로 개발팀 주소로, 2%는 플랫폼 관리 기금으로 UBS 펀드 이익 풀 주소로, 스마트 계약은 자동으로 배분을 실행한다

七. 오픈 소스 시스템, 체인 데이터, 코드 작성, 탈중앙화 기장, 백도어 없음, 조작 불가, 자동 실행, 자동 배포.

八. 시스템 공개 계약 규칙 및 기본 추천 코드, 플레이어는 추천인이 없는 상황에서 주동적으로 참여할 수 있습니다.

개발자 개념:
더 자유롭게 만들 수 있습니다
금융을 더 쉽게 만들 수 있습니다
더 나은 삶을 만들 수 있습니다`,
        rule1: '기본 추천 코드 :ZFX5W3MTNWZHH'
    };

};

const lang = new Language();
export default lang