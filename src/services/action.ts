import { request } from '@/utils/request';

/**
 * 发起GET请求
 * @description 发起GET网络请求
 * @param {Object} params 请求数据
 */
export const get = async (params:any) => {
	let url = params.url;
	let data = params.data;

	var res = await request(url,{
		method:'GET',
		data:data
	});
	
	return res;
}

/**
 * 发起POST请求
 * @description 发起POST网络请求
 * @param {Object} params 请求数据
 */
export const post = async (params:any) => {
	let url = params.url;
	let data = params.data;

	var res = await request(url,{
		method:'POST',
		data:data
	});
	
	return res;
}