// fetch
const loadPhone = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await response.json()
    const phone = data.data;
    console.log(phone) 
}

loadPhone()