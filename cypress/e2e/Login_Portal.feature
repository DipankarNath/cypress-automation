@login @regression
Feature: Webdriver University Login Portal Page

    Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        And I click on the login portal button

    # Scenario: Valid Login Portal Form Submission
    #     And I type a username
    #     And I type a password
    #     And I click on the login button

    # Scenario: Invalid Login Portal Form Submission - For Empty Username
    #     And I type a username
    #     And I click on the login button

    # Scenario: Invalid Login Portal Form Submission - For Empty Password
    #     And I type a password
    #     And I click on the login button

    Scenario Outline: Validate Login Portal Page
        And I type a specific username <username>
        And I type a specific password <password>
        And I click on the login button
        Then I should be presented with a alart box with the text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText    |
            | jhon      | pw123        | validation failed    |
            | webdriver | webdriver123 | validation succeeded |