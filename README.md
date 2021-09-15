# # Daily Moods

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Daily Moods is designed to give an outlet to a person to navigate their current mood or emotions in a manner that doesn't affect the work, school, and surrounding enviroments.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/dailymoods.git)
* [Code Quiz Website](https://nicoguarino.github.io/dailymoods/)

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/openweather/blob/main/assets/images/sample_code.png "Sample Code")

### Sample Code
```HTML Sample
<body>
   <section class="hero has-background-info-dark">
       <div class="hero-body hero-background">
           <div class="container">
             <div class="mood-select" id="mood-select">
               <select class="moods" name="moods" id="moods">
                   <option value="" disabled selected>Select Mood</option>
                   <option value="happy">Happy</option>
                   <option value="sad">Sad</option>
                   <option value="angry">Angry</option>
                   <option value="excited">Excited</option>
               </select>
               <button type="submit" class="mood-btn" id="mood-btn">Select</button>
             </div>
           </div>
       </div>
   </section>
```

```CSS Sample
.mood-select {
    display: flex;
    justify-content: center;
 }
 .moods {
    width: 25%;
    border-radius: 10px;
 }
 .mood-btn {
    border-radius: 10px;
    margin-left: 5px;
 }
 .hero-background {
    height: 20vh;
    background-image: linear-gradient(rgb(187, 73, 3), rgb(92, 0, 0))

 }

```
```JavaScript Sample
//fetch weather apis

var moodSelectContainer = document.querySelector("#mood-btn");


var cssTheme = function(){
    document.getElementById("mood-btn").addEventListener("click",function(){
        var moodOptions = document.querySelector("#moods").value;
        var linkArray = ["./assets/css/style.css","./assets/css/dark.css"]
        if(moodOptions=="happy"){
            document.getElementById("default").href="./assets/css/happy.css"
        }
        else if(moodOptions == "sad"){
            document.getElementById("default").href="./assets/css/sad.css"
        }
        else if (moodOptions == "angry"){
            document.getElementById("default").href="./assets/css/angry.css"
        }
        else if (moodOptions == "excited"){
            document.getElementById("default").href="./assets/css/excited.css"
        }

    })

    
};
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino, Jaron Kenyon, David Olea, Hibram Sanchez, and Rupesh Khatri


## Contributing <a name = "contributing"></a>

Daily Moods Website is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Daily Moods

