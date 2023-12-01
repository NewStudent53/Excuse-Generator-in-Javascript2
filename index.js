function excuseGen() {

    var Character = ['jogger', 'racoon', 'driver', 'comedian', 'pincone'];
    var Action = ['took', 'threw', 'yelled at', 'stole', 'bit'];
    var Object = ['homework', 'toe', 'car', 'shoe'];

    var C1 = Character[Math.round(Math.random()*(Character.length-1))];
    var C2 = Action[Math.round(Math.random()*(Action.length-1))];
    var C3 = Object[Math.round(Math.random()*(Object.length-1))];

	document.getElementById('TheExcuses').innerHTML = '<div>A ' + C1 + ' ' + C2 + '<br> my ' + C3 + '.</div>'
}
