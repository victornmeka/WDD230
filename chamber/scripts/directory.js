const directoryurl = "./data.json"
// buttons
const getGrid = document.querySelector(".grid")
const getList = document.querySelector(".list")
//div 
const companyInfo = document.querySelector("div.company-info")
let defaultGrid = true

async function getBusinessData(defaultGrid) {
  const response = await fetch(directoryurl)
  if (response.ok) {
    const data = await response.json()

    const businesses = data["businesses"]
    if (defaultGrid === true) {
      businesses.forEach(displayGrid)
    } else {
      businesses.forEach(displayList)
    }
  }
}

const displayGrid = (company) => {
  // Create elements for grid 
  let card = document.createElement("div")
  let companyImg = document.createElement("img")
  let address = document.createElement("div")
  let phone = document.createElement("div")
  let url = document.createElement("div")
  let a = document.createElement("a")

  //adding the text info
  address.textContent = company.address
  phone.textContent = company.number

  //image attributes 
  card.setAttribute("class", "companyCard")
  companyImg.setAttribute("src", company.logo)
  companyImg.setAttribute("alt", `${company.name} logo`)
  companyImg.setAttribute("width", "150")
  companyImg.setAttribute("height", "150")

  companyImg.setAttribute("loading", "lazy")
  url.setAttribute("class", "website-div")
  a.setAttribute("href", company.website)
  a.setAttribute("target", "blank")
  let strUrl = company.website
  a.textContent = strUrl
  

  url.appendChild(a)

  // Append the section
  card.appendChild(companyImg)
  card.appendChild(address)
  card.appendChild(phone)
  card.appendChild(url)
  //append each card to the companyInfo
  companyInfo.appendChild(card)
}

const displayList = (company) => {
  // Create elements for the grid 
  let listing = document.createElement("div")
  let name = document.createElement("h2")
  let address = document.createElement("div")
  let phone = document.createElement("div")
  let url = document.createElement("div")
  let a = document.createElement("a")

  //adding the text info
  name.textContent = company.name
  address.textContent = company.address
  phone.textContent = company.number

  // add attributes to url
  url.setAttribute("class", "website-div")
  a.setAttribute("href", company.website)
  a.setAttribute("target", "blank")
  let strUrl = company.website
  a.textContent = strUrl
  
  url.appendChild(a)

  // Append the section(listing) 
  listing.appendChild(name)
  listing.appendChild(address)
  listing.appendChild(phone)
  listing.appendChild(url)
  //append listing to the companyList
  companyInfo.appendChild(listing)
}

function clickTheButtons() {
  getBusinessData(true)

  getGrid.addEventListener("click", () => {
    companyInfo.classList.add("companyGrid")
    companyInfo.classList.remove("companyList")
    companyInfo.innerHTML = ""
    getBusinessData(true)
  })

  getList.addEventListener("click", () => {
    companyInfo.classList.add("companyList")
    companyInfo.classList.remove("companyGrid")
    companyInfo.innerHTML = ""
    getBusinessData(false)
  })
}

clickTheButtons()
