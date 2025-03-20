// #region countdown timer
const eventDate = new Date("2025-05-22T00:00:00").getTime();
const countdownInterval = setInterval(updateCountdown, 1000); // execute function per ms

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDiff = eventDate - currentDate;
  const countdownElement = document.getElementById("countdown");

  if (timeDiff <= 0) {
    clearInterval(countdownInterval); // stops the count down
    countdownElement.innerHTML = "<p>Come Join Us Now!</p>";
    return;
  }

  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hr = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `<p>${sec} secs<p><p>${min} mins<p><p>${hr} hrs</p><p>${day} days<p>`;
}
// #endregion countdown timer

// #region activities
const activitiesList = [
  {
    title: "MOVIES",
    image: "movies.png",
    description: "Enjoy ANIMEzing line-up of movies from our sponsors!",
  },
  {
    title: "MEET & GREET",
    image: "meet-and-greet.png",
    description: "Get up close and personal with artists from our sponsors!",
  },
  {
    title: "BOOTHS",
    image: "booths.png",
    description:
      "Lots of merch from our sponsors, artists, creators, and more!",
  },
];

for (activity of activitiesList) {
  document.getElementById("activities").innerHTML += `
  <div class="activity">
    <img src="./assets/images/icons/${activity.image}" alt="${activity.title}" />
    <h1>${activity.title}</h1>
    <p>${activity.description}</p>
  </div>
  `;
}
// #endregion activities

// #region tickets
const tickets = [
    {
      id: "ticket",
      name: "Single Ticket",
      price: 15,
      perks: ["Watch ONE (1) MOVIE<br/>ON THE DAY OF YOUR CHOICE"],
      highlight: false,
    },
    {
      id: "day-pass",
      name: "Day Pass",
      price: 65,
      perks: [
        "Watch ANY / ALL MOVIES<br />ON THE DAY OF YOUR CHOICE",
        "Join Meet and Greets<br />ON THE DAY OF YOUR CHOICE",
        "1 Regular Popcorn<br />1 Regular Drink",
      ],
      highlight: false,
    },
    {
      id: "all-day-pass",
      name: "All-Day Pass",
      price: 180,
      perks: [
        "Watch ANY / ALL MOVIES <br />ON ALL EVENT DAYS",
        "Join Meet and Greets <br />ON ALL EVENT DAYS",
        "UNLIMITED POPCORN AND DRINKS<br />ON ALL EVENT DAYS",
        "Anime Film Fest Loot Bag",
        "SKIP THE LINES",
      ],
      highlight: true,
    },
  ],
  cssClass = `choice`,
  priceClass = `large-text`,
  buyButtonClass = `buy-button`,
  ticketsURL = `./tickets.html`,
  detailsContainerID = `ticket-details`;

const createTicketsTable = (highlight, perks) => {
  let tableData = ``,
    icon = `./assets/images/icons/`;

  if (highlight) {
    icon += `special.png`;
  } else {
    icon += `pass.png`;
  }

  for (perk of perks) {
    tableData += `<tr><td><img src="${icon}"/></td><td><p>${perk}</p></td></tr>`;
  }

  return tableData;
};

for (ticket of tickets) {
  document.getElementById(detailsContainerID).innerHTML += `
    <div id="${ticket.id}" class="${cssClass}">
        <p class="${priceClass}">$${ticket.price}</p>
        <h2>${ticket.name}</h2>
        <table>
            ${createTicketsTable(ticket.highlight, ticket.perks)}
        </table>
        <a href="./tickets.html" class="buy-button">BUY TICKETS</a>
    </div>`;
}
// #endregion tickets

// #region leaflet map
// Set Leaflet Map
const map = L.map("map");

// Get the tile layer from OpenStreetMaps
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // Specify the maximum zoom of the map
  maxZoom: 19,

  // Set the attribution for OpenStreetMaps
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Set the view of the map
// with the latitude, longitude and the zoom value
map.setView([43.65667, -79.38047], 16);

// Show a marker at the position of the Target
let targetMarker = L.marker([43.65667, -79.380477]).addTo(map);

// Bind popup to the marker with a popup
targetMarker.bindPopup("Cineplex Yonge & Dundas").openPopup();

// Ask for current location and navigate to that area
map.locate({ setView: true, maxZoom: 16 });
// #endregion leaflet map

// #region sponsors
const sponsorsList = [
  {
    name: "Kyoto Animation",
    logo: "/studio-1/logo.png",
    url: "https://www.kyotoanimation.co.jp/en/",
  },
  {
    name: "Studio Chizu",
    logo: "/studio-2/logo.png",
    url: "https://studiochizu.com/",
  },
  {
    name: "Studio Ghibli",
    logo: "/studio-3/logo.png",
    url: "https://ghiblicollection.com/",
  },
  {
    name: "CoMix Wave Films",
    logo: "/studio-4/logo.png",
    url: "https://www.cwfilms.jp/en/",
  },
  {
    name: "MADHOUSE",
    logo: "/studio-5/logo.png",
    url: "https://www.madhouse.co.jp/",
  },
];

for (sponsor of sponsorsList) {
  document.getElementById("logos").innerHTML += `
    <a href="${sponsor.url}" alt="${sponsor.name}" target="_blank">
      <img src="./assets/images${sponsor.logo}"/>
    </a>
  `;
}
// #endregion sponsors
