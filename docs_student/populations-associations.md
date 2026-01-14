<h1 id="statistical-evidence-of-associations">Statistical Evidence of
Associations</h1>
<p>A key objective of environmental data analysis is to provide evidence
of associations between different variables.</p>
<p>A question we often ask is, “What is the probability I would see my
evidence if the association did not exist?”. This is the question that a
p-value answers.</p>
<h1 id="types-of-associations">Types of Associations</h1>
<ul>
<li>If we are investigating a binary cause and a continuous effect, we
use techniques like the central limit theorem, a t-test, or others.</li>
<li>If we are investigating a continuous cause and a continuous effect,
we use techniques like linear regression.</li>
</ul>
<h1 id="binary-cause-continuous-effect">Binary Cause, Continuous
Effect</h1>
<p>As an example, our <strong>binary cause</strong> is whether or not a
drug was taken. Our <strong>continuous effect</strong> is the duration
of illness symptoms. We measure our <strong>population</strong> of all
folks illness symptom durations. Our <strong>sample</strong> is the
folks given the drug (there are n folks in the sample). Our
<strong>sample distribution</strong> is the distribution of the means of
the illness symptom durations if we randomly select N folks over and
over. Each of the data points is a single person.</p>
<p>Our statistical test is how likely it is to see the difference
between the mean illness duration in our sample, and the population
mean.</p>
<p>The central limit tells us that the mean of the sample distribution
is the same as the population distribution and that the standard
deviation of the sample distribution is the standard deviation of the
population divided by the square root of n.</p>
<h1 id="continuous-cause-continuous-effect">Continuous Cause, Continuous
Effect</h1>
<p>As an example, our <strong>continuous cause</strong> is the amount of
fertilizer applied to a crop. Our <strong>continuous effect</strong> is
the yield of the crop. We expect to see an increase in the crop yield
with an increase in the amount of fertilizer.</p>
<p>We create a scatter plot with the amount of fertilizer applied on the
x-axis and the yield of the crop on the x-axis. Each of the data points
is an area of crop (different crop areas have different fertilizer
amounts).</p>
<p>The technique of linear regression finds the linear model that best
predicts the data and reports the slope and y-intercept. Linear
regression tools also report the probability that you’d see your slope
if there was no association (p-value) and the amount of variability in
the data explained by the linear model (R-squared).</p>
<p>Linear regression models our data with a linear equation, y=mx+b.