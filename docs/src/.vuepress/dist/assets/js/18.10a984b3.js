(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{409:function(s,t,a){"use strict";a.r(t);var e=a(54),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[s._v("#")]),s._v(" Network")]),s._v(" "),a("h2",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[s._v("#")]),s._v(" Quickstart")]),s._v(" "),a("p",[a("em",[s._v("(Note: This repository is under active development. Architecture and implementation may change without documentation)")])]),s._v(" "),a("p",[s._v("This is what you'd use to get a node up and running, fast. It assumes that it is starting on a blank ubuntu machine.  It eschews a systemd unit, allowing automation to be up to the user.  It assumes that installing Go is in-scope since Ubuntu's repositories aren't up to date and you'll be needing go to use osmosis.  It handles the Go environment variables because those are a common pain point.")]),s._v(" "),a("p",[a("strong",[s._v("Install go")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://git.io/vQhTU "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s -- --version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v(".2\n")])])]),a("p",[s._v("Then exit and re-enter your shell.")]),s._v(" "),a("p",[a("strong",[s._v("Install Osmosis and check that it is on $PATH")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/osmosis-labs/osmosis\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" osmosis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v3.1.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" osmosisd\n")])])]),a("p",[a("strong",[s._v("Launch Osmosis")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("osmosisd init yourmonikerhere\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O ~/.osmosisd/config/genesis.json https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json\nosmosisd start\n")])])]),a("p",[s._v("More Nodes ==> More Network")]),s._v(" "),a("p",[s._v("More Network ==> Faster Sync")]),s._v(" "),a("p",[s._v("Faster Sync ==> Less Developer Friction")]),s._v(" "),a("p",[s._v("Less Developer Friction ==> More Osmosis")]),s._v(" "),a("p",[s._v("Thank you for supporting a healthy blockchain network and community by running an Osmosis node!")]),s._v(" "),a("h2",{attrs:{id:"joining-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-mainnet"}},[s._v("#")]),s._v(" Joining Mainnet")]),s._v(" "),a("h2",{attrs:{id:"joining-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-testnet"}},[s._v("#")]),s._v(" Joining Testnet")]),s._v(" "),a("h2",{attrs:{id:"relayers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[s._v("#")]),s._v(" Relayers")])])}),[],!1,null,null,null);t.default=n.exports}}]);