import Vue from 'vue'
//=============import======
import HeaderNav from './header_nav.vue'
import ChildrenNav from './children_nav.vue'
import LeftNav from './left_nav.vue'
import Crumb from './crumb.vue'
import TableColumnFilter from './table_column_filter.vue'
import dropToSelect from './drop_select.vue'

//============register===公共组件============
Vue.component('HeaderNav', HeaderNav)
Vue.component('ChildrenNav', ChildrenNav)
Vue.component('LeftNav', LeftNav)
Vue.component('Crumb', Crumb)
Vue.component('TableColumnFilter', TableColumnFilter)
Vue.component('dropToSelect', dropToSelect)

export default {
  HeaderNav,
  ChildrenNav,
  LeftNav,
  Crumb,
  TableColumnFilter,
  dropToSelect,
}