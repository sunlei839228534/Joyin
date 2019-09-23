/* eslint-disable no-console */
import axios from 'axios';
import iView from 'iview';

export default {
  path() {
    const path = '/starmaker/admin';
    return path;
  },
  get(pageName, parm) {
    iView.LoadingBar.start();
    return axios({
      method: 'get',
      url: `${this.path()}/${pageName}`,
      params: parm,
    })
      .then((res) => {
        iView.LoadingBar.finish();
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        iView.LoadingBar.error();
      });
  },
  post(pageName, parm) {
    iView.LoadingBar.start();
    return axios({
      method: 'post',
      url: `${this.path()}/${pageName}`,
      data: parm,
    })
      .then((res) => {
        iView.LoadingBar.finish();
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        iView.LoadingBar.error();
      });
  },
};
