@contact-us @regression
Feature: Webdriver University Contact Us Page

    Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        And I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us From Submition
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Sharah"
        And I type a specific last name "OCornor"
        And I type a specific email address "sharah.cornor@email.com"
        And I type a specific word "hello123" and a number 7987979 with in the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
        
    @smoke
    Scenario Outline: Validate Contact Us Page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a specific email address '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress          | comment            | message                      |
            | Jhon      | Jones    | jhon.jones@email.com  | Hello how are you? | Thank You for your Message!  |
            | Mia       | Toretto  | mia.toretto@email.com | the engine is hot  | Thank You for your Message!  |
            | Grayes    | Hudson   | mia.torettoemail.com  | Coper ay?          | Error: Invalid email address |


