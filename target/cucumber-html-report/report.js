$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/apiFeatures/RestAPIExample.feature");
formatter.feature({
  "name": "Get Personal Info API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US-001"
    },
    {
      "name": "@APIRegression"
    },
    {
      "name": "@APISmoke"
    }
  ]
});
formatter.scenario({
  "name": "Get All Employee details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US-001"
    },
    {
      "name": "@APIRegression"
    },
    {
      "name": "@APISmoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submit GET request to \"AllEmployeeInfo_URL\" to get all employees detail",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiExample.user_submit_GET_request_to_to_get_all_employees_detail(String)"
});
formatter.write("\u003chtml lang\u003d\"en\"\u003e\n  \u003chead\u003e\n    \u003cmeta charset\u003d\"utf-8\"/\u003e\n    \u003cmeta name\u003d\"viewport\" content\u003d\"width\u003ddevice-width, initial-scale\u003d1\"/\u003e\n    \u003ctitle\u003eToo Many Requests\u003c/title\u003e\n    \u003clink rel\u003d\"dns-prefetch\" href\u003d\"//fonts.gstatic.com\"/\u003e\n    \u003clink href\u003d\"https://fonts.googleapis.com/css?family\u003dNunito\" rel\u003d\"stylesheet\"/\u003e\n    \u003cstyle\u003e\n            html, body {\n                background-color: #fff;\n                color: #636b6f;\n                font-family: \u0027Nunito\u0027, sans-serif;\n                font-weight: 100;\n                height: 100vh;\n                margin: 0;\n            }\n\n            .full-height {\n                height: 100vh;\n            }\n\n            .flex-center {\n                align-items: center;\n                display: flex;\n                justify-content: center;\n            }\n\n            .position-ref {\n                position: relative;\n            }\n\n            .code {\n                border-right: 2px solid;\n                font-size: 26px;\n                padding: 0 15px 0 15px;\n                text-align: center;\n            }\n\n            .message {\n                font-size: 18px;\n                text-align: center;\n            }\n        \u003c/style\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003cdiv class\u003d\"flex-center position-ref full-height\"\u003e\n      \u003cdiv class\u003d\"code\"\u003e\n                429            \u003c/div\u003e\n      \u003cdiv class\u003d\"message\" style\u003d\"padding: 10px;\"\u003e\n                Too Many Requests            \u003c/div\u003e\n    \u003c/div\u003e\n  \u003c/body\u003e\n\u003c/html\u003e");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate if status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiExample.user_validate_if_status_code_is(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c429\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat api_automation.stepDefinition.RestApiExample.user_validate_if_status_code_is(RestApiExample.java:50)\n\tat ✽.User validate if status code is 200(file:src/test/resources/apiFeatures/RestAPIExample.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Get Single Employee details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US-001"
    },
    {
      "name": "@APIRegression"
    },
    {
      "name": "@APISmoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submit GET request to \"SingleEmployeeInfo_URL\" to get single employee detail",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiExample.user_submit_GET_request_to_to_get_single_employee_detail(String)"
});
formatter.write("{\n    \"status\": \"success\",\n    \"data\": {\n        \"id\": 1,\n        \"employee_name\": \"Tiger Nixon\",\n        \"employee_salary\": 320800,\n        \"employee_age\": 61,\n        \"profile_image\": \"\"\n    },\n    \"message\": \"Successfully! Record has been fetched.\"\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate if status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiExample.user_validate_if_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Single Employee details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US-001"
    },
    {
      "name": "@APIRegression"
    },
    {
      "name": "@APISmoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User submit Delete request to \"DeleteSingleEmployeeInfo_URL\" to delete single employee detail",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiExample.user_submit_Delete_request_to_to_delete_single_employee_detail(String)"
});
formatter.write("{\n    \"status\": \"success\",\n    \"data\": \"2\",\n    \"message\": \"Successfully! Record has been deleted\"\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate if status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiExample.user_validate_if_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate if message is \"successfully! Record has been deleted\"",
  "keyword": "And "
});
formatter.match({
  "location": "RestApiExample.user_validate_if_message_is(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat api_automation.stepDefinition.RestApiExample.user_validate_if_message_is(RestApiExample.java:91)\n\tat ✽.User validate if message is \"successfully! Record has been deleted\"(file:src/test/resources/apiFeatures/RestAPIExample.feature:16)\n",
  "status": "failed"
});
});