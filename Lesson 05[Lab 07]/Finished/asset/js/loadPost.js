// UI Vars 
const postDiv = document.getElementById('myPost');



//load a single customer function 
function loadPost() {

    // Create the xhr object 
    const xhr = new XMLHttpRequest();

    // Open the connection [URL can be local or remote]
    xhr.open('GET', '/Lesson 05[Lab 07]/Finished/asset/jsonData/post.json', true);

    //on ready state is 4 when it reaches this method 
    xhr.onload = function() {
        // Check status is OK 
        if (this.status === 200) {

            //the data will be parsed as an object from the responseText object 
            const post = JSON.parse(this.responseText);

            // Creating the UI 
            let output = `
            <div class="item">
            <div class="image">
                <img src="${post.image}">
            </div>
            <div class="content">
                <a class="header" href="#" id="bTitle">
                ${post.postTitle}
                </a>
                <div class="meta">
                    <span id="bDate">${post.date} </span>
                    <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                </div>
                <div class="description">
                    <p id="bDesc">
                    ${post.postText}
                    </p>
                </div>
                <div class="extra">
                    <a class="ui floated basic violet button" href="#">Read Mores</a>
                </div>
            </div>
        </div>
        `;

            // Assign it to the DIV
            postDiv.innerHTML = output;
        }
    }

    // Send the Request 
    xhr.send();
}