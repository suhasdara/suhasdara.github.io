---
title: Determining Crowd’s Ability to Distinguish Deepfakes in Images and Videos
startDates:
  - 2020-10-27
endDates:
  - 2020-12-08
team:
  - Aditya Tyagi
languages:
  - Python
tools:
  - Amazon Sagemaker Ground Truth
  - Pandas
  - NumPy
  - Matplotlib
slug: deepfakes
repository: https://github.com/suhasdara/Deepfake-Detection
paperSlug: /deepfake_paper.pdf
postType: project
image: featured.png
---

This project was an effort to determine whether a crowd has the ability to
distinguish Deepfake images and videos from real images and videos. This was
submitted for the final project as part of the
[CS395T](https://www.ischool.utexas.edu/~ml/teaching/crowd-fall20) Human
Computation and Crowdsourcing course at UT Austin.

### Background

In the modern era where Machine Learning (ML) and Artificial Intelligence (AI)
are taking over a lot of fields, we tend to forget the large amounts of data
that is involved in training these algorithms. To top it off, a huge portion
of the algorithms require supervised learning where the data needs to be
labeled with the correct output the algorithm needs to learn. With millions or
billions of data samples to solve a single problem, data labeling has become a
tedious task.

Over the years, a new way to fulfill data labeling needs took shape. Called
"Crowdsourcing", this new method involved outsourcing the data labeling work
to other people who are willing to do such repetitive work for some amount of
money per data sample labeled. However, considering humans have a tendency to
be erroneous and sometimes even malicious, crowdsourcing has become a field of
study in itself. This includes understanding human behavior, learning what
tasks humans are good at, learning how to maximize the output quality and
quantity, how to curb mal-intent, and a lot of other areas.

A lot of platforms became quite large since the concept of crowdsourcing
became popular, and for some people, these platforms became a main source of
income. These platforms allow **requesters** to create Human Intelligence
Tasks (HITs) that the **workers** could then work on and earn money. The
largest single platform for crowdsourcing is
[Amazon Mechanical Turk (MTurk)](https://www.mturk.com/), which was launched
in 2005. More recently, the popularity further increased when Amazon Web
Services (AWS) released the SageMaker platform in 2017, which is a cloud
machine-learning platform. SageMaker introduced a requester-friendly interface
wrapping around MTurk called
[Ground Truth (GT)](https://aws.amazon.com/sagemaker/groundtruth/) to design
and generate HITs for recording worker responses that directly could be
integrated with machine-learning algorithms.

### Our Project

One of the growing problems due to the Internet age is misinformation. This
happens when false information is shared with network circles through social
media whether intentionally or unintentionally. Due to increasingly strong
artificial intelligence, we now have the capability to create **Deepfakes**.
Deepfakes are artificially created media (images or videos) that look like
real humans. The Deepfake could be of a real person (as you can see in the
Obama Deepfake image above), or it could just be a person who does not exist
and is a mere combination of facial features from several real people.
Deepfakes can be strong propagators of disinformation (intentional
misinformation) because of how easy it is becoming to get access to a deep
learning model that can generate Deepfakes.

There is currently ongoing research to create models that can detect Deepfakes
including an ongoing challenge by Facebook AI to understand the progress on
Deepfake detection technology that uses the Facebook DeepFake Detection
Challenge Dataset (DFDC). However, the problem exists that training a model
to be good would require large amounts of labeled data. We decided to tackle
the question of whether the crowd is good at differentiating Deepfakes from
real media, and especially does it make a difference if the media is an image
versus a video.

We chose certain datasets to source Deepfake images, Deepfake videos, real
images, and real videos. Funnily enough, we used the DFDC dataset to get
the labeled video samples to understand whether humans are good at labeling
these video samples correctly (a chicken and egg problem). We created HITs
using SageMaker GT that thoroughly explained what exactly are Deepfakes and
what we expect from the workers. We used past research knowledge to design
the HITs to be somewhat resistant to malicious intentions while also providing
us with good results to analyze.

We designed the HIT such that each worker would analyze two images and two
videos (not necessarily one each of Deepfake and real media) by not only
labeling whether a media is Deepfake or not, but also providing a reasoning
of how they reached their judgment. Additionally, each worker also
completed a survey that collected demographic information (age, race, gender)
and cognitive level information (through
[CRT questions](https://en.wikipedia.org/wiki/Cognitive_reflection_test)).
As we were trying to understand if the crowd as a whole is capable of
detecting Deepfakes and not necessarily individuals, each media was analyzed
by five different workers.

Through this experiment, we wanted to analyze a few different aspects of
human intelligence to label Deepfakes:
1. Does the crowd detect deepfaked videos better than deepfaked images?
2. Does the crowd reason differently for images and videos?
3. What features does the crowd use to aid in Deepfake detection?
4. What demographic of crowd has the highest accuracy?
5. Does performing well on a CRT test imply a higher accuracy at identifying
Deepfakes?

Overall, we came to an understanding that the crowd is generally better at
detecting deepfaked videos than images. We understood that this is likely
because of motion information also being available when watching videos as
compared to a still image. We discovered that generally for images, the crowd
did not have any features that really stood out, but for videos, the motion
features really helped differentiate Deepfakes from real media. Additionally,
we were not able to get conclusive results based on the demographic features
and CRT results because of our small sample size and heavily biased
demographics (e.g. 93% of our samples were labeled by men).

So while it is technically possible to use a crowd to label Deepfake media
(mostly videos), it is probably better with a much larger crowd and much
higher redundancy, and with good guidelines outlining the target features to
help distinguish Deepfakes from real media.

This is a concise overview of the results described in our paper, so you can
read our paper to get more insight and explanation for our results!
