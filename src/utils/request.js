import { token } from '../js/redux/actions';

const request = async (url, method, loadData) => {
  loadData({ loading: true });
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      loadData({ loading: false });
      throw Error(response.statusText);
    }
    try {
      const result = await response.json();
      loadData({ loading: false });
      return result.data;
    } catch (e) {
      loadData({ data: e, loading: false });
      return e;
    }
  } catch (e) {
    loadData({ loading: false });
    throw Error(e.Error);
  }
};

export default request;
