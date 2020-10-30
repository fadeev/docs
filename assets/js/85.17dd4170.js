(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{674:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("CsomWasm proves the potential of a smart contract container at the heart of the Cosmos Hub.")]),t._v(" "),a("p",[t._v("One of the promises of CosmWasm is to enable flexible smart contract execution on Cosmos Hub. With CosmWasm on the Hub,\nnetwork participants can propose to deploy smart contracts, vote in governance to enable them.")]),t._v(" "),a("p",[t._v("In this section you will learn all the knowledge required to experience smart contract on the hub. If you are interested in smart contract\ndevelopment, digest the "),a("RouterLink",{attrs:{to:"/getting-started/intro.html"}},[t._v("Getting Started")]),t._v(" documentation.")],1),t._v(" "),a("h2",{attrs:{id:"wasmd-authorization-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasmd-authorization-settings"}},[t._v("#")]),t._v(" Wasmd Authorization Settings")]),t._v(" "),a("p",[t._v("CosmWasm provides on-chain smart contract deployment authorization mechanisms that can be configured many ways:")]),t._v(" "),a("ul",[a("li",[t._v("Free for all, meaning fully without an admin. Anyone can deploy.")]),t._v(" "),a("li",[t._v("Fully permissioned, meaning only an admin can deploy.")]),t._v(" "),a("li",[t._v("By on-chain governance. Deployment of a contract is determined by governance votes.")]),t._v(" "),a("li",[t._v("By owner, contract by contract basis.")])]),t._v(" "),a("h3",{attrs:{id:"enable-governance-proposals-at-compile-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-governance-proposals-at-compile-time"}},[t._v("#")]),t._v(" Enable Governance Proposals at Compile Time")]),t._v(" "),a("p",[t._v("As gov proposals bypass the existing authorization policy they are disabled and require to be enabled at compile time.")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LVggZ2l0aHViLmNvbS9Db3NtV2FzbS93YXNtZC9hcHAuUHJvcG9zYWxzRW5hYmxlZD10cnVlIC0gZW5hYmxlIGFsbCB4L3dhc20gZ292ZXJuYW5jZSBwcm9wb3NhbHMgKGRlZmF1bHQgZmFsc2UpCi1YIGdpdGh1Yi5jb20vQ29zbVdhc20vd2FzbWQvYXBwLkVuYWJsZVNwZWNpZmljUHJvcG9zYWxzPU1pZ3JhdGVDb250cmFjdCxVcGRhdGVBZG1pbixDbGVhckFkbWluIC0gZW5hYmxlIGEgc3Vic2V0IG9mIHRoZSB4L3dhc20gZ292ZXJuYW5jZSBwcm9wb3NhbCB0eXBlcyAob3ZlcnJpZGVzIFByb3Bvc2Fsc0VuYWJsZWQpCg=="}}),t._v(" "),a("p",[t._v("If you are using "),a("code",[t._v("gaiaflex")]),t._v(" binary executable you don't need to build using flags above since it is already included in\nthe binary build.")]),t._v(" "),a("h3",{attrs:{id:"init-parameters-via-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-parameters-via-genesis"}},[t._v("#")]),t._v(" Init Parameters Via Genesis")]),t._v(" "),a("p",[t._v("Initial authorization configuration is in genesis file:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"JnF1b3Q7d2FzbSZxdW90OzogewogICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiB7CiAgICAgICZxdW90O2NvZGVfdXBsb2FkX2FjY2VzcyZxdW90OzogewogICAgICAgICZxdW90O3Blcm1pc3Npb24mcXVvdDs6ICZxdW90O05vYm9keSZxdW90OwogICAgICB9LAogICAgICAmcXVvdDtpbnN0YW50aWF0ZV9kZWZhdWx0X3Blcm1pc3Npb24mcXVvdDs6ICZxdW90O05vYm9keSZxdW90OwogICAgfQp9Cg=="}}),t._v(" "),a("p",[t._v("These configurations in gaiaflex testnet means only governance can upload and init smart contracts.")]),t._v(" "),a("h3",{attrs:{id:"available-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-configurations"}},[t._v("#")]),t._v(" Available configurations")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("code_upload_access")]),t._v(" - who can upload a wasm binary: "),a("code",[t._v("Nobody")]),t._v(", "),a("code",[t._v("Everybody")]),t._v(", "),a("code",[t._v("OnlyAddress")]),t._v(". Needs to be defined in the genesis.\ncan be changed later by governance votes.")]),t._v(" "),a("li",[a("code",[t._v("instantiate_default_permission")]),t._v(" - platform default, who can instantiate a wasm binary when the code owner has not set it\nIn this tutorial, we will show you deploying a smart contract on a governed network.")])]),t._v(" "),a("p",[t._v("CosmWasm extends Cosmos SDK governance module to enable deployment of smart contracts after proposals.")]),t._v(" "),a("h2",{attrs:{id:"get-sample-cw-subkeys-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-sample-cw-subkeys-contract"}},[t._v("#")]),t._v(" Get Sample cw-subkeys Contract")]),t._v(" "),a("p",[t._v("There are two options to get the sample contract:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/v0.1.1/contracts/cw20-base",target:"_blank",rel:"noopener noreferrer"}},[t._v("source code"),a("OutboundLink")],1),t._v(", and "),a("RouterLink",{attrs:{to:"/getting-started/compile-contract.html"}},[t._v("compile")]),t._v(" it your self.")],1)]),t._v(" "),a("li",[a("p",[t._v("Download "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/releases/download/v0.1.1/cw20_base.wasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-compiled binary"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"submit-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submit-proposal"}},[t._v("#")]),t._v(" Submit Proposal")]),t._v(" "),a("p",[t._v("Deployment command is down below:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"d2FzbWNsaSB0eCBnb3Ygc3VibWl0LXByb3Bvc2FsIHdhc20tc3RvcmUgY3cxLXN1YmtleXMud2FzbSBcCiAtLXNvdXJjZSDigJxodHRwczovL2dpdGh1Yi5jb20vQ29zbVdhc20vY29zbXdhc20tcGx1cyZxdW90OyBcCiDigJQtYnVpbGRlciDigJxjb3Ntd2FzbS93b3Jrc3BhY2Utb3B0aW1pemVyOjAuMTAuM+KAnSBcCiDigJQtdGl0bGUg4oCcRW5hYmxlIGN3MS1zdWJrZXlzIGZ1bmN0aW9uYWxpdHnigJ0gXAog4oCULWRlc2NyaXB0aW9uIOKAnERBTyBhbmQgRFNPcyBuZWVkIHRoaXMh4oCdIFwKIOKAlC1pbnN0YW50aWF0ZS1ldmVyeWJvZHkg4oCcdHJ1ZeKAnSBcCiDigJQtcnVuLWFzICQod2FzbWNsaSBrZXlzIHNob3cgLWEgYWNjb3VudCkKIOKAlC1kZXBvc2l0IOKAnDEwMDAwdW11b27igJ0KIC0tZnJvbSBhY2NvdW50Cg=="}}),t._v(" "),a("p",[t._v("If you run "),a("code",[t._v("wasmcli tx gov submit-proposal wasm-store -h")]),t._v(", you will notice two more important flags:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LS1pbnN0YW50aWF0ZS1ldmVyeWJvZHkgc3RyaW5nICAgICAgRXZlcnlib2R5IGNhbiBpbnN0YW50aWF0ZSBhIGNvbnRyYWN0IGZyb20gdGhlIGNvZGUsIG9wdGlvbmFsCi0taW5zdGFudGlhdGUtb25seS1hZGRyZXNzIHN0cmluZyAgIE9ubHkgdGhpcyBhZGRyZXNzIGNhbiBpbnN0YW50aWF0ZSBhIGNvbnRyYWN0IGluc3RhbmNlIGZyb20gdGhlIGNvZGUsIG9wdGlvbmFsCg=="}}),t._v(" "),a("p",[t._v("By default, the first flag is enabled. If you want only one address to be able to initiate the contract,\nset the "),a("code",[t._v("instantiate-only-address")]),t._v(" flag.")]),t._v(" "),a("p",[t._v("If either of these flags are set, the voting committee should decide if that is acceptable for the given contract.\nInstantiate-everybody might make sense for a multisig (everyone makes their own), but not for creating a new token.")]),t._v(" "),a("h2",{attrs:{id:"vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[t._v("#")]),t._v(" Vote")]),t._v(" "),a("p",[t._v("After the proposal creation, it needs to be approved by governance voting.")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"d2FzbWNsaSB0eCBnb3Ygdm90ZSBbcHJvcG9zYWwtaWRdIHllcyAtLWZyb20gYWNjb3VudAo="}}),t._v(" "),a("h2",{attrs:{id:"instantiate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantiate"}},[t._v("#")]),t._v(" Instantiate")]),t._v(" "),a("p",[t._v("After the proposal passes the code will be deployed. Now you can instantiate the contract.")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"SU5JVD3igJl74oCcYWRtaW5z4oCdOiBb4oCcY29zbW9zMTJhdDl1cGxlbjg1anQydnJmYzVmczM2czllZDRhaGdkdWNsazVh4oCdLOKAnWNvc21vczF2N21qZ2Z5eHZscXQ3dHpqMmo5ZndlZTgyZmg2cmEwanZocnh5cOKAnSzigJ1jb3Ntb3MxOHJremZuNjU0ODV3cTY4cDN5bHY0YWZoZ2d1cTkwNGRqZXBma2vigJ0s4oCdY29zbW9zMXh4a3Vla2xhbDl2ZWp2OXVucXU4MHc5dnB0eWVwZmE5NXBkNTN14oCdXSwg4oCcbXV0YWJsZeKAnTogdHJ1ZX3igJkKd2FzbWNsaSB0eCB3YXNtIGluc3RhbnRpYXRlIFtjb2RlX2lkXSDigJwkSU5JVOKAnSBcCiAtLWxhYmVsIOKAnFVQLTEwMSBGdW5kaW5nIEFjY291bnTigJ0KIOKAlC1hbW91bnQgMjAwMDAwMHVhdG9tCiAtLWZyb20gYWNjb3VudAo="}}),t._v(" "),a("h2",{attrs:{id:"interact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact"}},[t._v("#")]),t._v(" Interact")]),t._v(" "),a("p",[t._v("If you have admin access to the contract you can add or remove admins by running the command:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZXhwb3J0IFVQREFURV9BRE1JTlNfTVNHPeKAmXvigJx1cGRhdGVfYWRtaW5z4oCdOiB74oCcYWRtaW5z4oCdOlvigJxjb3Ntb3MxdTNudWZjMmtqc2xqMnQzcHVneGhqdjR6YzhhZHc1dGh1d3UwdG3igJ0sIOKAnGNvc21vczFmcDlxbGF6a204a2dxMzA0a2FsZXY2ZTY5cHlwNWttZGQ1cGNnauKAnV19feKAmQp3YXNtY2xpIHR4IHdhc20gZXhlY3V0ZSAkQ09OVFJBQ1RfQUREUkVTUyDigJwkVVBEQVRFX0FETUlOU19NU0figJ0gXAotLWZyb20gYWNjb3VudAo="}}),t._v(" "),a("p",[t._v("Subkey allowances can execute send token transaction using the command:")]),t._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZXhwb3J0IFNFTkRfTVNHPeKAmXvigJxleGVjdXRl4oCdOnvigJxtc2dz4oCdOlt74oCcYmFua+KAnTp74oCcc2VuZOKAnTp74oCcYW1vdW504oCdOlt74oCcZGVub23igJ064oCddW11b27igJ0s4oCdYW1vdW504oCdOuKAnTEwMDAmcXVvdDt9XSzigJ1mcm9tX2FkZHJlc3PigJ064oCdY29zbW9zMTh2ZDhmcHd4emNrOTNxbHdnaGFqNmFyaDRwN2M1bjg5dXpjZWU1JnF1b3Q7LOKAnXRvX2FkZHJlc3PigJ064oCdY29zbW9zMWNzNjNlaHRxNmx3ODZ2Yzg3dDQyY25oY215ZHRucmZmemRqaGt64oCdfX19XX194oCZCndhc21jbGkgdHggd2FzbSBleGVjdXRlICRDT05UUkFDVF9BRERSRVNTIOKAnCRTRU5EX01TR+KAnSAtLWZyb20gYWNjb3VudAo="}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);