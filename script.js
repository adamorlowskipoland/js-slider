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
    "setImg" : function(x) {
        const pic = operator.getImg();
        pic.setAttribute('src', model.pics[x].imgSrc);
        pic.setAttribute('alt', model.pics[x].imgAlt);
        operator.carousel(x);
    },
    "carousel" : function(x) {
        operator.carouselTimeout = setTimeout(function() {
            operator.changeImg(x+1);
        }, 3000);
    },
    "changeImg" : function(x) {
        if (x < model.pics.length) {
            operator.setImg(x);
        } else {
            x = 0;
            operator.setImg(x);
        }
        operator.currentImg = x;
    },
    "eventListeners" : function() {
        const previous = document.getElementById('previous');
        const next = document.getElementById('next');
        
        previous.addEventListener('click', function() {
            operator.clearTimeout();
            operator.changeImg(operator.currentImg-1);
        });
        next.addEventListener('click', function() {
            operator.clearTimeout();
            operator.changeImg(operator.currentImg+1);
        });
    }
}

operator.createImg();
operator.setImg(operator.currentImg);
operator.eventListeners();