---
title: Microsoft Internship
company: Microsoft
companyLink: https://www.microsoft.com/
startDates:
  - 2020-05-18
endDates:
  - 2020-08-07
languages:
  - C#
tools:
  - .NET Framework
slug: /experience/microsoft
postType: experience
image: featured.png
---

At Microsoft, I worked on a product called the Azure Stack. This is a product
that makes Azure's cloud services available in other environments including
remote locations that are not always connected to the Internet (such as
cruise ships) and also datacenters and edge locations for a more personalized
cloud. Read more
[here](https://azure.microsoft.com/en-in/overview/azure-stack/).

I worked on the Azure Stack Bridge team which handles the communication
between the Azure services and the Azure Stack services. The services in the
Azure Stack are a subset of those available in Azure and need to be updated
as well when Azure updates roll out. This however only happens when the Azure
Stack is connected to the Internet or another source that acts as a
repository (special USB drives).

The Azure Bridge communicates between the Azure Marketplace, the Azure Stack
Admin Portal (dashboard), and the Admin Stack Resource Providers (RPs) where
the actual downloaded products from Azure Marketplace are stored. The
specific problem I worked on during the internship was tracking the progress
of any downloads from Azure Marketplace and having a means to interrupt them.
This was a client-requested feature for a long time.

Earlier, the Azure Bridge would delegate the downloads to the Azure Stack RPs
who would directly download the products from the Azure Storage. However,
because of the delegation, Azure Bridge was unaware of the progress of the
downloads and could not display progress in the Admin Portal. Similarly, it
could not accept requests from the Admin Portal for the cancellation of any
downloads as the Azure Stack RPs had no interface to accept them.

However, modifying this to allow progress tracking was not as simple as the
Azure Bridge taking over the roles of the Azure Stack RP. This is because of
the large number of different RPs. Instead, the Azure Bridge acts as an
intermediary; it downloads from Azure Storage to a local Storage account on
the Azure Stack before notifying the Azure Stack RPs to continue the download
from the local Storage account (which is much faster as it is a local
transfer). From the RP point of view, nothing has changed, but because of the
local download in Azure Bridge, progress can now be tracked and/or
interrupted through the Admin Portal.

I implemented this using the .NET Framework and C#. Similarly, I exposed an
interface for allowing cancellation and pause/resume functionality for the
downloads in the future.

This was the first time I worked on a large scale product. A lot of time was
spent learning the job system used in several Microsoft products and
understanding the deceptively simple looking problem. I also had to consider
dependencies on other products and entities as well. I interacted with the
Admin Portal team to ensure my payload changes did not break their UI and
similarly with one of the Azure Stack RP teams to ensure my assumptions were
correct. A major takeaway was debugging skills (especially remote debugging).
I spent quite a few days stuck on debugging problems that sometimes were in
locations that I assumed would work (such as other libraries). I learned
remote debugging tools and also got a deeper understanding of what to look
for while debugging.
