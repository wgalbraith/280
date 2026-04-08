# Comparing a Quantitative Variable across Categories (Groups)

## Comparing Means from Two Independent Groups
Sometimes we want to know if a quantitative variable is being influenced by a categorical variable. Typically, we will do this by comparing the means across the categories, or groups, implied in a categorical variable.
While it is possible to perform this across multiple categories, we will focus on the case where we are comparing means across two groups. Further, we will make this comparison by looking at *the difference in means* between the groups.


### Example
Suppose we have data on all olympic athletes from the 2024 olympic games and we want to know if there is a difference in the average pulse rate for olympic swimmers and olympic track atheletes (runners). The categorical variable would be the type of athlete (track or swimmers) and the quantitative variable would be pulse rate. To compare the pulse rates between the groups (track and swimmers), we could compute the a difference in their mean pulse rates. Specifically, if we let the mean pulse rate for swimmers be $\bar{x}_S$ and the mean for track athletes be $\bar{x}_T$ our difference of mean calulation would be $$\bar{x}_S-\bar{x}_T$$

Suppose that the average pulse rate for swimmwers was found to be $\bar{x}_S=45.8$ and the average pulse rate for track athletes was $\bar{x}_t=49.7$ beats per minute, our difference of mean calulation would be $$\bar{x}_S-\bar{x}_T=45.8-49.7=-3.9$$ 

This implies that he swimmwers had a pulse rate of 3.9 beats per minute less than the track athletes.

Even though we are using two means in our calculation, we should remember a **difference of means is a single value**. If our difference on means is significantly different from 0, this would provide evidence that the group the athlete is in 
is associated with pulse rate. Whether our value of $-3.9$ is significantly far enough away from 0 to claim that there is an association between the type of athlete and pulse rate is a question we will address in Chapter 7.

## Comparing Quantitative Distributions from Two Independent Groups

While the mean is often the most popular statistic to compare across groups, it often either an incomplete metric, or worse a misleading metric. It can be incomplete in the sense that it only gives a measure of central tendency. It includes no information about variablilty or the shape of the underlying data. We can visualize these relationships using the side-by-side plots. These side-by-side plots may be dot plots, histograms, or boxplots 

### Example The data shown below comparing hours of TV watched per week for males compared to females. Note how much more information we are getting than simply comparing their means.


![SSdot](./figures_static/statistics/ssdot.png)
![SShist](./figures_static/statistics/sshist.png)
![SSbox](./figures_static/statistics/ssbox.png)

Note: The asterisks in the boxplots indicate these values are considered outliers in their respective groups.


We can also compare the summary statistics across groups (below)

![SSstat](./figures_static/statistics/ssstat.png)

In the example above, we should condier the difference of means $\bar{x}_M-\bar{x}_F=7.620-5.237=2.383$ as just one piece of evidence when comparing groups.  A complete analysis should always include discussion of the distributions and measures of variability, e.g. standard deviations, ranges, and the IQRs for each group.
