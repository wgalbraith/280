<h1 id="linear-regression">Linear Regression</h1>
<p> Linear regression uses data from two quantitaive variables to produce a linear equation that best describes the linear relationship between the variables. Additionally, the regression procedure provides information that describes the uncertainty that is inherent in the data. </p>
<h2>The Signal and the Noise</h2>
<p>In linear regression, we seek to describe the variation in the values of the reponse variable, $y$. This variation will be attributed to two things: </p>
  <ul>
<li>(1) The values of the explanatory variable. This is often refered to as the <b>signal</b>. The signal is the model (equation) that gives the response variable $y$ in terms of the explanatory value $x$. Our linear regression equation will take the form $\hat{y}=a+bx$ where $\hat{y}$ is a predicted response value. Notice that the value for $\hat{y}$ is being explained by the value of $x$ here, which is another way of saying that $\hat{y}$ is a function of $x$. </li> 
<li>(2) Random fluctuations in the data, sometimes called <b>sampling error</b>. This is what is sometimes  referred to as <b>noise</b>. This can be thought of as the variation that is not being explained by the model. </li> 
  </ul>
  <p>When doing regression, we are trying to separate the signal from the noise.</p>
<p>Below is a scatter plot that shows the relationship between mass and length. While there a clear a linear releationship suggested in the plot, there is also quite a bit of statistical noise.  </p>
<figure>
<img src="./figures_static/statistics/linear_model_with_noise2.png" width="750" alt="Linear data with noise" /><figcaption aria-hidden="true">
</figure>
<p>The line shown in the figure above is explaining the mass to some degree as it is clear that the mass is increasing linearly as length increases, but the data varies quite a bit above and below the line. That variation around the line is the unexplained "noise" around the "signal" (the line).</p>

# The Regression Line

As mentioned before, the regression line will take the form $\hat{y}=a+bx$, where $a$ is the intercept and $b$ is the slope of the regression line. We will often be asked to interpret the slope and/or the intercept in the context of real data.  Recall that for a linear equation $y=mx+b$, the slope $m$ is the change in the $y$-value for every unit change in the $x$-value. Here, we only need to make the small adjustment that we do not *know* the $y$ value, we are *predicting* the $y$-value. This is why we use the $\hat{y}$ notation.

## Example

Suppose we have a sample from 100 adults over 40 for whom we have collected two quantitative variables: Income (per year in &#36;1000s), and years of education beyond a high school degree.  We wish to explore the association between $Income$ and $Years$. We find a linear regression equation $$\widehat{Income}=41.5+15.6(Years)$$.  

The slope of 17.6 tells us that the model predicts an increase of &#36;15,600 per year in annual income for each additional year of education beyond a high school degree for adults over 40.  The intercept of 41.5 predicts a &#36;41,500 per year income for a person over 40 with no education beyond a high school degree.

