const model = {
    "pics": [
        {
            "imgName" : "pic1",
            "imgSrc" : "imgs/pic1.jpg",
            "imgAlt" : "Img training 1"
        },
        {
            "imgName" : "pic2",
            "imgSrc" : "imgs/pic2.jpg",
            "imgAlt" : "Img training 2"
        },
        {
            "imgName" : "pic3",
            "imgSrc" : "imgs/pic3.jpg",
            "imgAlt" : "Img training 3"
        },
        {
            "imgName" : "pic4",
            "imgSrc" : "imgs/pic4.jpg",
            "imgAlt" : "Img training 4"
        }
    ]
}

// operator object 
const octopus = {
    "carouselTimeOut" : "",
// catching wrapper
    "getWrapper" : function() {
        var wrapper = document.getElementById('wrapper');
        return wrapper;
    },
// creating img and setting position
    "createImg" : function() {
        var pic = document.createElement('img');
        pic.id = 'pic'
        return pic;
    },
// getting img from DOM or creating new one && setting wrapper persoective
    "getImg" : function() {
        var wrapper = octopus.getWrapper(); 
        if (wrapper.hasChildNodes()) {
            var pic = document.getElementById('pic');
        } else {
            var pic = octopus.createImg();
        }
        return pic;

    },
// setting correct img based on given value 'x'
    "setImg" : function(x) {
        var pic = octopus.getImg();
        var wrapper = octopus.getWrapper();
        wrapper.appendChild(pic);
        pic.setAttribute('src', model.pics[x].imgSrc);
        pic.setAttribute('alt', model.pics[x].imgAlt);
    },
// after clicking indicator clearing all intervals and wrapper, starting again from clicked indicator
    "manualSetImg" : function(index) {
        var wrapper = octopus.getWrapper();
        wrapper.innerHTML = "";
        clearTimeout(octopus.carouselTimeOut);
        octopus.setImg(index);
        octopus.carousel(index);
    },
// calling changeImg after 3s
    "carousel" : function(x) {
        octopus.carouselTimeOut = setTimeout(function() {octopus.changeImg(x)}, 3000);
    },
// changing img, adding active class to indicator and calling carousel again
    "changeImg" : function(x) {
        var x = x;
        if (x == (model.pics.length-1)) {
            x = 0;
            octopus.setImg(x);
            octopus.addActiveClass(x);
            octopus.carousel(x);
        } else {
            x++;
            octopus.setImg(x);
            octopus.addActiveClass(x);
            octopus.carousel(x);
        }
    },
// deleting img from wrapper after img finishes transition
    "clearWrapper" : function(wrapper, pic) {
        pic.addEventListener('transitionend', function() {
            wrapper.innerHTML = "";            
        });
    },

// creating a list of indicators based on how many imgs there is in a model.pics
    "createLIs" : function() {
        var UL = document.getElementById('indicators-list');
        for (var i = 0; i <= model.pics.length-1; i++) {
            var LI = document.createElement('li');
            LI.className = 'indicator';
            UL.appendChild(LI);
        }
    },
// add class 'active' to indicate which img is beeing shown
    "addActiveClass" : function(x) {
        var indicators = Array.from(document.getElementsByClassName('indicator'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[x].classList.add('active');
    },
// listens for clicking indicator
    "eventListeners" : function() {
        const indicators = Array.from(document.getElementsByClassName('indicator'));
        indicators.forEach(indicator => indicator.addEventListener('click', function() {
            var index = indicators.indexOf(this);
            octopus.manualSetImg(index);
            octopus.addActiveClass(index);
        }))

    }
}


// displaying slider and setting carousel
const view = {
    displayPic : function() {
        octopus.setImg(0);
        octopus.createLIs();
        octopus.addActiveClass(0);
        octopus.carousel(0);
        octopus.eventListeners();
    }
}

// firing up
view.displayPic();