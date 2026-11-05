/**
 * API统一导出文件
 * 只提供核心工具，具体API请从对应模块导入
 */

import request from '@/utils/request'
// 导出request实例
export default request

// 从各模块导出API实例
export { authApi } from './auth/auth.js'
export { goodsApi, categoryApi, brandApi, specApi, statisticsApi as goodsStatisticsApi, attributeApi } from './goods/goods.js'
export { workflowApi, formApi } from './workflow/workflow.js'
export { settingApi } from './setting/setting.js'
export { aiApi } from './ai/ai.js'
export { crmApi } from './crm/crm.js'
export { orderApi } from './order/order.js'
export { seatApi, cartApi, searchHistoryApi, seatReservationApi } from './orderfood/index.js'
export { payApi } from './payment/pay.js'
export { supplierApi } from './supplier/supplier.js'
export { mallApi, pointsMallToolApi, liveActivityApi, liveProductAuditApi, liveAccountApi, topicCategoryApi, selectionListApi, moodManageApi, reviewManageApi } from './mall/mall.js'