<h1 id="calculators-to-computers">Calculators to Computers</h1>
<p>Once we are comfortable with the basic calculator syntax, we can use
computers for calculations.</p>
<p>Computers allow much more power, speed, and scope than our
calculators.</p>
<h2 id="computing-platforms">Computing platforms</h2>
<ul>
<li>You are likely most familiar with a calculator</li>
<li>You enter a series of commands</li>
<li>When you press enter or equals, they are sent to a small computer
for evaluation</li>
<li>The results are printed for you</li>
<li>There are many computer programs that do similar things and allow
much more power and flexibility</li>
<li>Other platforms are Mathematica and spreadsheets</li>
</ul>
<h2 id="computing-languages">Computing languages</h2>
<ul>
<li>Computing languages allow us to instruct the computer to do
things</li>
<li>As our models and computations become more complex, we will want to
do things besides addition and multiplication</li>
<li>Using a computing program (Excel) or language (Python) helps us
achieve that</li>
</ul>
<h1 id="spreadsheets">Spreadsheets</h1>
<p>Spreadsheets are an ubiquitous computational tool based on placing
data and calculations in rows and columns.</p>
<ul>
<li>Each box is called a cell</li>
<li>Typing an <code>=</code> as the first character in a cell tells the
spreadsheet you are entering a formula</li>
<li>To reference a number in another cell, use the numerical row and
alphabetical column. For example second row in the Bth column would be
<code>B2</code>.</li>
<li>You can use this perform mathematics. For example
<code>=B1+B2</code> adds two numbers.</li>
</ul>
<h1 id="spreadsheet-design">Spreadsheet Design</h1>
<p>There are certain considerations when creating spreadsheets so that
they are useable by others</p>
<ul>
<li>Your reader is expecting things to flow from left to right and top
to bottom</li>
<li>Color coding and read-only protection help the reader enter data
without disturbing calculations</li>
<li>Clearly labeling cells</li>
<li>Creating legible equations</li>
<li>Explaining the strategy and rationale</li>
</ul>
<h2 id="variables">Variables</h2>
<p>To make the details of a computation more clear, we can use readable
names for our numbers and then use the names in the calculation.</p>
<p>This makes it possible to more easily communicate the details of our
calculation to others.</p>
<pre><code>power = 100
time = 30
energy = power * time</code></pre>
<p>This makes the intention of the calculation more clear to the
reader.</p>
<p>In our language (python) the computer decides how to interpret each
variable by what you put inside it.</p>
<p>This is possible in spreadsheets.</p>
<p>In spreadsheets, each box is a variable that uses the row and column
(battleship notation) to refer to it. These boxes can hold either
numbers or calculations.</p>
<h2 id="functions">Functions</h2>
<p>You have often used functions on your calculator and you have
encountered the idea in your math classes.</p>
<p>A function takes a number or numbers as an input and provides a
number or numbers as an output.</p>
<p>You have probably used sine or cosine functions on your
calculator.</p>
<p>You may want to make your own function for a calculation that you do
frequently. The syntax for this often varies but the idea is usually the
same.</p>
<pre><code>m = 1
b = 10
f(x) = m * x + b
f(5) =&gt; 15</code></pre>
<h2 id="units">Units</h2>
<p>Computation of physical quantities often relies on the human to
define and use a consistent set of units of measurement. There are tools
that allow us to add physical quantities to our calculations, but they
are not as rich as I could like them to be. One good practice is to
explicitly include the unit name in the variable name.</p>
<pre><code>power_watt = 100
time_sec = 30
energy_joule = power_watt * time_sec</code></pre>
<h2 id="units-1">Units</h2>
<p>There are also computer libraries that allow you to include units in
the definition of your variables.</p>
<p>Pint python library</p>
<pre><code>%pip install pint
u = pint.UnitRegistry()
power = 100 * u.watt
time = 100 * u.sec
energy = power * time</code></pre>
<p>The energy will now have units. These libraries are also able to
convert these units.</p>
<h1 id="spreadsheet-conventions">Spreadsheet Conventions</h1>
<p>When we are creating spreadsheets your audience expects certain
conventions to be followed</p>
<ul>
<li>Computations usually flow from left to right or from top to
bottom</li>
<li>Cells that are to be changed by the user are clearly marked</li>
<li>Cells that should not be changed by the user are clearly marked</li>
<li>The details of the computation should be relatively easy to see</li>
</ul>
<h2 id="try-jupyter">Try Jupyter</h2>
<p>You can experiment with this library using the <a
href="https://jupyter.org/try">TryJupyter web application</a> and
launching the JupyterLab environment.</p>
<h1 id="readings">Readings</h1>
<ul>
<li><a href="https://www.w3schools.com/googlesheets/index.php">W3 Google
Sheets Tutorial</a></li>
</ul>
