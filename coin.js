let currency = 'USD';
let url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`;
console.log(url);
const priceTag = document.querySelector('section h1');

const spanTag = document.querySelector('.dollar');
const checkPrice = function() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data)
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    })
}

checkPrice()

const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    currency = this.getAttribute('data-currency')
    url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`;
    checkPrice()

    navLinks.forEach(link => link.classList.remove('selected'))
    this.classList.add('selected')
    spanTag.innerHTML = currency
  })
})

// check the price every 60 seconds
setInterval(function(){
  checkPrice()
}, 60000)

// here we make a function called makeMarquee
function makeMarquee() {
  const title = '💸 Bitcoin Price Index 💸 Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a> 💸 Updated every 60 seconds 💸 Made by <a href="https://twitter.com/kris10cabrera">kris10cabrera</a>'
  // an array is a list of things
  // ['lawrence', 'rik', 'milan', 'ryan', 'adam', 'krista']
  // here we make a new empty array with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(50).fill(title).join(' ')
  // querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector('header span')
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText
}

// here we actually run our makeMarquee function
makeMarquee()





