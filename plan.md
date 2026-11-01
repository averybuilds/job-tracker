# Capstone plan: job tracker

Problem: every Monday, show which job applications need a follow-up, and let me add a new one.

Inputs: a list of applications, each with a company (text), a role (text), daysAgo (number), a status (text) and replied (true or false).
Steps: 1. Keep the applications that are 7 or more days old with no reply. 2. Sort them, oldest first. 3. Show one line for each, then how many there are.
Outputs: "Follow up: Harbor Light Insurance, Junior Web Developer (30 days)", one line each, then "12 to follow up".
