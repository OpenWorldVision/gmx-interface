import { ARBITRUM, ARBITRUM_TESTNET, AVALANCHE, MAINNET, TESTNET } from "./chains";

export const XGMT_EXCLUDED_ACCOUNTS = [
  "0x330eef6b9b1ea6edd620c825c9919dc8b611d5d5",
  "0xd9b1c23411adbb984b1c4be515fafc47a12898b2",
  "0xa633158288520807f91ccc98aa58e0ea43acb400",
  "0xffd0a93b4362052a336a7b22494f1b77018dd34b",
];

const CONTRACTS = {
  [MAINNET]: {
    // bsc mainnet
    // Treasury: "0xa44E7252a0C137748F523F112644042E5987FfC7",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    // GMT: "0x99e92123eB77Bc8f999316f622e5222498438784",
    Vault: "0x547a29352421e7273eA18Acce5fb8aa308290523",
    Router: "0x8F6C84bF4fD74cE28E2fEC88111A4a26095d1aDF",
    Reader: "0x9E7f8187cB608F87E08EDF931D3F2982C052043B",
    // AmmFactory: "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
    // AmmFactoryV2: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    OrderBook: "0xD489f81161EEb415fC078464535d3F7280Cc14F1",
    OrderBookReader: "0x1111111111111111111111111111111111111111",
    // GmxMigrator: "0xDEF2af818514c1Ca1A9bBe2a4D45E28f260063f9",
    USDG: "0xB502B9C5d94d76d2623227Fb0c652d2734DeF7Cd",
    NATIVE_TOKEN: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    // XGMT: "0xe304ff0983922787Fd84BC9170CD21bF78B16B10",
    // GMT_USDG_PAIR: "0xa41e57459f09a126F358E118b693789d088eA8A0",
    // XGMT_USDG_PAIR: "0x0b622208fc0691C2486A3AE6B7C875b4A174b317",
    // GMT_USDG_FARM: "0x3E8B08876c791dC880ADC8f965A02e53Bb9C0422",
    // XGMT_USDG_FARM: "0x68D7ee2A16AB7c0Ee1D670BECd144166d2Ae0759",
    // USDG_YIELD_TRACKER: "0x0EF0Cf825B8e9F89A43FfD392664131cFB4cfA89",
    // XGMT_YIELD_TRACKER: "0x82A012A9b3003b18B6bCd6052cbbef7Fa4892e80",
    // GMT_USDG_FARM_TRACKER_XGMT: "0x08FAb024BEfcb6068847726b2eccEAd18b6c23Cd",
    // GMT_USDG_FARM_TRACKER_NATIVE: "0xd8E26637B34B2487Cad1f91808878a391134C5c2",
    // XGMT_USDG_FARM_TRACKER_XGMT: "0x026A02F7F26C1AFccb9Cba7C4df3Dc810F4e92e8",
    // XGMT_USDG_FARM_TRACKER_NATIVE: "0x22458CEbD14a9679b2880147d08CA1ce5aa40E84",
    // AUTO: "0xa184088a740c695E156F91f5cC086a06bb78b827",
    // AUTO_USDG_PAIR: "0x0523FD5C53ea5419B4DAF656BC1b157dDFE3ce50",
    // AUTO_USDG_FARM: "0xE6958298328D02051769282628a3b4178D0F3A47",
    // AUTO_USDG_FARM_TRACKER_XGMT: "0x093b8be41c1A30704De84a9521632f9a139c08bd",
    // AUTO_USDG_FARM_TRACKER_NATIVE: "0x23ed48E5dce3acC7704d0ce275B7b9a0e346b63A",
    // GMT_GMX_IOU: "0x47052469970C2484729875CC9E2dd2683fcE71fb",
    // XGMT_GMX_IOU: "0xeB3733DFe3b68C9d26898De2493A3Bb59FDb4A7B",
    // GMT_USDG_GMX_IOU: "0x481312655F81b5e249780A6a49735335BF6Ca7f4",
    // XGMT_USDG_GMX_IOU: "0x8095F1A92526C304623483018aA28cC6E62EB1e1",

    PositionRouter: "0xf5D769Fc5A274812e81a12bD900EFCD29c6EaE78",
    GlpManager: "0x7fc55B3C5f15f1B9664170DF18C57e13bB1B7D39",
    OPEN: "0x27a339d9b59b21390d7209b78a839868e319301b",
    OAP: "0x150bb59460E35084ab847629Cf3EcDC543e5Bf97",
    VaultReader: "0x29C8422e6860EA22d00b76DE4229ec2c83183a2F",
    RewardRouter: "0xb4154CD9f84c09f10635f434c3ed6722fb9B792f",
    RewardReader: "0xF418896407e507aF2a39a50955E256a1F4E6AcD2",
    ES_GMX: "0x49B30A264Cf99F121fdbd524b6D150525FB97f6A",
    // BN_GMX: "0xcD7a09723E1FF43facbC3aE804A97165c5450C89",
    // ES_GMX_IOU: "0xa5c9f9deebaafcf46836c20105aeece58057634b",
    // StakedGmxTracker: "0xd2254Cde748E4ABf53dF5B82e87C0C0ee366C8C5",
    // BonusGmxTracker: "0x4e30C59431681800A23CD0E4dcdA651A92ef247e",
    // FeeGmxTracker: "0x710F155CCA8df2DC653356272d8186b5fAF406cc",
    StakedGlpTracker: "0x6D9A7B767354cc8c1F658b1b1B547aF218eb3C57",
    FeeGlpTracker: "0x5E1e7da3A3eD2C77b9b8B70A2FB63dF980806Dc8",

    // StakedGmxDistributor: "0x4980dF9955868fBB580b6c2D7D68Cbf61E00850c",
    StakedGlpDistributor: "0xA35B7DE62A164cf02fE93a6a080c448252b227E9",

    // GmxVester: "0xA03EF7935189001e8f6134B230DcFA7b419CF915",
    GlpVester: "0x1111111111111111111111111111111111111111",

    PositionManager: "0x2eb2C572EB4B85cF642b99F70d835C9C22346c06",

    // UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0xB393A3d6456305628339461264e7EFbABB38086d",
    ReferralReader: "0x0000000000000000000000000000000000000000",
    BTC: "0x8530E5595C07F4075d00a25515E416487a07D6d3",
    USDC: "0x534C8613eB17810c5D4Cb4591E819237b0F12694",
    USDT: "0xAda29c8c290EA1F96972f0c56C8748aBcbbF10ae",

    ShortTracker: "0xc8982ffB4d5d3BA9265F550b690F9Cf015ca8eE8",

    VaultErrorController: "0xa059cde458815788ab750b97c3e7ab495fa9d0b6",
    VaultUtils: "0xfD120D291F2106dB0941Fa0d6D4A0542e285261E",

    tokenManager: "0x7D52Fc0564e13c8D515e1e1C17CCB7aFafAd37F3",
    Timelock: "0x51d2E6c7B6cc67875D388aDbE2BB7A8238EA6353",
    FastPriceEvents: "0x3D222365be7D0327b95580dc3182080F5A4C0727",
    FastPriceFeed: "0x3Dc7da2F42bad3a2388Eb8A0e928A166E615daFa",
    VaultPriceFeed: "0x2Ced5a663606592C4e5EF095584D7576682b20F1",
    PancakePair: "0x0D352Ea95cDb52294742A32123f50bE474163038",
    PancakePair2: "0xFea1510Bd3EA668a4d14f7F1d95F7AB4ECAA66ed", // OPEN-WBNB pair
    OpenStaking: "0x214cEc9402F81622Ee97837Ced73C43f4f7f4a89",
    OapRewardRouter: "0x0a27866A7943E90d3c65A60151ecfB0f79212BbA",
  },
  [TESTNET]: {
    // bsc testnet
    // Vault: "0xA57F00939D8597DeF1965FF4708921c56D9A36f3",
    // Router: "0x3b0417cAbc434e58EBB9B3297D7f2AFa755851dD",
    // Reader: "0x98D4742F1B6a821bae672Cd8721283b91996E454",
    // AmmFactory: "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    // AmmFactoryV2: "0x1111111111111111111111111111111111111111",
    // OrderBook: "0x9afD7B4f0b58d65F6b2978D3581383a06b2ac4e9",
    // OrderBookReader: "0x0713562970D1A802Fa3FeB1D15F9809943982Ea9",
    // GmxMigrator: "0xDEF2af818514c1Ca1A9bBe2a4D45E28f260063f9",
    // USDG: "0x3eE22225949541aaACCBd1B43289147fb3ad97f1",
    // GMT: "0xedba0360a44f885ed390fad01aa34d00d2532817",
    // NATIVE_TOKEN: "0x612777Eea37a44F7a95E3B101C39e1E2695fa6C2",
    // XGMT: "0x28cba798eca1a3128ffd1b734afb93870f22e613",
    // GMT_USDG_PAIR: "0xe0b0a315746f51932de033ab27223d85114c6b85",
    // XGMT_USDG_PAIR: "0x0108de1eea192ce8448080c3d90a1560cf643fa0",
    // GMT_USDG_FARM: "0xbe3cB06CE03cA692b77902040479572Ba8D01b0B",
    // XGMT_USDG_FARM: "0x138E92195D4B99CE3618092D3F9FA830d9A69B4b",
    // USDG_YIELD_TRACKER: "0x62B49Bc3bF252a5DB26D88ccc7E61119e3179B4f",
    // XGMT_YIELD_TRACKER: "0x5F235A582e0993eE9466FeEb8F7B4682993a57d0",
    // GMT_USDG_FARM_TRACKER_XGMT: "0x4f8EE3aE1152422cbCaFACd4e3041ba2D859913C",
    // GMT_USDG_FARM_TRACKER_NATIVE: "0xd691B26E544Fe370f39A776964c991363aF72e56",
    // XGMT_USDG_FARM_TRACKER_XGMT: "0xfd5617CFB082Ba9bcD62d654603972AE312bC695",
    // XGMT_USDG_FARM_TRACKER_NATIVE: "0x0354387DD85b7D8aaD1611B3D167A384d6AE0c28",
    // GMT_GMX_IOU: "0x47052469970C2484729875CC9E2dd2683fcE71fb",
    // XGMT_GMX_IOU: "0xeB3733DFe3b68C9d26898De2493A3Bb59FDb4A7B",
    // GMT_USDG_GMX_IOU: "0x481312655F81b5e249780A6a49735335BF6Ca7f4",
    // XGMT_USDG_GMX_IOU: "0x8095F1A92526C304623483018aA28cC6E62EB1e1",
    Vault: "0xA57F00939D8597DeF1965FF4708921c56D9A36f3",
    Router: "0x3b0417cAbc434e58EBB9B3297D7f2AFa755851dD",
    VaultReader: "0xedd72c61c4cDB7DD27a80d0E9759ae0B29f57DB4",
    Reader: "0x63CFA7667eD8DeC340c4c8C174f86B7D6c2a2E54",
    GlpManager: "0x5b7a04b9f5f88f215920fdcc704084349530dcc7",
    RewardRouter: "0xdb49dE9C4812A36b724dcd82F7a3433bAd01b9D5",
    RewardReader: "0x5A53FBfBc993f5dF1B2af6c41C7935e2Ef84f85e",
    NATIVE_TOKEN: "0x612777Eea37a44F7a95E3B101C39e1E2695fa6C2",
    OAP: "0xC6012955CEF9137FE9B1C01361c41FBf7E8dFfD9",
    OPEN: "0x28ad774c41c229d48a441b280cbf7b5c5f1fed2b",
    ES_GMX: "0x8A4271871980a31a3Ee87E3727057e68B43DcC59",
    BN_GMX: "0xcD7a09723E1FF43facbC3aE804A97165c5450C89",
    USDG: "0x3eE22225949541aaACCBd1B43289147fb3ad97f1",
    ES_GMX_IOU: "0xa5c9f9deebaafcf46836c20105aeece58057634b",
    StakedGmxTracker: "0xd2254Cde748E4ABf53dF5B82e87C0C0ee366C8C5",
    BonusGmxTracker: "0x4e30C59431681800A23CD0E4dcdA651A92ef247e",
    FeeGmxTracker: "0x710F155CCA8df2DC653356272d8186b5fAF406cc",
    StakedGlpTracker: "0xb71493222f5899407e01b840a428c33b9c03211d",
    FeeGlpTracker: "0xa5c9f9deebaafcf46836c20105aeece58057634b",

    StakedGmxDistributor: "0x4980dF9955868fBB580b6c2D7D68Cbf61E00850c",
    StakedGlpDistributor: "0xf9063fBC9481C13EB23883473E8B435857039d88",

    GmxVester: "0xA03EF7935189001e8f6134B230DcFA7b419CF915",
    GlpVester: "0x5e45a3359499701CAFBA0E1aF161c7D7b386129b",

    OrderBook: "0x38d0fc0aF9E757D70fA9B2C3b7816c6795afae6d",
    OrderBookReader: "0x7B90FfBc3FE72f0DB618b41740cD5ce6c048173D",

    PositionRouter: "0x9B25fb7d0af7B36d9dF9b872d1e80D42F0278168",
    PositionManager: "0x32Ca0C28cCef0BC31991EE4Ac286C27679e57222",

    // UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0x0000000000000000000000000000000000000000",
    ReferralReader: "0x0000000000000000000000000000000000000000",
    BTC: "0x8530E5595C07F4075d00a25515E416487a07D6d3",
    USDC: "0x534C8613eB17810c5D4Cb4591E819237b0F12694",
    USDT: "0xAda29c8c290EA1F96972f0c56C8748aBcbbF10ae",

    ShortTracker: "0x230a476D100Bba2f76edBDF1300df3f963d943Dd",

    VaultErrorController: "0x58524eA289cb932aBC96a22B23A6876333615623",
    VaultUtils: "0x68e6FdfF65BA78ec492905D62eAc8212824a663f",

    tokenManager: "0x15f54d599ADF24b809de9B9C917061Ce0cB7617f",
    Timelock: "0x8D0De55e339b8CC62eC98A05aA46b6F352dE4054",
    FastPriceEvents: "0x08A33b497FBa8921b5d2C2e9678Fb184eCE900b4",
    FastPriceFeed: "0xAE11B05Bf243b234F850E745327B06CAf08af4Cb",
    VaultPriceFeed: "0xeaE0398FBD233f8b50bCC3Ba9e81F92598B77dd0",
    OpenStaking: "0x52c0bf0C0bF20377A478d7DD88B9c08358D9f1Fd",
  },
  [ARBITRUM_TESTNET]: {
    // arbitrum testnet
    Vault: "0xBc9BC47A7aB63db1E0030dC7B60DDcDe29CF4Ffb",
    Router: "0xe0d4662cdfa2d71477A7DF367d5541421FAC2547",
    VaultReader: "0xFc371E380262536c819D12B9569106bf032cC41c",
    Reader: "0x2E093c70E3A7E4919611d2555dFd8D697d2fC0a1",
    GlpManager: "0xD875d99E09118d2Be80579b9d23E83469077b498",
    RewardRouter: "0x0000000000000000000000000000000000000000",
    RewardReader: "0x0000000000000000000000000000000000000000",
    NATIVE_TOKEN: "0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681",
    OAP: "0xb4f81Fa74e06b5f762A104e47276BA9b2929cb27",
    OPEN: "0x0000000000000000000000000000000000000000",
    ES_GMX: "0x0000000000000000000000000000000000000000",
    BN_GMX: "0x0000000000000000000000000000000000000000",
    USDG: "0xBCDCaF67193Bf5C57be08623278fCB69f4cA9e68",
    ES_GMX_IOU: "0x0000000000000000000000000000000000000000",
    StakedGmxTracker: "0x0000000000000000000000000000000000000000",
    BonusGmxTracker: "0x0000000000000000000000000000000000000000",
    FeeGmxTracker: "0x0000000000000000000000000000000000000000",
    StakedGlpTracker: "0x0000000000000000000000000000000000000000",
    FeeGlpTracker: "0x0000000000000000000000000000000000000000",

    StakedGmxDistributor: "0x0000000000000000000000000000000000000000",
    StakedGlpDistributor: "0x0000000000000000000000000000000000000000",

    GmxVester: "0x0000000000000000000000000000000000000000",
    GlpVester: "0x0000000000000000000000000000000000000000",

    OrderBook: "0xebD147E5136879520dDaDf1cA8FBa48050EFf016",
    OrderBookReader: "0xC492c8d82DC576Ad870707bb40EDb63E2026111E",

    PositionRouter: "0xB4bB78cd12B097603e2b55D2556c09C17a5815F8",
    PositionManager: "0x168aDa266c2f10C1F37973B213d6178551030e44",

    // UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0x0000000000000000000000000000000000000000",
    ReferralReader: "0x0000000000000000000000000000000000000000",
  },
  [ARBITRUM]: {
    // arbitrum mainnet
    Vault: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
    Router: "0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064",
    VaultReader: "0xfebB9f4CAC4cD523598fE1C5771181440143F24A",
    Reader: "0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694",
    GlpManager: "0x321F653eED006AD1C29D174e17d96351BDe22649",
    RewardRouter: "0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1",
    RewardReader: "0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0",
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    OAP: "0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258",
    OPEN: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    ES_GMX: "0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA",
    BN_GMX: "0x35247165119B69A40edD5304969560D0ef486921",
    USDG: "0x45096e7aA921f27590f8F19e457794EB09678141",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954",
    StakedGmxTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    BonusGmxTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    FeeGmxTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",
    StakedGlpTracker: "0x1aDDD80E6039594eE970E5872D247bf0414C8903",
    FeeGlpTracker: "0x4e971a87900b931fF39d1Aad67697F49835400b6",

    StakedGmxDistributor: "0x23208B91A98c7C1CD9FE63085BFf68311494F193",
    StakedGlpDistributor: "0x60519b48ec4183a61ca2B8e37869E675FD203b34",

    GmxVester: "0x199070DDfd1CFb69173aa2F7e20906F26B363004",
    GlpVester: "0xA75287d2f8b217273E7FCD7E86eF07D33972042E",

    OrderBook: "0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB",
    OrderExecutor: "0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB",
    OrderBookReader: "0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21",

    PositionRouter: "0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868",
    PositionManager: "0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C",

    UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",
    ReferralReader: "0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8",
  },
  [AVALANCHE]: {
    // avalanche
    Vault: "0x9ab2De34A33fB459b538c43f251eB825645e8595",
    Router: "0x5F719c2F1095F7B9fc68a68e35B51194f4b6abe8",
    VaultReader: "0x66eC8fc33A26feAEAe156afA3Cb46923651F6f0D",
    Reader: "0x2eFEE1950ededC65De687b40Fd30a7B5f4544aBd",
    GlpManager: "0xe1ae4d4b06A5Fe1fc288f6B4CD72f9F8323B107F",
    RewardRouter: "0x82147C5A7E850eA4E28155DF107F2590fD4ba327",
    RewardReader: "0x04Fc11Bd28763872d143637a7c768bD96E44c1b6",
    NATIVE_TOKEN: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    OAP: "0x01234181085565ed162a948b6a5e88758CD7c7b8",
    OPEN: "0x62edc0692BD897D2295872a9FFCac5425011c661",
    ES_GMX: "0xFf1489227BbAAC61a9209A08929E4c2a526DdD17",
    BN_GMX: "0x8087a341D32D445d9aC8aCc9c14F5781E04A26d2",
    USDG: "0xc0253c3cC6aa5Ab407b5795a04c28fB063273894",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954", // placeholder address

    StakedGmxTracker: "0x2bD10f8E93B3669b6d42E74eEedC65dd1B0a1342",
    BonusGmxTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    FeeGmxTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    StakedGlpTracker: "0x9e295B5B976a184B14aD8cd72413aD846C299660",
    FeeGlpTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",

    StakedGmxDistributor: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    StakedGlpDistributor: "0xDd593Cf40734199afc9207eBe9ffF23dA4Bf7720",

    GmxVester: "0x472361d3cA5F49c8E633FB50385BfaD1e018b445",
    GlpVester: "0x62331A7Bd1dfB3A7642B7db50B5509E57CA3154A",

    OrderBook: "0x4296e307f108B2f583FF2F7B7270ee7831574Ae5",
    OrderExecutor: "0x4296e307f108B2f583FF2F7B7270ee7831574Ae5",
    OrderBookReader: "0xccFE3E576f8145403d3ce8f3c2f6519Dae40683B",

    PositionRouter: "0xffF6D276Bc37c61A23f06410Dce4A400f66420f8",
    PositionManager: "0xA21B83E579f4315951bA658654c371520BDcB866",

    TraderJoeGmxAvaxPool: "0x0c91a070f862666bbcce281346be45766d874d98",
    ReferralStorage: "0x827ed045002ecdabeb6e2b0d1604cf5fc3d322f8",
    ReferralReader: "0x505Ce16D3017be7D76a7C2631C0590E71A975083",
  },
};

export function getContract(chainId: number, name: string): string {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }

  return CONTRACTS[chainId][name];
}
