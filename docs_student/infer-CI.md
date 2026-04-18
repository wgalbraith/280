# Introduction to Confidence Intervals

A **confidence interval (CI)** is a range of plausible values for an unknown population parameter, constructed using sample data. Rather than producing a single estimate, confidence intervals quantify the uncertainty inherent in sampling.

At the core of confidence intervals is the idea of **statistical inference**: using information from a sample to draw conclusions about a broader population. Because different samples produce different estimates, we acknowledge variability by reporting an interval instead of a single estimate.

A confidence interval answers the question:

> Based on our sample, what are is the range of plausible values of the population parameter?

---

## Interpretation of Confidence Intervals

A confidence interval for a population parameter is typically written as:

$$
\text{statistic} \pm \text{margin of error}
$$

Where the *statistic* is the value of our sample statistic and the *margin of error* is the expected variability associated with our sample. The **confidence level** (e.g., 95%) reflects the success rate of the confidence interval. We define a 'success' as an interval that captures the population parameter. If we repeatedly took samples and constructed 95% confidence intervals, we would expect that approximately 95% of those intervals would *successfully* contain the true population parameter. In our course, we will estimate three parameters: A single mean, a difference of means, and the correlation coefficient.  We will use StatKey to greate these intervals for us.

---

# Confidence Interval for a Single Mean

When estimating a population mean $\mu$ using a sample mean $\bar{x}$, the form of the confidence interval is $$\bar{x}\pm ME$$

where $ME$ is the margin of error. 

## Example: Confidence Interval for a Single Mean 

---

# Confidence Interval for a Difference of Means

When comparing two populations, we are often interested in the difference between their means: $\mu_1 - \mu_2$

## Example: Confidence Interval for a Difference of Means

## Interpreting the Difference of Means Interval

The confidence interval for $\mu_1 - \mu_2$ provides direct insight into group differences:

- If the interval contains $0$, this means that $\mu_1 - \mu_2=0$ is a plausible value. In other words, it is reasonably possible that $\mu_1=\mu_2$. In this case we would say that our sample data do not provide strong evidence of a difference.
- If the interval does not contain $0$, this means that $\mu_1 - \mu_2=0$ is NOT a plausible value. In other words, it is not reasonably possible that $\mu_1=\mu_2$, so this suggests a statistically meaningful difference between the population means.

---
# Confidence Interval for the Correlation

## Example: Confidence Interval for the Correlation

## Interpreting the Confidence Interval for the Correlation

