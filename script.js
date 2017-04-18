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
    "getWrapper" : function() {
        const wrapper = document.getElementById('wrapper');
        return wrapper;
    },
    "createImg" : function() {
        const wrapper = operator.getWrapper();
        const pic = document.createElement('img');
        pic.id = 'pic';
        pic.setAttribute('src', model.pics[0].imgSrc);
        pic.setAttribute('alt', model.pics[0].imgAlt);
        return pic;
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
        const pic = operator.createImg()
        const wrapper = operator.getWrapper();
        wrapper.appendChild(pic);
    },
    "indicatorsDisplay" : function() {
        operator.createIndicatorList();
    }
}
viewer.initDisplay();
viewer.indicatorsDisplay();

