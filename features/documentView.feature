@foo
Feature: documentView

  Background:
    Given Go to the studocu website

  @DocumentViewBookSolutionSeeder
  Scenario: View a Book Solution document
    When I view the document "DocumentViewBookSolution"
    And I see in url "documentviewbooksolution"