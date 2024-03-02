// fetch
const loadPhone = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await response.json();
  const phone = data.data;
  // console.log(phone)
  displayPhones(phone);
};

loadPhone();

// display
const displayPhones = (phones) => {
  phones.forEach((phone) => {
    console.log(phone);

    // get container id
    let container = document.getElementById('phone-container')
    const div = document.createElement("div");
    div.classList = `card w-full bg-base-100 border border-white/[.15] shadow-xl`;
    div.innerHTML = `
        <figure><img class="rounded-2xl mt-10" src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                  
        `;
    container.appendChild(div)
  });
};
