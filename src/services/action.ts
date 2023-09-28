import { request } from '@/utils/request';

// 发起GET请求
export const get = async(params: any) =>{
  let url = params.url;
  let data = params.data;
  var res = await request(url, {
    method: 'GET',
    data: data
  });

  return res;
}

// 发起POST请求
export const post = async(params: any) =>{
  let url = params.url;
  let data = params.data;

  var res = await request(url, {
    method: 'POST',
    data: data
  });

  return res;
}