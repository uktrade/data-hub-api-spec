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


class Contact(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, first_name=None, last_name=None, archived=None, archived_reason=None, title=None, primary=None, telephone_countrycode=None, telephone_number=None, email=None, address_same_as_company=None, address_1=None, address_2=None, address_3=None, address_4=None, address_town=None, address_county=None, address_postcode=None, telephone_alternative=None, email_alternative=None, notes=None, job_title=None, contactable_by_dit=None, contactable_by_dit_partners=None, contactable_by_email=None, contactable_by_phone=None, address_country=None, advisor=None, archived_by=None, company=None):
        """
        Contact - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'str',
            'first_name': 'str',
            'last_name': 'str',
            'archived': 'bool',
            'archived_reason': 'str',
            'title': 'ContactTitle',
            'primary': 'bool',
            'telephone_countrycode': 'str',
            'telephone_number': 'str',
            'email': 'str',
            'address_same_as_company': 'bool',
            'address_1': 'str',
            'address_2': 'str',
            'address_3': 'str',
            'address_4': 'str',
            'address_town': 'str',
            'address_county': 'str',
            'address_postcode': 'str',
            'telephone_alternative': 'str',
            'email_alternative': 'str',
            'notes': 'str',
            'job_title': 'str',
            'contactable_by_dit': 'bool',
            'contactable_by_dit_partners': 'bool',
            'contactable_by_email': 'bool',
            'contactable_by_phone': 'bool',
            'address_country': 'Country',
            'advisor': 'Adviser',
            'archived_by': 'Adviser',
            'company': 'CompanySlim'
        }

        self.attribute_map = {
            'id': 'id',
            'first_name': 'first_name',
            'last_name': 'last_name',
            'archived': 'archived',
            'archived_reason': 'archived_reason',
            'title': 'title',
            'primary': 'primary',
            'telephone_countrycode': 'telephone_countrycode',
            'telephone_number': 'telephone_number',
            'email': 'email',
            'address_same_as_company': 'address_same_as_company',
            'address_1': 'address_1',
            'address_2': 'address_2',
            'address_3': 'address_3',
            'address_4': 'address_4',
            'address_town': 'address_town',
            'address_county': 'address_county',
            'address_postcode': 'address_postcode',
            'telephone_alternative': 'telephone_alternative',
            'email_alternative': 'email_alternative',
            'notes': 'notes',
            'job_title': 'job_title',
            'contactable_by_dit': 'contactable_by_dit',
            'contactable_by_dit_partners': 'contactable_by_dit_partners',
            'contactable_by_email': 'contactable_by_email',
            'contactable_by_phone': 'contactable_by_phone',
            'address_country': 'address_country',
            'advisor': 'advisor',
            'archived_by': 'archived_by',
            'company': 'company'
        }

        self._id = id
        self._first_name = first_name
        self._last_name = last_name
        self._archived = archived
        self._archived_reason = archived_reason
        self._title = title
        self._primary = primary
        self._telephone_countrycode = telephone_countrycode
        self._telephone_number = telephone_number
        self._email = email
        self._address_same_as_company = address_same_as_company
        self._address_1 = address_1
        self._address_2 = address_2
        self._address_3 = address_3
        self._address_4 = address_4
        self._address_town = address_town
        self._address_county = address_county
        self._address_postcode = address_postcode
        self._telephone_alternative = telephone_alternative
        self._email_alternative = email_alternative
        self._notes = notes
        self._job_title = job_title
        self._contactable_by_dit = contactable_by_dit
        self._contactable_by_dit_partners = contactable_by_dit_partners
        self._contactable_by_email = contactable_by_email
        self._contactable_by_phone = contactable_by_phone
        self._address_country = address_country
        self._advisor = advisor
        self._archived_by = archived_by
        self._company = company

    @property
    def id(self):
        """
        Gets the id of this Contact.

        :return: The id of this Contact.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this Contact.

        :param id: The id of this Contact.
        :type: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")

        self._id = id

    @property
    def first_name(self):
        """
        Gets the first_name of this Contact.

        :return: The first_name of this Contact.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """
        Sets the first_name of this Contact.

        :param first_name: The first_name of this Contact.
        :type: str
        """
        if first_name is None:
            raise ValueError("Invalid value for `first_name`, must not be `None`")

        self._first_name = first_name

    @property
    def last_name(self):
        """
        Gets the last_name of this Contact.

        :return: The last_name of this Contact.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """
        Sets the last_name of this Contact.

        :param last_name: The last_name of this Contact.
        :type: str
        """
        if last_name is None:
            raise ValueError("Invalid value for `last_name`, must not be `None`")

        self._last_name = last_name

    @property
    def archived(self):
        """
        Gets the archived of this Contact.

        :return: The archived of this Contact.
        :rtype: bool
        """
        return self._archived

    @archived.setter
    def archived(self, archived):
        """
        Sets the archived of this Contact.

        :param archived: The archived of this Contact.
        :type: bool
        """

        self._archived = archived

    @property
    def archived_reason(self):
        """
        Gets the archived_reason of this Contact.

        :return: The archived_reason of this Contact.
        :rtype: str
        """
        return self._archived_reason

    @archived_reason.setter
    def archived_reason(self, archived_reason):
        """
        Sets the archived_reason of this Contact.

        :param archived_reason: The archived_reason of this Contact.
        :type: str
        """

        self._archived_reason = archived_reason

    @property
    def title(self):
        """
        Gets the title of this Contact.

        :return: The title of this Contact.
        :rtype: ContactTitle
        """
        return self._title

    @title.setter
    def title(self, title):
        """
        Sets the title of this Contact.

        :param title: The title of this Contact.
        :type: ContactTitle
        """

        self._title = title

    @property
    def primary(self):
        """
        Gets the primary of this Contact.

        :return: The primary of this Contact.
        :rtype: bool
        """
        return self._primary

    @primary.setter
    def primary(self, primary):
        """
        Sets the primary of this Contact.

        :param primary: The primary of this Contact.
        :type: bool
        """

        self._primary = primary

    @property
    def telephone_countrycode(self):
        """
        Gets the telephone_countrycode of this Contact.

        :return: The telephone_countrycode of this Contact.
        :rtype: str
        """
        return self._telephone_countrycode

    @telephone_countrycode.setter
    def telephone_countrycode(self, telephone_countrycode):
        """
        Sets the telephone_countrycode of this Contact.

        :param telephone_countrycode: The telephone_countrycode of this Contact.
        :type: str
        """

        self._telephone_countrycode = telephone_countrycode

    @property
    def telephone_number(self):
        """
        Gets the telephone_number of this Contact.

        :return: The telephone_number of this Contact.
        :rtype: str
        """
        return self._telephone_number

    @telephone_number.setter
    def telephone_number(self, telephone_number):
        """
        Sets the telephone_number of this Contact.

        :param telephone_number: The telephone_number of this Contact.
        :type: str
        """

        self._telephone_number = telephone_number

    @property
    def email(self):
        """
        Gets the email of this Contact.

        :return: The email of this Contact.
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """
        Sets the email of this Contact.

        :param email: The email of this Contact.
        :type: str
        """

        self._email = email

    @property
    def address_same_as_company(self):
        """
        Gets the address_same_as_company of this Contact.

        :return: The address_same_as_company of this Contact.
        :rtype: bool
        """
        return self._address_same_as_company

    @address_same_as_company.setter
    def address_same_as_company(self, address_same_as_company):
        """
        Sets the address_same_as_company of this Contact.

        :param address_same_as_company: The address_same_as_company of this Contact.
        :type: bool
        """

        self._address_same_as_company = address_same_as_company

    @property
    def address_1(self):
        """
        Gets the address_1 of this Contact.

        :return: The address_1 of this Contact.
        :rtype: str
        """
        return self._address_1

    @address_1.setter
    def address_1(self, address_1):
        """
        Sets the address_1 of this Contact.

        :param address_1: The address_1 of this Contact.
        :type: str
        """

        self._address_1 = address_1

    @property
    def address_2(self):
        """
        Gets the address_2 of this Contact.

        :return: The address_2 of this Contact.
        :rtype: str
        """
        return self._address_2

    @address_2.setter
    def address_2(self, address_2):
        """
        Sets the address_2 of this Contact.

        :param address_2: The address_2 of this Contact.
        :type: str
        """

        self._address_2 = address_2

    @property
    def address_3(self):
        """
        Gets the address_3 of this Contact.

        :return: The address_3 of this Contact.
        :rtype: str
        """
        return self._address_3

    @address_3.setter
    def address_3(self, address_3):
        """
        Sets the address_3 of this Contact.

        :param address_3: The address_3 of this Contact.
        :type: str
        """

        self._address_3 = address_3

    @property
    def address_4(self):
        """
        Gets the address_4 of this Contact.

        :return: The address_4 of this Contact.
        :rtype: str
        """
        return self._address_4

    @address_4.setter
    def address_4(self, address_4):
        """
        Sets the address_4 of this Contact.

        :param address_4: The address_4 of this Contact.
        :type: str
        """

        self._address_4 = address_4

    @property
    def address_town(self):
        """
        Gets the address_town of this Contact.

        :return: The address_town of this Contact.
        :rtype: str
        """
        return self._address_town

    @address_town.setter
    def address_town(self, address_town):
        """
        Sets the address_town of this Contact.

        :param address_town: The address_town of this Contact.
        :type: str
        """

        self._address_town = address_town

    @property
    def address_county(self):
        """
        Gets the address_county of this Contact.

        :return: The address_county of this Contact.
        :rtype: str
        """
        return self._address_county

    @address_county.setter
    def address_county(self, address_county):
        """
        Sets the address_county of this Contact.

        :param address_county: The address_county of this Contact.
        :type: str
        """

        self._address_county = address_county

    @property
    def address_postcode(self):
        """
        Gets the address_postcode of this Contact.

        :return: The address_postcode of this Contact.
        :rtype: str
        """
        return self._address_postcode

    @address_postcode.setter
    def address_postcode(self, address_postcode):
        """
        Sets the address_postcode of this Contact.

        :param address_postcode: The address_postcode of this Contact.
        :type: str
        """

        self._address_postcode = address_postcode

    @property
    def telephone_alternative(self):
        """
        Gets the telephone_alternative of this Contact.

        :return: The telephone_alternative of this Contact.
        :rtype: str
        """
        return self._telephone_alternative

    @telephone_alternative.setter
    def telephone_alternative(self, telephone_alternative):
        """
        Sets the telephone_alternative of this Contact.

        :param telephone_alternative: The telephone_alternative of this Contact.
        :type: str
        """

        self._telephone_alternative = telephone_alternative

    @property
    def email_alternative(self):
        """
        Gets the email_alternative of this Contact.

        :return: The email_alternative of this Contact.
        :rtype: str
        """
        return self._email_alternative

    @email_alternative.setter
    def email_alternative(self, email_alternative):
        """
        Sets the email_alternative of this Contact.

        :param email_alternative: The email_alternative of this Contact.
        :type: str
        """

        self._email_alternative = email_alternative

    @property
    def notes(self):
        """
        Gets the notes of this Contact.

        :return: The notes of this Contact.
        :rtype: str
        """
        return self._notes

    @notes.setter
    def notes(self, notes):
        """
        Sets the notes of this Contact.

        :param notes: The notes of this Contact.
        :type: str
        """

        self._notes = notes

    @property
    def job_title(self):
        """
        Gets the job_title of this Contact.

        :return: The job_title of this Contact.
        :rtype: str
        """
        return self._job_title

    @job_title.setter
    def job_title(self, job_title):
        """
        Sets the job_title of this Contact.

        :param job_title: The job_title of this Contact.
        :type: str
        """

        self._job_title = job_title

    @property
    def contactable_by_dit(self):
        """
        Gets the contactable_by_dit of this Contact.

        :return: The contactable_by_dit of this Contact.
        :rtype: bool
        """
        return self._contactable_by_dit

    @contactable_by_dit.setter
    def contactable_by_dit(self, contactable_by_dit):
        """
        Sets the contactable_by_dit of this Contact.

        :param contactable_by_dit: The contactable_by_dit of this Contact.
        :type: bool
        """

        self._contactable_by_dit = contactable_by_dit

    @property
    def contactable_by_dit_partners(self):
        """
        Gets the contactable_by_dit_partners of this Contact.

        :return: The contactable_by_dit_partners of this Contact.
        :rtype: bool
        """
        return self._contactable_by_dit_partners

    @contactable_by_dit_partners.setter
    def contactable_by_dit_partners(self, contactable_by_dit_partners):
        """
        Sets the contactable_by_dit_partners of this Contact.

        :param contactable_by_dit_partners: The contactable_by_dit_partners of this Contact.
        :type: bool
        """

        self._contactable_by_dit_partners = contactable_by_dit_partners

    @property
    def contactable_by_email(self):
        """
        Gets the contactable_by_email of this Contact.

        :return: The contactable_by_email of this Contact.
        :rtype: bool
        """
        return self._contactable_by_email

    @contactable_by_email.setter
    def contactable_by_email(self, contactable_by_email):
        """
        Sets the contactable_by_email of this Contact.

        :param contactable_by_email: The contactable_by_email of this Contact.
        :type: bool
        """

        self._contactable_by_email = contactable_by_email

    @property
    def contactable_by_phone(self):
        """
        Gets the contactable_by_phone of this Contact.

        :return: The contactable_by_phone of this Contact.
        :rtype: bool
        """
        return self._contactable_by_phone

    @contactable_by_phone.setter
    def contactable_by_phone(self, contactable_by_phone):
        """
        Sets the contactable_by_phone of this Contact.

        :param contactable_by_phone: The contactable_by_phone of this Contact.
        :type: bool
        """

        self._contactable_by_phone = contactable_by_phone

    @property
    def address_country(self):
        """
        Gets the address_country of this Contact.

        :return: The address_country of this Contact.
        :rtype: Country
        """
        return self._address_country

    @address_country.setter
    def address_country(self, address_country):
        """
        Sets the address_country of this Contact.

        :param address_country: The address_country of this Contact.
        :type: Country
        """

        self._address_country = address_country

    @property
    def advisor(self):
        """
        Gets the advisor of this Contact.

        :return: The advisor of this Contact.
        :rtype: Adviser
        """
        return self._advisor

    @advisor.setter
    def advisor(self, advisor):
        """
        Sets the advisor of this Contact.

        :param advisor: The advisor of this Contact.
        :type: Adviser
        """

        self._advisor = advisor

    @property
    def archived_by(self):
        """
        Gets the archived_by of this Contact.

        :return: The archived_by of this Contact.
        :rtype: Adviser
        """
        return self._archived_by

    @archived_by.setter
    def archived_by(self, archived_by):
        """
        Sets the archived_by of this Contact.

        :param archived_by: The archived_by of this Contact.
        :type: Adviser
        """

        self._archived_by = archived_by

    @property
    def company(self):
        """
        Gets the company of this Contact.

        :return: The company of this Contact.
        :rtype: CompanySlim
        """
        return self._company

    @company.setter
    def company(self, company):
        """
        Sets the company of this Contact.

        :param company: The company of this Contact.
        :type: CompanySlim
        """

        self._company = company

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
        if not isinstance(other, Contact):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
