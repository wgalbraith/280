# Shifting Distributions


:::{.instructor}

- TODO: this section needs framing
- TODO: Big picture framing: do things make a difference?

We want to illustrate these concepts through the CES data

- connect to issues folks care about
- use CES data to illustrate sample means and standard errors
- note: Do i have an illustration of this in a plot?
- what is the implication then, when our sample is so far outside of that expected sample mean (sample not random)

---

Technically, how do I draw a random subsample of the CES stuff?

:::

In work our work on human-environment interactions, we often want to see if we can make a change in some ensemble measurement or if some factor causes a difference in the ensemble measurements.
We may represent that ensemble measurement as a distribution or histogram.

To determine if some intervention or factor has an effect, we compare the ensemble measurement of the population that did not get the intervention to the sample of the population that did.

In this section there are two main concepts to understand:

- The Central Limit Theorem
    - tells us about the relationship between the distribution of a population's measurement and the distribution of the means of samples from the population
- Null Hypothesis Significance Testing (NHST)
    - for our purposes, NHST uses the central limit theorem to tell us how likely a result is given the null hypothesis 

# Statistical Significance

By looking at the differences between these measurements, we can determine the probability that the difference was caused by the intervention or the factor that we are investigating.

We need to recognize that due to random variations differences between otherwise identical populations can occur.
We need statistical tests to measure the likelihood that these tests could have occurred at random.

The t-test and p-value are among several techniques we use.

The term statistical significance is used when this difference meets a statistical threshold we agree is meaningful.

# Fairness

To look for fairness, we often split the members of a population into groups according to some categorical variable and look for differences between these two groups.
If those differences are statistically significant, it provides evidence of some sort of disparate effect.

Categorical (nominal) variables include

- participation in a program
- race
- high income/low income
- different climate regions

# Shifted Distributions

Statistical techniques can tell us which of the differences in observations (represented as distributions) is more likely to have been from random fluctuations.

![Shifted Distributions](./figures_static/statistics/shifted-distributions.jpg){width=50%}

:::{.instructor}
To see if a variable makes a difference to an outcome, we often spread the data out by a continuous variable and look at how the outcome changes as we change that variable.
We call this technique regression.
:::

# Two Types of Thinking

- Conceiving of treatment and control groups and measurements that allow you to test your idea, program, or hypothesis
- Choosing and executing statistical methods to establish the likelihood that your program caused the difference between the treatment and control groups

<!-- # The Square Root of the Number of Samples

The expected deviation of a sample mean (the thing you are testing) from the population mean (what you expect under normal circumstances) decreases as the number of samples in that sample mean grows. -->

# Concepts

## Population

A complete group of measurements or individuals of interest.

## Sample

A subset of a population used for a measurement or treatment.
Sometimes called a sub-population.

![](./figures_static/statistics/Sub_Pop.svg)

## Sampling

Measuring a few individuals from a population to get a sense of the whole.

Often it is prohibitively expensive or time-consuming to measure all of the members of a population.
Sampling is a group of techniques that allow us to measure a smaller sample that reflects the overall population.

# Distributions of Interest

What ensemble measurements are you interested in that relate to human-enviroment interactions or other topics of interest.

# Factors

What factors do you think might explain observed differences in distributions?

# Interventions

What treatments or interventions can we perform that have the potential to shift a variable in one of these distributions?


# Concepts

## Population

A complete group of measurements or individuals of interest.

## Sample

A subset of a population used for a measurement or treatment.
Sometimes called a sub-population.

![](./figures_static/statistics/Sub_Pop.svg)

## Sampling

Measuring a few individuals from a population to get a sense of the whole.

Often it is prohibitively expensive or time-consuming to measure all of the members of a population.
Sampling is a group of techniques that allow us to measure a smaller sample that reflects the overall population.


## Statistical Inference

The use of a sample to determine the characteristics of the larger population.

## Hypothesis Testing

The practice of determining whether an observed difference is due to random fluctuations or the experiment (drug, education, etc).

## Statistical Significance

A measure of the probability that the mean of a random sample from a subpopulation was randomly drawn from the larger population.

For example, if you drew 10 random SSU students and they were all taller than 6 feet, this probably wasn't random but was at basketball team practice.

## Effect Size

This is the difference in the mean between an original distribution and the distribution after a treatment or from looking at a subpopulation.

## Sample Mean

This is the mean of a sample of data we take from a larger population.

We are often concerned with how well this sample mean predicts the mean of the overall population.

## Central Limit Theorem

- The distribution of means of large randomly-drawn subpopulations forms a gaussian distribution
- The width of this distribution of sample means is narrower for larger subpopulations

## Inference

Assigns a probability of observing the null hypothesis or alternative hypothesis.

## Null Hypothesis

Some examples

- Experimental drug outcome is not better than placebo
- Participation in a program does not increase outcomes

## Standard Error

If you repeatedly take sample means, the standard error is the amount of spread these sample means have.
This amount of spread goes down as you include more data in each of the repeated samples.

The standard error is related to the standard deviation of the population by the following equation, where 

- $SE$ is the standard error of the sample
- $\sigma$ is the standard deviation of the population
- $n$ is the size of the sample.

$$ SE = \frac{\sigma}{\sqrt{n}} $$

:::{.instructor}
show how you can estimate the sample error

can I demonstrate the sample error with a bunch of means from the CalEnviroScreen census tracts?

![](./figures_static/statistics/sample-mean.jpg){width=75%}

TODO: replace this with stuff from CES ipython notebook?

:::

## Populations Example

![](./figures_static/statistics/US-height-histogram-Jim-Frost.png)

![](./figures_static/statistics/US-height-histogram-gender-Jim-Frost.png)

- If you have an adult human over 180cm tall, are they more likely to identify as male or female?
- If you have an adult human under 150cm tall, are they more likely to identify as male or female?

# Spreadsheets

Common functions

- Mean or average `=average(range)`
- Gives the percentage of values below `value` in the range of data `=percentrank(range, value)`
- Gives the value at which `percentile` of the data is below that value `=percentile(range, percentile)`
- Median `median(range)`
- Standard Deviation `stdev(range)`
- Range of data `A1:A10`
- Range of data (entire column) `A:A`
- Range of data from another sheet `SheetName!A:A`
- ={data!A:A} gets an entire column from other sheet/tab from a command in one cell

Querying a range of cells:

![](./figures_static/statistics/excel-cells.jpg){width=75%}


We can select a subpopulation from a column of spreadsheet data in Google Sheets using the query language.

`=query(data!A:BT, "select A where B < 10")`

- `=query` is the command
- `data!` tells the computer to look at the data sheet
    - if your sheet name has spaces in it, you'll need to put the sheet name in single quotes ('')
- `A:BT` says use columns A through BT
- `select A` says take values from column A
- `where B < 10` says to take those values from where column B is less than 10
- use `"&D1$"` in the query if you want to use cell value D1 in the condition in your query

![Split-Apply-Combine](./figures_static/statistics/split-apply-combine.jpg){width=75%}

