"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[144],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=s,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const r={title:"Create IBC Pools",sidebar_position:9},o="How to create a new pool with IBC assets",i={unversionedId:"guides/create-ibc-pool",id:"guides/create-ibc-pool",title:"Create IBC Pools",description:"Osmosis is a automated market maker blockchain. This means any IBC-enabled zone can add its token as an asset to be traded on Osmosis AMM completely permissionlessly. Because Osmosis is fundamentally designed as an IBC-native AMM that trades IBC tokens, rather than tokens issued on the Osmosis zone, there are additional nuances to understand and steps to be taken in order to ensure your asset is supported by Osmosis.",source:"@site/docs/osmosis-core/guides/create-ibc-pool.md",sourceDirName:"guides",slug:"/guides/create-ibc-pool",permalink:"/osmosis-core/guides/create-ibc-pool",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/beta/docs/osmosis-core/guides/create-ibc-pool.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Create IBC Pools",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/osmosis-core/category/guides"},next:{title:"Performance and Profiling",permalink:"/osmosis-core/guides/performance"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"0. Enabling IBC transfers",id:"0-enabling-ibc-transfers",level:3},{value:"1. Add your chain to cosmos/chain-registry and SLIP-0173",id:"1-add-your-chain-to-cosmoschain-registry-and-slip-0173",level:3},{value:"Cosmos Chain Registry",id:"cosmos-chain-registry",level:4},{value:"2. Setting up and operating relayer to Osmosis",id:"2-setting-up-and-operating-relayer-to-osmosis",level:3},{value:"SLIP-0173 bech32 prefix",id:"slip-0173-bech32-prefix",level:4},{value:"3. Making a PR to Osmosis/assetlists",id:"3-making-a-pr-to-osmosisassetlists",level:3},{value:"4. Creating a pool on Osmosis",id:"4-creating-a-pool-on-osmosis",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-create-a-new-pool-with-ibc-assets"},"How to create a new pool with IBC assets"),(0,s.kt)("p",null,"Osmosis is a automated market maker blockchain. This means any IBC-enabled zone can add its token as an asset to be traded on Osmosis AMM completely permissionlessly. Because Osmosis is fundamentally designed as an IBC-native AMM that trades IBC tokens, rather than tokens issued on the Osmosis zone, there are additional nuances to understand and steps to be taken in order to ensure your asset is supported by Osmosis."),(0,s.kt)("p",null,"This document lays out the prerequisites and the  process that's needed to ensure that your token meets the interchain UX standards set by Osmosis."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Zone must have IBC token transferred enabled (ICS20 standard)."),(0,s.kt)("li",{parentName:"ol"},"Assets to be traded should be a fungible ",(0,s.kt)("inlineCode",{parentName:"li"},"sdk.Coins")," asset."),(0,s.kt)("li",{parentName:"ol"},"Highly reliable, highly available altruistic (as in relay tx fees paid on behalf of user) relayer service."),(0,s.kt)("li",{parentName:"ol"},"Highly reliable, highly available, and scalable RPC/REST endpoint infrastructure.")),(0,s.kt)("h3",{id:"0-enabling-ibc-transfers"},"0. Enabling IBC transfers"),(0,s.kt)("p",null,"Because only IBC assets that have been transferred to Osmosis can be traded on Osmosis, the native chain of the asset must have IBC transfers enabled. Cosmos defines the fungible IBC token transfer standard in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer"},"ICS20")," specification."),(0,s.kt)("p",null,"At this time, only chains using Cosmos-SDK v0.40+ (aka Stargate) can support IBC transfers."),(0,s.kt)("p",null,"Note that IBC transfers can be enabled via:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"as part of a software upgrade, or"),(0,s.kt)("li",{parentName:"ol"},"a ",(0,s.kt)("inlineCode",{parentName:"li"},"ParameterChange")," governance proposal")),(0,s.kt)("p",null,"To ensure a smooth user experience, Osmosis assumes all tokens will be transferred through a single designated IBC channel between Osmosis and the counterparty zone."),(0,s.kt)("p",null,"Recommended readings:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.43/ibc/overview.html"},"IBC Overview")," - To understand IBC clients, connections, "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.43/ibc/upgrades/quick-guide.html"},"How to Upgrade IBC Chains and their Clients"))),(0,s.kt)("h3",{id:"1-add-your-chain-to-cosmoschain-registry-and-slip-0173"},"1. Add your chain to cosmos/chain-registry and SLIP-0173"),(0,s.kt)("h4",{id:"cosmos-chain-registry"},"Cosmos Chain Registry"),(0,s.kt)("p",null,"Make a PR to add your chain's entry to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry"},"Cosmos Chain Registry"),". This allows Osmosis frontend to suggest your chain for asset deposit/withdrawals(IBC transfers)."),(0,s.kt)("p",null,"Make sure to include at least one reliable RPC, gRPC, REST endpoint behind https. Refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry/blob/master/osmosis/chain.json"},"Osmosis entry")," as an example."),(0,s.kt)("h3",{id:"2-setting-up-and-operating-relayer-to-osmosis"},"2. Setting up and operating relayer to Osmosis"),(0,s.kt)("p",null,"Relayers are responsible of transferring IBC packets between Osmosis chain and the native chain of an asset. All Osmosis 'deposits' and 'withdrawals' are IBC transfers which dedicated relayers process."),(0,s.kt)("p",null,"To ensure fungibility amongst IBC assets, the frontend will assume social consensus have been achieved and designate one specific channel between Osmosis and the native chain as the primary channel for all IBC token transfers. Multiple relayers can be active on the same channel, and for the sake of redundancy and increased resilience we recommend having multiple relayers actively relaying packets. It is recommended to initialize the channel as an unordered IBC channel, rather than an ordered IBC channel."),(0,s.kt)("p",null,"Currently, there are three main Cosmos-SDK IBC relayer implementations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"Go relayer"),": A Golang implementation of IBC relayer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hermes.informal.systems/"},"Hermes"),": A Rust implementation of IBC relayer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/confio/ts-relayer"},"ts-relayer"),": A TypeScript implementation of IBC relayer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Note: We are actively investigating issues regarding ts-relayer not working with Osmosis. In the meantime, we recommend using Hermes/Go relayer"))),(0,s.kt)("p",null,"All relayers are compatible with IBC token transfers on the same channel. Each relayer implementation may have different configuration requirements, and have various configuration customizability."),(0,s.kt)("p",null,"At this time, Osmosis requires that all relayers to pay for the transaction fees for IBC relay transactions, and not the user."),(0,s.kt)("p",null,"If you prefer not to run your own chain's relayer to Osmosis, there may be various entities (",(0,s.kt)("a",{parentName:"p",href:"https://cephalopod.equipment/"},"Cephalopod Equipment Corp."),", ",(0,s.kt)("a",{parentName:"p",href:"https://www.vitwit.com/"},"Vitwit"),", etc) that provide relayers-as-a-service, or you may reach out to various validators in your ecosystem that may be able to operate a relayer. The Osmosis team does ",(0,s.kt)("strong",{parentName:"p"},"not")," provide relayer services for IBC assets."),(0,s.kt)("h4",{id:"slip-0173-bech32-prefix"},"SLIP-0173 bech32 prefix"),(0,s.kt)("p",null,"Add your chain's bech32 prefix to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md"},"SLIP-0173 repo"),". The bech32 prefix should be a unix prefix, and only mainnet prefixes should be included."),(0,s.kt)("h3",{id:"3-making-a-pr-to-osmosisassetlists"},"3. Making a PR to Osmosis/assetlists"),(0,s.kt)("p",null,"Due to the permissionless nature of IBC protocol, the same base asset transferred over two different IBC channels will result in two different token denominations."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"footoken")," transferred to ",(0,s.kt)("inlineCode",{parentName:"li"},"barchain")," through ",(0,s.kt)("inlineCode",{parentName:"li"},"channel-1"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"ibc/1b3d5f...")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"footoken")," transferred to ",(0,s.kt)("inlineCode",{parentName:"li"},"barchain")," through ",(0,s.kt)("inlineCode",{parentName:"li"},"channel-2"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"ibc/a2c4e6..."))),(0,s.kt)("p",null,"In order to reduce user confusion and prevent token non-fungibility, Osmosis frontends are recommended to designate one specific channel as the primary channel for the chain's assets. The Osmosis will only show the IBC token denomination of the designated channel as with the original denomination (i.e. ATOM, AKT, etc)."),(0,s.kt)("p",null,"Therefore, Osmosis uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/assetlists"},"Assetlists")," as a way to designate and manage token denominations of IBC tokens."),(0,s.kt)("p",null,"Please create a pull request with the necessary information to allow your token to be shown in its original denomination, rather than as an IBC token denomination."),(0,s.kt)("p",null,"If you need to verify the base denom of an IBC asset, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"{REST Endpoint Address}\n/ibc/applications/transfer/v1beta1/denom_traces")," for all IBC denoms or ",(0,s.kt)("inlineCode",{parentName:"p"},"{REST Endpoint Address}\n/ibc/applications/transfer/v1beta1/denom_traces/{hash}")," for one specific IBC denom. (If you need an RPC/REST endpoint for Osmosis, ",(0,s.kt)("a",{parentName:"p",href:"https://datahub.figment.io"},"Figment DataHub")," provides a free service for up to 100k requests/day.)"),(0,s.kt)("h3",{id:"4-creating-a-pool-on-osmosis"},"4. Creating a pool on Osmosis"),(0,s.kt)("p",null,"Please refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/tree/main/x/gamm#create-pool"},(0,s.kt)("inlineCode",{parentName:"a"},"create-pool")," transaction example on the Osmosis repository")," on how to create a pool using your IBC tokens."),(0,s.kt)("p",null,"Recommended are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"50:50 OSMO-Token pool with 0.2% swap fee and 0% exit fee"),(0,s.kt)("li",{parentName:"ul"},"50:50 ATOM-Token pool with 0.3% swap fee and 0% exit fee")))}d.isMDXComponent=!0}}]);