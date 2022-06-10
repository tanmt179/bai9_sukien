function changeImage1() {
    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image1').getAttribute('data-id');
    switch (nameDataID) {
        case 'monkey':
            srcImage = 'image/panda1.jpg'
            valueDataId = 'panda'
            break;
        case 'panda':
            srcImage = 'image/cat1.jpg'
            valueDataId = 'cat'
            break;
        case 'cat':
            srcImage = 'image/dog1.jpg'
            valueDataId = 'dog'
            break;
        case 'dog':
            srcImage = 'image/chicken1.jpg'
            valueDataId = 'chicken'
            break;
        case 'chicken':
            srcImage = 'image/monkey1.jpg'
            valueDataId = 'monkey'
            break;
    }
    document.getElementById('image1').setAttribute('src', srcImage);
    document.getElementById('image1').setAttribute('data-id', valueDataId)
    checkWin()
}

function changeImage2() {
    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image2').getAttribute('data-id');
    switch (nameDataID) {
        case 'panda':
            srcImage = 'image/cat2.jpg'
            valueDataId = 'cat'
            break;
        case 'cat':
            srcImage = 'image/dog2.jpg'
            valueDataId = 'dog'
            break;
        case 'dog':
            srcImage = 'image/chicken2.jpg'
            valueDataId = 'chicken'
            break;
        case 'chicken':
            srcImage = 'image/monkey2.jpg'
            valueDataId = 'monkey'
            break;
        case 'monkey':
            srcImage = 'image/panda2.jpg'
            valueDataId = 'panda'
            break;
    }
    document.getElementById('image2').setAttribute('src', srcImage);
    document.getElementById('image2').setAttribute('data-id', valueDataId)
    checkWin()
}

function changeImage3() {
    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image3').getAttribute('data-id');
    switch (nameDataID) {
        case 'cat':
            srcImage = 'image/dog3.jpg'
            valueDataId = 'dog'
            break;
        case 'dog':
            srcImage = 'image/chicken3.jpg'
            valueDataId = 'chicken'
            break;
        case 'chicken':
            srcImage = 'image/monkey3.jpg'
            valueDataId = 'monkey'
            break;
        case 'monkey':
            srcImage = 'image/panda3.jpg'
            valueDataId = 'panda'
            break;
        case 'panda':
            srcImage = 'image/cat3.jpg'
            valueDataId = 'cat'
            break;
    }
    document.getElementById('image3').setAttribute('src', srcImage);
    document.getElementById('image3').setAttribute('data-id', valueDataId)
    checkWin()
}

function changeImage4() {
    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image4').getAttribute('data-id');
    switch (nameDataID) {
        case 'dog':
            srcImage = 'image/chicken4.jpg'
            valueDataId = 'chicken'
            break;
        case 'chicken':
            srcImage = 'image/monkey4.jpg'
            valueDataId = 'monkey'
            break;
        case 'monkey':
            srcImage = 'image/panda4.jpg'
            valueDataId = 'panda'
            break;
        case 'panda':
            srcImage = 'image/cat4.jpg'
            valueDataId = 'cat'
            break;
        case 'cat':
            srcImage = 'image/dog4.jpg'
            valueDataId = 'dog'
            break;
    }
    document.getElementById('image4').setAttribute('src', srcImage);
    document.getElementById('image4').setAttribute('data-id', valueDataId)
    checkWin()
}

function changeImage5() {
    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image5').getAttribute('data-id');
    switch (nameDataID) {
        case 'chicken':
            srcImage = 'image/monkey5.jpg'
            valueDataId = 'monkey'
            break;
        case 'monkey':
            srcImage = 'image/panda5.jpg'
            valueDataId = 'panda'
            break;
        case 'panda':
            srcImage = 'image/cat5.jpg'
            valueDataId = 'cat'
            break;
        case 'cat':
            srcImage = 'image/dog5.jpg'
            valueDataId = 'dog'
            break;
        case 'dog':
            srcImage = 'image/chicken5.jpg'
            valueDataId = 'chicken'
            break;
    }
    document.getElementById('image5').setAttribute('src', srcImage);
    document.getElementById('image5').setAttribute('data-id', valueDataId)
    checkWin()
}

function checkWin() {
    let nameDataID1 = document.getElementById('image1').getAttribute('data-id')
    let nameDataID2 = document.getElementById('image2').getAttribute('data-id')
    let nameDataID3 = document.getElementById('image3').getAttribute('data-id')
    let nameDataID4 = document.getElementById('image4').getAttribute('data-id')
    let nameDataID5 = document.getElementById('image5').getAttribute('data-id')
   //let nameDataID = [nameDataID1, nameDataID2, nameDataID3, nameDataID4, nameDataID5];
    if(nameDataID1){

            document.getElementById('image1').style.border = '2px solid red';
            document.getElementById('image2').style.border = '2px solid red';
            document.getElementById('image3').style.border = '2px solid red';
            document.getElementById('image4').style.border = '2px solid red';
            document.getElementById('image4').style.border = '2px solid red';
        }
           else{
            document.getElementById('image1').style.border = '';
            document.getElementById('image2').style.border = '';
            document.getElementById('image3').style.border = '';
            document.getElementById('image4').style.border = '';
            document.getElementById('image5').style.border = '';

    }

}
