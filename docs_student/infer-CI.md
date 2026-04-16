# Introduction to Confidence Intervals

A **confidence interval (CI)** is a range of plausible values for an unknown population parameter, constructed using sample data. Rather than producing a single estimate, confidence intervals quantify the uncertainty inherent in sampling.

At the core of confidence intervals is the idea of **statistical inference**: using information from a sample to draw conclusions about a broader population. Because different samples produce different estimates, we acknowledge variability by reporting an interval instead of a single estimate.

A confidence interval answers the question:

> Based on this sample, what values of the population parameter would be reasonably consistent with collected data?

---

## Interpretation of Confidence Intervals

A confidence interval is typically written as:

$$
\text{estimate} \pm \text{margin of error}
$$

Where the estimate is typically the value of our sample statistic. The **confidence level** (e.g., 95%) reflects the long-run performance of the method:

- If we repeatedly took samples and constructed intervals in the same way, approximately 95% of those intervals would contain the true population parameter.

---

## Confidence Interval for a Single Mean

When estimating a population mean $\mu$ using a sample mean $\bar{x}$, the form of the confidence interval depends on whether the population standard deviation is known.

### Case: Unknown Population Standard Deviation (most common)

$$
\bar{x} \pm t^* \cdot \frac{s}{\sqrt{n}}
$$

Where:
- $\bar{x}$ = sample mean  
- $s$ = sample standard deviation  
- $n$ = sample size  
- $t^*$ = critical value from the t-distribution with $df = n - 1$ (we find this on StatKey)

This interval reflects both sampling variability and uncertainty in estimating the population standard deviation.

---

## Confidence Interval for a Difference of Means

When comparing two populations, we are often interested in the difference between their means: $\mu_1 - \mu_2$

The corresponding confidence interval is:

$$
(\bar{x}_1 - \bar{x}_2) \pm t^* \cdot \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}
$$

Where:
- $\bar{x}_1, \bar{x}_2$ are the sample means 
- $s_1, s_2$ are the sample standard deviations  
- $n_1, n_2$ are the sample sizes  
- $t^*$ = critical value from the t-distribution with $df = n - 1$ where $n$ is the smaller of $n_1$ and $n_2$. (we find this on StatKey)

---

## Interpreting the Difference of Means Interval

The confidence interval for $\mu_1 - \mu_2$ provides direct insight into group differences:

- If the interval contains $0$, this means that $\mu_1 - \mu_2=0$ is a plausible value. In other words, it is reasonably possible that $\mu_1=\mu_2$. In this case we would say that our sample data do not provide strong evidence of a difference.
- If the interval does not contain $0$, this means that $\mu_1 - \mu_2=0$ is NOT a plausible value. In other words, it is not reasonably possible that $\mu_1=\mu_2$, so this suggests a statistically meaningful difference between the population means.

---

## Summary

- Confidence intervals estimate population parameters using sample data  
- They incorporate sampling variability through a margin of error  
- Single-mean intervals estimate $\mu$  
- Two-sample intervals estimate $\mu_1 - \mu_2$  
- The confidence level reflects long-run reliability of the method  

Confidence intervals allow us to make estimates about a population parameter using only sample data. 
