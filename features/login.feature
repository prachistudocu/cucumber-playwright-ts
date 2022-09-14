@foo
Feature: Login

  Background:
    Given Go to the studocu website

  Scenario: Login view event
    Given I login as a fresh user
    When I enter username and password