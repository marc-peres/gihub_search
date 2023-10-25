import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser, ServerResponse} from "../../models/searchUsersModel";
import {IRepo} from "../../models/reposModel";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (userName: string) => ({
                url: `users/${userName}/repos`,
            })
        }),
        createUser: build.mutation<any, void>({
            query: () => ''
        })
    }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
