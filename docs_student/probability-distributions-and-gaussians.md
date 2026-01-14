<h1 id="probability-distributions-and-gaussians">Probability Distributions and Gaussians</h1>
<p>So far, we have focused on single estimates. How much volume is this tank, how long is this room, etc. Now we ask questions about several objects at once.</p>
<ul>
<li>How tall are the students in this class?</li>
<li>How big are the classes at my university?</li>
<li>How big are the departments at my university?</li>
</ul>
<p>Here we are interested in the behavior of a single variable. Is it evenly distributed or are some values more present than others? What are the largest and smallest values?</p>
<h2 id="types-of-data">Types of Data</h2>
<ul>
<li>Nominal data has no quantitative value.
<ul>
<li>Examples include countries or genders</li>
</ul></li>
<li>Ordinal data has a number and order isn’t continuous
<ul>
<li>Example: survey question 1 for very unsatisfied, 5 for very satisfied</li>
</ul></li>
<li>Quantitative Continuous data has a numerical value and can take any value
<ul>
<li>Example: length, mass, number of people</li>
</ul></li>
</ul>
<h2 id="characterizing-a-body-of-data">Characterizing a body of data</h2>
<p>We often ask two questions about data. The first is what is the central tendency or do the data point to some sort of majority value. The second is how tightly clustered are the data. Does the data range widely?</p>
<h2 id="mean-or-average">Mean or Average</h2>
<p>A common measure of the central tendency is the mean. If we take a list of data, sum the values, and divide by the number of data we get the mean or the average.</p>
<h2 id="median">Median</h2>
<p>Another measure of the central tendency is the median. The median is the value at which half the data has a value below the median and half the data has a value above it.</p>
<h2 id="standard-deviation">Standard Deviation</h2>
<p>The standard deviation is a measure of how dense or spare the data are around the central tendency.</p>
<h2 id="histogram">Histogram</h2>
<p>A common tool for looking at single-variable (univariate) data is a histogram.</p>
<p>A histogram</p>
<ul>
<li>Shows data of a single quantitative continuous variable</li>
<li>Shows the value of that data on the x-axis</li>
<li>Divides the x-axis into evenly spaced bins</li>
<li>On the y-axis shows the number of values in each bin</li>
</ul>
<figure>
<img src="./figures/statistics/state-area-histogram.png" alt="State Areas" /><figcaption aria-hidden="true">State Areas</figcaption>
</figure>
<figure>
<img src="./figures/statistics/state-population-histogram.png" alt="State Populations" /><figcaption aria-hidden="true">State Populations</figcaption>
</figure>
<h2 id="probability-distribution">Probability Distribution</h2>
<p>A probability distribution is a model that explains the relative probability of different events happening. The probability distribution is an ideal mathematical model. The real world doesn’t fit it exactly, but the model provides lots of practical power.</p>
<p>The x-axis is the value of a measurement and the y-axis is the relative frequency.</p>
<p>The area under the curve of a (normalized) probability distribution is exactly one.</p>
<p>The probability of a measurement occurring between two intervals is the area under the curve between those two intervals.</p>
<p>These probability distributions are models just like a rectangle or a circle. This probability distribution is usually a mathematical function.</p>
<p>For example, the gaussian distribution is given by</p>
<p><span class="math display">f = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x-\mu)^2/\sigma^2}</span></p>
<p><img src="./figures/Normal_Distribution_PDF.svg" /></p>
<p>Notice our new friend, the number e, showing up.</p>
<h2 id="relative-probability">Relative probability</h2>
<p>If you can calculate or estimate the area under the curve of a probability distribution, you can predict the probability of an event occurring.</p>
<h2 id="percentile">Percentile</h2>
<p>As we ask about the relative probabilities in a distribution, we use the percentile. The Xth percentile is the value Y at which X percent of the data has a value below Y. We interpret this as the area below a value on a probability distribution.</p>
