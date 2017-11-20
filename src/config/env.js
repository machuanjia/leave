/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: api地址
 * imgBaseUrl: img地址
 *
 */

let baseUrl = '';
let imgBaseUrl = 'http://images.cangdu.org/';

// if (process.env.NODE_ENV == 'development') {
//
// }else if(process.env.NODE_ENV == 'production'){
//
// }

export {
	baseUrl,
	imgBaseUrl,
}
