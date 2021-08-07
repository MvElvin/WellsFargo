@Us_001
Feature: Click To ApplyNow button
  Background:
    Given User lands on WellsFargo.com
    And User clicks on "Personal" tab
    Then User clicks on "Find your credit card" on task bar
    And User clicks on "Active Cash" card


  @TC1
  Scenario: Verify first apply now button
    Then user should be able to click "Primary" apply now button
    And user should land "Application" page

  @Tc2
  Scenario: Verify first apply now button
    Then user should be able to click "Secondary" apply now button
    And user should land "Application" page






