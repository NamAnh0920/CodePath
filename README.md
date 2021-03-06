# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Nam Anh Nguyen

Time spent: 48h

Link to project: https://glitch.com/edit/#!/pre-work-codepath?path=README%3A9%3A17

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Player can custom how many buttons to play (up to 8)
* [x] Player can play up to 200 round
* [x] Game button can be randomly placed

## Video Walkthrough (GIF)
1. Lose
  https://github.com/NamAnh0920/CodePath/blob/main/gif/lose.gif
2. Win
  https://github.com/NamAnh0920/CodePath/blob/main/gif/win.gif
3. Speed Change
  https://github.com/NamAnh0920/CodePath/blob/main/gif/speedChange.gif
4. Custom Play
  https://github.com/NamAnh0920/CodePath/blob/main/gif/custom.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
 
      I use w3school to learn the syntax of HTML, JavaScript and CSS. I use JavaScript.com to learn more about JavaScript and how to implement functions as well as JavaScript datatype manipulation. I also use https://developer.mozilla.org to have a general idea what JavaScript about as well as how do HTML, JavaScript, and CSS element produce our website. I also encounter Bootstrap.com when looking at CSS implementation and design but decide not to use those templates. For debugging, I use Stack Overflow as the main source and manually debug on Glitch.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
      
      While building the website, I have trouble on understanding how JavaScript code works in HTML or CSS and vice versa. For example, my button function was not applied hidden and was not been enabled to click. So, I have to read about Handler and how it works on HTML so that I can embed the JavaScript on each element. Now, I have a good understand about Handler and I even explore that some Handlers are vulnerable in JavaScript.
      
      Another frustration I encountered was implement the code. I try to implement the random aspect of the game (where the pattern will be randomly selected instead of a fix pattern), but my bound on the random generator was wrong (never got to the 4th button). By trying a lot of times, I notice that the 4th button was not selected over around 10 times, so I need to run through the code again and correct the error.
      
      Finally, my biggest concern was the design and CSS programming. I have a hard time imagine the design and how would the code in CSS would present in HTML. The images that I upload was not filling the correct spot, so I have to use w3school and google to correct it. I also need to try a lot of different scale and numbers to fix the size of an element. I felt that the design part was the most abstract part for me and it took me a lot of time to create a proper outlook of the website. To make it easier to imagine, I need to get pen and paper to draw the web out on paper and calculate the position so that I have a good estimation. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

      After I finish my submission, I have learnt a lot more about web component such as front-end (similar to what I did in my submission) and back-end. I believe that back end is a crucial component of a website and while doing the submission, I have a chance to read about how PHP or Node.js possibly work underneath a website. While CSS, JavaScript and HTML allow user to interact with the website, the back-end cover the logical, the procedure under the website. 
      
      I also fascinate about the security of the website. I want to have a deeper understand of JavaScript as well as many other web-related language in order to protect myself and hoping in the future to pursue a Penetration Tester. In order to achieve that goal, having a solid base about website and its components are essential. 
      
      So, with all the research I have made into the submission, I really hope to have more hand-on experiences on the back-end during the internship

  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  
     If I have more time to work on the project, I want to add an option so that player can choose the length of the game. For example if our player willing to play until they cannot pass. We can set an endless mode in order to do that, so instead of create a pattern before the game, we will generate random patterns during the game. I may create the endless mode by adding the create pattern function with parameter (1) to the guess function.
  
     Another feature I want to create is shuffling. When the player reach a certain level, I want to shuffle the buttons (keep the color and sound, only change the position of the buttons) and create a reflect game. To do this, I am thinking of recreating the buttons using DOM with random functions. By creating a set of buttons with JavaScript, I can manipulate (theoractically) te position of each buttons.
  
     Lastlt, when they win (or lose) we can set a record of which level are they at. I will set the time and keep track of the progess using a variable and alert it when the game ends.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1DCLr_vZdunIMlZW-Kv-PYF6WgOD5w8Lh/view?usp=sharing)


## License

    Copyright Nam Anh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
