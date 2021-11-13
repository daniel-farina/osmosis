(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{409:function(s,t,e){"use strict";e.r(t);var n=e(54),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"quickstart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[s._v("#")]),s._v(" Quickstart")]),s._v(" "),e("p",[e("em",[s._v("(Note: This repository is under active development. Architecture and implementation may change without documentation)")])]),s._v(" "),e("p",[s._v("This is what you'd use to get a node up and running, fast. It assumes that it is starting on a blank ubuntu machine.  It eschews a systemd unit, allowing automation to be up to the user.  It assumes that installing Go is in-scope since Ubuntu's repositories aren't up to date and you'll be needing go to use osmosis.  It handles the Go environment variables because those are a common pain point.")]),s._v(" "),e("p",[e("strong",[s._v("Install go")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://git.io/vQhTU "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s -- --version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v(".2\n")])])]),e("p",[s._v("Then exit and re-enter your shell.")]),s._v(" "),e("p",[e("strong",[s._v("Install Osmosis and check that it is on $PATH")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/osmosis-labs/osmosis\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" osmosis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v3.1.0\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" osmosisd\n")])])]),e("p",[e("strong",[s._v("Launch Osmosis")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("osmosisd init yourmonikerhere\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O ~/.osmosisd/config/genesis.json https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json\nosmosisd start\n")])])]),e("p",[s._v("More Nodes ==> More Network")]),s._v(" "),e("p",[s._v("More Network ==> Faster Sync")]),s._v(" "),e("p",[s._v("Faster Sync ==> Less Developer Friction")]),s._v(" "),e("p",[s._v("Less Developer Friction ==> More Osmosis")]),s._v(" "),e("p",[s._v("Thank you for supporting a healthy blockchain network and community by running an Osmosis node!")])])}),[],!1,null,null,null);t.default=a.exports}}]);