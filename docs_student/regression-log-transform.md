# Transforming Quantiative Variables

In the last section, we emphasized the importance of meeting the conditions for using a linear model before interpreting the results. Up until now, we have only presented this as a problem without a solution. If our data does not satisfy one or more of the conditions, it is often a solution to transform, or reexpress one, or both, of your variables so that the conditions are reasonably satisfied

# Example: Using a Semi-Log Transformation on Algae Concentration over Time

We have data on **algae concentration** in a lake over time during early bloom growth. 

---

## 1. Create a Scatter Plot of Original Data

| Days | Algae Concentration  (cells/mL)|
|-----|-----|
| 1 | 18 |
| 2 | 30 |
| 3 | 55 |
| 4 | 125 |
| 5 | 135 |
| 6 | 380 |
| 7 | 410 |
| 8 | 600 |
| 9 | 1300 |
| 10 | 1675 |
| 11 | 3000 |
| 12 | 4850 |


![Algae Plot](./figures_static/statistics/algplot.png)

The pattern is clearly nonlinear (curved upward). We can also create a residual plot to more clearly see the issue with our linear model.

To create the residual plot, we note the slope and intercept of the regression in our image above and have the least-squares equation:

$$
\widehat{AlgConc} = -1190.97 + 344.483x
$$

To create the residual plot, we recall that the residual be the observed algae concentration minus the predicted algae concentration.

$$AlgConc-\widehat{AlgConc}$$

Using Google Sheets, we can create a column for the predicted algae concentration using the formula $=344.483*A2-1190.97$ in cell C2, and a column for residuals unsing the formula $=B2-C2$ in cell $D2$. 

![Predicted](./figures_static/statistics/algpred.png)

![ResidualColumn](./figures_static/statistics/rescol.png)
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
