<p>If our data is in digital form, we can use computational techniques to determine if it is exponential or not.</p>
<h1 id="ratios">Ratios</h1>
<p>Using a computer we can take the ratio of neighboring points in the data. If these ratios are all the same or very similar, the data is behaving exponentially.</p>
<p>In a spreadsheet we usually use the numbers in a single column and two rows. Something like <code>= B3/B2</code>.</p>
<h1 id="fitting">Fitting</h1>
<p>Alongside our measured data, we can plot an exponential function and adjust the parameters until it is makes a good approximation of our measured data. If it follows it closely, our data is behaving exponentially.</p>
<p><span class="math display"> y = A e^{bx} </span></p>
<p>We adjust <span class="math inline">A</span> and <span class="math inline">b</span> until it fits the data.</p>
<p>In a spreadsheet, we would place <span class="math inline">A</span> and <span class="math inline">b</span> in a cell, create a column of data with our function, plot both, and adjust <span class="math inline">A</span> and <span class="math inline">b</span>.</p>
<h1 id="logarithmic-scales">Logarithmic Scales</h1>
<p>Spreadsheet programs have the ability to plot either the x-axis, the y-axis, or both axes using a logarithmic scale. If you plot your data with a linear y-axis and a logarithmic x-axis, your data will lie along a straight line.</p>
<!-- note that if you have data of the form $y = x^b$ and you plot both on a log scale, you will get a straight line. -->
