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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_individualCampaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/individualCampaign */ \"./ethereum/individualCampaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ContributeForm(param) {\n    var address = param.address;\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var campaign = (0,_ethereum_individualCampaign__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address);\n        try {} catch (error) {}\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    console.log(address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Amount to Contribute\"\n                        }, void 0, false, {\n                            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                            label: \"ether\",\n                            labelPosition: \"right\",\n                            onChange: function(e) {\n                                return setValue(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    primary: true,\n                    children: \"Contribute!\"\n                }, void 0, false, {\n                    fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(ContributeForm, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDMkI7QUFDRDtBQUM1Qjs7QUFJcEMsU0FBU1EsY0FBYyxDQUFDLEtBQVMsRUFBRTtRQUFYLE9BQVEsR0FBUixLQUFTLENBQVJDLE9BQU87UUFLbkJDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxDQUFDQyxDQUFDLEVBQUU7UUFDckJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBTUMsUUFBUSxHQUFHUCx3RUFBa0IsQ0FBQ0csT0FBTyxDQUFDO1FBRTVDLElBQUksRUFFSCxDQUFDLE9BQU9LLEtBQUssRUFBRSxFQUVmO0tBR0o7O0lBZEQsSUFBMEJiLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JjLEtBQUssR0FBY2QsR0FBWSxHQUExQixFQUFFZSxRQUFRLEdBQUlmLEdBQVksR0FBaEI7SUFDdEJnQixPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDLENBQUM7SUFldkIscUJBQ0U7a0JBQ0EsNEVBQUNQLG1EQUFJO1lBQUNpQixRQUFRLEVBQUVULFlBQVk7OzhCQUN4Qiw4REFBQ1IseURBQVU7O3NDQUNQLDhEQUFDbUIsT0FBSztzQ0FBQyxzQkFBb0I7Ozs7O2dDQUFRO3NDQUNuQyw4REFBQ2pCLG9EQUFLOzRCQUNOaUIsS0FBSyxFQUFDLE9BQU87NEJBQ2JDLGFBQWEsRUFBQyxPQUFPOzRCQUNyQkMsUUFBUSxFQUFFLFNBQUNaLENBQUM7dUNBQUtLLFFBQVEsQ0FBQ0wsQ0FBQyxDQUFDYSxNQUFNLENBQUNULEtBQUssQ0FBQzs2QkFBQTs7Ozs7Z0NBQ3ZDOzs7Ozs7d0JBQ087OEJBQ2IsOERBQUNaLHFEQUFNO29CQUFDc0IsT0FBTzs4QkFBQyxhQUVoQjs7Ozs7d0JBQVM7Ozs7OztnQkFDTjtxQkFDSixDQUNKO0NBQ0Y7R0FuQ1FqQixjQUFjO0FBQWRBLEtBQUFBLGNBQWM7QUFxQ3ZCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanM/ZTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBpbmRpdmlkdWFsQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vaW5kaXZpZHVhbENhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5cblxuZnVuY3Rpb24gQ29udHJpYnV0ZUZvcm0oe2FkZHJlc3N9KSB7XG5cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IGluZGl2aWR1YWxDYW1wYWlnbihhZGRyZXNzKTsgXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5cbiAgICAgICAgICAgIENvbnRyaWJ1dGUhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImluZGl2aWR1YWxDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsImVycm9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n"));

/***/ })

});