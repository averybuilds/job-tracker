# Job tracker

Shows a Monday report of my active job applications, oldest first, and a list of the ones to follow up this week.

## The problem

I lose track of applications once there are more than a handful. Every Monday I want one list of the applications still waiting, oldest first, with a count, and a separate list of the ones that have had no reply for more than 10 days, so I know who to chase.

## How to run it

You need nothing installed.

1. Open the [live page](https://averybuilds.github.io/job-tracker/).
2. The Monday report shows on the page, with the counts and the follow-up list under it.

Or click "Code", then "Download ZIP", unzip the folder, and open `index.html` in your browser.

## What it looks like when it works

The report starts like this:

```
Monday report

30 days: Harbor Light Insurance, Junior Web Developer (applied)
30 days: Pinecrest Senior Living, Junior Web Developer (interview)
30 days: Clearwater Labs, Office Systems Assistant (applied)
```

It goes on with one line for each active application, then ends with the counts and the follow-up list, which starts like this:

```
29 active applications: 23 applied, 6 interview

Follow up this week
No reply after 10 days: 18
Harbor Light Insurance, Junior Web Developer
Clearwater Labs, Office Systems Assistant
```

## How I built it

- Written in JavaScript, HTML and CSS, first as a pen on CodePen, then kept here and published with GitHub Pages.
- The data is invented sample data: 40 applications with company, role, days since applying, status and whether they replied.
- Each record becomes an `Application` object. The class keeps the rules (`isActive`, `needsFollowUp`) with the data they check, which is encapsulation.
- An application is active when its status is "applied" or "interview". It needs a follow-up when there has been no reply and it is more than 10 days old. The 10 is in one variable, `followUpDays`, so it changes in one place.
- AI use: I reviewed the program myself first, then asked My Code Coach to review it. I accepted its point that two lines printed "1 days" and fixed it with a `dayWord` method I wrote. I rejected its suggestion to count with `reduce`, because `.length` already counts and I cannot explain `reduce` yet. When my follow-up list showed every application, I asked it for a hint; it pointed at the line where I had used `||` instead of `&&`, and I made the fix myself.

## What I would change next

- Add a new application from a form on the page, without editing the data by hand.

## Files

- `index.html`: the page, which loads `style.css` and `script.js`
- `style.css`: the colors and layout
- `script.js`: the 40 invented applications, then the program that builds the Monday report and the follow-up list and shows them on the page
- `plan.md`: my capstone plan from the course
