// fetch
const loadPhone = async (searchText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  const phone = data.data;
  // console.log(phone)
  displayPhones(phone);
};

loadPhone();

// display
const displayPhones = (phones) => {
    // get container id
    let container = document.getElementById('phone-container')
    container.innerHTML=''
  phones.forEach((phone) => {
    console.log(phone);

    const div = document.createElement("div");
    div.classList = `card w-full bg-base-100 border border-white/[.15] shadow-xl`;
    div.innerHTML = `
    <figure><img class="rounded-2xl mt-10" src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>Brand : ${phone.brand}</p>
                  <p class = "pb-5">Model : ${phone.slug}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
                  
        `;
    container.appendChild(div)
  });
};


// btn
function handleSearch(){
    const searchField = document.getElementById('search-field')
    const searchFieldText = searchField.value;
    console.log(searchFieldText)
    loadPhone(searchFieldText)
    
}