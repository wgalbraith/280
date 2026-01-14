<h1 id="metrics">Metrics</h1>
<p>We often want to determine where we stand in relation to a
distribution. If we have an observation, is it typical or unusual for
our distribution. What percentage of the data is above or below it?</p>
<p>We use areas to determine this.</p>
<h1 id="percentile">Percentile</h1>
<p>As we ask about the relative probabilities in a distribution, we use
the percentile. The Xth percentile is the value Y at which X percent of
the data has a value below Y. We interpret this as the area below a
value on a probability distribution.</p>
<p>For example, the median is the same thing as the 50th percentile.
That is, what is the value where 50% of the data is below that
value.</p>
<p>This is useful for understanding the shape of a distribution. You may
hear the terms quartiles, quintiles, or deciles which split the data
into four, five, or ten equal sized groups.</p>
<p>The percentile will have units of the measurement of the group.</p>
<p>The 60th percentile of CalEnviroScreen asthma would be the asthma
measurement for which 60% of the asthma measurements are below that
value in the data set.</p>
<figure>
<img src="./figures_static/statistics/percentile.svg"
alt="Percentile figure" />
<figcaption aria-hidden="true">Percentile figure</figcaption>
</figure>
<!-- 
The percentile takes the relative percentage and returns the absolute value corresponding to that relative percentage. 
-->
<h1 id="relative-probability">Relative probability</h1>
<p>If you can calculate or estimate the area under the curve of a
histogram or distribution, you can predict the probability of an event
occurring.</p>
<p>For example, if we want to know the probability of a measurement
between 1 and 2 occuring, we estimate the area under the curve between 1
and 2 and divide by the total area under the curve.</p>
<h1 id="percentile-rank">Percentile Rank</h1>
<p>The percentile rank is the inverse of the percentile. It tells you
the percentage of the data that has a value below the data Y.</p>
<p>This is useful for understanding if your observation is typical or
unusual.</p>
<p>The percentile rank has no units since it is telling you the fraction
of the data below your observation.</p>
<!-- 
The percent rank takes an absolute value and returns the relative position (the percentage of data below that value) within the distribution. -->
<p>You could input your income and figure out if you are in the 99% or
the 1% using percent rank.</p>
<figure>
<img src="./figures_static/statistics/percentile-and-rank.jpg"
style="width:100.0%" alt="Percentile and Percent Rank" />
<figcaption aria-hidden="true">Percentile and Percent Rank</figcaption>
</figure>
<h1 id="computing-metrics">Computing metrics</h1>
<p>We should be able to estimate these metrics by looking at a
distribution and comparing areas. If we want precise values, we will use
a computer.</p>
<h1 id="drawing-a-histogram">Drawing a Histogram</h1>
<ul>
<li>identify source of data</li>
<li>identify what each data point will be</li>
<li>find maximum and minimum of data</li>
<li>decide on number of bins and bin ranges</li>
<li>tally data points in each bin</li>
<li>draw rectangles proportional to data points in each bin</li>
</ul>
<!-- # Cumulative Distribution Function

The Cumulative Distribution Function (CDF) adds up the areas under the curve.
(It is an integral.)
Thus, the CDF makes it very quick to see the what percentile your observation belongs to. -->
