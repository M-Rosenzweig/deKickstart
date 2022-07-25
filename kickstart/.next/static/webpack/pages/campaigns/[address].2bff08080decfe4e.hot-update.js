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

/***/ "./pages/campaigns/[address].js":
/*!**************************************!*\
  !*** ./pages/campaigns/[address].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nfunction ShowCampaignDetails(param) {\n    var summary = param.summary, address = param.address;\n    var _this = this;\n    // const router = useRouter();\n    // const { ethAddress } = router.query;\n    console.log(summary);\n    console.log(address);\n    var renderCards = function() {\n        var minimumContribution = summary.minimumContribution, balance = summary.balance, requestsCount = summary.requestsCount, contributerCount = summary.contributerCount, manager = summary.manager;\n        var items = [\n            {\n                header: manager,\n                meta: \"Address of Manager\",\n                description: \"The manager created this campaign and can create requests to withdraw money\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: \"Minimum Contribution (wei)\",\n                description: \"You must contribute at least this amount of wei to become an approver\"\n            },\n            {\n                header: requestsCount,\n                meta: \"Number of Requests\",\n                description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers.\"\n            },\n            {\n                header: contributerCount,\n                meta: \"Number of Approvers\",\n                description: \"Number of people who have already donated to this campaign.\"\n            },\n            {\n                header: web3.utils.fromWei(balance, \"ether\"),\n                meta: \"Campaign Balance (ether)\",\n                description: \"The balance is how much money this campaign has left to spend.\"\n            }, \n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card.Group, {\n            items: items\n        }, void 0, false, {\n            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/pages/campaigns/[address].js\",\n            lineNumber: 59,\n            columnNumber: 16\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Campaign: \"\n        }, void 0, false, {\n            fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/pages/campaigns/[address].js\",\n            lineNumber: 64,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/rosenvibes/solidity1/deKickstarter/kickstart/pages/campaigns/[address].js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_c = ShowCampaignDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowCampaignDetails);\nvar _c;\n$RefreshReg$(_c, \"ShowCampaignDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDRTtBQUNLO0FBSTdDLFNBQVNJLG1CQUFtQixDQUFDLEtBQWtCLEVBQUU7UUFBbkJDLE9BQU8sR0FBUixLQUFrQixDQUFqQkEsT0FBTyxFQUFFQyxPQUFPLEdBQWpCLEtBQWtCLENBQVJBLE9BQU87O0lBRTFDLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUNyQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxDQUFDO0lBRW5CLElBQU1HLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLElBQ0VDLG1CQUFtQixHQUtqQkwsT0FBTyxDQUxUSyxtQkFBbUIsRUFDbkJDLE9BQU8sR0FJTE4sT0FBTyxDQUpUTSxPQUFPLEVBQ1BDLGFBQWEsR0FHWFAsT0FBTyxDQUhUTyxhQUFhLEVBQ2JDLGdCQUFnQixHQUVkUixPQUFPLENBRlRRLGdCQUFnQixFQUNoQkMsT0FBTyxHQUNMVCxPQUFPLENBRFRTLE9BQU87UUFHVCxJQUFNQyxLQUFLLEdBQUc7WUFDWjtnQkFDRUMsTUFBTSxFQUFFRixPQUFPO2dCQUNmRyxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQkMsV0FBVyxFQUNULDZFQUE2RTtnQkFDL0VDLEtBQUssRUFBRTtvQkFDTEMsWUFBWSxFQUFFLFlBQVk7aUJBQzNCO2FBQ0Y7WUFDRDtnQkFDRUosTUFBTSxFQUFFTixtQkFBbUI7Z0JBQzNCTyxJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQ0MsV0FBVyxFQUNULHVFQUF1RTthQUMxRTtZQUNEO2dCQUNFRixNQUFNLEVBQUVKLGFBQWE7Z0JBQ3JCSyxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQkMsV0FBVyxFQUNULDhGQUE4RjthQUNqRztZQUNEO2dCQUNFRixNQUFNLEVBQUVILGdCQUFnQjtnQkFDeEJJLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCQyxXQUFXLEVBQ1QsNkRBQTZEO2FBQ2hFO1lBQ0Q7Z0JBQ0VGLE1BQU0sRUFBRUssSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ1osT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFDNUNNLElBQUksRUFBRSwwQkFBMEI7Z0JBQ2hDQyxXQUFXLEVBQ1QsZ0VBQWdFO2FBQ25FO1NBQ0Y7UUFFRCxxQkFBTyw4REFBQ00sSUFBSSxDQUFDQyxLQUFLO1lBQUNWLEtBQUssRUFBRUEsS0FBSzs7Ozs7aUJBQUksQ0FBQztLQUNyQztJQUVMLHFCQUNFLDhEQUFDWiwwREFBTTtrQkFDRCw0RUFBQ3VCLEdBQUM7c0JBQUMsWUFBVTs7Ozs7Z0JBQU07Ozs7O1lBQ2hCLENBRVY7Q0FDRjtBQTdEUXRCLEtBQUFBLG1CQUFtQjs7QUFpRjVCLCtEQUFlQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS5qcz84ZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGluZGl2aWR1YWxDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9pbmRpdmlkdWFsQ2FtcGFpZ24nO1xuXG5cbmZ1bmN0aW9uIFNob3dDYW1wYWlnbkRldGFpbHMoe3N1bW1hcnksIGFkZHJlc3N9KSB7XG5cbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zdCB7IGV0aEFkZHJlc3MgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcblxuICAgICAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICAgIGJhbGFuY2UsXG4gICAgICAgICAgcmVxdWVzdHNDb3VudCxcbiAgICAgICAgICBjb250cmlidXRlckNvdW50LFxuICAgICAgICAgIG1hbmFnZXIsXG4gICAgICAgIH0gPSBzdW1tYXJ5O1xuICAgIFxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5XCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBhbW91bnQgb2Ygd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxuICAgICAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMuXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXI6IGNvbnRyaWJ1dGVyQ291bnQsXG4gICAgICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBBcHByb3ZlcnNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxuICAgICAgICAgICAgbWV0YTogXCJDYW1wYWlnbiBCYWxhbmNlIChldGhlcilcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQuXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICBcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gICAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgICAgICA8cD5DYW1wYWlnbjoge308L3A+XG4gICAgPC9MYXlvdXQ+XG4gIFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkgeyBcbiAgY29uc3QgY2FtcGFpZ24gPSBpbmRpdmlkdWFsQ2FtcGFpZ24ocGFyYW1zLmFkZHJlc3MpO1xuICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcbiAgICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcbiAgICAgICAgY29udHJpYnV0ZXJDb3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcbiAgICAgIH0sXG4gICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FtcGFpZ25EZXRhaWxzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGF5b3V0IiwiU2hvd0NhbXBhaWduRGV0YWlscyIsInN1bW1hcnkiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInJlbmRlckNhcmRzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiY29udHJpYnV0ZXJDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsIkNhcmQiLCJHcm91cCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n"));

/***/ })

});