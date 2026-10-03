const s5reviews = document.getElementById("s5reviews");
const s6right = document.getElementById("s6right");

fetch("gerichtapi.json")
  .then((response) => response.json())
  .then((bob) => {
    bob = bob.slice(0, 4);
    bob.forEach((s5review) => {
      s5reviews.innerHTML += `
          <div class="s5review">
            <div class="s5rleft">
              <img src="${s5review.img}" alt="gey" class="goy"/>
              <img src="src/img/quotation.png" alt="quote" class="s5quote"/>
            </div>
            <div class="s5rright">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
              <h2>${s5review.name}</h2>
              <p>${s5review.occupation}</p>
            </div>
          </div>
            `;
    });
  });

fetch("gerichtapi.json")
  .then((response) => response.json())
  .then((thing) => {
    thing = thing.slice(4, 67);
    thing.forEach((s6post) => {
      s6right.innerHTML += `
        <div class="s6post"><img src="${s6post.img}" alt="post" /></div>
        `;
    });
  });
