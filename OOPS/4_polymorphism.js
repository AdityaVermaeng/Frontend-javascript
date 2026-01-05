 class MediaPlayer {
     play() {
         console.log("Playing media....")
     }
 }
 class Video extends MediaPlayer {
     play() {
         console.log("playing the Video....")
     }
 }
 class Music extends MediaPlayer {
     play() {
         console.log("Playing the music.....")
     }

 }
 let vid = new Video();
 let mus = m = new Music();
 vid.play();
 mus.play();