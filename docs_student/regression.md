<h1 id="linear-regression">Linear Regression</h1>
<p>Linear Models with Gaussian Noise</p>
<p>Here we combine our linear model with uncertainty. Even though data may not fall on a perfect line, we can uncover an underlying linear relationship even if the data have a lot of variation.</p>
<figure>
<img src="./figures_static/statistics/linear_model_with_noise.png" alt="Linear data with noise" /><figcaption aria-hidden="true">Linear data with noise</figcaption>
</figure>
<p>Before we have taken a population and broken it into two samples and looked for differences between the distributions. These concepts and techniques allow us to take a population and sort it according to a variable and see how the distribution varies.</p>
<!-- ![Linear data with noise and violin plot]() -->
<h1 id="questions">Questions</h1>
<p>By finding the underlying slope in the data, we can ask what is the average change in a measurement based on a change in the other measurement.</p>
<p>By measuring the variation in the data around that line, we can ask how much of the measurement is explained by the linear relationship and how much of the measurement can’t be explained yet.</p>
<h1 id="definitions">Definitions</h1>
<h2 id="scatter-plot">Scatter Plot</h2>
<p>A plot to visualize data in terms of an independent and dependent variable.</p>
<h2 id="independent-variable">Independent Variable</h2>
<p>This is the variable that we can “control” in an experiment or study.</p>
<h2 id="dependent-variable">Dependent Variable</h2>
<p>This is the variable that measures the outcome in our experiment or study.</p>
<h2 id="linear-regression-1">Linear Regression</h2>
<p>The mathematical technique used to determine the linear model that “best” fits a set of data. In linear regression, we have one independent variable and one dependent variable.</p>
<p>This fit is quantified by minimizing the areas of the squares that fit between the data and the line as represented in the following link.</p>
<p><a href="https://www.geogebra.org/m/JsFmFEg6">Least Squares Visualization</a></p>
<h2 id="anscombes-quartet">Anscombe’s Quartet</h2>
<p>Note that data can have the same regression results but be very different in shape. We must be sure that our data match our assumptions.</p>
<p><a href="https://en.wikipedia.org/wiki/Linear_regression#/media/File:Anscombe&#39;s_quartet_3.svg">Wikipedia SVG</a></p>
<p><a href="https://www.autodesk.com/research/publications/same-stats-different-graphs">Datasaurus Dozen</a></p>
<h2 id="multiple-linear-regression">Multiple Linear Regression</h2>
<p>This is a regression model that has multiple independent variables and one dependent variable.</p>
<p>These models help us determine the relative contribution of these multiple independent variables.</p>
