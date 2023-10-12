const QrImg = document.querySelector('#QrImage');
const QrImgContainer = document.querySelector('.Imgbox');
const QrTextContainer = document.querySelector('#inputQrText');

const Btn = document.querySelector('#Btn');


Btn.addEventListener('click', function(){
    if(QrTextContainer.value.length>0){
        QrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QrTextContainer.value;
        QrImgContainer.classList.add("showImg");
    }


} )