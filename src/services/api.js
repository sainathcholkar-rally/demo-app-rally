import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import * as globalImportUrl from 'url';

const BASE_PATH = "http://localhost:9000"

export function login(userId) {
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
        throw new Error('Required parameter userId was null or undefined when calling isAdvantageEnabled.');
    }
    const localVarPath = `/demoServer/login/:userId`
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
    const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
    let baseOptions;
    const localVarRequestOptions = { method: 'POST', ...baseOptions };
    const localVarHeaderParameter = {};
    const localVarQueryParameter = {};

    localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter };
    delete localVarUrlObj.search;
    let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions };

    const localVarAxiosArgs = {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
    };
    const axiosRequestArgs = { ...localVarAxiosArgs.options, url: BASE_PATH + localVarAxiosArgs.url };
    return globalAxios.request(axiosRequestArgs); 
}

export function getDetails(userId) {
    // verify required parameter 'userId' is not null or undefined
    if (userId === null || userId === undefined) {
        throw new Error('Required parameter userId was null or undefined when calling isAdvantageEnabled.');
    }
    const localVarPath = `/demoServer/details/:userId`
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
    const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
    let baseOptions;
    const localVarRequestOptions = { method: 'GET', ...baseOptions };
    const localVarHeaderParameter = {};
    const localVarQueryParameter = {};

    localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter };
    delete localVarUrlObj.search;
    let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
    localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions };

    const localVarAxiosArgs = {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
    };
    const axiosRequestArgs = { ...localVarAxiosArgs.options, url: BASE_PATH + localVarAxiosArgs.url };
    return globalAxios.request(axiosRequestArgs); 
}
