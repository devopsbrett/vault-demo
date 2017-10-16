webpackJsonp([6],{"C+gy":function(e,t,a){var n=a("VRYa");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("0deabcb7",n,!0)},VRYa:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},XvBd:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:""}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Creating a dedicated token to manage our new certificate")]),a("v-card-text",[a("p",[e._v("To finish off the setup of the vault server we should create a token that has no other\n            access than to use the role we created earler to generate or sign certificates. Then, should we want to\n            automate the task of renewing these certificates we could provide this token. The privleges that a \n            token can be assigned are controlled by policies. The script below shows the process of creating a new\n            policy that only has access to the two endpoints mentioned previously and then generating a new token \n            with these privleges assigned")])])],1),a("ul",{staticClass:"vagrantterm"},[a("li",{staticClass:"command"},[e._v("vim vaultrenew.policy")]),a("li",{staticClass:"comment"},[e._v("Enter the following into the file")]),a("li",{staticClass:"file-contents"},[e._v('path "vaultcerts/issue/demo" {\n              capabilities = ["create", "update"]\n          }\n          path "vaultcerts/sign/demo" {\n              capabilities = ["create", "update"]\n          }\n        ')]),a("li",{staticClass:"command"},[e._v("vault policy-write vaultrenew ./vaultrenew.policy")]),a("li",{staticClass:"response"},[e._v("Policy 'vaultrenew' written.")]),a("li",{staticClass:"command"},[e._v('vault token-create -display-name="vault-renew" -ttl="768h" -orphan -policy="vaultrenew"')]),a("li",{staticClass:"formatted-response"},[e._v("Key            \tValue\n---            \t-----\ntoken          \t<TOKEN>\ntoken_accessor \t51c06802-751b-70e6-ea89-7ba280fa07f9\ntoken_duration \t768h0m0s\ntoken_renewable\ttrue\ntoken_policies \t[default vaultrenew]")])]),a("v-card",[a("v-card-actions",[a("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:{name:"setup-config"}}},[e._v("Back")]),a("v-spacer"),a("v-btn",{attrs:{color:"success",flat:"",nuxt:"",to:{name:"audit-syslog"}}},[e._v("Audit Backends")])],1)],1)],1)],1)},s=[],o={render:n,staticRenderFns:s};t.a=o},o29G:function(e,t,a){"use strict";function n(e){a("C+gy")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("XvBd"),o=a("VU/8"),i=n,r=o(null,s.a,!1,i,"data-v-712db8b5",null);t.default=r.exports}});
//# sourceMappingURL=token.247946875d2e94bf8de9.js.map