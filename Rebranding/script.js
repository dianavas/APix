function callAssistant(){
	document.getElementById('sideNote').innerHTML = 'Hello there! Why don\'t you pick something that looks promising?';
}

function myAssistantAdviceWomen() {
	var r = Math.floor((Math.random() * 100) + 1);
	switch (r%6) {
    case 0:
        document.getElementById("adv1").style.backgroundImage = "url('wow.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Your inner new-yorker fashionista deepest desire.';
		document.getElementById('callAssisPara').innerHTML = 'Life is too short to dress boring.';
		document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
        break;
    case 1:
        document.getElementById("adv2").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'A symbol of power, grace and elegance.';
		document.getElementById('callAssisPara').innerHTML = 'Worn by Queen Mary the 5th at a Charity Ball, this dimamond crown will never be out of style.';
        break;
    case 2:
        document.getElementById("adv3").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Black and elegant with soft bow on the side, this is the best choice if you\'re planning to visit London any time soon';
		document.getElementById('callAssisPara').innerHTML = 'Or if you\'re feeling nostalgic. Or you binge-watch Downton Abbey in your spare time';
        break;
    case 3:
        document.getElementById("adv4").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'A little bit of mistery. A lot of elegance.';
		document.getElementById('callAssisPara').innerHTML = 'This is definitely a statement piece. Fitted for parties, fancy dinners, horse racing watching or just shocking your friends and family.';
        break;
    case 4:
        document.getElementById("adv5").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Obsessed with chinese culture? You should be. They have best hairstyles.';
		document.getElementById('callAssisPara').innerHTML = 'Now, before you go to your stylist and ask him to make your hair look like this, see here how it would look on you. It\'s not for everyone, you know?';
        break;
    case 5:
        document.getElementById("adv6").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Never hurts having this one in your closet!';
		document.getElementById('callAssisPara').innerHTML = 'Go ahead...See how it would look to be sun-worry-wrinkle-free!';
        break;
	}
}

function myAssistantAdviceMale() {
	var r = Math.floor((Math.random() * 100) + 1);
	switch (r%6) {
    case 0:
        document.getElementById("adv1").style.backgroundImage = "url('wow.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Passionate of racing? Say no more.';
		document.getElementById('callAssisPara').innerHTML = 'Who said that being safe isn\'t sexy.';
		document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
        break;
    case 1:
        document.getElementById("adv2").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Look outside. Winter isn\'t going anywhere.';
		document.getElementById('callAssisPara').innerHTML = 'Neither are army-green beanies. They never go out of style.';
        break;
    case 2:
        document.getElementById("adv3").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Don\'t pick this one if you don\'t wanna stand out!';
		document.getElementById('callAssisPara').innerHTML = 'We get some Indiana Jones, adventure vibes with this, don\'t you?';
        break;
    case 3:
        document.getElementById("adv4").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Here you go: your next Halloween costume.';
		document.getElementById('callAssisPara').innerHTML = 'You\'re welcome!';
        break;
    case 4:
        document.getElementById("adv5").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv6").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Just your basic Iluminati souvenires.';
		document.getElementById('callAssisPara').innerHTML = 'I suggest you don\'t enquire more if you wanna keep your head.';
        break;
    case 5:
        document.getElementById("adv6").style.backgroundImage = "url('wow.png')";
        document.getElementById("adv2").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv1").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv4").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv5").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById("adv3").style.backgroundImage = "url('slider-gradient.png')";
		document.getElementById('callAssisHeader').innerHTML = 'Yea, you\'re a guy. Still, it never hurts having this one in your closet!';
		document.getElementById('callAssisPara').innerHTML = 'Go ahead...See how it would look to be sun-worry-wrinkle-free!';
        break;
	}
}