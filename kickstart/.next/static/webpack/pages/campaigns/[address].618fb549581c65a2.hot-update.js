"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_rosenvibes_solidity1_deKickstarter_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_rosenvibes_solidity1_deKickstarter_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_rosenvibes_solidity1_deKickstarter_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_individualCampaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/individualCampaign */ \"./ethereum/individualCampaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ContributeForm(param) {\n    var address = param.address;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    function handleSubmit(e) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = // console.log(address);\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_rosenvibes_solidity1_deKickstarter_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var campaign, accounts;\n            return _home_rosenvibes_solidity1_deKickstarter_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        campaign = (0,_ethereum_individualCampaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                    case 5:\n                        accounts = _ctx.sent;\n                        _ctx.next = 8;\n                        return campaign.methods.contribute().send({\n                            from: accounts[0],\n                            value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(value, \"ether\")\n                        });\n                    case 8:\n                        router.replaceRoute(\"/campaigns/\");\n                        _ctx.next = 13;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    11\n                ]\n            ]);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: \"Amount to Contribute\"\n                        }, void 0, false, {\n                            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                            label: \"ether\",\n                            labelPosition: \"right\",\n                            onChange: function(e) {\n                                return setValue(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    primary: true,\n                    children: \"Contribute!\"\n                }, void 0, false, {\n                    fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(ContributeForm, \"kB+1bgOdPT4ZCZhO2h9IiNEK54w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXNDO0FBQzJCO0FBQ0Q7QUFDNUI7QUFDSTs7QUFFeEMsU0FBU1MsY0FBYyxDQUFDLEtBQVMsRUFBRTtRQUFYLE9BQVEsR0FBUixLQUFTLENBQVJDLE9BQU87O0lBRTVCLElBQTBCVCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CVSxLQUFLLEdBQWNWLEdBQVksR0FBMUIsRUFBRVcsUUFBUSxHQUFJWCxHQUFZLEdBQWhCO0lBQ3RCLElBQU1ZLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTthQUlYTSxZQUFZLENBQUNDLENBQUM7ZUFBZEQsYUFBWTs7YUFBWkEsYUFBWTtRQUFaQSxhQUFZLEdBRjNCLHdCQUF3QjtRQUV4QixtUUFBNEJDLENBQUMsRUFBRTtnQkFFckJDLFFBQVEsRUFHSkMsUUFBUTs7Ozt3QkFKbEJGLENBQUMsQ0FBQ0csY0FBYyxFQUFFLENBQUM7d0JBQ2JGLFFBQVEsR0FBR1Ysd0VBQWtCLENBQUNJLE9BQU8sQ0FBQyxDQUFDOzs7K0JBR2xCSCxzRUFBb0IsRUFBRTs7d0JBQXZDVSxRQUFRLFlBQStCOzsrQkFDdkNELFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxVQUFVLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDOzRCQUNyQ0MsSUFBSSxFQUFFUCxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNqQk4sS0FBSyxFQUFFSixrRUFBZ0IsQ0FBQ0ksS0FBSyxFQUFFLE9BQU8sQ0FBQzt5QkFDMUMsQ0FBQzs7d0JBQ05FLE1BQU0sQ0FBQ2MsWUFBWSxDQUFFLGFBQVcsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7OztTQU9yQztlQWpCY2IsYUFBWTs7SUFtQjdCLHFCQUNFO2tCQUNBLDRFQUFDWixtREFBSTtZQUFDMEIsUUFBUSxFQUFFZCxZQUFZOzs4QkFDeEIsOERBQUNaLHlEQUFVOztzQ0FDUCw4REFBQzRCLE9BQUs7c0NBQUMsc0JBQW9COzs7OztnQ0FBUTtzQ0FDbkMsOERBQUMxQixvREFBSzs0QkFDTjBCLEtBQUssRUFBQyxPQUFPOzRCQUNiQyxhQUFhLEVBQUMsT0FBTzs0QkFDckJDLFFBQVEsRUFBRSxTQUFDakIsQ0FBQzt1Q0FBS0gsUUFBUSxDQUFDRyxDQUFDLENBQUNrQixNQUFNLENBQUN0QixLQUFLLENBQUM7NkJBQUE7Ozs7O2dDQUN2Qzs7Ozs7O3dCQUNPOzhCQUNiLDhEQUFDUixxREFBTTtvQkFBQytCLE9BQU87OEJBQUMsYUFFaEI7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ047cUJBQ0osQ0FDSjtDQUNGO0dBM0NRekIsY0FBYzs7UUFHSkQsa0RBQVM7OztBQUhuQkMsS0FBQUEsY0FBYztBQTZDdkIsK0RBQWVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGluZGl2aWR1YWxDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9pbmRpdmlkdWFsQ2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7IFxuXG5mdW5jdGlvbiBDb250cmlidXRlRm9ybSh7YWRkcmVzc30pIHtcblxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhhZGRyZXNzKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBpbmRpdmlkdWFsQ2FtcGFpZ24oYWRkcmVzcyk7IFxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7IFxuICAgICAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sIFxuICAgICAgICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCAnZXRoZXInKVxuICAgICAgICAgICAgfSkgXG4gICAgICAgIHJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvYClcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5cbiAgICAgICAgICAgIENvbnRyaWJ1dGUhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImluZGl2aWR1YWxDYW1wYWlnbiIsIndlYjMiLCJ1c2VSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsImFkZHJlc3MiLCJ2YWx1ZSIsInNldFZhbHVlIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJvblN1Ym1pdCIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n"));

/***/ })

});