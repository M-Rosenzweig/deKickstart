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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_individualCampaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/individualCampaign */ \"./ethereum/individualCampaign.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ContributeForm(param) {\n    var address = param.address;\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        var campaign = (0,_ethereum_individualCampaign__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    console.log(address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Amount to Contribute\"\n                        }, void 0, false, {\n                            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                            label: \"ether\",\n                            labelPosition: \"right\",\n                            onChange: function(e) {\n                                return setValue(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    primary: true,\n                    children: \"Contribute!\"\n                }, void 0, false, {\n                    fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/components/ContributeForm.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(ContributeForm, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFzQztBQUMyQjtBQUNEOztBQUloRSxTQUFTTyxjQUFjLENBQUMsS0FBUyxFQUFFO1FBQVgsT0FBUSxHQUFSLEtBQVMsQ0FBUkMsT0FBTztRQUtuQkMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBRTtRQUNyQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUVuQixJQUFNQyxRQUFRLEdBQUdOLHdFQUFrQixDQUFDRSxPQUFPLENBQUM7S0FHL0M7O0lBVEQsSUFBMEJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JZLEtBQUssR0FBY1osR0FBWSxHQUExQixFQUFFYSxRQUFRLEdBQUliLEdBQVksR0FBaEI7SUFDdEJjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixPQUFPLENBQUMsQ0FBQztJQVV2QixxQkFDRTtrQkFDQSw0RUFBQ04sbURBQUk7WUFBQ2UsUUFBUSxFQUFFUixZQUFZOzs4QkFDeEIsOERBQUNQLHlEQUFVOztzQ0FDUCw4REFBQ2lCLE9BQUs7c0NBQUMsc0JBQW9COzs7OztnQ0FBUTtzQ0FDbkMsOERBQUNmLG9EQUFLOzRCQUNOZSxLQUFLLEVBQUMsT0FBTzs0QkFDYkMsYUFBYSxFQUFDLE9BQU87NEJBQ3JCQyxRQUFRLEVBQUUsU0FBQ1gsQ0FBQzt1Q0FBS0ksUUFBUSxDQUFDSixDQUFDLENBQUNZLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDOzZCQUFBOzs7OztnQ0FDdkM7Ozs7Ozt3QkFDTzs4QkFDYiw4REFBQ1YscURBQU07b0JBQUNvQixPQUFPOzhCQUFDLGFBRWhCOzs7Ozt3QkFBUzs7Ozs7O2dCQUNOO3FCQUNKLENBQ0o7Q0FDRjtHQTlCUWhCLGNBQWM7QUFBZEEsS0FBQUEsY0FBYztBQWdDdkIsK0RBQWVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGluZGl2aWR1YWxDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9pbmRpdmlkdWFsQ2FtcGFpZ24nO1xuXG5cblxuZnVuY3Rpb24gQ29udHJpYnV0ZUZvcm0oe2FkZHJlc3N9KSB7XG5cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gaW5kaXZpZHVhbENhbXBhaWduKGFkZHJlc3MpXG5cblxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+XG4gICAgICAgICAgICBDb250cmlidXRlIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJpbmRpdmlkdWFsQ2FtcGFpZ24iLCJDb250cmlidXRlRm9ybSIsImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInZhbHVlIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJGaWVsZCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n"));

/***/ })

});