# Linear Scales

> There are these two young fish swimming along, and they happen to meet an older fish swimming the other way, who nods at them and says, “Morning, boys. How’s the water?” And the two young fish swim on for a bit, and then eventually one of them looks over at the other and goes, “What the hell is water?” -- David Foster Wallace

The linear scale is so common that we may not realize what it is.

When we are reading most graphs and maps, there is a linear, proportional relationship between the distance on the page or screen and the data.

Examples:

- On a map, there is a bar showing the scale length of a mile and a kilometer.
- On a graph, there is a relationship between the length on the page and the data.

![Linear Scale for Units](./figures_static/linear/scale-examples.png)

The scale we are using is 1 pound per 2 centimeters on the page.
We can write this as 

$$\frac{1\;\textrm{pound}}{2\;\textrm{page cm}}$$

We can convert this scale ratio to the scale ratio for kilograms.

$$\frac{1\;\textrm{pound}}{2\;\textrm{page cm}} \cdot
\frac{\textrm{kg}}{2.2\;\textrm{pound}} = \frac{1\;\textrm{kg}}{4.4\;\textrm{page cm}} $$

We see this is correct on the scale.

# Unit Conversions and Slopes

Our eyes can interpret slopes as different when they are the same.

In both of these graphs, the slope is 2.2 pounds per kilogram, but because of the different scale (pixels to pound), they look different. 
![Different Slopes](./figures/kg-pound.svg){ width="800" }


# Linear Scale and Music

This is a linear scale.
Note that "so" falls at the midpoint (arithmetic mean) between do and do.
Also, that "mi" falls at the midpoint between do and so and that re is at the midpoint between do and mi.

Because of these mathematical relationships, these notes are pleasing to our ears.

![Linear Scale of Musical Notes](./figures_static/linear/music-scale.png)


<!-- 

TODO: this needs to be clarified/improved/motivated

# Linear scale as a function

For the linear scale, the distance represents addition by the number.

If $l_c$ = 4 cm and represents adding by n=10, we can say:

$$ f(l) = n \cdot \frac{l}{l_c} $$

Note that if we divide two numbers, the result is the same as dividing the lengths from zero of each of those two numbers.

$$ \frac{y_1}{y_2} 
= \frac{f(l_1)}{f(l_2)} 
= \frac{n \cdot l_1 / l_c}{n \cdot l_2 / l_c} = \frac{l_1}{l_2} $$

TODO: solve for l as a function of f(l)

- multiplying a length by a number represents multiplication
- dividing two lengths represents division
-->

# DBH Tape

We are placing two scales on our line:

- circumference centimeter scale
    - this scale directly measures the circumference
- diameter centimeter scale
    - this scale "calculates" the diameter

The circumference scale is a 1-to-1 scale so

$$ 1 \textrm{ circumference scale centimeter unit} = 1 \textrm{ paper cm} $$

Because $C = \pi d$, we have.

$$ 1 \textrm{ circumference scale centimeter unit} = \pi \cdot 1 \textrm{ diameter scale unit} $$

To determine the distance on the page between the zero and the one on the diameter centimeter scale, we convert from

- diameter centimeter scale to circumference centimeter scale
- from circumference centimeter scale to paper centimeters

$$ 1 \textrm{ dia cm scale} \cdot \frac{1 \textrm{ circ cm scale}}{\pi \cdot 1 \textrm{ dia cm scale}} \cdot \frac{1 \textrm{ paper cm}}{1 \textrm{ circ cm scale}} = 0.318 \textrm{ cm} $$