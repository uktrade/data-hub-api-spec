# coding: utf-8

"""
    Data Hub API

    Data Hub API

    OpenAPI spec version: 1.0.0
    Contact: jim.smith@digital.trade.gov.uk
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import sys
import os
import re

# python 2 and python 3 compatibility library
from six import iteritems

from ..configuration import Configuration
from ..api_client import ApiClient


class SearchApi(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        config = Configuration()
        if api_client:
            self.api_client = api_client
        else:
            if not config.api_client:
                config.api_client = ApiClient()
            self.api_client = config.api_client

    def datahub_search(self, term, **kwargs):
        """
        Basic search endpoint for Data Hub
        Top level search for datahub
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.datahub_search(term, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param str term: phrase to search for (required)
        :param str entity: which top level entity to search
        :return: AggregateSearchResults
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('callback'):
            return self.datahub_search_with_http_info(term, **kwargs)
        else:
            (data) = self.datahub_search_with_http_info(term, **kwargs)
            return data

    def datahub_search_with_http_info(self, term, **kwargs):
        """
        Basic search endpoint for Data Hub
        Top level search for datahub
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.datahub_search_with_http_info(term, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param str term: phrase to search for (required)
        :param str entity: which top level entity to search
        :return: AggregateSearchResults
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['term', 'entity']
        all_params.append('callback')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method datahub_search" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'term' is set
        if ('term' not in params) or (params['term'] is None):
            raise ValueError("Missing the required parameter `term` when calling `datahub_search`")


        collection_formats = {}

        resource_path = '/search'.replace('{format}', 'json')
        path_params = {}

        query_params = {}
        if 'term' in params:
            query_params['term'] = params['term']
        if 'entity' in params:
            query_params['entity'] = params['entity']

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json'])

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type(['application/json'])

        # Authentication setting
        auth_settings = ['OauthSecurity']

        return self.api_client.call_api(resource_path, 'GET',
                                        path_params,
                                        query_params,
                                        header_params,
                                        body=body_params,
                                        post_params=form_params,
                                        files=local_var_files,
                                        response_type='AggregateSearchResults',
                                        auth_settings=auth_settings,
                                        callback=params.get('callback'),
                                        _return_http_data_only=params.get('_return_http_data_only'),
                                        _preload_content=params.get('_preload_content', True),
                                        _request_timeout=params.get('_request_timeout'),
                                        collection_formats=collection_formats)

    def datahub_search_0(self, filter, **kwargs):
        """
        Basic search endpoint for Data Hub
        Top level search for datahub
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.datahub_search_0(filter, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param CompanyFilteredSearch filter: (required)
        :return: CompanySearchResults
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('callback'):
            return self.datahub_search_0_with_http_info(filter, **kwargs)
        else:
            (data) = self.datahub_search_0_with_http_info(filter, **kwargs)
            return data

    def datahub_search_0_with_http_info(self, filter, **kwargs):
        """
        Basic search endpoint for Data Hub
        Top level search for datahub
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.datahub_search_0_with_http_info(filter, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param CompanyFilteredSearch filter: (required)
        :return: CompanySearchResults
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['filter']
        all_params.append('callback')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method datahub_search_0" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'filter' is set
        if ('filter' not in params) or (params['filter'] is None):
            raise ValueError("Missing the required parameter `filter` when calling `datahub_search_0`")


        collection_formats = {}

        resource_path = '/search/company'.replace('{format}', 'json')
        path_params = {}

        query_params = {}

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'filter' in params:
            body_params = params['filter']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json'])

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type(['application/json'])

        # Authentication setting
        auth_settings = ['OauthSecurity']

        return self.api_client.call_api(resource_path, 'POST',
                                        path_params,
                                        query_params,
                                        header_params,
                                        body=body_params,
                                        post_params=form_params,
                                        files=local_var_files,
                                        response_type='CompanySearchResults',
                                        auth_settings=auth_settings,
                                        callback=params.get('callback'),
                                        _return_http_data_only=params.get('_return_http_data_only'),
                                        _preload_content=params.get('_preload_content', True),
                                        _request_timeout=params.get('_request_timeout'),
                                        collection_formats=collection_formats)

    def datahub_search_1(self, filter, **kwargs):
        """
        Basic search endpoint for Data Hub
        Top level search for datahub
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.datahub_search_1(filter, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param ContactFilteredSearch filter: (required)
        :return: ContactSearchResults
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('callback'):
            return self.datahub_search_1_with_http_info(filter, **kwargs)
        else:
            (data) = self.datahub_search_1_with_http_info(filter, **kwargs)
            return data

    def datahub_search_1_with_http_info(self, filter, **kwargs):
        """
        Basic search endpoint for Data Hub
        Top level search for datahub
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.datahub_search_1_with_http_info(filter, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param ContactFilteredSearch filter: (required)
        :return: ContactSearchResults
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['filter']
        all_params.append('callback')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method datahub_search_1" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'filter' is set
        if ('filter' not in params) or (params['filter'] is None):
            raise ValueError("Missing the required parameter `filter` when calling `datahub_search_1`")


        collection_formats = {}

        resource_path = '/search/contact'.replace('{format}', 'json')
        path_params = {}

        query_params = {}

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'filter' in params:
            body_params = params['filter']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json'])

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type(['application/json'])

        # Authentication setting
        auth_settings = ['OauthSecurity']

        return self.api_client.call_api(resource_path, 'POST',
                                        path_params,
                                        query_params,
                                        header_params,
                                        body=body_params,
                                        post_params=form_params,
                                        files=local_var_files,
                                        response_type='ContactSearchResults',
                                        auth_settings=auth_settings,
                                        callback=params.get('callback'),
                                        _return_http_data_only=params.get('_return_http_data_only'),
                                        _preload_content=params.get('_preload_content', True),
                                        _request_timeout=params.get('_request_timeout'),
                                        collection_formats=collection_formats)