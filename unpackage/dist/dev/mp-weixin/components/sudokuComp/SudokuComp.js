(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/sudokuComp/SudokuComp"],{

/***/ 75:
/*!***********************************************************************************!*\
  !*** C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SudokuComp.vue?vue&type=template&id=67cbd824& */ 76);
/* harmony import */ var _SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SudokuComp.vue?vue&type=script&lang=js& */ 78);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SudokuComp.vue?vue&type=style&index=0&lang=css& */ 81);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/sudokuComp/SudokuComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue?vue&type=template&id=67cbd824& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./SudokuComp.vue?vue&type=template&id=67cbd824& */ 77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_template_id_67cbd824___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 77:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue?vue&type=template&id=67cbd824& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function() {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-button/u-button */ "node-modules/uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 68))
    },
    uIcon: function() {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 83))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 78:
/*!************************************************************************************************************!*\
  !*** C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./SudokuComp.vue?vue&type=script&lang=js& */ 79);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 79:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = __webpack_require__(/*! vuex */ 12);







var _stack = _interopRequireDefault(__webpack_require__(/*! ./stack.js */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var Board = function Board() {__webpack_require__.e(/*! require.ensure | components/sudokuComp/Board/Board */ "components/sudokuComp/Board/Board").then((function () {return resolve(__webpack_require__(/*! ./Board/Board.vue */ 90));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var PlainNumSelcotr = function PlainNumSelcotr() {__webpack_require__.e(/*! require.ensure | components/sudokuComp/PlainNumSelector/PlainNumSelector */ "components/sudokuComp/PlainNumSelector/PlainNumSelector").then((function () {return resolve(__webpack_require__(/*! ./PlainNumSelector/PlainNumSelector.vue */ 97));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var SteerWheel = function SteerWheel() {__webpack_require__.e(/*! require.ensure | components/sudokuComp/SteerWheel/SteerWheel */ "components/sudokuComp/SteerWheel/SteerWheel").then((function () {return resolve(__webpack_require__(/*! ./SteerWheel/SteerWheel.vue */ 104));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


{
  props: {
    /*使用字符串常量模拟枚举类型，表示两种游戏模式NORMAL与PUZZLE。*/
    gameMode: {
      type: String,
      default: "NORMAL"
      // default: "PUZZLE",
    },

    /*接受一个9*9的二位数组，数组中每个元素在0~9之间，数组中的每个元素映射到数独游戏中的一个格子。
       //若gameMode是NORMAL，则使用0代表需要玩家填写。若gameMode是PUZZLE，则有且仅有一个Block（即一个3*3的宫格）全为0*/
    sudokuState: {
      type: Array,
      required: true } },

  //end of props

  data: function data() {
    return {
      displayMsg: "显示候选",
      offsetDisplayAutoControl: [],

      stack: _stack.default, //for revoke and withdraw
      pushFlag: true,

      //data 4 numselector
      initSelectorFlag: true,
      offsetAbleCellInfos: Array,
      showSelector: false,
      offset2BSelect: Array,
      offset2BDisplay: Array,
      currNum: Number,

      //data 4 wheel
      offsetMoveDir: String,
      emptySquareCoor: {
        i: 0,
        j: 0 },

      squareInfos: [
      [{
        squareNo: 0,
        squareRow: 0,
        squareCol: 0 },

      {
        squareNo: 1,
        squareRow: 0,
        squareCol: 1 },

      {
        squareNo: 2,
        squareRow: 0,
        squareCol: 2 }],


      [{
        squareNo: 3,
        squareRow: 1,
        squareCol: 0 },

      {
        squareNo: 4,
        squareRow: 1,
        squareCol: 1 },

      {
        squareNo: 5,
        squareRow: 1,
        squareCol: 2 }],


      [{
        squareNo: 6,
        squareRow: 2,
        squareCol: 0 },

      {
        squareNo: 7,
        squareRow: 2,
        squareCol: 1 },

      {
        squareNo: 8,
        squareRow: 2,
        squareCol: 2 }]],


      //end of squares


      //operation button style
      warningButtonStyle: {
        color: '#FFFFFF',
        backgroundColor: '#bd8577',
        fontSize: "40rpx" },

      infoButtonStyle: {
        color: '#7b5f5c',
        backgroundColor: '#eee8d2',
        fontSize: "40rpx" } };


  }, //end of data

  computed: _objectSpread(_objectSpread({},
  (0, _vuex.mapState)({
    hideDisplayFlag: function hideDisplayFlag(state) {return state.sudokuComp.hideDisplayFlag;},
    displayAutoControlState: function displayAutoControlState(state) {return state.sudokuComp.displayAutoControlState;} })),

  (0, _vuex.mapGetters)([
  // 'displayAutoControlState',
  'cellDisplayAutoControl',
  'cellNum2BDisplay',
  'cellNum2BSelect',

  'cellClick',
  'selectedCellCoordinate',
  'selectedCellCurrentNumber',
  'allAbleCellCurrentInfos',
  'oneDisableCellCoor',

  'currentSquareState',
  'currentSudokuState',

  'successFlag'])),


  //end of computed

  watch: {
    /**
            * @description watch selected cell coor, when a cell has been clicked
            * and part of reovoke/withdraw operation. handler will init selector 
            * and push info into stack for revoke and withdraw
            *
            */
    selectedCellCoordinate: {
      handler: function handler(newVal, oldVal) {
        var row = newVal.row;
        var col = newVal.col;
        var number = this.selectedCellCurrentNumber;

        if (this.cellClick) {
          this.initSelector(row, col, number);

          this.initSelectorFlag = true;
          this.recoverCellClick();
        }


        if (row === oldVal.row && col === oldVal.col) {
          console.log("at the same cell");
          this.pushFlag = true;
          return;
        }

        console.log("in watch: selectedCellCoordinate");
        console.log("pushFlag: ".concat(this.pushFlag, "  initSelectorFlag: ").concat(this.initSelectorFlag));

        if (this.initSelectorFlag) this.initSelector(row, col, number);

        if (this.pushFlag) {
          console.log("stack.push in selectedCellCoordinate");
          //stack push cel info for revoke
          var infoList = [];
          var info = {
            row: row,
            col: col,
            number: number };

          //if new coor is from stack then it should not be push into again
          infoList.push(info);
          this.compPush(infoList);
        }

        //recover
        this.pushFlag = true;
        this.initSelectorFlag = true;
        console.log("pushFlag: ".concat(this.pushFlag, "  initSelectorFlag: ").concat(this.initSelectorFlag));
        console.log("end watch");
      } },
    //end of selectedCell		

    displayAutoControlState: {
      handler: function handler(newVal, oldVal) {
        console.log("in watch: displayAutoControlState");
        this.offsetDisplayAutoControl = this.cellDisplayAutoControl(
        this.selectedCellCoordinate.row,
        this.selectedCellCoordinate.col);

        console.log(this.offsetDisplayAutoControl);
      },
      deep: true } },

  //end of watch

  beforeMount: function beforeMount() {

    if (this.hideDisplayFlag) {
      this.displayMsg = "显示候选";
    } else {
      this.displayMsg = "隐藏候选";
    }

    this.initSudokuState({
      gameMode: this.gameMode,
      sudokuState: this.sudokuState });


    var offsetSudokuState = this.currentSudokuState;
    this.offsetAbleCellInfos = this.allAbleCellCurrentInfos();
    this.offset2BSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currNum = 1;
    this.showSelector = false;

    if (this.gameMode === 'PUZZLE') {
      this.initSquareState({
        squareState: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]] });


      //find emptySquareCoor		
      var emptyFlag = true;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          emptyFlag = true;
          for (var row = 3 * i; row < 3 * (i + 1); row++) {
            for (var col = 3 * j; col < 3 * (j + 1); col++) {
              if (this.currentSudokuState[row][col].number !== 0) {
                emptyFlag = false;
                break;
              }
            }
            if (!emptyFlag) break;
          } //end of for in square
          if (emptyFlag) {
            this.emptySquareCoor = {
              i: i,
              j: j };

            break;
          }
        }
        if (emptyFlag) break;
      } //end of for
    } //end of if-else					
  }, //end of beforeMount()

  methods: _objectSpread(_objectSpread({

    setSelectedCellNumber: function setSelectedCellNumber(selectedNumber) {
      var info = {
        row: this.selectedCellCoordinate.row,
        col: this.selectedCellCoordinate.col,
        number: selectedNumber };

      var infoList = [];
      infoList.push(info);

      this.stepOperation(infoList);

      console.log("stack.push in setSelectedCellNumber");

      this.compPush(infoList);
      this.judgeSuccess();
    }, //end of setSelectedCellNumber			

    /**
     * @description just like player select 0 in numSelector
     */
    clearOneCell: function clearOneCell() {
      this.setSelectedCellNumber(0);
    },


    clearAllCell: function clearAllCell() {
      var beforeInfos = this.allAbleCellCurrentInfos();
      // console.log("in clearAllCell") ;
      // console.log(beforeInfos) ;

      this.compPush(beforeInfos);

      // this.clearAllSelectableCell();					
      var afterInfos = JSON.parse(JSON.stringify(beforeInfos));
      afterInfos.forEach(function (info) {
        info.number = 0;
      });


      // console.log(afterInfos) ;
      this.compPush(afterInfos);

      this.pushFlag = false;
      this.initSelectorFlag = false;
      this.showSelector = false;
      this.stepOperation(afterInfos);
    }, //end of clearAll

    /**
     * @description use the fore infoList in the stack to 
     * 
     */
    revoke: function revoke() {
      console.log("revoke");
      var infoList = this.stack.revoke();
      this.initSelectorFlag = true;
      this.pushFlag = false;
      this.stepOperation(infoList);
    }, //end of revoke()

    withdraw: function withdraw() {
      console.log("withdraw");
      this.initSelectorFlag = true;
      this.pushFlag = false;
      var infoList = this.stack.withdraw();
      this.stepOperation(infoList);
    }, //end of withdraw()

    /**
     * @param {Object} infoList
     * mutate CellNumber ByList and then 
     * deal with num selector correctly
     */
    stepOperation: function stepOperation(infoList) {
      if (!infoList) return;
      // console.log("in SudokuComp stepOperation")
      // console.log(infoList) ;
      this.mutateCellNumberByList(infoList);

      if (infoList.length === 1) {
        //select another cell / change cell number
        var info = infoList[0];
        this.mutateSelectedCellCoordinate({
          row: info.row,
          col: info.col });

        this.clickACell();
      } else {
        this.showSelector = false;
        this.pushFlag = false;
        this.initSelectorFlag = false;
        //only in clear all cell condition will getinto this branch		
        // this.mutateSelectedCellCoordinate({
        // 	row: -1,
        // 	col: -1,
        // })
        this.mutateSelectedCellCoordinate(this.oneDisableCellCoor());

        // this.showSelector = false ;
      }
    },

    setDisplay: function setDisplay() {

      console.log("in setDisplay");
      if (this.hideDisplayFlag) {
        this.mutateHideDisplayFlag(false);
        this.displayMsg = "隐藏候选";
      } else {
        this.mutateHideDisplayFlag(true);
        this.displayMsg = "显示候选";
      }
    }, //end of 


    /**
     * @description judgeSuccess when a cell number has change and tap the wheel
     */
    judgeSuccess: function judgeSuccess() {
      if (this.successFlag()) {
        console.log("you win the game!!!");
        this.$emit('gameOver');
      } else {
        console.log("The Game Draw");
      }
    },

    /**
        * @param {Object} payload {number, flag}
        */
    dealAutoControlChange: function dealAutoControlChange(payload) {
      console.log("in deal AutoControl change");
      console.log(payload);
      this.mutateDisplayAutoControlState({
        row: this.selectedCellCoordinate.row,
        col: this.selectedCellCoordinate.col,
        number: payload.number,
        autoFlag: payload.flag });

    },

    tapSteerWheel: function tapSteerWheel(direction) {
      //find the 2 squares to swap
      var emptySquareInfo = this.squareInfos[this.emptySquareCoor.i][this.emptySquareCoor.j];
      var row1 = emptySquareInfo.squareRow;
      var col1 = emptySquareInfo.squareCol;

      var deltaRow = 0;
      var deltaCol = 0;
      if (direction === "arrow-up") {
        if (row1 === 2) return;
        deltaRow = 1;
      } else
      if (direction === "arrow-down") {
        if (row1 === 0) return;
        deltaRow = -1;
      } else
      if (direction === "arrow-left") {
        if (col1 === 2) return;
        deltaCol = 1;
      } else
      if (direction === "arrow-right") {
        if (col1 === 0) return;
        deltaCol = -1;
      }

      var targetRow = row1 + deltaRow;
      var targetCol = col1 + deltaCol;

      var targetSquareCoor = {
        i: 0,
        j: 0 };


      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var info = this.squareInfos[i][j];
          if (info.squareRow === targetRow && info.squareCol === targetCol) {
            targetSquareCoor.i = i;
            targetSquareCoor.j = j;
            break;
          }
        }
      } //end of loop

      this.swapSquare(this.emptySquareCoor.i, this.emptySquareCoor.j, targetSquareCoor.i, targetSquareCoor.j);
      this.judgeSuccess();
    }, //end of tapSteerWheel

    swapSquare: function swapSquare(row1, col1, row2, col2) {

      //swap square coordinate in this.squareInfos
      var row = this.squareInfos[row1][col1].squareRow;
      this.squareInfos[row1][col1].squareRow = this.squareInfos[row2][col2].squareRow;
      this.squareInfos[row2][col2].squareRow = row;
      var col = this.squareInfos[row1][col1].squareCol;
      this.squareInfos[row1][col1].squareCol = this.squareInfos[row2][col2].squareCol;
      this.squareInfos[row2][col2].squareCol = col;


      this.mutateCurrentSudokuStateBySquare({
        squareInfo1: {
          squareRow: this.squareInfos[row1][col1].squareRow,
          squareCol: this.squareInfos[row1][col1].squareCol },

        squareInfo2: {
          squareRow: this.squareInfos[row2][col2].squareRow,
          squareCol: this.squareInfos[row2][col2].squareCol } });


    } },



  (0, _vuex.mapMutations)([
  'initSudokuState',
  'initSquareState',

  'mutateHideDisplayFlag',
  'mutateDisplayAutoControlState',

  'clickACell',
  'recoverCellClick',
  'mutateCellNumber',
  'mutateSelectedCellCoordinate',
  'mutateCellNumberByList',

  'mutateCurrentSquareState',
  'mutateCurrentSudokuStateBySquare'])), {}, {
    //end of mapMutations			

    /**
     * @description change props for numselector
     */
    initSelector: function initSelector(cellRow, cellCol, number) {
      console.log("initSelector");
      this.offsetDisplayAutoControl = this.cellDisplayAutoControl(cellRow, cellCol);
      console.log(this.offsetDisplayAutoControl);
      this.offset2BSelect = this.cellNum2BSelect(cellRow, cellCol);
      this.offset2BDisplay = this.cellNum2BDisplay(cellRow, cellCol);
      this.currNum = number;
      this.showSelector = true;
      // this.showSelector = false ;
      // for(let i = 0; i < this.offsetAbleCellInfos.length; i++){
      // 	let info = this.offsetAbleCellInfos[i] ;
      // 	if((info.row === cellRow) && (info.col === cellCol)){
      // 		this.showSelector = true ;
      // 		break; 
      // 	}
      // }//end loop
    },

    compPush: function compPush(newList) {
      //get oldList			
      console.log("in compPush");
      console.log(this.stack);
      // console.log(newList) ;				

      this.stack.revoke();
      var oldList = this.stack.withdraw();
      //if the stack can not revoke
      if (!oldList) {
        this.stack.push(newList);
        return;
      }



      var sameFlag = false;
      var x, y;
      if (newList.length === oldList.length) {
        sameFlag = true;
        for (var i = 0; i < newList.length; i++) {
          var newInfo = newList[i];
          var oldInfo = oldList[i];
          if (newInfo.row !== oldInfo.row ||
          newInfo.col !== oldInfo.col ||
          newInfo.number !== oldInfo.number) {
            sameFlag = false;
            x = oldInfo;
            y = newInfo;
            break;
          } //end if
        }
      } //end if

      console.log("same: ".concat(sameFlag));
      console.log(x);
      console.log(y);
      console.log(oldList);
      console.log(newList);
      if (!sameFlag) this.stack.push(newList);
    } //end of compPush
  }), //end of methods 


  components: {
    Board: Board,
    PlainNumSelcotr: PlainNumSelcotr,
    SteerWheel: SteerWheel }
  //end of components
};exports.default = _default;

/***/ }),

/***/ 81:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./SudokuComp.vue?vue&type=style&index=0&lang=css& */ 82);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_SudokuComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Dell/Desktop/Terminal-Project/components/sudokuComp/SudokuComp.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/sudokuComp/SudokuComp.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sudokuComp/SudokuComp-create-component',
    {
        'components/sudokuComp/SudokuComp-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(75))
        })
    },
    [['components/sudokuComp/SudokuComp-create-component']]
]);
