<h1 id="measures of center">Measures of Center and Variation</h1>

<p>Earlier in our course, we had some experience making quantitative estimates.  For example, we attmepted to estmate the total surface area of hairs on a human head, the mass of the air in our classroom, etc. 
We made these estimates based on <b>theoretical</b> assumptions, e.g. how many hairs are on a human head, the volume of the room, etc. These estimates are theoretical because no attempt was made to collect any actual information
concerning our estimates.</p>
  
<p>We will now turn our attention to estmimates based on information that has been collected, commonly called <b>data</b>.</p>

<p>Another way our estimates will differ in this section, is that we will be making quantitative estimates about a single value that describes a group of cases. For example:</p>
<ul>
<li>How tall are the students in this class?</li>
<li>How big are the classes at my university?</li>
<li>How big are the departments at my university?</li>
</ul>
<p>The examples above are all describing a single quantitative variable. When we seek to understand a single quantitative variable, there are two general questions that are concerned with:</p>
<ul>
<li>What is the "typical" value in the data? We call this a <b>measure of center</b>, or a <b>measure of central tendency</b> </li>
<li>How much variation is there in the values in the data?</li>
</ul>

<p>The typical value will usually be represented by the mean (average) or the median (the center value). The choice of which is more appropriate depends on the <b>shape of the distribution</b>. Is the data uniformly distributed 
or are some values occur more than the others? If there are values that occur more than the others, for which values are they more concentrated?</p>

<p>The question of how the variation in the will be measured will largely be decided based on the shape of the distribution. It may involve the <b>standard deviation</b>, the <b>inter-quartile range (IQR) </b>, or simply the <b>range</b>
of the data.

</p>


<h2 id="characterizing-a-body-of-data">Characterizing a body of
data</h2>

<p>Let’s say this figure represents a group of organisms. How could we
answer the question, “How big are the organisms”?</p>
<figure>
<img src="./figures_static/statistics/circles_grid.png" width="300"
alt="Array of objects" />
<figcaption aria-hidden="true">Array of objects</figcaption>
</figure>
<h2 id="mean-or-average">Mean or Average</h2>
<p>A common measure of the center is the mean. If we take a
list of data, sum the values, and divide by the number of data we get
the mean or the average.</p>
<h2 id="median">Median</h2>
<p>Another measure of the central tendency is the median. The median is
the value at which half the data has a value below the median and half
the data has a value above it.</p>
<h2 id="standard-deviation">Standard Deviation</h2>
<p>The standard deviation is a measure of how far the typical data value is from the mean.</p>
<h2 id="Interquartile Range">Interquartile Range</h2>
<p>Quantitave data is often divided up by quartiles. This entails dividing the cases into four equal sized groups. The result of this quartering is often described by the 5-number summary (Minimum, $Q1$ ,Median, $Q3$ ,Maximum) where $Q1$ and $Q3$ represent the 25th percentile and 75th percentile of the data, repectively. To compute the Interquartile range we compute $Q3-Q1$. </p>
<h2 id="histogram">Histogram</h2>
<p>A common tool for looking at single-variable (univariate) data is a
histogram.</p>
<p>A histogram</p>
<ul>
<li><p>Shows data of a single quantitative variable</p></li>
<li><p>Shows the value of that data on the $x$-axis</p></li>
<li><p>Divides the $x$-axis into evenly spaced bins</p></li>
<li><p>On the $y$-axis shows the number of values in each bin</p></li>

<h2>Example: Populations of US States</h2>
<p>Below is a histogram showing the population of all 50 states in millions. Each bin has a width of 2.5 million. The bins represent the intervals (0,2.5),(2.5,5),(7,7.5)...(37.5,40). The height on the vertical axis shows the number of states that have a population in a particular bin. For example, there are 15 states with a population between 0 and 2.5 million people.</p>
<figure>
<img src="./figures_static/statistics/statespop.png"
alt="State Populations" />
</figure>
<p>Note: The shape of the distribution above is called right-skewed. A right-skewed distribution is characterized by a concentration of values on the lower end of the distribution with a "tail" indicating fewer number of cases as the values increase.<\p>
<p>Below our some summary statistics:</p>
<figure>
<img src="./figures_static/statistics/sumstats.png"
alt="Summary Statistics" />
</figure>
<p>Note that the mean does not do a great job at describing the population of a typical state since it is closer to Q3 than it is to the median, This is largley due to the influence of the right-skew and the large outliers (the 4 states with much larger populations than the other 46). In this case, we would usually rely on the median to describe the population of a typical state.</p>
