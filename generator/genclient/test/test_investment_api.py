# coding: utf-8

"""
    Data Hub API

    Data Hub API

    OpenAPI spec version: 1.0.0
    Contact: jim.smith@digital.trade.gov.uk
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import os
import sys
import unittest

import swagger_client
from swagger_client.rest import ApiException
from swagger_client.apis.investment_api import InvestmentApi


class TestInvestmentApi(unittest.TestCase):
    """ InvestmentApi unit test stubs """

    def setUp(self):
        self.api = swagger_client.apis.investment_api.InvestmentApi()

    def tearDown(self):
        pass

    def test_add_business_activity(self):
        """
        Test case for add_business_activity

        Adds a custom Business Activity to a project
        """
        pass

    def test_create_investment(self):
        """
        Test case for create_investment

        adds the initial stage of an investment project
        """
        pass

    def test_getinvestment(self):
        """
        Test case for getinvestment

        Returns an investment project from the Data Hub repository
        """
        pass

    def test_getinvestmentrequirements(self):
        """
        Test case for getinvestmentrequirements

        Returns the Requirements information associated with a project @TODO document WHY
        """
        pass

    def test_getinvestmentteam(self):
        """
        Test case for getinvestmentteam

        Returns the team information associated with a project
        """
        pass

    def test_getinvestmentvalue(self):
        """
        Test case for getinvestmentvalue

        Returns the Value information associated with a project
        """
        pass

    def test_getprojectsforcompany(self):
        """
        Test case for getprojectsforcompany

        returns a summary of investment projects for a company
        """
        pass

    def test_metadata_business_actibvity(self):
        """
        Test case for metadata_business_actibvity

        retrieves Business Activity metadata array
        """
        pass

    def test_patch_investment(self):
        """
        Test case for patch_investment

        updates an investment project object, from a partial JSON object
        """
        pass

    def test_patch_investment_requirements(self):
        """
        Test case for patch_investment_requirements

        updates an investment requirements object, from a partial JSON object
        """
        pass

    def test_patch_investment_team(self):
        """
        Test case for patch_investment_team

        updates an investment team object, from a partial JSON object
        """
        pass

    def test_patch_investment_value(self):
        """
        Test case for patch_investment_value

        updates an investment project value object, from a partial JSON object
        """
        pass


if __name__ == '__main__':
    unittest.main()
