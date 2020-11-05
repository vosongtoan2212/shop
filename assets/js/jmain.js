
// CART LOGIC
var cartProductAmount = document.querySelectorAll('.header__cart-product');

document.querySelector('.header__cart-amount').innerText = cartProductAmount.length;

var removeBtn = document.querySelectorAll('.header__cart-product-remove');

for (i = 0; i < removeBtn.length; ++i) {
    removeBtn[i].onclick = function() {
        var cartProduct = this.parentElement.parentElement.parentElement;
        cartProduct.remove();
        var cartProductAmount = document.querySelectorAll('.header__cart-product').length
        document.querySelector('.header__cart-amount').innerText = cartProductAmount;
        var cartImg = document.querySelector('.header__cart-icon');
        var cartAmount = document.querySelector('.header__cart-amount');
        if (cartProductAmount == 0) {
            cartImg.classList.remove('cart-true');
            cartImg.classList.add('cart-false');
            cartAmount.remove();
        } else {
            cartImg.classList.remove('cart-false');
            cartImg.classList.add('cart-true');
        }
    }
}


// SLIDE SHOW BANNER

var bannerLeftPrevBtn = document.querySelector('.container__banner-left-btn.btn-prev');
var bannerLeftNextBtn = document.querySelector('.container__banner-left-btn.btn-next');

var bannerLeftList = document.querySelector('.container__banner-left-list');
var linkBannerLeft = document.querySelectorAll('.container__banner-left-link');
var listCount = document.querySelectorAll('.container__banner-left-link').length;
var bannerLeftWidth = document.querySelector('.container__banner-left').clientWidth;
var counter = 1;

bannerLeftList.style.transform = "translateX(" + (-counter * bannerLeftWidth) + "px)";

bannerLeftPrevBtn.onclick = function () {
    bannerLeftList.style.transition = "transform 0.4s ease-in-out";
    if (counter == 0) {
        counter = listCount - 1;
    } else {
        counter--;
    }
    bannerLeftList.style.transform = "translateX(" + (-counter * bannerLeftWidth) + "px)";
}

bannerLeftNextBtn.onclick = function () {
    bannerLeftList.style.transition = "transform 0.4s ease-in-out";
    if (counter == listCount - 1) {
        counter = 0;
    } else {
        counter++;
    }
    bannerLeftList.style.transform = "translateX(" + -(counter * bannerLeftWidth) + "px)";
}

bannerLeftList.addEventListener("transitionend", function () {
    if (linkBannerLeft[counter].id === 'lastClone') {
        bannerLeftList.style.transition = "none";
        counter = listCount - 2;
        bannerLeftList.style.transform = "translateX(" + -(counter * bannerLeftWidth) + "px)";
    }
    if (linkBannerLeft[counter].id === 'firstClone') {
        bannerLeftList.style.transition = "none";
        counter = listCount - counter;
        bannerLeftList.style.transform = "translateX(" + -(counter * bannerLeftWidth) + "px)";
    }
});

function slideShow() {
    bannerLeftList.style.transition = "transform 0.4s ease-in-out";
    if (counter == listCount - 1) {
        counter = 0;
    } else {
        counter++;
    }
    bannerLeftList.style.transform = "translateX(" + -(counter * bannerLeftWidth) + "px)";
    setTimeout('slideShow()', 3000);
}
slideShow();

bannerLeftList.style.width = 1200 + 120 * listCount + "px" ;


// FLASH SALE COUNTDOWN

var flashSaleHour = document.querySelector('.flash-sale-hour').innerText;
var flashSaleMinute = document.querySelector('.flash-sale-minute').innerText;
var flashSaleSecond = document.querySelector('.flash-sale-second').innerText;



