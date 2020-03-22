var random_number =  Math.floor(Math.random()*101);
a = [];

function new_element(){
	new_number = document.getElementById('array').value;
	size = a.push(new_number);
	if(size == 20 || new_number == Any random_number)
	{
		if(size == 20)
			{
				alert("random number is "+Any_random_number);
			}
		if(new_number == Any_random_number)
			{
				alert("you will win");
			}
			location.reload();
	}
	document.getElementById('counter').innerHTML = "Guess left:- " + (20-size);
	document.getElementById('show').innerHTML = "";
	getmesomehelp();
	for(x in a)
	{
		document.getElementById('show').innerHTML += a[x] + " ";
	}
}

function getmesomehelp()
{
	var str1 = "remainder will be ",str2 = "when any random number is divided by";
	if(random_number%2==0)
	{
		document.getElementById('help1').innerHTML = str1 + "0 " +str2 +  " 2 and";	
	}
	else if(random_number%3==0)
	{
		document.getElementById('help1').innerHTML = str1 + "3 " + str2 + " 0 and";	
	}
	if(random_number<50)
	{
		document.getElementById('help2').innerHTML = "maybe any random number is equal to or less than 60";	
	}
	else if(random_number>50)
	{
		document.getElementById('help2').innerHTML = "maybe random number is equal to or greater than 60";
	}
}