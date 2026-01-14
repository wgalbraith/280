<h1 id="histograms-and-distributions">Histograms and Distributions</h1>
<p>So far, we have focused on single estimates. How much volume is this
tank, how long is this room, etc. Now we ask questions about several
objects at once.</p>
<ul>
<li>How tall are the students in this class?</li>
<li>How big are the classes at my university?</li>
<li>How big are the departments at my university?</li>
</ul>
<p>Here we are interested in the behavior of a single variable. Is it
evenly distributed or are some values more present than others? What are
the largest and smallest values?</p>
<h2 id="characterizing-a-body-of-data">Characterizing a body of
data</h2>
<p>We often ask two questions about data. The first is what is the
central tendency or do the data point to some sort of majority value.
The second is how tightly clustered are the data. Does the data range
widely?</p>
<p>Let’s say this figure represents a group of organisms. How could we
answer the question, “How big are the organisms”?</p>
<figure>
<img src="./figures_static/statistics/circles_grid.png" width="300"
alt="Array of objects" />
<figcaption aria-hidden="true">Array of objects</figcaption>
</figure>
<h2 id="mean-or-average">Mean or Average</h2>
<p>A common measure of the central tendency is the mean. If we take a
list of data, sum the values, and divide by the number of data we get
the mean or the average.</p>
<h2 id="median">Median</h2>
<p>Another measure of the central tendency is the median. The median is
the value at which half the data has a value below the median and half
the data has a value above it.</p>
<h2 id="standard-deviation">Standard Deviation</h2>
<p>The standard deviation is a measure of how dense or spare the data
are around the central tendency.</p>
<h2 id="histogram">Histogram</h2>
<p>A common tool for looking at single-variable (univariate) data is a
histogram.</p>
<p>A histogram</p>
<ul>
<li><p>Shows data of a single quantitative continuous variable</p></li>
<li><p>Shows the value of that data on the x-axis</p></li>
<li><p>Divides the x-axis into evenly spaced bins</p></li>
<li><p>On the y-axis shows the number of values in each bin</p></li>
<li><p>We should know what values are being counted</p></li>
</ul>
<figure>
<img src="./figures_static/statistics/state-area-histogram.png"
alt="State Areas" />
<figcaption aria-hidden="true">State Areas</figcaption>
</figure>
<p>Here we show how to go from raw data to a histogram.</p>
<figure>
<img src="./figures_static/statistics/population-raw.png"
alt="State Populations Alphabetical" />
<figcaption aria-hidden="true">State Populations
Alphabetical</figcaption>
</figure>
<p>With the data sorted we can see the median value as the one in the
middle.</p>
<figure>
<img src="./figures_static/statistics/population-sorted.png"
alt="State Populations Sorted" />
<figcaption aria-hidden="true">State Populations Sorted</figcaption>
</figure>
<figure>
<img src="./figures_static/statistics/state-population-histogram.png"
alt="State Populations Histogram" />
<figcaption aria-hidden="true">State Populations Histogram</figcaption>
</figure>
<h1 id="normal-distribution">Normal Distribution</h1>
<p>The normal distribution is a model that is a good approximation to a
histogram of data. The real world doesn’t fit it exactly, but the model
provides lots of practical power.</p>
<p>Many measurements and histograms are well-modeled by the normal
distribution.</p>
<p>The x-axis is the value of a measurement and the y-axis is the
relative frequency.</p>
<p>The area under the curve of a (normalized) probability distribution
is exactly one.</p>
<p>The probability of a measurement occurring between two intervals is
the area under the curve between those two intervals.</p>
<p>These probability distributions are models just like a rectangle or a
circle. This probability distribution is usually a mathematical
function.</p>
<p>For example, several normal distributions are shown below according to the function</p>
<p>
  <img src="./figures_static/statistics/normal.png"
       width="300"
       style="display: block; margin: 0 auto;" />
</p>
<p>
  <img src="./figures_static/statistics/normal_dist.png"/>
</p>
<p>Notice our new friend, the number e, showing up.</p>
<h1 id="probabilities">Probabilities</h1>
<p>These tools let you ask questions about how likely it is to observe
events.</p>
<p>For example, if you pick a US adult at random, how likely are they to
be 1.8 meters or taller?</p>
<!-- In the figure above, if you draw a random single sample from the population that the distribution represents, there is a 40% chance that it will be greater than the value represented by the vertical line. -->
<p><img
src="./figures_static/statistics/US-height-histogram-Jim-Frost.png" width="800"/></p>
<h2 id="types-of-data">Types of Data</h2>
<ul>
<li>Nominal (categorical) data has no quantitative value.
<ul>
<li>Examples include state of birth, blood type, political
affiliation</li>
</ul></li>
<li>Ordinal data has a number and order but isn’t continuous
<ul>
<li>Example: survey question 1 for very unsatisfied, 5 for very
satisfied</li>
</ul></li>
<li>Continuous data: data that can take any value
<ul>
<li>Example: length, mass</li>
</ul></li>
</ul>
<h1 id="imposters">Imposters</h1>
<p>There are things that look like histograms but are not.</p>
<ul>
<li>Time Series</li>
<li>Averaged Time Series</li>
<li>Bar charts with categorical data</li>
</ul>
<!-- move these to the numbers notes -->
