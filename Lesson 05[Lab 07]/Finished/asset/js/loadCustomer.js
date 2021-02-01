// UI Vars 
const postDiv = document.getElementById('myPost');




function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/Lesson 05[Lab 07]/Finished/asset/jsonData/post.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            let output = `
            <div class="item">
            <div class="image">
                <img src="${customer.image}">
            </div>
            <div class="content">
                <a class="header" href="#" id="bTitle">
                ${customer.postTitle}
                </a>
                <div class="meta">
                    <span id="bDate">${customer.date} </span>
                    <span>By: <a href="#" id="bAuthor"> ${customer.name}</a></span>
                </div>
                <div class="description">
                    <p id="bDesc">
                    ${customer.postText}
                    </p>
                </div>
                <div class="extra">
                    <a class="ui floated basic violet button" href="#">Read Mores</a>
                </div>
            </div>
        </div>
        `;
            postDiv.innerHTML = output;
        }
    }

    xhr.send();
}