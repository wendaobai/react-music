webpackJsonp([11],{737:function(t,e,i){function a(t){i(916)}var n=i(4)(i(796),i(963),a,"data-v-54cf9076",null);t.exports=n.exports},796:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(21),n=i.n(a),r=i(22),o=i.n(r);e.default={data:function(){return{loading:!1,searchForm:{pager:{page:1,pageSize:1e3,isSort:!0,order:"desc",sort:"create_time"}},freightList:[],total:""}},filters:{dateFormat:function(t){return t?o()("yyyy-MM-dd hh:mm",new Date(t)):""}},methods:{getfreightList:function(){var t=this;this.loading=!0,this.axios.post("/proxy/freight/api/template/list",{body:this.searchForm}).then(function(e){t.loading=!1;var i=e.data;if("10000"==i.head.code){var a=JSON.parse(n()(i.body.rows)),r=[];for(var o in a)"0"!=a[o].supplierId&&r.push(a[o]);t.freightList=r}})},handleCurrentChange:function(t){this.searchForm.pageNum=t,this.getfreightList()},handleSelectionChange:function(t){},doAction:function(t,e,i){var a=this;switch(t){case"add":this.$router.push("/vendor/freight/add");break;case"edit":this.$router.push("/vendor/freight/"+e+"?supplierId="+i);break;case"delete":this.$confirm("您确定要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.axios.post("/proxy/freight/api/template/remove",{body:{id:e}}).then(function(t){"10000"==t.data.head.code&&(a.$message({type:"success",message:"删除成功!"}),a.getfreightList())})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}}},created:function(){this.getfreightList()}}},869:function(t,e,i){e=t.exports=i(728)(!0),e.push([t.i,".wrap-freight-list[data-v-54cf9076]{padding-right:15px}","",{version:3,sources:["D:/mywebstorm/admin-sys/src/components/sys/goods/freightTemplate/freight-list.vue"],names:[],mappings:"AACA,oCACE,kBAAoB,CACrB",file:"freight-list.vue",sourcesContent:["\n.wrap-freight-list[data-v-54cf9076] {\n  padding-right: 15px;\n}\n"],sourceRoot:""}])},916:function(t,e,i){var a=i(869);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(729)("39978530",a,!0)},963:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap wrap-freight-list"},[i("div",{staticClass:"nav-bar clear-fix"},[i("el-breadcrumb",{staticClass:"fl-l",attrs:{separator:">"}},[i("el-breadcrumb-item",[t._v("运费模板管理")]),t._v(" "),i("el-breadcrumb-item",[t._v("运费模板列表")])],1),t._v(" "),i("div",{staticClass:"add-menu fl-r"},[i("el-button",{staticClass:"add-menu-btn",attrs:{type:"warning",size:"mini"},on:{click:function(e){t.doAction("add")}}},[i("i",{staticClass:"iconfont icon-add"}),t._v("新增运费模板")])],1)],1),t._v(" "),i("div",{staticClass:"batch"}),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"report goods-list",staticStyle:{width:"100%"},attrs:{data:t.freightList,stripe:"","max-height":"520",border:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{type:"index",width:"70"}}),t._v(" "),i("el-table-column",{attrs:{label:"模板名称",prop:"templateTitle",align:"center","min-width":"150","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"仓库名称",prop:"warehouseName",align:"center","min-width":"150","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"创建时间",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createTime))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"最后修改时间",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.updateTime))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"left","min-width":"150","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.doAction("edit",e.row.id,e.row.supplierId)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini",disabled:"0"==e.row.supplierId},on:{click:function(i){t.doAction("delete",e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),Math.ceil(t.total/t.myConfig.pageRows)>1?i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":t.searchForm.pageNum,"page-size":t.searchForm.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.c76bcdf9d620dc3b4f53.js.map