function flashSaleCountDown() {
    if (flashSaleSecond == 00) {
        flashSaleSecond = 59;
        flashSaleSecond -= 1;

        if (flashSaleMinute == 00) {
            flashSaleMinute = 59;

            if (flashSaleHour == 00) {
                flashSaleHour = 59;
            } else {
                flashSaleHour -=1;
            }
        } else {
            flashSaleMinute -= 1;
        }
    } else {
        flashSaleSecond -= 1;
    }
    flashSaleHour = ("00" + flashSaleHour).slice(-2);
    flashSaleMinute = ("00" + flashSaleMinute).slice(-2);
    flashSaleSecond = ("00" + flashSaleSecond).slice(-2);


    document.querySelector('.flash-sale-second').innerText = flashSaleSecond;
    document.querySelector('.flash-sale-minute').innerText = flashSaleMinute;
    document.querySelector('.flash-sale-hour').innerText = flashSaleHour;
    var myflashSaleCountDown = setTimeout('flashSaleCountDown()', 1000);
    if (flashSaleHour == 00 & flashSaleMinute == 00 & flashSaleSecond == 00) {
        clearTimeout(myflashSaleCountDown);
        alert('Thời gian FLASH SALE đã kết thúc');
    }
}
flashSaleCountDown();



// BANNER ADS DOWNLOAD
var bannerAdsImg = document.querySelector('.container__banner-ads');
var modalWrapper = document.querySelector('.modal-wrapper');
var cardWrapper = document.querySelector('.card-wrapper');
var exitBannerAds = document.querySelector('.card__exit-btn');
var overlay = document.querySelector('.modal__overlay');

bannerAdsImg.onclick = function () {
    modalWrapper.classList.add('display-block');
    cardWrapper.classList.add('display-block');
}

exitBannerAds.onclick = function () {
    modalWrapper.classList.remove('display-block');
    cardWrapper.classList.add('display-block');
}
overlay.onclick = function () {
    modalWrapper.classList.remove('display-block');
    cardWrapper.classList.remove('display-block');
}

document.onkeydown = function (event) {
    var x = event.keyCode;
    if (x == 27) {
        modalWrapper.classList.remove('display-block');
    }
  }

//   CATEGORY PRODUCT

var categoryProductPrevBtn = document.querySelector('.container__category-product-btn.btn-prev');
var categoryProductNextBtn = document.querySelector('.container__category-product-btn.btn-next');
var categoryProductList = document.querySelector('.container__category-product-list');
var translateWidth = Math.ceil((document.querySelectorAll('.container__category-product-link').length - 20) / 2);


categoryProductPrevBtn.onclick = function () {
    categoryProductList.style.transform = "translateX(0)";
    categoryProductList.style.transition = "transform 0.4s ease-in-out";
    categoryProductNextBtn.classList.toggle('display-none');
    this.classList.toggle('display-none');
}

categoryProductNextBtn.onclick = function () {
    categoryProductList.style.transform = "translateX(" + -(translateWidth * document.querySelector('.container__category-product-item').clientWidth) + "px)";
    categoryProductList.style.transition = "transform 0.4s ease-in-out";
    categoryProductPrevBtn.classList.toggle('display-none');
    this.classList.toggle('display-none');
}

categoryProductList.style.width = 1200 + 120 * translateWidth + "px" ;



//FLASH SALE 

var quantitySold = document.querySelectorAll('.flash-sale-quantity-sold')   ;
var grossProduct = [14, 40, 110, 200, 1200, 120];
var soldUp = document.querySelectorAll('.flash-sale-sold-up');

i = 0;
soldUp.forEach (function (element) {
    element.style.width = 156 / grossProduct[i] * quantitySold[i].innerText + 'px';

    if (quantitySold[i].innerText / grossProduct[i] == 1) {
        element.style.borderTopRightRadius = '8px';
        element.style.borderBottomRightRadius = '8px';
        document.querySelectorAll('.sold-desc')[i].innerHTML = 'HẾT HÀNG';
    }
    ++i;
})


// Flash sale list btn

var flashSalePrevBtn = document.querySelector('.container__flash-sale-list-btn.btn-prev');
var flashSaleNextBtn = document.querySelector('.container__flash-sale-list-btn.btn-next');
var flashSaleList = document.querySelector('.container__flash-sale-list');
var translateWidth;


flashSalePrevBtn.onclick = function () {
    flashSaleList.style.transform = "translateX(0)";
    flashSaleList.style.transition = "transform 0.4s ease-in-out";
}

flashSaleNextBtn.onclick = function () {
    flashSaleList.style.transform = "translateX(-100%)";
    flashSaleList.style.transition = "transform 0.4s ease-in-out";
}


console.log(flashSaleNextBtn)
// flashSaleList.style.width = 1200 + 120 * translateWidth + "px" ;