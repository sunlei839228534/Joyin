/* eslint-disable quotes */
import api from '@/api/api';


export default {
  projectList(parameter) {
    return api.get(`project`, parameter);
  },
  project(id) {
    return api.get(`project/${id}`);
  },
  projectUpdate(id, updateId) { // 返回项目详情
    return api.get(`project/${id}/update/${updateId}`);
  },
  projectPackages(id) {
    return api.get(`project/${id}/packages`);
  },
  commonCode(number) {
    return api.get(`common/code`, {
      phone: number,
    });
  },
  orderDetail() {
    api.post(`order/detail`, {
      phone: '12332',
      orderId: '12',
    });
  },
  order() {
    api.post(`order`, {
      projectId: '123123',
      packageId: '123123',
    });
  },
  orderPayment() {
    api.get(`order/payment/${123}`);
  },
  logistics() {
    api.get(`logistics`, {
      province: '上海',
      city: '上海',
      district: '上海',
      strict: '上海',
    });
  },

};
