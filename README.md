# AngularJs - Assignment 1: Lunch-Checker
<hr>
<h1>Application Demo : </h1>
https://yogesh002.github.io/AngularJs_Project/ModuleOne_solution/

<pre>
As a part of this project, we are supposed to build an application that contains:
    <bold>a)</bold>A text-box where user enters food items e.g -1,2,3 etc. <br>
    <bold>b)</bold>Then, the user clicks "Check if Too Much" button.<br>
    <bold>c)</bold>Process that input data then display the messages accordingly.<br>
</pre>

Once the user clicks the button, the input validation takes place. The items separated by comma "," is separated and processed. If the user does not enter any item i.e only white space is present, then we do not consider that item and proceed to check another item. If the number of items is less than 3, the user can see <strong>"Enjoy!"</strong> message. If the number of items is more than 3, then the user gets <strong>"Too Much!"</strong> message. However, if the user does not enter any item, then he gets <strong>"Please enter data first"</strong> message in the screen.

*****************************************************************************************************************************************************

# AngularJs - Assignment 2: Shopping List Check-Off Application
<hr>
<h1>Application Demo : </h1>
https://yogesh002.github.io/AngularJs_Project/ModuleTwo_solution/

<pre>
As a part of this project, we are supposed to build an application that contains:

    <bold>a)</bold>Two lists : one to display items available to buy and another to display the item user just bought <br>
    <bold>b)</bold>A bought button lies next to available items. When the user clicks the button, the selected item no longer will be available in buy section and moves to bought section<br>
    <bold>c)</bold>If all items are bought - "All items are bought" message needs to be displayed and if no item is bought, "Nothing bought yet" needs to be displayed<br>

</pre>

<h2>Following important implementations are required:</h2>
<ul>
	<li>Two separate controllers that communicate with each other using <strong>controller as</strong> syntax.</li>
	<li>A <strong>Custom Angular service</strong> to pass data between controllers. This service is declared in <strong>Singleton</strong> approach.</li>
	
</ul>

*****************************************************************************************************************************************************

# AngularJs - Assignment 3: Searching menu item description from resutant server REST API.
<hr>
<h1>Application Demo : </h1>
https://yogesh002.github.io/AngularJs_Project/ModuleThree_solution/

<pre>
As a part of this project, we are supposed to build an application that contains:

    <bold>a)</bold>A text box to allow user enter an item e.g- chicken and a button to search<br>
    <bold>b)</bold>Make <strong>http request </strong> to the resturant server REST API <br>
    <bold>c)</bold>Pull all the munu description using the keyword user entered. <br>

</pre>

<h2>Following important implementations are required:</h2>
<ul>
	<li><strong>$http service</strong>
	<li><strong>Custom Directive</strong></li>
	<li><strong>Isolate Scope</strong></li>
</ul>
