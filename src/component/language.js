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
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
UBS Game Contract Rules:
    1. Use referral codes to establish connection.
    2. Participation Range: Minimum 10 SERO, achieve or accumulate more than 100,000 SERO to get income without burns.
    3. Fixed Income
        a) Immediately after participation, a fixed income limit of three times the investment amount is displayed, and this limit can be increased indefinitely. 
        b) The fixed income is released every day according to 1% of the contract's total fund account until the fixed income is three times the investment amount, which automatically triggers the contract to stop. 
        c) You can renew the contract after the suspension. The daily income can be withdrawn and reinvested.
    4. Referral Income
        a) Enjoy 100% Fixed income of direct referrals
        b) Earn direct referral income up to 20,000 SERO and enjoy 10% Fixed income of the second level referral.
        c) For every 10,000 SERO increase in direct referral income, you can enjoy 10% more Fixed income of each person being referred up to 20 levels. 
        d) The referral income is burned, i.e.  the referral income is calculated according to the lower principal amount of the referrer and referee. If the investment amount reaches 100,000 SERO or more, your SERO income will have no burns. 
        e) Daily settlement of referral income, cash withdrawal and re-investment.
    5. Protection Mechanism
        a) When the account funds are less than 5% of the Protection Fund, the system automatically triggers the "Fund Countdown" mechanism of the Protection Fund. 
        b) The countdown is of 72 hours and the timer will automatically close when any participant funds are deposited during this period and the system will continue to operate normally. 
        c) The system starts the timer again hence an effective cycle continues. 
        d) If the participant funds are not received within 72 hours, the “Protection Fund + Fund Pool Balance" is evaluated according to the last 10 participations that entered the market.
    6. 92% of player funds will go to the Fund Pool, 6% are for technical services and 2% are for protection funds.
    7. Each account can view direct sales performance and performance of lower 20 levels.
    8. The system is open source, the data is on the chain, the code is written, decentralized accounting is performed, there is no backdoor, it cannot be tampered, it runs automatically and is distributed automatically.
    9. The system has open contract rules and default referral code, players can actively participate without referrers.
   
Developer philosophy:
    Freedom of wealth
    Easier Finance
    Improve Life`,
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
                stateValues: ["可拿", "不可拿"]
            }
        },
        rule: `
