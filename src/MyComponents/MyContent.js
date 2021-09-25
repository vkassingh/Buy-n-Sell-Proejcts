import React from 'react'

export const MyContent = () => {
    let imgStyle={
        height:"80vh",
        width: "100%",
        marginBottom: "30px"
    }

    let hstyle={
        margin:"15px",
        marginLeft:"55px",
        marginRight:"55px"
    }

    let cardStyle={
        width:"80vw",
        marginLeft:"55px",
        marginRight:"55px"

    }

    let img1={
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "15px"
    }
    return (
        
   
    <div className="content">
    <img src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=962&q=80" alt="Buy and Sell Projects" 
    style={imgStyle}/>
    <h2 style={hstyle}>Browse top online websites, games and a lot more</h2>
    <p style={hstyle}>These are all revenue generating websites, ecommerce stores and other online games</p>
      


    <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={hstyle}>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label class="btn btn-outline-primary" for="btnradio1">E-Commerce</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio2">Content / Advertising</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio3">Apps</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio3">Sass</label>
  
  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio3">Games</label>
  
</div>

<div style={cardStyle}class="card">
  <img style={img1} src="https://d2jafhvbn4akdi.cloudfront.net/website_regular_64437919-61ff-470c-9b83-f3552272a8fa.png" class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">getxclear.com</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Ecommerce website</li>
    <li class="list-group-item">Net Profit: $2,2262 p/mo</li>
    <li class="list-group-item">Price: $40,000</li>
  </ul>
  <div class="card-body">
    <a type="button" href="#" class="btn btn-success card-link">Buy Now</a>
    <a type="button" href="#" class="btn btn-outline-success card-link">Watch</a>
  </div>
</div>

<br/>

<div style={cardStyle}class="card">
  <img src="..." class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<br/>

<div style={cardStyle}class="card">
  <img src="..." class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<br/>


<div style={cardStyle}class="card">
  <img src="..." class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<br/>

<div style={cardStyle}class="card">
  <img src="..." class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<br/>


       
        </div>
       
    )
}
