# InvestmentProject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_commitment_to_invest** | **bool** |  | [optional] 
**approved_fdi** | **bool** |  | [optional] 
**approved_good_value** | **bool** |  | [optional] 
**approved_high_value** | **bool** |  | [optional] 
**approved_landed** | **bool** |  | [optional] 
**approved_non_fdi** | **bool** |  | [optional] 
**actual_land_date** | **date** |  | [optional] 
**actual_land_date_documents** | [**Documents**](Documents.md) |  | [optional] 
**business_activities** | [**BusinessActivities**](BusinessActivities.md) |  | 
**client_contacts** | [**ContactArray**](ContactArray.md) |  | 
**client_relationship_manager** | [**Adviser**](Adviser.md) |  | 
**description** | **str** |  | 
**estimated_land_date** | **date** |  | 
**fdi_type** | [**FDIType**](FDIType.md) |  | [optional] 
**fdi_type_documents** | [**Documents**](Documents.md) |  | [optional] 
**id** | **str** |  | [optional] 
**intermediate_company** | [**CompanySlim**](CompanySlim.md) |  | [optional] 
**investor_company** | [**CompanySlim**](CompanySlim.md) |  | 
**investment_type** | [**InvestmentType**](InvestmentType.md) |  | 
**name** | **str** |  | 
**nda_signed** | **bool** |  | 
**non_fdi_type** | [**NonFDIType**](NonFDIType.md) |  | [optional] 
**not_shareable_reason** | **str** |  | [optional] 
**operations_commenced_documents** | [**Documents**](Documents.md) |  | [optional] 
**stage** | [**Stage**](Stage.md) |  | [optional] 
**project_code** | **str** |  | [optional] 
**project_shareable** | **bool** |  | [optional] 
**referral_source_activity** | [**ReferralSourceActivity**](ReferralSourceActivity.md) |  | 
**referral_source_activity_marketing** | [**ReferralSourceActivityMarketing**](ReferralSourceActivityMarketing.md) |  | [optional] 
**referral_source_activity_website** | [**ReferralSourceActivityWebsite**](ReferralSourceActivityWebsite.md) |  | [optional] 
**referral_source_activity_event** | **str** |  | [optional] 
**referral_source_advisor** | [**Adviser**](Adviser.md) |  | [optional] 
**sector** | [**Sector**](Sector.md) |  | 
**value_complete** | **bool** | Whether the value section is complete enough to move to the next project stage | [optional] 
**total_investment** | **int** |  | [optional] 
**likelihood_of_landing** | **int** |  | [optional] 
**priority** | **str** |  | [optional] 
**total_investment_documents** | [**Documents**](Documents.md) |  | [optional] 
**client_cannot_provide_total_investment** | **bool** |  | [optional] 
**foreign_equity_investment** | **int** |  | [optional] 
**foreign_equity_investment_documents** | [**Documents**](Documents.md) |  | [optional] 
**client_cannot_provide_foreign_investment** | **bool** |  | [optional] 
**government_assistance** | **bool** |  | [optional] 
**number_new_jobs** | **int** |  | [optional] 
**number_new_jobs_documents** | [**Documents**](Documents.md) |  | [optional] 
**number_safeguarded_jobs** | **int** |  | [optional] 
**number_safeguarded_jobs_documents** | [**Documents**](Documents.md) |  | [optional] 
**r_and_d_budget** | **bool** |  | [optional] 
**r_and_d_budget_documents** | [**Documents**](Documents.md) |  | [optional] 
**non_fdi_r_and_d_budget** | **bool** |  | [optional] 
**new_tech_to_uk** | **bool** |  | [optional] 
**new_tech_to_uk_documents** | [**Documents**](Documents.md) |  | [optional] 
**export_revenue** | **bool** |  | [optional] 
**export_revenue_documents** | [**Documents**](Documents.md) |  | [optional] 
**average_salary** | [**InvestmentProjectAverageSalary**](InvestmentProjectAverageSalary.md) |  | [optional] 
**average_salary_documents** | [**Documents**](Documents.md) |  | [optional] 
**requirements_complete** | **bool** | Whether the requirements section is complete enough to move to the next project stage | [optional] 
**client_requirements** | **str** |  | [optional] 
**site_decided** | **bool** |  | [optional] [default to False]
**address_line_1** | **str** |  | [optional] 
**address_line_2** | **str** |  | [optional] 
**address_line_3** | **str** |  | [optional] 
**client_considering_other_countries** | **bool** |  | [optional] 
**competitor_countries** | [**CountryArray**](CountryArray.md) |  | [optional] 
**uk_region_locations** | [**UKRegions**](UKRegions.md) |  | [optional] 
**strategic_drivers** | [**StrategicDriverArray**](StrategicDriverArray.md) |  | [optional] 
**uk_company** | [**CompanySlim**](CompanySlim.md) |  | [optional] 
**address_postcode** | **str** |  | [optional] 
**team_members** | [**InvestmentTeamMemberArray**](InvestmentTeamMemberArray.md) | Additional team members assigned to this project. Read-only in this endpoint. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


