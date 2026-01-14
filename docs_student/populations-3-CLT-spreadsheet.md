<h1 id="populations-and-samples">Populations and Samples</h1>
<h1 id="central-limit-calculation">Central Limit Calculation</h1>
<p>We want to use the CalEnviroScreen data and the central limit theorem
to see how likely it is that a factor influences an outcome in the
data.</p>
<p>We can look at the case of asthma and pollution. We can take a sample
of census tracts with high pollution and compare the means of those
asthma measurements to the overall mean. We then use the central limit
theorem to see how likely we were to see that mean at random.</p>
<h1 id="spreadsheet-implementation">Spreadsheet Implementation</h1>
<p>When we have a large data set like the CalEnviroScreen data, we want
to use a spreadsheet to compute the data.</p>
<p>We start with the strategy and then move on to the spreadsheet
implementation.</p>
<h1 id="steps">Steps</h1>
<ul>
<li>Identify measurement column (the population)</li>
<li>Compute mean and standard deviation of measurement column</li>
<li>Identify criteria for your subpopulation</li>
<li>Select this subpopulation using spreadsheet commands</li>
<li>Determine how many census tracts are in the subpopulation</li>
<li>Use the number of census tracts to find the standard error</li>
<li>Compute the mean of the subpopulation</li>
<li>Compute the effect size from the subpopulation and overall
population means</li>
<li>Compare the effect size to the standard error to determine the
likelihood</li>
</ul>
<h1 id="common-functions">Common functions</h1>
<ul>
<li>Mean or average <code>=average(range)</code></li>
<li>Gives the percentage of values below <code>value</code> in the range
of data <code>=percentrank(range, value)</code></li>
<li>Gives the value at which <code>percentile</code> of the data is
below that value <code>=percentile(range, percentile)</code></li>
<li>Median <code>median(range)</code></li>
<li>Standard Deviation <code>stdev(range)</code></li>
<li>Range of data <code>A1:A10</code></li>
<li>Range of data (entire column) <code>A:A</code></li>
<li>Range of data from another sheet <code>SheetName!A:A</code></li>
<li><code>={data!A:A}</code> gets an entire column from other sheet/tab
from a command in one cell</li>
<li>take average of entire population: <code>average(data!W:W)</code>
for column W</li>
<li>take <code>stdev(data!W:W)</code> of entire pop for column W</li>
</ul>
<h1 id="selecting-the-subsample">Selecting the subsample</h1>
<p>Here you need to select certain data for computation based on the
value of some other piece of associated data.</p>
<p>There are several ways to do this:</p>
<ul>
<li>you could sort your data (on say, pollution) and then find the range
of asthma data corresponding to your area of interest</li>
<li>you can instruct the computer to select data under a certain
condition</li>
</ul>
<h1 id="google-sheets-query-language">Google Sheets Query Language</h1>
<p>We can select a subpopulation from a column of spreadsheet data in
Google Sheets using the query language. Here we tell the computer to
give us data from column A according to the value of column B.</p>
<p><code>=query(data!A:BT, "select A where B &lt; 10")</code></p>
<ul>
<li><code>=query</code> is the command</li>
<li><code>data!</code> tells the computer to look at the data sheet
<ul>
<li>if your sheet name has spaces in it, you’ll need to put the sheet
name in single quotes (’’)</li>
</ul></li>
<li><code>A:BT</code> says use columns A through BT</li>
<li><code>select A</code> says take values from column A</li>
<li><code>where B &lt; 10</code> says to take those values from where
column B is less than 10</li>
</ul>
<h1 id="advanced-spreadsheet-technique">Advanced Spreadsheet
Technique</h1>
<p>You can place a column value in a cell and use it to construct the
formulas above.</p>
<ul>
<li>If you want to use a cell as part of a range we use
<code>=INDIRECT()</code></li>
<li>If you want to create a string based on cells we use
<code>=CONCATENATE()</code></li>
<li>There is also a shortcut format: <code>"&amp;D1$"</code> to use a
cell in the query</li>
</ul>
<h1 id="split-apply-combine">Split Apply Combine</h1>
<p>What we are doing is related to a useful computation technique called
Split-Apply-Combine.</p>
<p>We split the data into parts, apply a mathematical function to each
part, and combine the results.</p>
<p>In our example we are splitting out the sample, applying the mean and
counting the sample, and using it to determine the probability of
observing our result.</p>
<figure>
<img src="./figures_static/statistics/split-apply-combine.png"
style="width:75.0%" alt="Split-Apply-Combine" />
<figcaption aria-hidden="true">Split-Apply-Combine</figcaption>
</figure>
<figure>
<img src="./figures_static/statistics/split-apply-combine.jpg"
style="width:75.0%" alt="Split-Apply-Combine" />
<figcaption aria-hidden="true">Split-Apply-Combine</figcaption>
</figure>
