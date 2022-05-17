(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{367:function(s,a,t){s.exports=t.p+"assets/img/local-installer.72430dd8.png"},368:function(s,a,t){s.exports=t.p+"assets/img/localOsmosis.707fc627.png"},426:function(s,a,t){s.exports=t.p+"assets/img/cosmwasm_artifact.d16c506d.png"},471:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"cosmwasm-with-localosmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cosmwasm-with-localosmosis"}},[s._v("#")]),s._v(" Cosmwasm with LocalOsmosis")]),s._v(" "),e("h2",{attrs:{id:"deploying-cosmwasm-contracts-in-localosmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-cosmwasm-contracts-in-localosmosis"}},[s._v("#")]),s._v(" Deploying Cosmwasm Contracts in LocalOsmosis")]),s._v(" "),e("p",[s._v("The following is a quick guide that shows the basics of deploying a contract to a Osmosis local environment. It covers:")]),s._v(" "),e("ul",[e("li",[s._v("Seting up LocalOsmosis with the Osmosis installer.\n"),e("ul",[e("li",[s._v("osmosisd binary automatically configured to connect to your localOsmosis")]),s._v(" "),e("li",[s._v("localOsmosis setup in yout $HOME directory (~/localosmosis)")])])]),s._v(" "),e("li",[s._v("Deploy a smart contract\n"),e("ul",[e("li",[s._v("Download, compile, optimize")]),s._v(" "),e("li",[s._v("Initialise, Instantiate, Query Contract")])])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("Please note that Cosmwasm is permisionless by default. It's  permissioned in Osmosis mainnet. To learn more how to enable or disable permissioned Cosmwasm "),e("a",{attrs:{href:"https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("click here "),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"initial-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup"}},[s._v("#")]),s._v(" Initial setup")]),s._v(" "),e("p",[s._v("This tutorial uses a Osmosis specific development tools to deploy contracts to your local Osmosis environment powered by localOsmosis.")]),s._v(" "),e("h3",{attrs:{id:"set-up-rust"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-up-rust"}},[s._v("#")]),s._v(" Set up Rust")]),s._v(" "),e("p",[s._v("Rust is the main programming language used for CosmWasm smart contracts. While WASM smart contracts can theoretically be written in any programming language, CosmWasm libraries and tooling work best with Rust.")]),s._v(" "),e("p",[s._v("First, install the latest version of "),e("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rust"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("p",[s._v("Then run the following commands:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. Set 'stable' as the default release channel:")]),s._v("\n\nrustup default stable\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. Add WASM as the compilation target:")]),s._v("\n\nrustup target "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" wasm32-unknown-unknown\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. Install the following packages to generate the contract:")]),s._v("\n\ncargo "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cargo-generate --features vendored-openssl\ncargo "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cargo-run-script\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"setup-localosmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-localosmosis"}},[s._v("#")]),s._v(" Setup  Localosmosis")]),s._v(" "),e("p",[s._v("The easiest way to setup your localOsmosis is by downloading the "),e("a",{attrs:{href:"https://get.osmosis.zone/",target:"_blank",rel:"noopener noreferrer"}},[s._v("automated installer"),e("OutboundLink")],1),s._v(". You can learn more about localOsmosis by reading the "),e("a",{attrs:{href:"https://github.com/osmosis-labs/localosmosis",target:"_blank",rel:"noopener noreferrer"}},[s._v("README"),e("OutboundLink")],1),s._v(" in the official repo.")]),s._v(" "),e("p",[s._v("Run the following and choose option #3.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -sL https://get.osmosis.zone/install > i.py && python3 i.py\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(367),alt:""}})]),s._v(" "),e("h4",{attrs:{id:"start-localosmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-localosmosis"}},[s._v("#")]),s._v(" Start localOsmosis")]),s._v(" "),e("p",[s._v("Inside a separate bash window start your localOsmosis which was installed in ~/localosmosis")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd ~/localosmosis\ndocker-compose up\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("You will start seeing LocalOsmosis block activity in your terminal. Keep LocalOsmosis running while you perform the next steps in a new terminal window.")]),s._v(" "),e("p",[e("img",{attrs:{src:t(368),alt:""}})]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("To view the LocalOsmosis wallet information, visit the "),e("RouterLink",{attrs:{to:"/developing/dapps/get_started/[developing/tools/localosmosis.html#accounts](https://github.com/osmosis-labs/localosmosis#accounts)"}},[s._v("LocalOsmosis accounts page")]),s._v(".")],1)]),s._v(" "),e("h1",{attrs:{id:"deploy-a-smart-contract-to-osmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-smart-contract-to-osmosis"}},[s._v("#")]),s._v(" Deploy a Smart Contract to Osmosis")]),s._v(" "),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[s._v("#")]),s._v(" Download")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# get the code\ngit clone https://github.com/CosmWasm/cosmwasm-examples\ncd cosmwasm-examples\ngit fetch\ncd contracts/erc20\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[s._v("#")]),s._v(" Compile")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#compile the wasm contract\nrustup default stable\ncargo wasm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"optimise-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optimise-it"}},[s._v("#")]),s._v(" Optimise it")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('sudo docker run --rm -v "$(pwd)":/code \\\n    --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n    --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n    cosmwasm/rust-optimizer:0.12.6\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("You now have a "),e("code",[s._v("cw_erc20.wasm")]),s._v(" artifact inside the artifact directory.")]),s._v(" "),e("h2",{attrs:{id:"created-a-local-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created-a-local-key"}},[s._v("#")]),s._v(" Created a local key")]),s._v(" "),e("p",[s._v("Create a key using one of the seeds provided in localOsmosis.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd keys add <unsafe-test-key-name> --recover\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Example test1 key from "),e("a",{attrs:{href:"https://github.com/osmosis-labs/localosmosis#accounts",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),e("OutboundLink")],1),s._v(":")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"deploy-to-your-localosmosis-chain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-your-localosmosis-chain"}},[s._v("#")]),s._v(" Deploy to your localOsmosis chain")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd artifacts\nosmosisd tx wasm store cw_erc20.wasm  --from <unsafe-test-key-name> --chain-id=<chain-id> \\\n  --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("<unsafe-test-key-name>")]),s._v(" = Name of your local key.\n"),e("code",[s._v("<chain-id>")]),s._v(" = localosmosis")]),s._v(" "),e("h3",{attrs:{id:"save-code-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#save-code-id"}},[s._v("#")]),s._v(" Save code_id")]),s._v(" "),e("p",[s._v("Save the code_id from the output of the command above.")]),s._v(" "),e("p",[s._v("or save it by running jq")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd artifacts\nTX=$(osmosisd tx wasm store cw_erc20.wasm  --from <unsafe-test-key-name> --chain-id=localosmosis --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block --output json -y | jq -r '.txhash')\nCODE_ID=$(osmosisd query tx $TX --output json | jq -r '.logs[0].events[-1].attributes[0].value')   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("echo $CODE_ID \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("If this is a brand new localOsmosis instante it should be "),e("code",[s._v("1")])]),s._v(" "),e("h1",{attrs:{id:"initialise-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialise-the-contract"}},[s._v("#")]),s._v(" Initialise the Contract")]),s._v(" "),e("h2",{attrs:{id:"generate-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-json"}},[s._v("#")]),s._v(" Generate JSON")]),s._v(" "),e("p",[s._v("Type node in the terminal and hit enter to access it. Copy and paste the following:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('const initHash = {\n  name: "Test Coin",\n  symbol: "TEST",\n  decimals: 6,\n  initial_balances: [\n    { address: "<validator-self-delegate-address>", amount: "12345678000"},\n  ]\n};\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("code",[s._v("<validator-self-delegate-address>")]),s._v(" = Choose the test1 address")]),s._v(" "),e("p",[s._v("Then copy and paste this:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("JSON.stringify(initHash);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The output should be something like:")]),s._v(" "),e("p",[e("img",{attrs:{src:t(426),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"instantiate-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instantiate-the-contract"}},[s._v("#")]),s._v(" Instantiate the contract")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('osmosisd tx wasm instantiate $CODE_ID \\\n    \'{"name":"Test Coin","symbol":"TEST","decimals":6,"initial_balances":[{"address":"<validator-self-delegate-address>","amount":"12345678000"}]}\' \\\n    --amount 50000uosmo  --label "Testcoin erc20" --from <unsafe-test-key-name> --chain-id <chain-id> --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -b block -y\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Replace\n- "),e("code",[s._v("<validator-self-delegate-address>")]),s._v(" : wallet address\n- "),e("code",[s._v("<chain-id>")]),s._v(" : localosmosis\n- "),e("code",[s._v("<unsafe-test-key-name>")]),s._v(" : Local  key name")]),s._v(" "),e("h3",{attrs:{id:"lookup-contract-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lookup-contract-address"}},[s._v("#")]),s._v(" Lookup contract address")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CONTRACT_ADDR=$(osmosisd query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[0]')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"query-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-contract"}},[s._v("#")]),s._v(" Query contract")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd query wasm contract $CONTRACT_ADDR\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"list-all-contracts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-all-contracts"}},[s._v("#")]),s._v(" List all contracts")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd query wasm list-code\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("This guide will be updated and published to the official docs soon.\nTo learn more about CosmWasm visit "),e("a",{attrs:{href:"https://cosmwasm.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cosmwasm.com/"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);