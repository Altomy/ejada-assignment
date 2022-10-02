/**
 * Api
 * @utils
 */
import axios, { AxiosResponse } from 'axios';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { Constants } from 'utils';

/* Creating a new instance of the QueryClient class. */
export const queryClient = new QueryClient();

/* Creating a new instance of the axios client. */
export const http = axios.create({
  baseURL: Constants.ENDPOINT,
});
/**
 * Crud Functions
 * [useListQuery, useFindByIndexQuery, useFilterQuery, usePaginationQuery]
 * [useCreateMutation, useUpdateMutation, useDeleteMutation]
 * [useGetQuery, usePostQuery]
 */

/**
 * It's a function that takes a key and returns a result.
 * @param {string} key - string - the key to use for the query
 * @returns The result of the query.
 */
export function useReadQuery<T>(key: string, options?: string) {
  return useQuery<T>([key], async () => {
    const { data } = await http.get(`api/${key}${options ?? ''}`);
    return data;
  });
}

/**
 * a function that take a key, id and return result from API
 * @param {string} key - The key of the resource you want to fetch.
 * @param {string | number} id - The id of the item you want to find
 * @returns The return type is a tuple of the data and the loading state.
 */
export function useShowQuery<T>(key: string, id: string | number | undefined) {
  return useQuery<T>([key], async () => {
    const { data } = await http.get(`api/${key}/${id}`);
    return data;
  });
}

/**
 * It's a function that takes key as string and return useMutation
 * @param {string} key - string - The key is the endpoint you want to hit.
 * @returns A function that takes an object and returns a promise.
 */
export function useCreateMutation<TData, TObject>(key: string) {
  return useMutation<AxiosResponse<TData, unknown>, unknown, TObject>(data => {
    return http.post(`api/${key}`, data);
  });
}

/**
 * It returns a function that takes an object and returns a promise that resolves to an object.
 * @param {string} key - string - the key of the resource you want to update
 * @returns A function that takes an object and returns a promise.
 */
export function useUpdateMutation<TData, TObject>(key: string) {
  return useMutation<AxiosResponse<TData, unknown>, unknown, TObject>(data => {
    return http.put(`api/${key}`, data);
  });
}

/**
 * It takes a key and an id, and returns a function that deletes the item with the given id from the
 * collection with the given key.
 * @param {string} key - The key of the resource you want to delete.
 * @param {number | string} id - The id of the item you want to delete
 * @returns A function that returns a promise.
 */
export function useDeleteMutation(key: string, id: number | string) {
  return useMutation(() => {
    return http.delete(`api/${key}/${id}`);
  });
}

/**
 * It's a function that returns a query hook that retrieves data from a REST API endpoint
 * @param {string} key - The key of the resource you want to retrieve.
 * @param {string} id - The id of the parent resource
 * @param {string} childKey - The child key of the parent resource.
 * @param {string} [options] - string - This is the query string that will be appended to the end of
 * the URL.
 * @returns A function that will return a query object.
 */
export function useRetrievesReadQuery<T>(
  key: string,
  id: string,
  childKey: string,
  options?: string,
) {
  return useQuery<T>([key], async () => {
    const { data } = await http.get(`api/${key}/${id}/${childKey}${options}`);
    return data;
  });
}

/**
 * It retrieves a single item from a nested collection
 * @param {string} key - The key of the resource you want to retrieve.
 * @param {string} id - The id of the parent resource
 * @param {string} childKey - The key of the child object
 * @param {string} childID - The ID of the child object
 * @returns A function that returns a query object.
 */
export function useRetrievesShowQuery<T>(
  key: string,
  id: string,
  childKey: string,
  childID: string,
) {
  return useQuery<T>([key], async () => {
    const { data } = await http.get(`api/${key}/${id}/${childKey}/${childID}`);
    return data;
  });
}
