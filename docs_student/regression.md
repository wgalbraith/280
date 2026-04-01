<h1 id="linear-regression">Linear Regression</h1>
<p> Linear regression uses data from two quantitaive variables to produce a linear equation that best describes the linear relationship between the variables. Additionally, the regression procedure provides information that describes the uncertainty that is inherent in the data. </p>
<h2>The Signal and the Noise</h2>
<p>In linear regression, we seek to describe the variation in the values of the reponse variable, $y$. This variation will be attributed to two things: </p>
  <ul>
<li>(1) The values of the explanatory variable. This is often refered to as the <b>signal</b>. The signal is the model (equation) that gives the response variable $y$ in terms of the explanatory value $x$. Our linear regression equation will take the form $y=a+bx$ where $y$ is a predicted response value. Notice that the value for $y$ is being explained by the value of $x$ here. </li> 
<li>(2) Random fluctuations in the data, sometimes called <b>sampling error</b>. This is what is sometimes  referred to as <b>noise</b>. This can be thought of as the variation that is not being explained by the model. </li> 
  </ul>
  <p>When doing regression, we are trying to separate the signal from the noise.</p>
<p>Below is a scatter plot that shows the relationship between mass and length. While there a clear a linear releationship suggested in the plot, there is also quite a bit of statistical noise.  </p>
<figure>
<img src="./figures_static/statistics/linear_model_with_noise2.png" width="750" alt="Linear data with noise" /><figcaption aria-hidden="true">Linear data with noise</figcaption>
</figure>

