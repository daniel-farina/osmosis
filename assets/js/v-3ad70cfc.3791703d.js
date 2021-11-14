"use strict";(self.webpackChunkdocs2=self.webpackChunkdocs2||[]).push([[413],{5558:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-3ad70cfc",path:"/other-features/",title:"Other Features",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Liquidity Bootstrapping Pools",slug:"liquidity-bootstrapping-pools",children:[]}],filePathRelative:"other-features/README.md",git:{contributors:[{name:"Daniel Farina",email:"contact@nevulas.com",commits:1}]}}},5071:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var a=i(6252),o=i(2487);const s=(0,a._)("h1",{id:"other-features",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#other-features","aria-hidden":"true"},"#"),(0,a.Uk)(" Other Features")],-1),r=(0,a._)("h2",{id:"liquidity-bootstrapping-pools",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#liquidity-bootstrapping-pools","aria-hidden":"true"},"#"),(0,a.Uk)(" Liquidity Bootstrapping Pools")],-1),n=(0,a._)("p",null,"Osmosis offers a convenient design for Liquidity Bootstrapping Pools (LBPs), a special type of AMM designed for token sales. New protocols can use Osmosis’ LBP feature to distribute tokens and achieve initial price discovery.",-1),l=(0,a._)("p",null,"LBPs differ from other liquidity pools in terms of the ratio of assets within the pool. In LBPs, the ratio adjusts over time. LBPs involve an initial ratio, a target ratio, and an interval of time over which the ratio adjusts. These weights are customizable before launch. One can create an LBP with an initial ratio of 90-10, with the goal of reaching 50-50 over a month. The ratio continues to gradually adjust until the weights are equal within the pool. Like traditional LPs, the prices of assets within the pool is based on the ratio at the time of trade.",-1),h=(0,a._)("p",null,"After the LBP period ends or the final ratio is reached, the pool converts into a traditional LP pool.",-1),c=(0,a._)("p",null,"LBPs facilitate price discovery by demonstrating the acceptable market price of an asset. Ideally, LBPs will have very few buyers at the time of launch. The price slowly declines until traders are willing to step in and buy the asset. Arbitrage maintains this price for the remainder of the LBP. The process is shown by the blue line below. The price declines as the ratios adjust. Buyers step in until the acceptable price is again reached.",-1),d=(0,a._)("p",null,[(0,a._)("img",{src:o,alt:""})],-1),p=(0,a._)("p",null,"Choosing the correct parameters is very important to price discovery for an LBP. If the initial price is too low, the asset will get bought up as soon as the pool is launched. It is also possible that the targeted final price is too high, creating little demand for the asset. The green line above shows this scenario. A buyer places a large order, but afterwards the price continues to decline as no additional buyers are willing to bite.",-1),u=(0,a._)("p",null,"Osmosis aims to provide an intuitive, easy-to-use LBP design to give protocols the best chance of a successful sale. The LBP feature facilitates initial price discovery for tokens and allows protocols to fairly distribute tokens to project stakeholders.",-1),f={},g=(0,i(3744).Z)(f,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,r,n,l,h,c,d,p,u],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,a]of t)i[e]=a;return i}},2487:(e,t,i)=>{e.exports=i.p+"assets/img/lbp.d36bfc21.png"}}]);