# coding: utf-8

"""
    Data Hub API

    Data Hub API

    OpenAPI spec version: 1.0.0
    Contact: jim.smith@digital.trade.gov.uk
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from pprint import pformat
from six import iteritems
import re


class ContactFilteredSearch(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, original_query=None, first_name=None, last_name=None, job_title=None, company=None, advisor=None, notes=None):
        """
        ContactFilteredSearch - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'original_query': 'str',
            'first_name': 'str',
            'last_name': 'str',
            'job_title': 'str',
            'company': 'str',
            'advisor': 'str',
            'notes': 'str'
        }

        self.attribute_map = {
            'original_query': 'original_query',
            'first_name': 'first_name',
            'last_name': 'last_name',
            'job_title': 'job_title',
            'company': 'company',
            'advisor': 'advisor',
            'notes': 'notes'
        }

        self._original_query = original_query
        self._first_name = first_name
        self._last_name = last_name
        self._job_title = job_title
        self._company = company
        self._advisor = advisor
        self._notes = notes

    @property
    def original_query(self):
        """
        Gets the original_query of this ContactFilteredSearch.

        :return: The original_query of this ContactFilteredSearch.
        :rtype: str
        """
        return self._original_query

    @original_query.setter
    def original_query(self, original_query):
        """
        Sets the original_query of this ContactFilteredSearch.

        :param original_query: The original_query of this ContactFilteredSearch.
        :type: str
        """

        self._original_query = original_query

    @property
    def first_name(self):
        """
        Gets the first_name of this ContactFilteredSearch.

        :return: The first_name of this ContactFilteredSearch.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """
        Sets the first_name of this ContactFilteredSearch.

        :param first_name: The first_name of this ContactFilteredSearch.
        :type: str
        """

        self._first_name = first_name

    @property
    def last_name(self):
        """
        Gets the last_name of this ContactFilteredSearch.

        :return: The last_name of this ContactFilteredSearch.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """
        Sets the last_name of this ContactFilteredSearch.

        :param last_name: The last_name of this ContactFilteredSearch.
        :type: str
        """

        self._last_name = last_name

    @property
    def job_title(self):
        """
        Gets the job_title of this ContactFilteredSearch.

        :return: The job_title of this ContactFilteredSearch.
        :rtype: str
        """
        return self._job_title

    @job_title.setter
    def job_title(self, job_title):
        """
        Sets the job_title of this ContactFilteredSearch.

        :param job_title: The job_title of this ContactFilteredSearch.
        :type: str
        """

        self._job_title = job_title

    @property
    def company(self):
        """
        Gets the company of this ContactFilteredSearch.

        :return: The company of this ContactFilteredSearch.
        :rtype: str
        """
        return self._company

    @company.setter
    def company(self, company):
        """
        Sets the company of this ContactFilteredSearch.

        :param company: The company of this ContactFilteredSearch.
        :type: str
        """

        self._company = company

    @property
    def advisor(self):
        """
        Gets the advisor of this ContactFilteredSearch.

        :return: The advisor of this ContactFilteredSearch.
        :rtype: str
        """
        return self._advisor

    @advisor.setter
    def advisor(self, advisor):
        """
        Sets the advisor of this ContactFilteredSearch.

        :param advisor: The advisor of this ContactFilteredSearch.
        :type: str
        """

        self._advisor = advisor

    @property
    def notes(self):
        """
        Gets the notes of this ContactFilteredSearch.

        :return: The notes of this ContactFilteredSearch.
        :rtype: str
        """
        return self._notes

    @notes.setter
    def notes(self, notes):
        """
        Sets the notes of this ContactFilteredSearch.

        :param notes: The notes of this ContactFilteredSearch.
        :type: str
        """

        self._notes = notes

    def to_dict(self):
        """
        Returns the model properties as a dict
        """
        result = {}

        for attr, _ in iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """
        Returns the string representation of the model
        """
        return pformat(self.to_dict())

    def __repr__(self):
        """
        For `print` and `pprint`
        """
        return self.to_str()

    def __eq__(self, other):
        """
        Returns true if both objects are equal
        """
        if not isinstance(other, ContactFilteredSearch):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
