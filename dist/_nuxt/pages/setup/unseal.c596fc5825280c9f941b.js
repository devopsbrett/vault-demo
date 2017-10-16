webpackJsonp([1],{"/iqa":function(e,t,a){"use strict";function s(e){a("R+We")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("foBx"),i=a.n(n),l=a("FguI"),o=a("VU/8"),r=s,c=o(i.a,l.a,!1,r,"data-v-40b1c38a",null);t.default=c.exports},FguI:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:""}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Unseal & Initialise")]),a("v-card-text",[a("p",[e._v("When vault is first started it will be in a uninitialized state. Initializing vault will prepare the \n            storage you've chosen (Consul in the case of this training), generate an encryption key, encrypt this with\n            a generated master key before using "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing",target:"_blank"}},[e._v("Shamir's Secret Sharing")]),e._v("\n            to create a given number of unseal keys, and a given threshold of unseal keys required to unlock the master key.\n            To initialize vault issue the command "),a("code",{staticClass:"elevation-3"},[e._v("vault init -key-shares=1 -key-threshold=1")]),e._v(".")]),a("p",[e._v("The reason we are only creating 1 key-share here is because currently our vault server is running with tls disabled\n            meaning our tokens will be sent in clear text. Once we have completed this setup tls will be enabled and we can rekey\n            the server generating more key-shares")])])],1),a("ul",{staticClass:"vagrantterm"},[a("li",{staticClass:"command"},[e._v("vault init -key-shares=1 -key-threshold=1")]),a("li",{staticClass:"response"},[e._v("Unseal Key 1: <UNSEAL KEY>\n          Initial Root Token: <ROOT TOKEN>\n\n          Vault initialized with 1 keys and a key threshold of 1. Please\n          securely distribute the above keys. When the vault is re-sealed,\n          restarted, or stopped, you must provide at least 1 of these keys\n          to unseal it again.\n\n          Vault does not store the master key. Without at least 1 keys,\n          your vault will remain permanently sealed.\n        ")])]),a("v-card",[a("v-card-text",[a("p",[e._v("Make a note of the unseal key and the root token as we will be using them. Issue the command \n            "),a("code",{staticClass:"elevation-3"},[e._v("vault unseal")]),e._v(" to unseal vault. You will be prompted to insert\n            the unseal key you were given before. Once unsealed you will be able to query vault. A simple\n            test for this is to issue the "),a("code",{staticClass:"elevation-3"},[e._v("vault mounts")]),e._v(" command. You will\n            have to provide your root token to access this. To provide your token either add the flag\n            "),a("code",{staticClass:"elevation-3"},[e._v("-token <ROOT TOKEN>")]),e._v(" or set the environment variable\n            "),a("code",{staticClass:"elevation-3"},[e._v("VAULT_TOKEN=<ROOT TOKEN>")]),e._v(". For ease I often put this in \n            my "),a("code",{staticClass:"elevation-3"},[e._v(".bashrc")]),e._v(" file to be sourced upon login.\n          ")])])],1),a("ul",{staticClass:"vagrantterm"},[a("li",{staticClass:"command"},[e._v("vault unseal")]),a("li",{staticClass:"response"},[e._v("Key (will be hidden):\n          Sealed: false\n          Key Shares: 1\n          Key Threshold: 1\n          Unseal Progress: 0\n          Unseal Nonce:\n        ")]),a("li",{staticClass:"command"},[e._v('echo "export VAULT_TOKEN=<ROOT TOKEN>" >> .bash_profile')]),a("li",{staticClass:"command"},[e._v("source .bash_profile")]),a("li",{staticClass:"command"},[e._v("vault mounts")]),a("li",{staticClass:"formatted-response"},[e._v("Path        Type       Accessor            Plugin  Default TTL  Max TTL  Force No Cache  Replication Behavior  Description\ncubbyhole/  cubbyhole  cubbyhole_25a6f889  n/a     n/a          n/a      false           local                 per-token private secret storage\nsecret/     kv         kv_a0da0399         n/a     system       system   false           replicated            key/value secret storage\nsys/        system     system_e9103196     n/a     n/a          n/a      false           replicated            system endpoints used for control, policy and debugging")])]),a("v-card",[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:{name:"setup-pki"}}},[e._v("Next")])],1)],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};t.a=i},"IH/F":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},"R+We":function(e,t,a){var s=a("IH/F");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("1a5115dd",s,!0)},foBx:function(e,t){}});
//# sourceMappingURL=unseal.c596fc5825280c9f941b.js.map