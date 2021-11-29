const { ServerApiVersion } = require("mongodb");

const container = document.getElementById("card-container");

ServerApiVersion.forEach((result, idx) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    const content = 
        <div class="container-fluid" style=" max-width: 720px;">
            <div class="row justify-content-evenly">
                <div class="card col-4 mt-5">
                    <img class="card-img-top" src="<%= apiResponse[i].image %>" alt="Card image cap">
                    <div class="card-body" id="card-container">
                        <h5 class="card-title"><%= apiResponse[i].name %></h5>
                        <p class="card-text"><%= apiResponse[i].page_description %></p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <div class="inline-block p-2 mt-2">
                            <h3><%= apiResponse[i],price %></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        container.innerHTML += content;
})

module.export