import config from "@/config/config"

// 发起网络请求
export const request = async (url: string, options: any) => {
	if (url.indexOf("http") == -1) {
		url = config.apiHost + url;
	}

	var token = uni.getStorageSync('token')
	if (!token) {
		token = ''
	}

	var res = await uni.request({
		url: url,
		data: options.data,
		method: options.method,
		header: {
			Authorization: `Bearer ${token}`
		}
	});

	return res.data;
}