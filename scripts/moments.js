const imageMessages = [
  {
      imageUrl: 'images/moments/12-03-22.jpg',
      message: 'first meet natin, tnx god naging cm8 ko si carl :>',
  },
  {
      imageUrl: 'images/moments/12-19-22.jpg',
      message: 'first time ko bumuhat ng tao nang paganon, parang nag buhat lang ako ng unan eh',
  },
  {
      imageUrl: 'images/moments/02-27-23.jpg',
      message: 'wag ka nang mawaaaaalaa~',
  },
  {
    imageUrl: 'images/moments/04-26-23.jpg',
    message: 'first date hehe. wala tayong pic pero masaya :>',
  },
  {
    imageUrl: 'images/moments/04-30-23.jpg',
    message: 'cute natin dito :>',
  },
  {
    imageUrl: 'images/moments/05-16-23.jpg',
    message: 'sorry carl T__T',
  },
  {
    imageUrl: 'images/moments/05-29-23.jpg',
    message: 'eto yung binilad mo ako haha (oo na kasalanan ko na)',
  },
  {
    imageUrl: 'images/moments/07-03-23.jpg',
    message: 'bas2s',
  },
  {
    imageUrl: 'images/moments/07-10-23.jpg',
    message: 'tired ang lalovee',
  },
  {
    imageUrl: 'images/moments/07-11-23.jpg',
    message: 'cutie ng reactions mooo',
  },
  {
    imageUrl: 'images/moments/07-15-23.jpg',
    message: 'hehe hilo hilo ako ne2 nung kinabukasan (personal record ko)',
  },
  {
    imageUrl: 'images/moments/07-20-23.jpg',
    message: 'nakaka inlove yung ngiti eh',
  },
  {
    imageUrl: 'images/moments/09-04-23.jpg',
    message: 'fave pose mo XD',
  },{
    imageUrl: 'images/moments/09-27-23.jpg',
    message: 'eto makikipag break tapos kinabukasan makikipagdate (best motmot) :v',
  },
  {
    imageUrl: 'images/moments/10-02-23.jpg',
    message: 'gagalet pero pose pa rin >_<',
  }];

  let shownImages = [];

  function displayRandomImage() {
    // Check if all images have been shown
    if (shownImages.length === imageMessages.length) {
      resetImages();
      displayRandomImage();
      return;
    }

    // Select a random image that hasn't been shown recently
    let selectedImage;
    do {
      selectedImage = imageMessages[Math.floor(Math.random() * imageMessages.length)];
    } while (shownImages.includes(selectedImage));

    // Show the image and message
    document.getElementById('random-image').src = selectedImage.imageUrl;
    document.getElementById('moment-message').textContent = selectedImage.message;

    // Add the image to the list of shown images
    shownImages.push(selectedImage);
  }

  function resetImages() {
    shownImages = [];
  }

  