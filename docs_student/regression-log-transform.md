# Transforming Quantiative Variables

In the last section, we emphasized the importance of meeting the conditions for using a linear model before interpreting the results. Up until now, we have only presented this as a problem without a solution. If our data does not satisfy one or more of the conditions, it is often a solution to transform, or reexpress one, or both, of your variables so that the conditions are reasonably satisfied

# Example: Using a Log Transformation When a Semi-Log Model Is Sufficient

## Context

We study **algae concentration** in a lake over time during early bloom growth.

Let:
- $$x$$ = time (days)  
- $$y$$ = algae concentration (cells/mL)  

---

## 1. Scatter Plot of Original Data

| $x$ | $y$ |
|-----|-----|
| 1 | 18 |
| 2 | 30 |
| 3 | 55 |
| 4 | 90 |
| 5 | 150 |
| 6 | 245 |
| 7 | 400 |
| 8 | 660 |
| 9 | 1090 |
| 10 | 1800 |
| 11 | 2950 |
| 12 | 4850 |

The pattern is clearly nonlinear (curved upward).

---

## 2. Least-Squares Line and Residuals (Original Data)

Fitted model:

$$
\hat{y} = -411.0110 + 151.5167x
$$

Residuals:

$$
e = y - \hat{y}
$$

| $x$ | $y$ | $\hat{y}$ | $e$ |
|-----|-----|-----------|-----|
| 1 | 18 | -259.4943 | 277.4943 |
| 2 | 30 | -107.9776 | 137.9776 |
| 3 | 55 | 43.5391 | 11.4609 |
| 4 | 90 | 195.0558 | -105.0558 |
| 5 | 150 | 346.5725 | -196.5725 |
| 6 | 245 | 498.0892 | -253.0892 |
| 7 | 400 | 649.6059 | -249.6059 |
| 8 | 660 | 801.1226 | -141.1226 |
| 9 | 1090 | 952.6393 | 137.3607 |
| 10 | 1800 | 1104.1560 | 695.8440 |
| 11 | 2950 | 1255.6727 | 1694.3273 |
| 12 | 4850 | 1407.1894 | 3442.8106 |

Check:

$$
\sum e_i \approx 0
$$

---

## 3. Residual Plot (Original Model)

Residuals show a clear curved pattern → linear model is inappropriate.

---

## 4. Log Transformation

Define:

$$
y^* = \log(y)
$$

---

## 5. Scatter Plot of Semi-Log Data

The transformed data appear approximately linear.

---

## 6. Semi-Log Model and Residuals

Fitted model:

$$
\widehat{\log(y)} = 2.4418623 + 0.5058684x
$$

Residuals:

$$
e = \log(y) - \widehat{\log(y)}
$$

| $x$ | $\log(y)$ | $\widehat{\log(y)}$ | $e$ |
|-----|-----------|----------------------|-----|
| 1 | 2.8904 | 2.9477 | -0.0574 |
| 2 | 3.4012 | 3.4536 | -0.0524 |
| 3 | 4.0073 | 3.9595 | 0.0479 |
| 4 | 4.4998 | 4.4653 | 0.0345 |
| 5 | 5.0106 | 4.9712 | 0.0394 |
| 6 | 5.5013 | 5.4771 | 0.0242 |
| 7 | 5.9915 | 5.9830 | 0.0085 |
| 8 | 6.4922 | 6.4889 | 0.0033 |
| 9 | 6.9939 | 6.9947 | -0.0008 |
| 10 | 7.4955 | 7.5006 | -0.0051 |
| 11 | 7.9899 | 8.0065 | -0.0166 |
| 12 | 8.4870 | 8.5123 | -0.0253 |

Check:

$$
\sum e_i \approx 0
$$

---

## 7. Residual Plot (Semi-Log Model)

Residuals are:
- small  
- centered at 0  
- no systematic pattern  

This supports the semi-log model.

---

## Interpretation

$$
\widehat{\log(y)} = 2.4418623 + 0.5058684x
$$

Exponentiating:

$$
y \approx e^{2.4419} e^{0.5059x}
$$

Growth factor:

$$
e^{0.5059} \approx 1.658
$$

So algae concentration increases by about **66% per day**.

---

## Summary

- Original model: poor fit, structured residuals  
- Semi-log model: linear pattern, well-behaved residuals  
- Semi-log transformation is sufficient 
