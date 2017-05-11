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


class CompaniesHouseSlim(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, company_number=None):
        """
        CompaniesHouseSlim - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'str',
            'company_number': 'str'
        }

        self.attribute_map = {
            'id': 'id',
            'company_number': 'company_number'
        }

        self._id = id
        self._company_number = company_number

    @property
    def id(self):
        """
        Gets the id of this CompaniesHouseSlim.

        :return: The id of this CompaniesHouseSlim.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this CompaniesHouseSlim.

        :param id: The id of this CompaniesHouseSlim.
        :type: str
        """

        self._id = id

    @property
    def company_number(self):
        """
        Gets the company_number of this CompaniesHouseSlim.

        :return: The company_number of this CompaniesHouseSlim.
        :rtype: str
        """
        return self._company_number

    @company_number.setter
    def company_number(self, company_number):
        """
        Sets the company_number of this CompaniesHouseSlim.

        :param company_number: The company_number of this CompaniesHouseSlim.
        :type: str
        """
        if company_number is None:
            raise ValueError("Invalid value for `company_number`, must not be `None`")

        self._company_number = company_number

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
        if not isinstance(other, CompaniesHouseSlim):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
