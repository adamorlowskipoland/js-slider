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
    "carouselInterval" : "",

    "getWrapper" : function() {
        const wrapper = document.getElementById('wrapper');
        return wrapper;
    },
    "getImg" : function() {
        const pic = document.getElementById('pic');
        return pic;
    },
    "createImg" : function() {
        const wrapper = operator.getWrapper();
        const pic = document.createElement('img');
        pic.id = 'pic';
        wrapper.appendChild(pic);
        return pic;
    },
    "setImg" : function(x) {
        const pic = operator.getImg() || operator.createImg();
        pic.setAttribute('src', model.pics[x].imgSrc);
        pic.setAttribute('alt', model.pics[x].imgAlt);
    },
    "carousel" : function(x) {
        var x = x;
        console.log(x);
        operator.carouselInterval = setInterval(function() {
            if (x < model.pics.length) {
                operator.setImg(x);
                x++;
            } else {
                x = 0;
                operator.setImg(x);
            }
        }, 2000);
    },
    "createIndicatorList" : function() {
        for (var pic in model.pics) {
            const indicatorList = document.getElementById('indicators-list');
            var indicator = document.createElement('li');
            indicator.className = 'indicator';
            indicatorList.appendChild(indicator);
        }
    }
}

const viewer = {
    "initDisplay" : function() {
        operator.carousel(0);
        viewer.indicatorsDisplay();
    },
    "indicatorsDisplay" : function() {
        operator.createIndicatorList();
    }
}
viewer.initDisplay();

