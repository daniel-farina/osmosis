"use strict";(self.webpackChunkdocs2=self.webpackChunkdocs2||[]).push([[624],{2800:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-6fa0f836",path:"/liquidity/",title:"Liquidity Providing",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Creating a Pool",slug:"creating-a-pool",children:[]},{level:2,title:"Bonding LP Tokens",slug:"bonding-lp-tokens",children:[]},{level:2,title:"Bonded Liquidity Gauges",slug:"bonded-liquidity-gauges",children:[]},{level:2,title:"Allocation Points",slug:"allocation-points",children:[]},{level:2,title:"External Incentives",slug:"external-incentives",children:[]},{level:2,title:"Fees",slug:"fees",children:[{level:3,title:"TX Fees",slug:"tx-fees",children:[]},{level:3,title:"Swap Fees",slug:"swap-fees",children:[]},{level:3,title:"Exit Fees",slug:"exit-fees",children:[]}]}],filePathRelative:"liquidity/README.md",git:{contributors:[{name:"Czarcas7ic",email:"adamleetucker@outlook.com",commits:1}]}}},3208:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ne});var a=i(6252),o=i(9111),n=i(7237),s=i(5557),l=i(8499),r=i(6882),d=i(698),h=i(1830);const u=(0,a._)("h1",{id:"liquidity-providing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#liquidity-providing","aria-hidden":"true"},"#"),(0,a.Uk)(" Liquidity Providing")],-1),c=(0,a._)("p",null,"Creating pools in Osmosis is permissionless, meaning any user can create a pool with two or more supported assets. Go to Pools > Create a Pool. Select from your wallet the assets that will comprise the pool. Choose a weight for each asset.",-1),p=(0,a._)("p",null,[(0,a._)("img",{src:o,alt:"Tux, the Linux mascot"})],-1),g=(0,a._)("p",null,"Choose a quantity of each asset to deposit into the pool.",-1),m=(0,a._)("p",null,[(0,a._)("img",{src:n,alt:"Tux, the Linux mascot"})],-1),f=(0,a.Uk)("Input a swap fee for the pool. (An explanation of swap fees can be found "),b={href:"https://osmosis.gitbook.io/o/liquidity-providing/fees",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("here"),y=(0,a.Uk)(".)"),w=(0,a._)("p",null,[(0,a._)("img",{src:s,alt:"Tux, the Linux mascot"})],-1),_=(0,a._)("p",null,"Click Create a Pool and voilà! The pool is launched. The parameters chosen when creating the pool (token weights, swap fees) cannot be changed later.",-1),x=(0,a._)("h2",{id:"creating-a-pool",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#creating-a-pool","aria-hidden":"true"},"#"),(0,a.Uk)(" Creating a Pool")],-1),k=(0,a._)("p",null,"Select a pool from the list and click Add/Remove Liquidity",-1),q=(0,a._)("p",null,[(0,a.Uk)("Input a quantity of one of the assets. The quantity of the other asset(s) will auto-complete. (Pools require assets to be deposited in pre-determined weights.) "),(0,a._)("img",{src:l,alt:"Tux, the Linux mascot"})],-1),P=(0,a._)("p",null,"To remove liquidity, input the percentage amount to withdraw.",-1),L=(0,a._)("p",null,[(0,a._)("img",{src:r,alt:"Tux, the Linux mascot"})],-1),T=(0,a._)("p",null,"Incentivized pools receive OSMO liquidity mining rewards. Rewards are distributed to bonded LP tokens in these pools that meeting the bonding length criteria.",-1),O=(0,a._)("h2",{id:"bonding-lp-tokens",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bonding-lp-tokens","aria-hidden":"true"},"#"),(0,a.Uk)(" Bonding LP Tokens")],-1),F=(0,a._)("p",null,"Users can choose to bond their LP tokens after depositing liquidity. LP tokens remain bonded for a length of their time of their choosing. Bonded LP tokens are eligible for liquidity mining rewards if they meet the minimum bonding length requirement.",-1),U=(0,a._)("p",null,"Click Start Earning and choose a bonding length.",-1),S=(0,a._)("p",null,[(0,a._)("img",{src:d,alt:"Tux, the Linux mascot"})],-1),z=(0,a._)("p",null,"When a user wants to stop bonding an LP token, they submit a transaction that begins the unbonding period. After the end of the timer, they can submit another transaction to withdraw the tokens.",-1),A=(0,a._)("h2",{id:"bonded-liquidity-gauges",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bonded-liquidity-gauges","aria-hidden":"true"},"#"),(0,a.Uk)(" Bonded Liquidity Gauges")],-1),C=(0,a._)("p",null,"Bonded Liquidity Gauges are mechanisms for distributing liquidity incentives to LP tokens that have been bonded for a minimum amount of time. 45% of the daily issuance of OSMO goes towards these liquidity incentives.",-1),G=(0,a._)("p",null,"For instance, a Pool 1 LP share, 1-week gauge would distribute rewards to users who have bonded Pool1 LP tokens for one week or longer. The amount that each user receives is in proportion to the number of their bonded tokens.",-1),M=(0,a._)("p",null,"A bonded LP position can be eligible for multiple gauges. Qualifications for a gauge only involve a minimum bonding time.",-1),I=(0,a._)("p",null,[(0,a._)("img",{src:h,alt:"Tux, the Linux mascot"})],-1),E=(0,a._)("p",null,"The rewards earned from liquidity mining are not subject to unbonding. Rewards are liquid and transferable immediately. Only the principal bonded shares are subject to the unbonding period.",-1),B=(0,a._)("h2",{id:"allocation-points",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#allocation-points","aria-hidden":"true"},"#"),(0,a.Uk)(" Allocation Points")],-1),R=(0,a._)("p",null,"Not all pools have incentivized gauges. In Osmosis, staked OSMO holders choose which pools to incentivize via on-chain governance proposals. To incentivize a pool, governance can assign “allocation points” to specific gauges. At the end of every daily epoch, 45% of the newly released OSMO (the portions designated for liquidity incentives) is distributed proportionally to the allocation points that each gauge has. The percent of the OSMO liquidity rewards that each gauge receives is calculated as its number of points divided by the total number of allocation points.",-1),H=(0,a._)("p",null,"Take, for example, a scenario in which three gauges are incentivized:",-1),W=(0,a._)("ul",null,[(0,a._)("li",null,"Gauge #3 – 10 allocation points"),(0,a._)("li",null,"Gauge #4 – 5 allocation points"),(0,a._)("li",null,"Gauge #7 – 5 allocation points")],-1),j=(0,a._)("p",null,"20 total allocation points are assigned in this scenario. At the end of the daily epochs, Gauge #3 will receive 50% (10 out of 20) of the liquidity incentives minted. Gauges #4 and #7 will receive 25% each.",-1),D=(0,a._)("p",null,"Governance can pass an UpdatePoolIncentives proposal to edit the existing allocation points of any gauge. By setting a gauge’s allocation to zero, it can remove it from the list of incentivized gauges entirely. Proposals can also set the allocation points of new gauges. When a new gauge is added, the total number of allocation points increases, thus diluting all the existing incentivized gauges. Gauge #0 is a special gauge that sends its incentives directly to the chain community pool. Assigning allocation points to gauge #0 allows governance to save some of the current liquidity mining incentives to be spent at a later time.",-1),N=(0,a._)("p",null,"At genesis, the only gauge that will be incentivized is Gauge #0, (the community pool gauge). However, a governance proposal can come immediately after launch to choose which gauges/pools to incentivize. Governance voting period at launch is only 3 days at launch, so liquidity incentives may be activated as soon as 3 days after genesis.",-1),X=(0,a._)("h2",{id:"external-incentives",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#external-incentives","aria-hidden":"true"},"#"),(0,a.Uk)(" External Incentives")],-1),Z=(0,a._)("p",null,"Osmosis not only allows the community to add incentives to gauges. Anyone can deposit tokens into a gauge to be distributed. This feature allows outside parties to augment Osmosis’ own liquidity incentive program.",-1),Q=(0,a._)("p",null,"For example, there may be an ATOM<>FOOCOIN pool that has a one-day gauge incentivized by governance OSMO rewards. However, the Foo Foundation may also choose to add additional incentives to the one-day gauge or even add incentives to a new gauge (such as one-week gauge).",-1),V=(0,a._)("p",null,"These external incentive providers can also set up long-lasting incentive programs that distribute rewards over an extended time period. For example, the Foo Foundation can deposit 30,000 Foocoins to be distributed over a one-month liquidity program. The program will automatically distribute 1000 Foocoins per day to the gauge.",-1),Y=(0,a._)("h2",{id:"fees",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#fees","aria-hidden":"true"},"#"),(0,a.Uk)(" Fees")],-1),J=(0,a._)("p",null,"In addition to liquidity mining, Osmosis provides three sources of revenue: transaction fees, swap fees, and exit fees.",-1),K=(0,a._)("h3",{id:"tx-fees",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tx-fees","aria-hidden":"true"},"#"),(0,a.Uk)(" TX Fees")],-1),$=(0,a._)("p",null,"Transaction fees are paid by any user to post a transaction on the chain. The fee amount is determined by the computation and storage costs of the transaction. Minimum gas costs are determined by the proposer of a block in which the transaction is included. This transaction fee is distributed to OSMO stakers on the network. Validators can choose which assets to accept for fees in the blocks that they propose. This optionality is a unique feature of Osmosis.",-1),ee=(0,a._)("h3",{id:"swap-fees",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#swap-fees","aria-hidden":"true"},"#"),(0,a.Uk)(" Swap Fees")],-1),te=(0,a._)("p",null,"Swap fees are fees charged for making a swap in an LP pool. The fee is paid by the trader in the form of the input asset. Pool creators specify the swap fee when establishing the pool. The total fee for a particular trade is calculated as percentage of swap size. Fees are added to the pool, effectively resulting in pro-rata distribution to LPs proportional to their share of the total pool.",-1),ie=(0,a._)("h3",{id:"exit-fees",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#exit-fees","aria-hidden":"true"},"#"),(0,a.Uk)(" Exit Fees")],-1),ae=(0,a._)("p",null,"Osmosis LPs pay a small fee when withdrawing from the pool. Similar to swap fees, exit fees per pool are set by the pool creator. Exit fees are paid in LP tokens. Users withdraw their tokens, minus a percent for the exit fee. These LP shares are burned, resulting in pro-rata distribution to remaining LPs.",-1),oe={},ne=(0,i(3744).Z)(oe,[["render",function(e,t){const i=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[u,c,p,g,m,(0,a._)("p",null,[f,(0,a._)("a",b,[v,(0,a.Wm)(i)]),y]),w,_,x,k,q,P,L,T,O,F,U,S,z,A,C,G,M,I,E,B,R,H,W,j,D,N,X,Z,Q,V,Y,J,K,$,ee,te,ie,ae],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,a]of t)i[e]=a;return i}},8499:(e,t,i)=>{e.exports=i.p+"assets/img/add-liquidity.0a83d138.png"},9111:(e,t,i)=>{e.exports=i.p+"assets/img/creating-pool.833caeba.png"},7237:(e,t,i)=>{e.exports=i.p+"assets/img/creating-pool2.4f989f37.png"},5557:(e,t,i)=>{e.exports=i.p+"assets/img/creating-pool3.f322ecf0.png"},1830:(e,t,i)=>{e.exports=i.p+"assets/img/gauges.b912b8e4.png"},6882:(e,t,i)=>{e.exports=i.p+"assets/img/remove-liquidity.d06071f7.png"},698:(e,t,i)=>{e.exports=i.p+"assets/img/start-earning.2aada604.png"}}]);