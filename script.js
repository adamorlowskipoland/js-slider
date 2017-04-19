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


const operator = {
    "carouselTimeout" : "",
    "currentImg" : 0,

    "clearTimeout" : function() {
        clearTimeout(operator.carouselTimeout);
    },

    "createImg" : function() {
        const wrapper = document.getElementById('wrapper');
        const pic = document.createElement('img');
        pic.id = 'pic';
        wrapper.appendChild(pic);
    },
    "getImg" : function() {
        const pic = document.getElementById('pic');
        return pic;
    },
    "carousel" : function(x) {
        operator.carouselTimeout = setTimeout(function() {
            viewer.changeImg(x+1);
        }, 3000);
    },
    "eventListeners" : function() {
        const previous = document.getElementById('previous');
        const next = document.getElementById('next');
        
        previous.addEventListener('click', function() {
            operator.clearTimeout();
            viewer.changeImg(operator.currentImg-1);
        });
        next.addEventListener('click', function() {
            operator.clearTimeout();
            viewer.changeImg(operator.currentImg+1);
        });
    }
}

const viewer = {
    "setImg" : function(x) {
        const pic = operator.getImg();
        pic.setAttribute('src', model.pics[x].imgSrc);
        pic.setAttribute('alt', model.pics[x].imgAlt);
        operator.carousel(x);
    },
    "changeImg" : function(x) {
        if (x < 0) {
            x = (model.pics.length - 1)
            viewer.setImg(x);
        } else if (x < model.pics.length) {
            viewer.setImg(x);
        } else {
            x = 0;
            viewer.setImg(x);
        }
        operator.currentImg = x;
    },
    "showIndicators" : function() {
        for (var pic in model.pics) {
            const indicatorsList = document.getElementById('indicators-list');
            var indicator = document.createElement('li');
            indicator.className = 'indicator';
            indicatorsList.appendChild(indicator);
        }
    },
}



operator.createImg();
operator.eventListeners();


viewer.setImg(operator.currentImg);
viewer.showIndicators();