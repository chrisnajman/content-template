const USERS = "https://jsonplaceholder.typicode.com/users"

const listContainer = document.getElementById("list-container")
const template = document.getElementById("template")

export async function users() {
  try {
    const response = await fetch(USERS)

    // If element is not present on any page, ignore code that follows.
    if (listContainer === null) return

    if (response.ok) {
      const userItems = await response.json()

      userItems.forEach((item) => {
        const clone = template.content.cloneNode(true)

        const itemContainer = clone.querySelector("[data-item]")
        itemContainer.dataset.itemId = item.id

        const id = clone.querySelector("[data-id]")
        id.textContent = item.id

        const name = clone.querySelector("[data-name]")
        name.textContent = item.name

        const username = clone.querySelector("[data-username]")
        username.textContent = item.username

        const email = clone.querySelector("[data-email]")
        email.textContent = item.email

        /* Address */
        const addressStreet = clone.querySelector("[data-address-street]")
        addressStreet.textContent = item.address.street

        const addressSuite = clone.querySelector("[data-address-suite]")
        addressSuite.textContent = item.address.suite

        const addressCity = clone.querySelector("[data-address-city]")
        addressCity.textContent = item.address.city

        const addressZipcode = clone.querySelector("[data-address-zipcode]")
        addressZipcode.textContent = item.address.zipcode

        const addressLocationLat = clone.querySelector(
          "[data-address-location-lat]"
        )
        addressLocationLat.textContent = item.address.geo.lat

        const addressLocationLng = clone.querySelector(
          "[data-address-location-lng]"
        )
        addressLocationLng.textContent = item.address.geo.lng
        /* */

        const phone = clone.querySelector("[data-phone]")
        phone.textContent = item.phone

        const website = clone.querySelector("[data-website]")
        website.textContent = item.website

        /* Company */
        const companyName = clone.querySelector("[data-company-name]")
        companyName.textContent = item.company.name

        const companyCatchphrase = clone.querySelector(
          "[data-company-catchphrase]"
        )
        companyCatchphrase.textContent = item.company.catchPhrase

        const companyKeywords = clone.querySelector("[data-company-keywords]")
        companyKeywords.textContent = item.company.bs

        listContainer.appendChild(clone)
      })
    } else {
      console.log("Something went wrong...")
    }
  } catch (e) {
    console.log(e)
  }
}
