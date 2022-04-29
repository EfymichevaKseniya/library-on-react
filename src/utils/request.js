import { token } from '../js/redux/actions';

const request = async (url, method) => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }
  try {
    const result = await response.json();
    return result.data;
  } catch (e) {
    return e;
  }
};

export default request;
