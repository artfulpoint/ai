import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  facebookPath="../../assets/facebook.png";
  twitterPath="../../assets/twitter.png";
  linkedInPath="../../assets/linkedin.png";
  
  facebook_in(){
  this.facebookPath="../../assets/facebook-filled.png";
  }
  
  twitter_in(){
  this.twitterPath="../../assets/twitter-filled.png"
  }
  
  linkedIn_in(){
  this.linkedInPath="../../assets/linkedin-filled.png"
  }
  
  facebook_out(){
    this.facebookPath="../../assets/facebook.png";
  }
  
  twitter_out(){
    this.twitterPath="../../assets/twitter.png";
  }
  
  linkedIn_out(){
  this.linkedInPath="../../assets/linkedin.png";
  }
  
  onClick(event:Event){
    window.scroll({
      top:0,
      left:0,
      behavior: 'smooth'
    })
  }
}
