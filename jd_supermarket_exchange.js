/*
京东超市游戏
活动入口：京东超市 --游戏

兑换。只能运行一个账号，多了也抢不到！

cron:59 59 9 * * *	
============Quantumultx===============
[task_local]
#京东超市兑换
59 59 9 * * * jd_supermarket_exchange.js, tag=京东超市兑换, enabled=true


 */

const $ = new Env('京东超市兑换');
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxedaa9=["\x69\x73\x4E\x6F\x64\x65","\x2E\x2F\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","","\x2E\x2F\x6A\x64\x43\x6F\x6F\x6B\x69\x65\x2E\x6A\x73","\x2E\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x6B\x72\x67\x65\x74\x54\x6F\x6B\x65\x6E","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x6F\x75\x74\x46\x6C\x61\x67","\x77\x61\x69\x74","\x74\x6F\x6B\x65\x6E","\x49\x73\x76\x54\x6F\x6B\x65\x6E","\x72\x65\x74\x72\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01","\u3010\u4EAC\u8C46\x31\x30\u3011\u661F\u5E01\u4E0D\u591F\u5151\u6362\u4E86\uFF0C\u8DF3\u8FC7\x7E","\x6C\x65\x6E\x67\x74\x68","\u7B49\u5F85","\u79D2","\x72\x61\x6E\x64\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6A\x64\x73\x75\x70\x65\x72\x6D\x61\x72\x6B\x65\x74\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x49\x6E\x66\x6F\x2F\x75\x73\x65\x72\x48\x6F\x6D\x65\x51\x75\x65\x72\x79\x3F\x73\x68\x61\x72\x65\x55\x73\x65\x72\x49\x64\x3D\x26\x6E\x77\x3D","\x67\x65\x74\x54\x69\x6D\x65","\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x6E\x6F\x2D\x63\x61\x63\x68\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6A\x64\x73\x75\x70\x65\x72\x6D\x61\x72\x6B\x65\x74\x2F","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x74\x68\x2D\x43\x4E\x3B\x71\x3D\x30\x2E\x38\x2C\x74\x68\x3B\x71\x3D\x30\x2E\x37\x2C\x76\x69\x2D\x43\x4E\x3B\x71\x3D\x30\x2E\x36\x2C\x76\x69\x3B\x71\x3D\x30\x2E\x35\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x34\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x33","\x49\x73\x76\x54\x6F\x6B\x65\x6E\x3D","\x70\x61\x72\x73\x65","\x63\x6F\x64\x65","\x67\x61\x6D\x65\x54\x69\x6D\x65\x73","\x64\x61\x74\x61","\x73\x74\x61\x72\x53\x63\x6F\x72\x65","\x6C\x61\x6E\x53\x63\x6F\x72\x65","\u5F53\u524D\u7528\u6237\x49\x44\uFF1A","\x2C\u661F\u5E01","\x2C\u84DD\u5E01","\x2C\u5269\u4F59\u6E38\u620F","\u6B21","\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E","\x67\x65\x74","\x30\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6A\x64\x73\x75\x70\x65\x72\x6D\x61\x72\x6B\x65\x74\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x2D\x69\x6E\x66\x6F\x2F\x6C\x6F\x67\x69\x6E\x3F\x6E\x77\x3D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x5C\x22\x52\x65\x73\x70\x6F\x6E\x73\x65\x20\x63\x6F\x64\x65\x20\x34\x39\x33\x20\x28\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x29\x5C\x22","\x5C\x22\x52\x65\x73\x70\x6F\x6E\x73\x65\x20\x63\x6F\x64\x65\x20\x35\x30\x34\x20\x28\x47\x61\x74\x65\x77\x61\x79\x20\x54\x69\x6D\x65\x2D\x6F\x75\x74\x29\x5C\x22","\x5C\x22\x52\x65\x73\x70\x6F\x6E\x73\x65\x20\x63\x6F\x64\x65\x20\x34\x30\x34\x20\x28\x4E\x6F\x74\x20\x46\x6F\x75\x6E\x64\x29\x5C\x22","\x54\x69\x6D\x65\x6F\x75\x74","\x69\x6E\x64\x65\x78\x4F\x66","\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u9000\u51FA\u811A\u672C\x7E","\x70\x6F\x73\x74","\x31\x31\x39","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6A\x64\x73\x75\x70\x65\x72\x6D\x61\x72\x6B\x65\x74\x2F\x61\x70\x69\x2F\x73\x68\x6F\x70\x2F\x65\x78\x63\x68\x61\x6E\x67\x65\x47\x6F\x6F\x64\x73\x3F\x6E\x77\x3D","\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x62\x6B\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6A\x64\x73\x75\x70\x65\x72\x6D\x61\x72\x6B\x65\x74\x2D\x67\x61\x6D\x65\x2F\x73\x70\x50\x61\x72\x6B\x6F\x75\x72\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C\x3F\x67\x61\x6D\x65\x49\x64\x3D\x31","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37","\x69\x73\x53\x75\x63\x63\x65\x73\x73","\u606D\u559C\u661F\u5E01\u5151\u6362\x31\x30\u4EAC\u8C46\u6210\u529F","\u5151\u6362\u5931\u8D25\uFF1A","\u606D\u559C\u84DD\u5E01\u5151\u6362\x31\x30\u4EAC\u8C46\u6210\u529F","\x6C\x65\x66\x74\x53\x74\x61\x72\x53\x63\x6F\x72\x65","\x33\x38","\u606D\u559C\u84DD\u5E01\u5151\u6362\x31\x30\x30\x30\u4EAC\u8C46\u6210\u529F","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x31\x2E\x34\x3B\x31\x33\x2E\x31\x2E\x32\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x66\x6C\x6F\x6F\x72","\x63\x68\x61\x72\x41\x74","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const notify=$[__Oxedaa9[0x0]]()?require(__Oxedaa9[0x1]):__Oxedaa9[0x2];const jdCookieNode=$[__Oxedaa9[0x0]]()?require(__Oxedaa9[0x3]):__Oxedaa9[0x2];const getToken=require(__Oxedaa9[0x4]);let cookiesArr=[],cookie=__Oxedaa9[0x2],allMessage=__Oxedaa9[0x2];let krWait;let gameNum;if($[__Oxedaa9[0x0]]()){Object[__Oxedaa9[0x7]](jdCookieNode)[__Oxedaa9[0x6]]((_0xdc11x9)=>{cookiesArr[__Oxedaa9[0x5]](jdCookieNode[_0xdc11x9])});if(process[__Oxedaa9[0x9]][__Oxedaa9[0x8]]&& process[__Oxedaa9[0x9]][__Oxedaa9[0x8]]=== __Oxedaa9[0xa]){console[__Oxedaa9[0xb]]= ()=>{}}}else {cookiesArr= [$[__Oxedaa9[0xe]](__Oxedaa9[0xd]),$[__Oxedaa9[0xe]](__Oxedaa9[0xf]),...jsonParse($[__Oxedaa9[0xe]](__Oxedaa9[0x12])|| __Oxedaa9[0x13])[__Oxedaa9[0x11]]((_0xdc11x9)=>{return _0xdc11x9[__Oxedaa9[0x10]]})][__Oxedaa9[0xc]]((_0xdc11x9)=>{return !!_0xdc11x9})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxedaa9[0x1d]]($[__Oxedaa9[0x17]],__Oxedaa9[0x1b],__Oxedaa9[0x1c],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxedaa9[0x1c]});return};for(let _0xdc11xb=0;_0xdc11xb< 1;_0xdc11xb++){if(cookiesArr[_0xdc11xb]){cookie= cookiesArr[_0xdc11xb];$[__Oxedaa9[0x1e]]= decodeURIComponent(cookie[__Oxedaa9[0x1f]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxedaa9[0x1f]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxedaa9[0x20]]= _0xdc11xb+ 1;$[__Oxedaa9[0x21]]= true;$[__Oxedaa9[0x22]]= __Oxedaa9[0x2];message= __Oxedaa9[0x2];console[__Oxedaa9[0xb]](__Oxedaa9[0x23]+ $[__Oxedaa9[0x20]]+ __Oxedaa9[0x24]+ ($[__Oxedaa9[0x22]]|| $[__Oxedaa9[0x1e]])+ __Oxedaa9[0x25]);if(!$[__Oxedaa9[0x21]]){$[__Oxedaa9[0x1d]]($[__Oxedaa9[0x17]],`${__Oxedaa9[0x26]}`,`${__Oxedaa9[0x27]}${$[__Oxedaa9[0x20]]}${__Oxedaa9[0x28]}${$[__Oxedaa9[0x22]]|| $[__Oxedaa9[0x1e]]}${__Oxedaa9[0x29]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxedaa9[0x1c]});if($[__Oxedaa9[0x0]]()){ await notify[__Oxedaa9[0x2c]](`${__Oxedaa9[0x2]}${$[__Oxedaa9[0x17]]}${__Oxedaa9[0x2a]}${$[__Oxedaa9[0x1e]]}${__Oxedaa9[0x2]}`,`${__Oxedaa9[0x27]}${$[__Oxedaa9[0x20]]}${__Oxedaa9[0x28]}${$[__Oxedaa9[0x1e]]}${__Oxedaa9[0x2b]}`)};continue}; await getUA(); await run();if($[__Oxedaa9[0x2d]]){break}; await $[__Oxedaa9[0x2e]](3000)}};if(allMessage){if($[__Oxedaa9[0x0]]()){ await notify[__Oxedaa9[0x2c]](`${__Oxedaa9[0x2]}${$[__Oxedaa9[0x17]]}${__Oxedaa9[0x2]}`,`${__Oxedaa9[0x2]}${allMessage}${__Oxedaa9[0x2]}`)};$[__Oxedaa9[0x1d]]($[__Oxedaa9[0x17]],__Oxedaa9[0x2],allMessage)}})()[__Oxedaa9[0x1a]]((_0xdc11xa)=>{$[__Oxedaa9[0xb]](__Oxedaa9[0x2],`${__Oxedaa9[0x16]}${$[__Oxedaa9[0x17]]}${__Oxedaa9[0x18]}${_0xdc11xa}${__Oxedaa9[0x19]}`,__Oxedaa9[0x2])})[__Oxedaa9[0x15]](()=>{$[__Oxedaa9[0x14]]()});async function run(){try{$[__Oxedaa9[0x2f]]= __Oxedaa9[0x2];$[__Oxedaa9[0x30]]= __Oxedaa9[0x2];$[__Oxedaa9[0x31]]= false;$[__Oxedaa9[0x30]]=  await getToken(cookie,__Oxedaa9[0x32]);if($[__Oxedaa9[0x30]]== __Oxedaa9[0x2]){console[__Oxedaa9[0xb]](__Oxedaa9[0x33]);return}; await login(); await $[__Oxedaa9[0x2e]](1000); await userHomeQuery();if($[__Oxedaa9[0x2d]]){return};if(starScore>= 500){ await exchangeGoods();if($[__Oxedaa9[0x31]]){for(let _0xdc11xb=0;_0xdc11xb< 1;_0xdc11xb++){ await exchangeGoods()};$[__Oxedaa9[0x31]]= false}}else {console[__Oxedaa9[0xb]](`${__Oxedaa9[0x34]}`)};if(krWait){if($[__Oxedaa9[0x20]]!= cookiesArr[__Oxedaa9[0x35]]){console[__Oxedaa9[0xb]](`${__Oxedaa9[0x36]}${krWait}${__Oxedaa9[0x37]}`); await $[__Oxedaa9[0x2e]](parseInt(krWait,10)* 1000)}}else {if($[__Oxedaa9[0x20]]% 3== 0){ await $[__Oxedaa9[0x2e]](parseInt(Math[__Oxedaa9[0x38]]()* 5000+ 20000,10))}}}catch(e){console[__Oxedaa9[0xb]](e)}}function userHomeQuery(){let _0xdc11xe={url:`${__Oxedaa9[0x39]}${( new Date)[__Oxedaa9[0x3a]]()}${__Oxedaa9[0x2]}`,headers:{'\x48\x6F\x73\x74':__Oxedaa9[0x3b],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxedaa9[0x3c],'\x41\x63\x63\x65\x70\x74':__Oxedaa9[0x3d],'\x43\x61\x63\x68\x65\x2D\x43\x6F\x6E\x74\x72\x6F\x6C':__Oxedaa9[0x3e],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':UA,'\x54\x4F\x4B\x45\x4E':$[__Oxedaa9[0x2f]],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxedaa9[0x3f],'\x4F\x72\x69\x67\x69\x6E':__Oxedaa9[0x32],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxedaa9[0x40],'\x52\x65\x66\x65\x72\x65\x72':__Oxedaa9[0x41],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxedaa9[0x42],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxedaa9[0x43],'\x43\x6F\x6F\x6B\x69\x65':__Oxedaa9[0x44]+ $[__Oxedaa9[0x30]]}};return  new Promise((_0xdc11xf)=>{$[__Oxedaa9[0x51]](_0xdc11xe,(_0xdc11x10,_0xdc11x11,_0xdc11x12)=>{try{if(_0xdc11x10){$[__Oxedaa9[0xb]](_0xdc11x10)}else {if(_0xdc11x12){_0xdc11x12= JSON[__Oxedaa9[0x45]](_0xdc11x12);if(_0xdc11x12[__Oxedaa9[0x46]]=== 200){gameNum= _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x47]];starScore= _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x49]];lanScore= _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x4a]];console[__Oxedaa9[0xb]](`${__Oxedaa9[0x4b]}${_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x22]]}${__Oxedaa9[0x4c]}${_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x49]]}${__Oxedaa9[0x4d]}${_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x4a]]}${__Oxedaa9[0x4e]}${_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x47]]}${__Oxedaa9[0x4f]}`)}}else {$[__Oxedaa9[0xb]](__Oxedaa9[0x50])}}}catch(error){$[__Oxedaa9[0xb]](error)}finally{_0xdc11xf()}})})}function login(){body= {"\x74\x6F\x6B\x65\x6E":$[__Oxedaa9[0x30]],"\x73\x6F\x75\x72\x63\x65":__Oxedaa9[0x52]};let _0xdc11xe={url:`${__Oxedaa9[0x53]}${( new Date)[__Oxedaa9[0x3a]]()}${__Oxedaa9[0x2]}`,headers:{'\x48\x6F\x73\x74':__Oxedaa9[0x3b],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxedaa9[0x3c],'\x41\x63\x63\x65\x70\x74':__Oxedaa9[0x3d],'\x43\x61\x63\x68\x65\x2D\x43\x6F\x6E\x74\x72\x6F\x6C':__Oxedaa9[0x3e],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':UA,'\x54\x4F\x4B\x45\x4E':$[__Oxedaa9[0x2f]],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxedaa9[0x3f],'\x4F\x72\x69\x67\x69\x6E':__Oxedaa9[0x32],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxedaa9[0x40],'\x52\x65\x66\x65\x72\x65\x72':__Oxedaa9[0x41],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxedaa9[0x42],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxedaa9[0x43],'\x43\x6F\x6F\x6B\x69\x65':__Oxedaa9[0x44]+ $[__Oxedaa9[0x30]]},body:JSON[__Oxedaa9[0x54]](body)};return  new Promise((_0xdc11xf)=>{$[__Oxedaa9[0x5b]](_0xdc11xe,(_0xdc11x10,_0xdc11x11,_0xdc11x12)=>{try{if(_0xdc11x10){$[__Oxedaa9[0xb]](_0xdc11x10);if(JSON[__Oxedaa9[0x54]](_0xdc11x10)=== `${__Oxedaa9[0x55]}`|| JSON[__Oxedaa9[0x54]](_0xdc11x10)=== `${__Oxedaa9[0x56]}`|| JSON[__Oxedaa9[0x54]](_0xdc11x10)=== `${__Oxedaa9[0x57]}`|| _0xdc11x10[__Oxedaa9[0x59]](__Oxedaa9[0x58])>  -1){console[__Oxedaa9[0xb]](__Oxedaa9[0x5a]);$[__Oxedaa9[0x2d]]= true}}else {if(_0xdc11x12){_0xdc11x12= JSON[__Oxedaa9[0x45]](_0xdc11x12);if(_0xdc11x12[__Oxedaa9[0x46]]=== 200){$[__Oxedaa9[0x2f]]= _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x2f]]}}else {$[__Oxedaa9[0xb]](__Oxedaa9[0x50])}}}catch(error){$[__Oxedaa9[0xb]](error)}finally{_0xdc11xf()}})})}async function exchangeGoods(){body= {"\x74\x61\x72\x67\x65\x74\x49\x64":__Oxedaa9[0x5c]};let _0xdc11xe={url:`${__Oxedaa9[0x5d]}${( new Date)[__Oxedaa9[0x3a]]()}${__Oxedaa9[0x2]}`,headers:{'\x48\x6F\x73\x74':__Oxedaa9[0x3b],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxedaa9[0x3c],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':UA,'\x74\x6F\x6B\x65\x6E':$[__Oxedaa9[0x2f]],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxedaa9[0x3f],'\x41\x63\x63\x65\x70\x74':__Oxedaa9[0x5e],'\x4F\x72\x69\x67\x69\x6E':__Oxedaa9[0x32],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxedaa9[0x40],'\x52\x65\x66\x65\x72\x65\x72':__Oxedaa9[0x5f],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxedaa9[0x42],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxedaa9[0x60],'\x43\x6F\x6F\x6B\x69\x65':__Oxedaa9[0x44]+ $[__Oxedaa9[0x30]]},body:JSON[__Oxedaa9[0x54]](body)};return  new Promise((_0xdc11xf)=>{$[__Oxedaa9[0x5b]](_0xdc11xe,(_0xdc11x10,_0xdc11x11,_0xdc11x12)=>{try{if(_0xdc11x10){$[__Oxedaa9[0xb]](_0xdc11x10)}else {if(_0xdc11x12){_0xdc11x12= JSON[__Oxedaa9[0x45]](_0xdc11x12);if(_0xdc11x12[__Oxedaa9[0x46]]=== 200&& _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x61]]=== 1){console[__Oxedaa9[0xb]](`${__Oxedaa9[0x62]}`)}else {console[__Oxedaa9[0xb]](`${__Oxedaa9[0x63]}${_0xdc11x12[__Oxedaa9[0x1d]]}${__Oxedaa9[0x2]}`);if(_0xdc11x12[__Oxedaa9[0x46]]=== 400){$[__Oxedaa9[0x31]]= true}}}else {$[__Oxedaa9[0xb]](__Oxedaa9[0x50])}}}catch(error){$[__Oxedaa9[0xb]](error)}finally{_0xdc11xf()}})})}async function exchangeGoods1(){body= {"\x74\x61\x72\x67\x65\x74\x49\x64":__Oxedaa9[0x5c]};let _0xdc11xe={url:`${__Oxedaa9[0x5d]}${( new Date)[__Oxedaa9[0x3a]]()}${__Oxedaa9[0x2]}`,headers:{'\x48\x6F\x73\x74':__Oxedaa9[0x3b],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxedaa9[0x3c],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':UA,'\x74\x6F\x6B\x65\x6E':$[__Oxedaa9[0x2f]],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxedaa9[0x3f],'\x41\x63\x63\x65\x70\x74':__Oxedaa9[0x5e],'\x4F\x72\x69\x67\x69\x6E':__Oxedaa9[0x32],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxedaa9[0x40],'\x52\x65\x66\x65\x72\x65\x72':__Oxedaa9[0x5f],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxedaa9[0x42],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxedaa9[0x60],'\x43\x6F\x6F\x6B\x69\x65':__Oxedaa9[0x44]+ $[__Oxedaa9[0x30]]},body:JSON[__Oxedaa9[0x54]](body)};return  new Promise((_0xdc11xf)=>{$[__Oxedaa9[0x5b]](_0xdc11xe,(_0xdc11x10,_0xdc11x11,_0xdc11x12)=>{try{if(_0xdc11x10){$[__Oxedaa9[0xb]](_0xdc11x10)}else {if(_0xdc11x12){_0xdc11x12= JSON[__Oxedaa9[0x45]](_0xdc11x12);if(_0xdc11x12[__Oxedaa9[0x46]]=== 200&& _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x61]]=== 1){console[__Oxedaa9[0xb]](`${__Oxedaa9[0x64]}`)}else {console[__Oxedaa9[0xb]](`${__Oxedaa9[0x63]}${_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x65]]}${__Oxedaa9[0x2]}`);if(_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x65]]!= 0){$[__Oxedaa9[0x31]]= true}}}else {$[__Oxedaa9[0xb]](__Oxedaa9[0x50])}}}catch(error){$[__Oxedaa9[0xb]](error)}finally{_0xdc11xf()}})})}async function exchangeGoods2(){body= {"\x74\x61\x72\x67\x65\x74\x49\x64":__Oxedaa9[0x66]};let _0xdc11xe={url:`${__Oxedaa9[0x5d]}${( new Date)[__Oxedaa9[0x3a]]()}${__Oxedaa9[0x2]}`,headers:{'\x48\x6F\x73\x74':__Oxedaa9[0x3b],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxedaa9[0x3c],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':UA,'\x74\x6F\x6B\x65\x6E':$[__Oxedaa9[0x2f]],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxedaa9[0x3f],'\x41\x63\x63\x65\x70\x74':__Oxedaa9[0x5e],'\x4F\x72\x69\x67\x69\x6E':__Oxedaa9[0x32],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxedaa9[0x40],'\x52\x65\x66\x65\x72\x65\x72':__Oxedaa9[0x5f],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxedaa9[0x42],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxedaa9[0x60],'\x43\x6F\x6F\x6B\x69\x65':__Oxedaa9[0x44]+ $[__Oxedaa9[0x30]]},body:JSON[__Oxedaa9[0x54]](body)};return  new Promise((_0xdc11xf)=>{$[__Oxedaa9[0x5b]](_0xdc11xe,(_0xdc11x10,_0xdc11x11,_0xdc11x12)=>{try{if(_0xdc11x10){$[__Oxedaa9[0xb]](_0xdc11x10)}else {if(_0xdc11x12){_0xdc11x12= JSON[__Oxedaa9[0x45]](_0xdc11x12);if(_0xdc11x12[__Oxedaa9[0x46]]=== 200&& _0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x65]]=== 0){console[__Oxedaa9[0xb]](`${__Oxedaa9[0x67]}`)}else {console[__Oxedaa9[0xb]](`${__Oxedaa9[0x63]}${_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x65]]}${__Oxedaa9[0x2]}`);if(_0xdc11x12[__Oxedaa9[0x48]][__Oxedaa9[0x65]]!= 0){$[__Oxedaa9[0x31]]= true}}}else {$[__Oxedaa9[0xb]](__Oxedaa9[0x50])}}}catch(error){$[__Oxedaa9[0xb]](error)}finally{_0xdc11xf()}})})}async function getUA(){UA= `${__Oxedaa9[0x68]}${randomString(40)}${__Oxedaa9[0x69]}`}function randomString(_0xdc11xa){_0xdc11xa= _0xdc11xa|| 32;let _0xdc11x19=__Oxedaa9[0x6a],_0xdc11x1a=_0xdc11x19[__Oxedaa9[0x35]],_0xdc11x1b=__Oxedaa9[0x2];for(i= 0;i< _0xdc11xa;i++){_0xdc11x1b+= _0xdc11x19[__Oxedaa9[0x6c]](Math[__Oxedaa9[0x6b]](Math[__Oxedaa9[0x38]]()* _0xdc11x1a))};return _0xdc11x1b}function jsonParse(_0xdc11x1d){if( typeof _0xdc11x1d== __Oxedaa9[0x6d]){try{return JSON[__Oxedaa9[0x45]](_0xdc11x1d)}catch(e){console[__Oxedaa9[0xb]](e);$[__Oxedaa9[0x1d]]($[__Oxedaa9[0x17]],__Oxedaa9[0x2],__Oxedaa9[0x6e]);return []}}}(function(_0xdc11x1e,_0xdc11x1f,_0xdc11x20,_0xdc11x21,_0xdc11x22,_0xdc11x23){_0xdc11x23= __Oxedaa9[0x6f];_0xdc11x21= function(_0xdc11x24){if( typeof alert!== _0xdc11x23){alert(_0xdc11x24)};if( typeof console!== _0xdc11x23){console[__Oxedaa9[0xb]](_0xdc11x24)}};_0xdc11x20= function(_0xdc11x1a,_0xdc11x1e){return _0xdc11x1a+ _0xdc11x1e};_0xdc11x22= _0xdc11x20(__Oxedaa9[0x70],_0xdc11x20(_0xdc11x20(__Oxedaa9[0x71],__Oxedaa9[0x72]),__Oxedaa9[0x73]));try{_0xdc11x1e= __encode;if(!( typeof _0xdc11x1e!== _0xdc11x23&& _0xdc11x1e=== _0xdc11x20(__Oxedaa9[0x74],__Oxedaa9[0x75]))){_0xdc11x21(_0xdc11x22)}}catch(e){_0xdc11x21(_0xdc11x22)}})({})
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }