---
title: Adobe Internship
company: Adobe
companyLink: https://www.adobe.com/
where: San Jose, CA
startDates:
  - 2019-05-28
endDates:
  - 2019-08-16
languages:
  - Java
  - MySQL
tools:
  - Spring Boot
  - FasterXML
  - JUnit
slug: adobe-int
postType: experience
image: featured.png
---

At Adobe, I received a chance to work in my language of comfort, Java, on
AdCloud's Creative Management Platform team. This team is responsible for
a business product called the Creative Management Platform which allows
clients to create "Experiences". These are advertisement campaigns targeted
towards specific categories of people (geographically etc.) These Experiences
have an internal structure called _Targeting Trees_
([generic trees](https://en.wikipedia.org/wiki/Tree_(data_structure))).

The problem I worked on was creating an Approval Workflow for publishing
Experiences. Originally, there was no reviewing mechanism for publishing
Experiences, which meant that it was possible for accidental or erroneous
edits to an Experience to get published live. By granting reviewer privileges
to certain users of a client and adding a review phase to the publishing
pipeline (called approval workflow), the number of faulty edits getting
published could be minimized.

There were two main parts to this problem: adding a review state to the
workflow and creating API endpoints for comparing Targeting Trees. If edits
are approved in the review state, they would get published, else the tree
would revert to draft. However, creating a comparison view of the old and new
Targeting Trees was the larger problem to be tackled.

To create a comparison view of the trees, I had to create an algorithm that
effectively merges the two trees and marks which nodes were newly created,
which nodes were deleted, and which nodes were modified. This is a complex
problem because nodes can be shifted to a different layer of the tree with
an unmodified subtree, the heights of the trees may be different, a node's
internal logic could be modified without its subtree changing, etc. The
merging algorithm had a lot of design decisions to overcome before it was
able to generate a relatively usable output.

Additionally, for exposing an interface to use the comparison mechanism of
the targeting trees, I created new datatables in the MySQL database and
designed new API endpoints in Springboot. Toward the end of the internship,
with some extra time, I also implemented a publish-history tracking endpoint
which kept track of when an Experience entered a new state in the workflow.

Overall, while I implemented a lot of API functionality for the backend, I
did not get an opportunity to view the comparison and review mechanism being
used live as it had to be implemented by the UI team, something that was not
feasible before the end of my internship.