UBS合约玩法规则：
    1.以推荐码做为链接关系
    2.参与范围：10 枚SERO以上，达到或累计达到10万以上SERO奖金无烧伤
    3.静态收益
        1) 参与后，立即显示投资额3倍的静态收益额度，此额度可无限追加。 
        2) 静态收益每天按照合约总资金账户的1.5%释放，直到静态收益3倍于投资额，自动触发合约停止。
        3) 停止后可复投续约，每天收益可提现可复投 
    4.分享收益
        a）永久享受一层被分享人静态收益的100% 
        b）直接分享业绩达2万SERO，可享受二层被分享人静态收益的10% 
        c）直接分享业绩每增加1万SERO，可增加享受多1层被分享人静态收益的10%，最高可享受20层 
        d）分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。投资额达到10万及10万以上SERO则奖金无烧伤 
        e）分享收益每日结算，可提现可复投 
    5.保障机制
        1)当资金账户低于保障基金5%时，系统自动触发保障基金大奖倒计时机制。
        2）倒计时长72小时，期间关闭一切参与资金，待到72小时后保障资金+资金账户余额按照最后参与进场的10笔参数与数量按照比例分配。
        3)第一阶段玩家92%进入资金池，6%为技术服务，2%进入保障基金，当保障资金总量约70万SERO时合约启动第二阶段，停止保障资金增加2%自动进入总资金池即94%进入资金池，每天按照资金池总量的1.5%进行分配收益。
        4)为了实现UBS长久稳定运行，我们将进行把去中心化的POS权益节点收益接入UBS生态合约池，这样可以实现生态长久稳定运行，可伴随POS收益长久运行。
    6、系统开源，数据上链，代码写定，去中心化记账，没有后门，不可篡改，自动运行，自动分发。
    7、系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
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
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
UBSゲーム契約ルール：
    1.紹介コードを使用して接続を確立します。
    2.参加範囲：少なくとも10 SERO。火傷なしで100,000を超えるSEROボーナスを達成または蓄積します。
    3.固定収入
        a）参加直後に、投資額の3倍の固定所得制限が表示されます。この制限は無期限に増やすことができます。
        b）静的な収入は、静的な収入が投資額の3倍になり、自動的に契約を終了するまで、契約の総資金口座の1％に従って毎日解放されます。
        c）契約は一時停止後に更新できます。毎日の収入を引き出して再投資することができます
    4.紹介収入
        A）直接紹介の100％静的な収入をお楽しみください。
        B）直接紹介収入で最大20,000 SERO を獲得し、第2レベルの紹介固定収入の10％を享受します。
        C）直接紹介から得る10,000 SEROごとに、20レベルまでの各個人の固定収入の10％を獲得できます。
        D）紹介が燃え尽きる。言い換えれば、紹介収入は、紹介とレフェリーの元本の低い方に従って計算されます。投資額が100,000 SEROを超える場合、SERO収入は燃えません。
        E）紹介収入、現金引き出し、再投資の毎日の決済。
    5.保護メカニズム
        a) アカウント基金が保護基金の5％未満の場合、システムは保護基金の「基金カウントダウン」メカニズムを自動的にトリガーします。
        b) カウントダウンは72時間で、この期間中に参加者の資金が入金された場合、タイマーは自動的に閉じられ、システムは正常に動作し続けます。
        c) システムはタイマーを再起動し、効果的なサイクルが始まります。
        d) 参加者の資金が72時間以内に受け取られない場合、「保護基金+資金プール残高」は、市場での過去10回の参加に従って評価されます。
    6.プレーヤーの資金の92％は資金プールに、6％は技術サービスに、2％は保証資金に割り当てられます。
    7.各アカウントは、直接販売収入とさらに20レベルの収入を表示できます。
    8.これはオープンソースシステムであり、データはチェーン内にあり、コードは記述され、分散アカウンティングがあり、バックドアはなく、ハッキングできず、自動的に開始して自動的に広がります。
    9.システムにはデフォルトでオープン契約ルールと紹介コードがあるため、プレイヤーは紹介なしで積極的に参加できます。
    
開発者の哲学：
    富の自由
    より簡単な金融
    あなたの人生を改善する`,
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
                stateValues: ["Yes", "No"]
            }
        },

        rule: `
Правила контракта на игру UBS 
    1. Используйте реферальные коды для установления соединения.
    2. Диапазон участия: не менее 10 SERO, получить или накопить более 100 000 бонусов SERO без ожогов.
    3. Фиксированный доход
        a) Сразу после регистрации вы увидите фиксированный лимит дохода, в три раза превышающий сумму инвестиций. Это может быть увеличено до бесконечности. 
        b) Фиксированный доход выплачивается ежедневно в размере 1% от общей суммы контокоррентного счета до трехкратной суммы контракта. 
        c) Контракты автоматически приостанавливаются и могут быть возобновлены после приостановки. Ежедневный доход может быть снят и реинвестирован
    4. Реферальный доход
        a) Заработайте 100% фиксированный доход от прямых рефералов.
        b) Заработайте до 20 000 SERO в прямом реферальном доходе и получите 10% фиксированного дохода рефералов второго уровня.
        c) Вы можете получить на 10% больше фиксированного дохода на человека, рекомендуется до 20 уровней на каждые 10 000 SERO прямых доходов от рефералов
        d) Реферальный доход сжигается, т. Е. Реферальный доход рассчитывается на основе низкой основной суммы реферера и рефери. Если сумма инвестиций превышает 100 000, прибыль SERO не уменьшается.
        e) Ежедневный расчет реферального дохода, снятия наличных и реинвестирования.
    5. Механизм защиты
        a) Когда средства на счете составляют менее 5% Фонда защиты, система автоматически запускает механизм «Обратный отсчет фонда» Фонда защиты. 
        b) Обратный отсчет составляет 72 часа, и таймер автоматически закроется, когда в этот период будут зачислены средства любого участника, и система продолжит работать в обычном режиме.
        c) Система снова запускает таймер, следовательно, эффективный цикл продолжается. 
        d) Если средства участников не поступили в течение 72 часов, «Фонд защиты + остаток пула фондов» оценивается в соответствии с последними 10 участиями, которые вышли на рынок
    6. 92% средств игроков пойдут в пул средств, 6% - на технические услуги и 2% - на гарантийный фонд.
    7. Каждая учетная запись может просматривать прямые продажи продаж и производительность нижних 20 уровней.
    8. Это система с открытым исходным кодом, данные находятся в цепочке, код написан, децентрализованный учет существует, бэкдора нет, его нельзя взломать, он запускается автоматически и распространяется автоматически.
    9. Система имеет общедоступные правила контракта и реферальный код по умолчанию, игроки могут активно участвовать без рефереров.

