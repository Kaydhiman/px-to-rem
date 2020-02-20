//convert PX to REM

document.querySelector('.convert').addEventListener('click', function(){
	var rootUnit = document.querySelector('.rootUnit').value;
	var elementUnit = document.querySelector('.elementUnit').value;
	var finalUnit = (rootUnit / elementUnit);
	document.querySelector('.resultShower').textContent = finalUnit + 'rem';
});

//comvert PX to EM
document.querySelector('.convertToEm').addEventListener('click', function(){
	var ParentUnit = document.querySelector('.ParentUnit').value;
	var childUnit = document.querySelector('.childUnit').value;
	var finalUnit = (childUnit / ParentUnit);
	document.querySelector('.resultShower').textContent = finalUnit + 'em';
});