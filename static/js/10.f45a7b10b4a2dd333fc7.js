webpackJsonp([10],{740:function(t,e,i){function a(t){i(923)}var o=i(4)(i(799),i(969),a,null,null);t.exports=o.exports},799:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(21),o=i.n(a);e.default={data:function(){return{goodsIds:[],goodsList:[],freightList:[],loading:!1,dialogForm:!1,batchType:"",batchForm:{begin:"",end:"",target:"",replace:"",freightTemplateId:"",type:"",weight_1:"",weight_2:"",packageLength:"",packageWidth:"",packageHeight:"",price:"",marketPrice:""}}},computed:{getFormTitle:function(){var t="";switch(this.batchType){case"name":t="标题";break;case"weight":t="包装重量";break;case"size":t="包装尺寸";break;case"freight":t="运费模板";break;case"price":t="价格"}return t}},methods:{getGoodsList:function(){var t=this;this.loading=!0,this.axios.post("/proxy/fv/supplier/goods.php?act=listGoodsInfo",{body:{goods_id:this.goodsIds.join(",")}}).then(function(e){t.loading=!1;var i=e.data;"10000"==i.head.code&&(t.goodsList=i.body.rows)})},getfreightList:function(){var t=this,e={pager:{page:1,pageSize:1e3,isSort:!0,order:"desc",sort:"create_time"}};this.axios.post("/proxy/freight/api/template/list",{body:e}).then(function(e){var i=e.data;if("10000"==i.head.code){var a=JSON.parse(o()(i.body.rows)),n=[];for(var s in a)"0"!=a[s].supplierId&&n.push(a[s]);t.freightList=n}})},formatNumber:function(t,e){isNaN(parseFloat(this.batchForm[t]))?this.batchForm[t]="":(this.batchForm[t]="price"!=t&&"weight_2"!=t&&"marketPrice"!=t?Math.abs(parseFloat(this.batchForm[t]).toFixed(e)):parseFloat(this.batchForm[t]).toFixed(e),"weight_1"!=t&&"weight_2"!=t||0!=parseFloat(this.batchForm[t])||(this.batchForm[t]=""))},batch:function(t){this.batchForm={begin:"",end:"",target:"",replace:"",freightTemplateId:"",type:"",weight_1:"",weight_2:"",packageLength:"",packageWidth:"",packageHeight:"",price:"",marketPrice:""},this.batchType=t,this.dialogForm=!0},submit:function(){var t=this,e="",i=JSON.parse(o()(this.batchForm));switch(i.goodsIds=this.goodsIds,this.batchType){case"freight":e="/proxy/goods/api/goods/batch/template";break;case"size":e="/proxy/goods/api/goods/batch/size",i.packageLength=10*parseFloat(i.packageLength),i.packageWidth=10*parseFloat(i.packageWidth),i.packageHeight=10*parseFloat(i.packageHeight);break;case"weight":e="/proxy/goods/api/goods/batch/weight",1==i.type?i.weight=1e3*parseFloat(i.weight_1):i.weight=1e3*parseFloat(i.weight_2);break;case"price":e="/proxy/goods/api/goods/batch/price",i.price=100*parseFloat(i.price),i.marketPrice=100*parseFloat(i.marketPrice)}this.axios.post(e,{body:i}).then(function(e){var i=e.data;if("10000"==i.head.code&&(t.$message({message:"修改成功",type:"success"}),t.dialogForm=!1,t.getGoodsList(),i.body&&i.body.errorMsg&&i.body.errorMsg.length>0)){var a=i.body.errorMsg,o=t.$createElement,n=a.map(function(t){return o("p",null,t)});t.$msgbox({title:"提示",confirmButtonText:"确定",cancelButtonText:"取消",message:o("div",null,n)})}})}},created:function(){this.goodsIds=JSON.parse(sessionStorage.getItem("batch")).gids,this.getGoodsList(),this.getfreightList()}}},876:function(t,e,i){e=t.exports=i(728)(!0),e.push([t.i,'table,tbody,td,th,thead,tr{margin:0;padding:0}.goods-main,.wrap{height:100%}.wrap{overflow:hidden}.table-box{height:100%;overflow-y:auto}.table{border-collapse:collapse;width:95%;margin:30px auto;border:1px solid #ccc}.table caption{text-align:left;margin-bottom:20px;color:#222;font-size:16px}.table caption .tip{color:#fa443f;margin-left:25px;font-size:14px}.table .edit{color:#20a0ff;text-decoration:underline;cursor:pointer;margin-left:4px}.table td,.table th{text-align:left;padding:10px;line-height:1.42857143;vertical-align:top;border-bottom:1px solid #ccc;color:#666;font-weight:400;font-size:14px}.table td .icon-yuan,.table th .icon-yuan{color:#666;font-size:22px;display:inline-block;vertical-align:middle}.table td .icon-shou,.table th .icon-shou{color:#20a0ff;font-size:22px;display:inline-block;vertical-align:middle}.table td .icon-help,.table th .icon-help{margin-left:6px;vertical-align:middle;display:inline-block;color:#bbd99a;cursor:pointer}.table td .size,.table th .size{color:#000}.table td .goods-info,.table th .goods-info{padding-left:100px;position:relative;min-height:90px}.table td .goods-info .img,.table th .goods-info .img{position:absolute;top:0;left:0;border:1px solid #ccc;border-radius:8px;padding:5px}.table td .goods-info .img:after,.table th .goods-info .img:after{width:0;display:inline-block;height:100%;content:"";vertical-align:middle}.table td .goods-info .img img,.table th .goods-info .img img{width:80px;height:80px;border-radius:8px;display:inline-block;vertical-align:middle}.el-input--small{width:150px;margin-right:5px}.form-weight .item{margin-bottom:20px}.form-weight .item .el-input--small{margin-left:10px}.el-message-box__message p{margin:0;line-height:1;margin-bottom:15px}.el-message-box{width:750px}.el-message-box__message{max-height:400px;overflow-y:auto}.dialog-footer{text-align:center}.form-price .tip,.form-weight .tip{color:#ccc}.el-form-item{margin-bottom:0}',"",{version:3,sources:["D:/mywebstorm/admin-sys/src/components/sys/goods/goods-batchEdit.vue"],names:[],mappings:"AACA,2BAME,SAAU,AACV,SAAW,CACZ,AAID,kBAFE,WAAa,CAKd,AAHD,MAEE,eAAiB,CAClB,AACD,WACE,YAAa,AACb,eAAiB,CAClB,AACD,OACE,yBAA0B,AAC1B,UAAW,AACX,iBAAkB,AAClB,qBAAuB,CACxB,AACD,eACE,gBAAiB,AACjB,mBAAoB,AACpB,WAAY,AACZ,cAAgB,CACjB,AACD,oBACE,cAAe,AACf,iBAAkB,AAClB,cAAgB,CACjB,AACD,aACE,cAAe,AACf,0BAA2B,AAC3B,eAAgB,AAChB,eAAiB,CAClB,AACD,oBAEE,gBAAiB,AACjB,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,6BAA8B,AAC9B,WAAY,AACZ,gBAAoB,AACpB,cAAgB,CACjB,AACD,0CAEE,WAAY,AACZ,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,0CAEE,cAAe,AACf,eAAgB,AAChB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,0CAEE,gBAAiB,AACjB,sBAAuB,AACvB,qBAAsB,AACtB,cAAe,AACf,cAAgB,CACjB,AACD,gCAEE,UAAY,CACb,AACD,4CAEE,mBAAoB,AACpB,kBAAmB,AACnB,eAAiB,CAClB,AACD,sDAEE,kBAAmB,AACnB,MAAS,AACT,OAAU,AACV,sBAAuB,AACvB,kBAAmB,AACnB,WAAa,CACd,AACD,kEAEE,QAAS,AACT,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,qBAAuB,CACxB,AACD,8DAEE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,iBACE,YAAa,AACb,gBAAkB,CACnB,AACD,mBACE,kBAAoB,CACrB,AACD,oCACE,gBAAkB,CACnB,AACD,2BACE,SAAU,AACV,cAAe,AACf,kBAAoB,CACrB,AACD,gBACE,WAAa,CACd,AACD,yBACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,eACE,iBAAmB,CACpB,AACD,mCAEE,UAAY,CACb,AACD,cACE,eAAmB,CACpB",file:"goods-batchEdit.vue",sourcesContent:['\ntable,\ntd,\ntr,\nthead,\ntbody,\nth {\n  margin: 0;\n  padding: 0;\n}\n.goods-main {\n  height: 100%;\n}\n.wrap {\n  height: 100%;\n  overflow: hidden;\n}\n.table-box {\n  height: 100%;\n  overflow-y: auto;\n}\n.table {\n  border-collapse: collapse;\n  width: 95%;\n  margin: 30px auto;\n  border: 1px solid #ccc;\n}\n.table caption {\n  text-align: left;\n  margin-bottom: 20px;\n  color: #222;\n  font-size: 16px;\n}\n.table caption .tip {\n  color: #FA443F;\n  margin-left: 25px;\n  font-size: 14px;\n}\n.table .edit {\n  color: #20A0FF;\n  text-decoration: underline;\n  cursor: pointer;\n  margin-left: 4px;\n}\n.table td,\n.table th {\n  text-align: left;\n  padding: 10px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-bottom: 1px solid #ccc;\n  color: #666;\n  font-weight: normal;\n  font-size: 14px;\n}\n.table td .icon-yuan,\n.table th .icon-yuan {\n  color: #666;\n  font-size: 22px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.table td .icon-shou,\n.table th .icon-shou {\n  color: #20A0FF;\n  font-size: 22px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.table td .icon-help,\n.table th .icon-help {\n  margin-left: 6px;\n  vertical-align: middle;\n  display: inline-block;\n  color: #BBD99A;\n  cursor: pointer;\n}\n.table td .size,\n.table th .size {\n  color: #000;\n}\n.table td .goods-info,\n.table th .goods-info {\n  padding-left: 100px;\n  position: relative;\n  min-height: 90px;\n}\n.table td .goods-info .img,\n.table th .goods-info .img {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  padding: 5px;\n}\n.table td .goods-info .img::after,\n.table th .goods-info .img::after {\n  width: 0;\n  display: inline-block;\n  height: 100%;\n  content: "";\n  vertical-align: middle;\n}\n.table td .goods-info .img img,\n.table th .goods-info .img img {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.el-input--small {\n  width: 150px;\n  margin-right: 5px;\n}\n.form-weight .item {\n  margin-bottom: 20px;\n}\n.form-weight .item .el-input--small {\n  margin-left: 10px;\n}\n.el-message-box__message p {\n  margin: 0;\n  line-height: 1;\n  margin-bottom: 15px;\n}\n.el-message-box {\n  width: 750px;\n}\n.el-message-box__message {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.dialog-footer {\n  text-align: center;\n}\n.form-price .tip,\n.form-weight .tip {\n  color: #ccc;\n}\n.el-form-item {\n  margin-bottom: 0px;\n}\n'],sourceRoot:""}])},923:function(t,e,i){var a=i(876);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(729)("75b57c1c",a,!0)},969:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"table-box"},[i("table",{staticClass:"table"},[t._m(0),t._v(" "),i("thead",[i("tr",[i("th",[t._v("产品标题 ")]),t._v(" "),i("th",{attrs:{width:"150"}},[t._v("包装重量 "),i("span",{staticClass:"edit",on:{click:function(e){t.batch("weight")}}},[t._v("修改")]),t._v(" "),i("i",{staticClass:"iconfont icon-help",attrs:{title:"准确填写产品包装重量，避免因填写错误而造成的运费损失和交易性降低。重量的修改影响运费的计算,如最新修改的运费未生效时，生成订单对应的运费还是原来修改前的运费。"}})]),t._v(" "),i("th",{attrs:{width:"150"}},[t._v("包装尺寸 "),i("span",{staticClass:"edit",on:{click:function(e){t.batch("size")}}},[t._v("修改")]),i("i",{staticClass:"iconfont icon-help",attrs:{title:"准确填写产品包装尺寸，避免因填写错误而造成的运费损失和交易性降低。尺寸的修改影响运费的计算，如最新修改的运费未生效时，生成订单对应的运费还是原来修改前的运费。"}})]),t._v(" "),i("th",{attrs:{width:"250"}},[t._v("运费模板 "),i("span",{staticClass:"edit",on:{click:function(e){t.batch("freight")}}},[t._v("修改")]),i("i",{staticClass:"iconfont icon-help",attrs:{title:"运费的设置和更改是在每天凌晨生效，当关联了新的运费模板而运费未生效时，生成订单对应的运费还是原来修改前的运费，运费生效后生成的订单才是最新的运费。"}})]),t._v(" "),i("th",{attrs:{width:"180"}},[t._v("原价|售价"),i("span",{staticClass:"edit",on:{click:function(e){t.batch("price")}}},[t._v("修改")])]),t._v(" "),i("th",{attrs:{width:"180"}},[t._v("SKU售价区间(USD)")])])]),t._v(" "),i("tbody",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},t._l(t.goodsList,function(e){return i("tr",{key:e.goods_id},[i("td",[i("div",{staticClass:"goods-info"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.cover_image}})]),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(e.goods_name))])])]),t._v(" "),i("td",[t._v(t._s(e.goods_weight.toFixed(3))+"千克")]),t._v(" "),i("td",[i("div",{staticClass:"size"},[i("div",[i("span",[t._v("长:")]),t._v(t._s(e.package_length)+"厘米")]),t._v(" "),i("div",[i("span",[t._v("宽:")]),t._v(t._s(e.package_width)+"厘米")]),t._v(" "),i("div",[i("span",[t._v("高:")]),t._v(t._s(e.package_height)+"厘米")])])]),t._v(" "),i("td",[i("div",{staticClass:"freight"},[t._v(t._s(e.template_title)+"(发货地:"+t._s(e.country)+")")])]),t._v(" "),i("td",[i("div",{staticClass:"price"},[i("i",{staticClass:"iconfont icon-yuan"}),t._v(t._s(e.market_price?parseFloat(e.market_price).toFixed(2):""))]),t._v(" "),i("div",{staticClass:"price"},[i("i",{staticClass:"iconfont icon-shou"}),t._v(t._s(e.shop_price?parseFloat(e.shop_price).toFixed(2):""))])]),t._v(" "),i("td",[i("div",{staticClass:"price"},[t._v("\n                             "+t._s(e.min_price?parseFloat(e.min_price).toFixed(2):"")+"- "+t._s(e.max_price?parseFloat(e.max_price).toFixed(2):"")+"\n                        ")])])])}))]),t._v(" "),i("el-dialog",{attrs:{title:"批量修改"+t.getFormTitle,visible:t.dialogForm,size:"tiny"},on:{"update:visible":function(e){t.dialogForm=e}}},[i("el-form",{ref:"batchForm",attrs:{model:t.batchForm,"label-width":"100px"}},["weight"==t.batchType?i("div",{staticClass:"form-weight"},[i("div",{staticClass:"item"},[i("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.batchForm.type,callback:function(e){t.$set(t.batchForm,"type",e)},expression:"batchForm.type"}},[t._v("批量修改为")]),t._v(" "),i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("weight_1",3)}},model:{value:t.batchForm.weight_1,callback:function(e){t.$set(t.batchForm,"weight_1",e)},expression:"batchForm.weight_1"}}),t._v("千克\n                  ")],1),t._v(" "),i("div",{staticClass:"item"},[i("el-radio",{staticClass:"radio",attrs:{label:"2"},model:{value:t.batchForm.type,callback:function(e){t.$set(t.batchForm,"type",e)},expression:"batchForm.type"}},[t._v("按重量增加")]),t._v(" "),i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("weight_2",3)}},model:{value:t.batchForm.weight_2,callback:function(e){t.$set(t.batchForm,"weight_2",e)},expression:"batchForm.weight_2"}}),t._v("千克\n                      "),i("div",{staticClass:"tip",staticStyle:{"margin-left":"100px","margin-top":"15px"}},[t._v("提示：如果减少，可以输入负数")])],1)]):t._e(),t._v(" "),"size"==t.batchType?i("div",{staticClass:"form-size"},[i("el-form-item",{attrs:{label:"长"}},[i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("packageLength",0)}},model:{value:t.batchForm.packageLength,callback:function(e){t.$set(t.batchForm,"packageLength",e)},expression:"batchForm.packageLength"}}),t._v("厘米\n                  ")],1),t._v(" "),i("el-form-item",{attrs:{label:"宽"}},[i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("packageWidth",0)}},model:{value:t.batchForm.packageWidth,callback:function(e){t.$set(t.batchForm,"packageWidth",e)},expression:"batchForm.packageWidth"}}),t._v("厘米\n                  ")],1),t._v(" "),i("el-form-item",{attrs:{label:"高"}},[i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("packageHeight",0)}},model:{value:t.batchForm.packageHeight,callback:function(e){t.$set(t.batchForm,"packageHeight",e)},expression:"batchForm.packageHeight"}}),t._v("厘米\n                  ")],1)],1):t._e(),t._v(" "),"freight"==t.batchType?i("div",{staticClass:"form-freight"},[i("el-form-item",{attrs:{label:"运费模板"}},[i("el-select",{attrs:{clearable:"",filterable:"",size:"small"},model:{value:t.batchForm.freightTemplateId,callback:function(e){t.$set(t.batchForm,"freightTemplateId",e)},expression:"batchForm.freightTemplateId"}},t._l(t.freightList,function(t){return i("el-option",{key:t.id,attrs:{label:t.templateTitle+"("+t.countryName+")",value:t.id}})}))],1)],1):t._e(),t._v(" "),"price"==t.batchType?i("div",{staticClass:"form-price"},[i("el-form-item",{attrs:{label:"原价价格增加"}},[i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("marketPrice",2)}},model:{value:t.batchForm.marketPrice,callback:function(e){t.$set(t.batchForm,"marketPrice",e)},expression:"batchForm.marketPrice"}}),t._v("USD\n                  ")],1),t._v(" "),i("el-form-item",{attrs:{label:"基础价格增加"}},[i("el-input",{attrs:{size:"small"},on:{blur:function(e){t.formatNumber("price",2)}},model:{value:t.batchForm.price,callback:function(e){t.$set(t.batchForm,"price",e)},expression:"batchForm.price"}}),t._v("USD\n                      "),i("div",{staticClass:"tip"},[t._v("提示：如果减少，可以输入负数")])],1)],1):t._e()]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogForm=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("caption",[t._v("商品信息批量修改 "),i("span",{staticClass:"tip"},[t._v("注：返回商品列表时请刷新页面查看最新商品数据！")])])}]}}});
//# sourceMappingURL=10.f45a7b10b4a2dd333fc7.js.map