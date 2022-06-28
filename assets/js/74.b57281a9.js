(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{520:function(t,a,e){"use strict";e.r(a);var s=e(8),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"single-node-rpc-setup-with-floating-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-node-rpc-setup-with-floating-ip"}},[t._v("#")]),t._v(" Single Node RPC setup with floating IP")]),t._v(" "),e("p",[t._v("This examples creates a single droplet in Digitalocean that:")]),t._v(" "),e("ul",[e("li",[t._v("runs the latest osmosisd binary")]),t._v(" "),e("li",[t._v("authomatically syncs the state from a pruned snapshot")])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h3",{attrs:{id:"create-digitalocean-api-token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-digitalocean-api-token"}},[t._v("#")]),t._v(" Create DigitalOcean API Token")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Get an API token from "),e("a",{attrs:{href:"https://cloud.digitalocean.com/account/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Export the token to an environment variable. Do not share this token as it gives access to your console.")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('export DIGITALOCEAN_TOKEN="your_personal_access_token"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"create-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-infrastructure"}},[t._v("#")]),t._v(" Create infrastructure")]),t._v(" "),e("ol",[e("li",[t._v("Initialize terraform:")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" init\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Create a plan:")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" plan\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Inspect the plan and then deploy the infrastructure:")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" apply\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Get ssh instructions:")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terraform output --raw  ssh_help \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Expected output:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Get "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" key:\nterraform output --raw private_key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" droplet.key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" droplet.key\n\nConnect to the instancs:\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -i droplet.key\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Follow the instructions to ssh into the droplet:")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terraform output --raw private_key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" droplet.key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" droplet.key\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -i droplet.key "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <IP> will be the actual ip of the droplet")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("blockquote",[e("p",[t._v("The nodes are configured to accept traffic to port "),e("code",[t._v("22")]),t._v(" from anywhere which is not\ngenerally recommended for production setup.")]),t._v(" "),e("p",[t._v("Please setup firewall rules according to your needs.")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Wait for the node to be initialized. The droplets is initialized via the "),e("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis-installer",target:"_blank",rel:"noopener noreferrer"}},[t._v("osmosis-installer"),e("OutboundLink")],1),t._v(" which installs the necessary packages and statesync the node. You can follow the process with:")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -f /var/log/cloud-init-output.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Play around with your osmosis node!")])]),t._v(" "),e("h2",{attrs:{id:"get-started-in-digitalocean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-started-in-digitalocean"}},[t._v("#")]),t._v(" Get started in Digitalocean")]),t._v(" "),e("p",[t._v("Get $100 in credit over 60 days through our referral link:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.digitalocean.com/?refcode=f6e2bb0e0af7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg",alt:"DigitalOcean Referral Badge"}}),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);