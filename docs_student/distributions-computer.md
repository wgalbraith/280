<h1 id="computer-tools">Computer Tools</h1>
<p>We can compute the statistical quantities we have seen before using a
variety of computer tools.</p>
<h2 id="spreadsheets">Spreadsheets</h2>
<p>Excel and Google Sheets usually have identical functions and
syntax</p>
<ul>
<li><a
href="https://support.google.com/docs/answer/3093615"><code>AVERAGE</code></a></li>
<li><a
href="https://support.google.com/docs/answer/3094093"><code>PERCENTILE</code></a></li>
<li><a
href="https://support.google.com/docs/answer/3094095"><code>PERCENTRANK</code></a></li>
<li><a
href="https://support.google.com/docs/answer/3094021"><code>NORMDIST</code></a></li>
</ul>
<h2 id="python">Python</h2>
<ul>
<li><a
href="https://numpy.org/doc/stable/reference/generated/numpy.mean.html"><code>numpy.mean</code></a></li>
<li><a
href="https://numpy.org/doc/stable/reference/generated/numpy.percentile.html"><code>numpy.percentile</code></a></li>
<li><a
href="https://numpy.org/doc/stable/reference/generated/numpy.histogram.html"><code>numpy.histogram</code></a></li>
<li><a
href="https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html"><code>matplotlib.hist</code></a></li>
</ul>
<p>Similar functions are also available in the Pandas python
library.</p>
<h2 id="r">R</h2>
<ul>
<li><a
href="https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/mean"><code>mean</code></a></li>
<li><a
href="https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/quantile"><code>quantile</code></a></li>
<li><a
href="https://dplyr.tidyverse.org/reference/percent_rank.html"><code>percent_rank</code></a></li>
<li><a
href="https://www.tutorialspoint.com/r/r_histograms.htm"><code>hist</code></a></li>
<li><a
href="https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/Normal">Normal
Distribution</a></li>
</ul>
<h1 id="spreadsheet-histograms">Spreadsheet Histograms</h1>
<p><a
href="https://support.google.com/docs/answer/9146867?hl=en">Plotting a
histogram in Google Sheets</a></p>
<h1 id="spreadsheet-normal-distribution">Spreadsheet Normal
Distribution</h1>
<p>We can plot a normal distribution in Google Sheets using the <a
href="https://support.google.com/docs/answer/3094021"><code>NORMDIST</code></a>
function.</p>
<p>For example, we can create a column of values of the data for the
x-axis, a cell for the mean, and a cell for the standard deviation. We
can then create a column of values of the distribution.</p>
<p><code>=NORMDIST(x-value, mean, standard devation, FALSE)</code></p>
<p>Note, the <code>FALSE</code> is so that you get the distribution
function instead of the cumulative distribution function.</p>
<h1 id="sending-data-to-the-function">Sending Data to the Function</h1>
<p>Most of the functions above require many numbers to calculate the
answer so we need to send several numbers to the spreadsheet.</p>
<p>In many computer programs (Excel, Google Sheets, Python, R) you have
a function name followed by parentheses and the numbers sent to the
function are in the parentheses.</p>
<ul>
<li><code>=AVERAGE(range of numbers)</code></li>
</ul>
<p>In excel, we specify a range of numbers by the cells where the data
starts and ends. For example <code>A1:A10</code> is all the numbers
stored between cells <code>A1</code> and <code>A10</code>. To select an
entire column, we use the idiom <code>A:A</code>.</p>
<p>To calculate the average of these numbers, we type</p>
<p><code>=AVERAGE(A1:A10)</code></p>
<h1 id="selecting-data-from-another-sheet-in-the-spreadsheet">Selecting
data from another sheet in the spreadsheet</h1>
<p>Often our data is in another sheet in the spreadsheet. Here is a
function to calculate the average of that data.</p>
<p><code>=AVERAGE(datasheet!A1:A10)</code></p>
<ul>
<li><code>=</code> means do a function</li>
<li><code>AVERAGE</code> is the computer command</li>
<li><code>datasheet</code> is the name of the sheet with the data</li>
<li><code>A1:A10</code> is the chunk of data,</li>
</ul>
<!-- 

:::{.instructor}

TODO: work out all the probabilities and write out formulas

Bayesian example

The authorities have identified a suspect in a crime.
We assume that 10% of suspects identified by authorities are actually guilty.
How do the odds of guilt change if the suspect maintains their innocence?

$$P(guilt|deny) = \frac{P(innocent claim)P(guilt)}{P(innocent claim)}$$

The prior, probability of guilt, is 10%.
The evidence is their statement of innocence.
The probability of maintaining innocence is 99.8%
Probability of saying not guilty given guilt is 99.9%.

The ratio of these two very high probabilities is nearly one, so this evidence does nothing to update our priors.

|               | guilt  | innocence  | total |
|-              |-       |-           |-      |
| deny          |   99   |   899      |  998  |
| admit         |    1   |     1      |    2  |
| total         |  100   |   900      | 1000  |

TODO: run for if you get an admission of guilt.



:::

:::{.instructor}

- most of these ask students to go backwards and find
- could be good to give nice even numbers and ask to find the CDF
- this is a warmup for
- TODO: add a problem to sketch the CDF for uniform and triangular distributions using areas

We'd like to incorporate case studies that connect data distributions to spatial representations.

- possible case study: cal enviroscreen
- possible case study: red states blue states -> red counties and blue counties
- possible case study: population densities map

:::


:::{.instructor}

- It may be valuable to plot a sweep of the area and a CDF plot simultaneously in an animation.
- CDF given a value, what percent of data lies below?
- PPF give a probability, what is the value?

:::

-->
