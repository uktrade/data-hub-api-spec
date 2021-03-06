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


class InvestmentValue(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, value_complete=None, total_investment=None, client_cannot_provide_total_investment=None, foreign_equity_investment=None, client_cannot_provide_foreign_investment=None, government_assistance=None, number_new_jobs=None, number_safeguarded_jobs=None, r_and_d_budget=None, non_fdi_r_and_d_budget=None, new_tech_to_uk=None, export_revenue=None, average_salary=None):
        """
        InvestmentValue - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'value_complete': 'bool',
            'total_investment': 'int',
            'client_cannot_provide_total_investment': 'bool',
            'foreign_equity_investment': 'int',
            'client_cannot_provide_foreign_investment': 'bool',
            'government_assistance': 'bool',
            'number_new_jobs': 'int',
            'number_safeguarded_jobs': 'int',
            'r_and_d_budget': 'bool',
            'non_fdi_r_and_d_budget': 'bool',
            'new_tech_to_uk': 'bool',
            'export_revenue': 'bool',
            'average_salary': 'InvestmentValueAverageSalary'
        }

        self.attribute_map = {
            'value_complete': 'value_complete',
            'total_investment': 'total_investment',
            'client_cannot_provide_total_investment': 'client_cannot_provide_total_investment',
            'foreign_equity_investment': 'foreign_equity_investment',
            'client_cannot_provide_foreign_investment': 'client_cannot_provide_foreign_investment',
            'government_assistance': 'government_assistance',
            'number_new_jobs': 'number_new_jobs',
            'number_safeguarded_jobs': 'number_safeguarded_jobs',
            'r_and_d_budget': 'r_and_d_budget',
            'non_fdi_r_and_d_budget': 'non_fdi_r_and_d_budget',
            'new_tech_to_uk': 'new_tech_to_uk',
            'export_revenue': 'export_revenue',
            'average_salary': 'average_salary'
        }

        self._value_complete = value_complete
        self._total_investment = total_investment
        self._client_cannot_provide_total_investment = client_cannot_provide_total_investment
        self._foreign_equity_investment = foreign_equity_investment
        self._client_cannot_provide_foreign_investment = client_cannot_provide_foreign_investment
        self._government_assistance = government_assistance
        self._number_new_jobs = number_new_jobs
        self._number_safeguarded_jobs = number_safeguarded_jobs
        self._r_and_d_budget = r_and_d_budget
        self._non_fdi_r_and_d_budget = non_fdi_r_and_d_budget
        self._new_tech_to_uk = new_tech_to_uk
        self._export_revenue = export_revenue
        self._average_salary = average_salary

    @property
    def value_complete(self):
        """
        Gets the value_complete of this InvestmentValue.

        :return: The value_complete of this InvestmentValue.
        :rtype: bool
        """
        return self._value_complete

    @value_complete.setter
    def value_complete(self, value_complete):
        """
        Sets the value_complete of this InvestmentValue.

        :param value_complete: The value_complete of this InvestmentValue.
        :type: bool
        """

        self._value_complete = value_complete

    @property
    def total_investment(self):
        """
        Gets the total_investment of this InvestmentValue.

        :return: The total_investment of this InvestmentValue.
        :rtype: int
        """
        return self._total_investment

    @total_investment.setter
    def total_investment(self, total_investment):
        """
        Sets the total_investment of this InvestmentValue.

        :param total_investment: The total_investment of this InvestmentValue.
        :type: int
        """

        self._total_investment = total_investment

    @property
    def client_cannot_provide_total_investment(self):
        """
        Gets the client_cannot_provide_total_investment of this InvestmentValue.

        :return: The client_cannot_provide_total_investment of this InvestmentValue.
        :rtype: bool
        """
        return self._client_cannot_provide_total_investment

    @client_cannot_provide_total_investment.setter
    def client_cannot_provide_total_investment(self, client_cannot_provide_total_investment):
        """
        Sets the client_cannot_provide_total_investment of this InvestmentValue.

        :param client_cannot_provide_total_investment: The client_cannot_provide_total_investment of this InvestmentValue.
        :type: bool
        """

        self._client_cannot_provide_total_investment = client_cannot_provide_total_investment

    @property
    def foreign_equity_investment(self):
        """
        Gets the foreign_equity_investment of this InvestmentValue.

        :return: The foreign_equity_investment of this InvestmentValue.
        :rtype: int
        """
        return self._foreign_equity_investment

    @foreign_equity_investment.setter
    def foreign_equity_investment(self, foreign_equity_investment):
        """
        Sets the foreign_equity_investment of this InvestmentValue.

        :param foreign_equity_investment: The foreign_equity_investment of this InvestmentValue.
        :type: int
        """

        self._foreign_equity_investment = foreign_equity_investment

    @property
    def client_cannot_provide_foreign_investment(self):
        """
        Gets the client_cannot_provide_foreign_investment of this InvestmentValue.

        :return: The client_cannot_provide_foreign_investment of this InvestmentValue.
        :rtype: bool
        """
        return self._client_cannot_provide_foreign_investment

    @client_cannot_provide_foreign_investment.setter
    def client_cannot_provide_foreign_investment(self, client_cannot_provide_foreign_investment):
        """
        Sets the client_cannot_provide_foreign_investment of this InvestmentValue.

        :param client_cannot_provide_foreign_investment: The client_cannot_provide_foreign_investment of this InvestmentValue.
        :type: bool
        """

        self._client_cannot_provide_foreign_investment = client_cannot_provide_foreign_investment

    @property
    def government_assistance(self):
        """
        Gets the government_assistance of this InvestmentValue.

        :return: The government_assistance of this InvestmentValue.
        :rtype: bool
        """
        return self._government_assistance

    @government_assistance.setter
    def government_assistance(self, government_assistance):
        """
        Sets the government_assistance of this InvestmentValue.

        :param government_assistance: The government_assistance of this InvestmentValue.
        :type: bool
        """

        self._government_assistance = government_assistance

    @property
    def number_new_jobs(self):
        """
        Gets the number_new_jobs of this InvestmentValue.

        :return: The number_new_jobs of this InvestmentValue.
        :rtype: int
        """
        return self._number_new_jobs

    @number_new_jobs.setter
    def number_new_jobs(self, number_new_jobs):
        """
        Sets the number_new_jobs of this InvestmentValue.

        :param number_new_jobs: The number_new_jobs of this InvestmentValue.
        :type: int
        """

        self._number_new_jobs = number_new_jobs

    @property
    def number_safeguarded_jobs(self):
        """
        Gets the number_safeguarded_jobs of this InvestmentValue.

        :return: The number_safeguarded_jobs of this InvestmentValue.
        :rtype: int
        """
        return self._number_safeguarded_jobs

    @number_safeguarded_jobs.setter
    def number_safeguarded_jobs(self, number_safeguarded_jobs):
        """
        Sets the number_safeguarded_jobs of this InvestmentValue.

        :param number_safeguarded_jobs: The number_safeguarded_jobs of this InvestmentValue.
        :type: int
        """

        self._number_safeguarded_jobs = number_safeguarded_jobs

    @property
    def r_and_d_budget(self):
        """
        Gets the r_and_d_budget of this InvestmentValue.

        :return: The r_and_d_budget of this InvestmentValue.
        :rtype: bool
        """
        return self._r_and_d_budget

    @r_and_d_budget.setter
    def r_and_d_budget(self, r_and_d_budget):
        """
        Sets the r_and_d_budget of this InvestmentValue.

        :param r_and_d_budget: The r_and_d_budget of this InvestmentValue.
        :type: bool
        """

        self._r_and_d_budget = r_and_d_budget

    @property
    def non_fdi_r_and_d_budget(self):
        """
        Gets the non_fdi_r_and_d_budget of this InvestmentValue.

        :return: The non_fdi_r_and_d_budget of this InvestmentValue.
        :rtype: bool
        """
        return self._non_fdi_r_and_d_budget

    @non_fdi_r_and_d_budget.setter
    def non_fdi_r_and_d_budget(self, non_fdi_r_and_d_budget):
        """
        Sets the non_fdi_r_and_d_budget of this InvestmentValue.

        :param non_fdi_r_and_d_budget: The non_fdi_r_and_d_budget of this InvestmentValue.
        :type: bool
        """

        self._non_fdi_r_and_d_budget = non_fdi_r_and_d_budget

    @property
    def new_tech_to_uk(self):
        """
        Gets the new_tech_to_uk of this InvestmentValue.

        :return: The new_tech_to_uk of this InvestmentValue.
        :rtype: bool
        """
        return self._new_tech_to_uk

    @new_tech_to_uk.setter
    def new_tech_to_uk(self, new_tech_to_uk):
        """
        Sets the new_tech_to_uk of this InvestmentValue.

        :param new_tech_to_uk: The new_tech_to_uk of this InvestmentValue.
        :type: bool
        """

        self._new_tech_to_uk = new_tech_to_uk

    @property
    def export_revenue(self):
        """
        Gets the export_revenue of this InvestmentValue.

        :return: The export_revenue of this InvestmentValue.
        :rtype: bool
        """
        return self._export_revenue

    @export_revenue.setter
    def export_revenue(self, export_revenue):
        """
        Sets the export_revenue of this InvestmentValue.

        :param export_revenue: The export_revenue of this InvestmentValue.
        :type: bool
        """

        self._export_revenue = export_revenue

    @property
    def average_salary(self):
        """
        Gets the average_salary of this InvestmentValue.

        :return: The average_salary of this InvestmentValue.
        :rtype: InvestmentValueAverageSalary
        """
        return self._average_salary

    @average_salary.setter
    def average_salary(self, average_salary):
        """
        Sets the average_salary of this InvestmentValue.

        :param average_salary: The average_salary of this InvestmentValue.
        :type: InvestmentValueAverageSalary
        """

        self._average_salary = average_salary

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
        if not isinstance(other, InvestmentValue):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
