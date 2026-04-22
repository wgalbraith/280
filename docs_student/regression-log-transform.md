# Transforming Quantiative Variables

In the last section, we emphasized the importance of meeting the conditions for using a linear model before interpreting the results. Up until now, we have only presented this as a problem without a solution. If our data does not satisfy one or more of the conditions, it is often a solution to transform, or reexpress one, or both, of your variables so that the conditions are reasonably satisfied.

# Example: When a Semi-Log Transformation Is Sufficient

## Context

Suppose we are studying **algal concentration** in a lake over time during the early stage of an algal bloom.

Let:
- $$x$$ = time in days
- $$y$$ = algae concentration (cells per milliliter)

In environmental systems, early population growth is often approximately **exponential**, so a semi-log transformation is a natural first step.

---

## Step 1: Raw Data

| Time ($x$) | Algae Concentration ($y$) | Predicted $\hat{y}$ | Residual $e$ |
|-----------|----------------------------|---------------------|--------------|
| 1  | 18   | -259.50 | 277.50 |
| 2  | 30   | -107.98 | 137.98 |
| 3  | 55   | 43.53   | 11.47  |
| 4  | 90   | 195.05  | -105.05 |
| 5  | 150  | 346.56  | -196.56 |
| 6  | 245  | 498.08  | -253.08 |
| 7  | 400  | 649.59  | -249.59 |
| 8  | 660  | 801.11  | -141.11 |
| 9  | 1090 | 952.63  | 137.37 |
| 10 | 1800 | 1104.14 | 695.86 |
| 11 | 2950 | 1255.66 | 1694.34 |
| 12 | 4850 | 1407.18 | 3442.82 |

The least-squares line for the raw data is:

$$
\hat{y} = -411.01 + 151.52x
$$

with residuals:

$$
e = y - \hat{y}
$$

### Interpretation

- The relationship is strongly curved upward
- The residuals are clearly not uniform
- A straight-line model for the raw data is not appropriate

---

## Step 2: Semi-Log Transformation

Now transform only the response:

$$
y^* = \log(y)
$$

Fit the least-squares line to $$x$$ and $$\log(y)$$:

$$
\widehat{\log(y)} = 2.119 + 0.505x
$$

Residuals are computed as:

$$
e = \log(y) - \widehat{\log(y)}
$$

| $x$ | $\log(y)$ | Predicted $\widehat{\log(y)}$ | Residual $e$ |
|-----|-----------|-------------------------------|--------------|
| 1  | 2.89 | 2.62 | 0.27 |
| 2  | 3.40 | 3.13 | 0.27 |
| 3  | 4.01 | 3.63 | 0.38 |
| 4  | 4.50 | 4.14 | 0.36 |
| 5  | 5.01 | 4.64 | 0.37 |
| 6  | 5.50 | 5.15 | 0.35 |
| 7  | 5.99 | 5.66 | 0.33 |
| 8  | 6.49 | 6.16 | 0.33 |
| 9  | 6.99 | 6.67 | 0.32 |
| 10 | 7.50 | 7.17 | 0.33 |
| 11 | 7.99 | 7.68 | 0.31 |
| 12 | 8.49 | 8.18 | 0.31 |

### Interpretation

- The semi-log relationship is approximately linear
- The residuals are much more consistent
- This suggests an exponential model is appropriate
- In this case, the semi-log transformation is sufficient

---

## Why the Semi-Log Transformation Works

If the original relationship is approximately exponential,

$$
y \approx ae^{bx}
$$

then taking logs gives:

$$
\log(y) = \log(a) + bx
$$

This is linear in $$x$$.

So when the original data follow an exponential pattern, a semi-log plot is often all that is needed.

---

## Model Interpretation

Using the fitted model,

$$
\widehat{\log(y)} = 2.119 + 0.505x
$$

the slope tells us that each additional day is associated with an increase of about $$0.505$$ in $$\log(y)$$.

Exponentiating gives the daily multiplicative growth factor:

$$
e^{0.505} \approx 1.66
$$

So algae concentration is predicted to multiply by about **1.66** each day.

---

## Summary

- The raw data show a curved pattern and non-uniform residuals
- The semi-log transformation produces an approximately linear relationship
- This suggests an exponential model fits the data well