Философия разработчика:
    Свобода богатства
    Легче Финансы
    Улучшить вашу жизнь`,
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
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
UBS 게임 계약 규칙 :
    1. 참조 코드를 사용하여 연결을 설정하십시오.
    2. 참가 범위 : 최소 10 SERO. 화상없이 100,000 이상의 SERO 보너스를 달성하거나 축적하십시오.
    3. 고정 수입
        a) 참여 직후, 투자 금액의 3 배인 고정 소득 한도가 표시되며, 이는 무한정 증가 할 수 있습니다.
        b) 고정 수입은 고정 수입이 투자액의 3 배이고 계약이 자동으로 정지 될 때까지 계약 총 자금 계정의 1 %에 따라 매일 지급됩니다.
        c) 중단 후 계약을 갱신 할 수 있습니다. 일일 수입은 인출 및 재투자 될 수 있습니다.
    4. 추천 소득
        A) 직접 추천의 고정 수입의 100 %를 즐기십시오
        B) 최대 20,000 SERO의 직접 추천 수입을 적립하고 두 번째 수준 추천의 고정 수입의 10 %를 즐기십시오.
        C) 10,000 SERO 명의 직접 추천 소득이 증가 할 때마다 최대 20 레벨까지 권장되는 각 사람에 대해 10 % 더 많은 고정 수입을 누릴 수 있습니다
        D) 추천 소득이 불타고 있습니다. 다시 말해, 추천 소득은 추천인과 심판의 낮은 원금 금액에 따라 계산됩니다. 투자 금액이 100,000을 초과하면 SERO 수입에 화상이 없습니다.
        E) 추천 소득, 현금 인출 및 재투자의 일일 결제.
    5. 보호 메커니즘
        a) 계좌 자금이 보호 기금의 5 % 미만인 경우, 시스템은 자동으로 보호 기금의 "펀드 카운트 다운"메커니즘을 트리거합니다.
        b) 카운트 다운 시간은 72 시간이며이 기간 동안 참가자 자금이 예치되면 타이머가 자동으로 닫히고 시스템은 계속 정상적으로 작동합니다.
        c) 시스템은 타이머를 다시 시작하므로 유효 사이클이됩니다.
        d) 72 시간 내에 참가자 자금을받지 못하면 "보호 기금 + 자금 풀 잔액"은 시장에 들어간 마지막 10 개의 참여에 따라 평가됩니다.
    6. 선수 자금의 92 %가 자금 풀에, 6 %는 기술 서비스, 2 %는 보호 자금입니다.
    7. 각 계정은 직접 판매 실적과 20 단계 이하의 성과를 볼 수 있습니다.
    8. 시스템은 오픈 소스이고, 데이터는 체인에 있으며, 코드가 작성되고, 분산 회계가 수행되며, 백도어가 없으며, 간섭 할 수 없으며, 자동으로 실행되며 자동으로 배포됩니다.
    9. 기본적으로 시스템에는 공개 계약 규칙과 추천 코드가 있으며 플레이어는 추천없이 적극적으로 참여할 수 있습니다.

개발자 철학 :
    부의 자유
    더 쉬운 금융
    생활 향상`,
        rule1: '기본 추천 코드 :ZFX5W3MTNWZHH'
    };

};

const lang = new Language();
export default lang