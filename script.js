function processFile() {
  const fileInput = document.getElementById('fileInput');
  const fileInfo = document.getElementById('fileInfo');
  const domainsToTrack = [
    "facebook.com", "twitter.com", "instagram.com", "linkedin.com", "tiktok.com", "pinterest.com", 
    "snapchat.com", "youtube.com", "reddit.com", "tumblr.com", "vimeo.com", "flickr.com", "quora.com",
    "wordpress.com", "medium.com", "wix.com", "blogger.com", "deviantart.com", "behance.net", "500px.com",
    "dribbble.com", "periscope.tv", "soundcloud.com", "mixcloud.com", "patreon.com", "bandcamp.com",
    "weebly.com", "squarespace.com", "typepad.com", "substack.com", "ghost.org", "vkontakte.ru", "myspace.com",
    "discord.com", "slack.com", "meetup.com", "nextdoor.com", "clubhouse.com", "yahoo.com", "badoo.com",
    "telegram.com", "line.me", "whatsapp.com", "skype.com", "zoom.us", "google.com", "apple.com", "amazon.com",
    "etsy.com", "ebay.com", "shopify.com", "alibaba.com", "poshmark.com", "mercari.com", "depop.com", 
    "redbubble.com", "teepublic.com", "bonanza.com", "bigcartel.com", "woocommerce.com", "rakuten.com",
    "wish.com", "bbc.com", "cnn.com", "nytimes.com", "theguardian.com", "washingtonpost.com", "huffpost.com",
    "npr.org", "buzzfeed.com", "independent.co.uk", "time.com", "forbes.com", "reuters.com", "theverge.com",
    "thehill.com", "axios.com", "quora.com", "stackoverflow.com", "stackexchange.com", "forum.com", "dev.to",
    "dribbble.com", "behance.net", "quibblo.com", "yelp.com", "angel.co", "glassdoor.com", "indeed.com",
    "ziprecruiter.com", "upwork.com", "freelancer.com", "teachable.com", "udemy.com", "coursera.org", 
    "lynda.com", "skillshare.com", "codecademy.com", "treehouse.com", "edx.org", "pluralsight.com", "udacity.com",
    "github.com", "bitbucket.org", "gitlab.com", "sourceforge.net", "launchpad.net", "codepen.io", "jsfiddle.net",
    "jsbin.com", "plnkr.co", "firebase.com", "heroku.com", "stackblitz.com", "glitch.com", "codewars.com",
    "leetcode.com", "topcoder.com", "coderbyte.com", "hackerrank.com", "freecodecamp.org", "w3schools.com",
    "css-tricks.com", "smashingmagazine.com", "developer.mozilla.org", "codeproject.com", "sitepoint.com",
    "tutorialspoint.com", "sciencedaily.com", "lifehacker.com", "makeuseof.com", "cnet.com", "techcrunch.com",
    "engadget.com", "arstechnica.com", "wired.com", "howtogeek.com", "androidcentral.com", "appleinsider.com",
    "9to5mac.com", "macrumors.com", "slashgear.com", "geekwire.com", "androidpolice.com", "xda-developers.com",
    "windowscentral.com", "techradar.com", "tomshardware.com", "pcmag.com", "pcworld.com", "anandtech.com",
    "circuitdigest.com", "edn.com", "designnews.com", "element14.com", "embedded.com", "electronicsweekly.com",
    "allaboutcircuits.com", "teslarati.com", "insideevs.com", "autoblog.com", "carscoops.com", "roadshow.com",
    "motortrend.com", "caranddriver.com", "autoweek.com", "businessinsider.com", "marketwatch.com", "investopedia.com",
    "finance.yahoo.com", "wsj.com", "ft.com", "bloomberg.com", "kiplinger.com", "thestreet.com", "usa.today.com",
    "businessweek.com", "nyse.com", "nasdaq.com", "spglobal.com", "fitchratings.com", "bondbuyer.com", "federalreserve.gov",
    "worldbank.org", "imf.org", "oecd.org", "stlouisfed.org", "bea.gov", "bls.gov", "ny.frb.org", "internationaltrade.com",
    "census.gov", "trade.gov", "exim.gov", "fedex.com", "ups.com", "usps.com", "amazon.com", "easyjet.com", "expedia.com",
    "tripadvisor.com", "airbnb.com", "booking.com", "hotels.com", "travelocity.com", "priceline.com", "skyscanner.com",
    "orbitz.com", "travelzoo.com", "viator.com", "flights.com", "americanexpress.com", "discover.com", "visa.com", 
    "mastercard.com", "paypal.com", "applepay.com", "googlepay.com", "amazonpay.com", "skrill.com", "payoneer.com",
    "transferwise.com", "payza.com", "propay.com", "venmo.com", "zellepay.com", "quickbooks.intuit.com", "shopify.com",
    "woocommerce.com", "shopify.com", "bigcommerce.com", "magento.com", "prestashop.com", "wix.com", "squarespace.com",
    "wordpress.com", "aliexpress.com", "wish.com", "ebay.com", "mercari.com", "poshmark.com", "depop.com", "etsy.com",
    "bestbuy.com", "target.com", "walmart.com", "homeDepot.com", "lowes.com", "ikea.com", "sears.com", "costco.com",
    "macys.com", "kohls.com", "jcpenney.com", "samsclub.com", "staples.com", "officeDepot.com", "bedbathandbeyond.com",
    "wayfair.com", "overstock.com", "cb2.com", "crateandbarrel.com", "potterybarn.com", "urbanoutfitters.com", "anthropologie.com",
    "worldmarket.com", "blinds.com", "elements.com", "flooringamerica.com", "lowes.com", "homedepot.com", "ikea.com",
    "restorationhardware.com", "walgreens.com", "cvs.com", "riteaid.com", "wallgreens.com", "lyft.com", "uber.com",
    "zipcar.com", "car2go.com", "bird.co", "lyft.com", "scoot.com", "grubhub.com", "doordash.com", "ubereats.com",
    "popular.com", "dunkindonuts.com", "starbucks.com", "mcdonalds.com", "pizzaHut.com", "dominos.com", "subway.com",
    "wendys.com", "chipotle.com", "pandora.com", "spotify.com", "applemusic.com", "deezer.com", "soundcloud.com",
    "tidal.com", "bandcamp.com", "napster.com", "8tracks.com", "radio.com", "audiomack.com", "datpiff.com", "live365.com",
    "shoutcast.com", "slacker.com", "broadcast.com", "bassdrive.com", "pandora.com", "rhapsody.com", "mixcloud.com"
  ];

  if (fileInput.files.length === 0) {
    alert('Please upload a file.');
    return;
  }

  const file = fileInput.files[0];
  fileInfo.textContent = `Processing file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;

  const reader = new FileReader();

  reader.onload = function(e) {
    const content = e.target.result;
    const parsedCredentials = parseCredentials(content, domainsToTrack);
    saveCredentials(parsedCredentials);
  };

  reader.onerror = function() {
    alert('Error reading file.');
  };

  reader.readAsText(file);
}

function parseCredentials(content, domainsToTrack) {
  const credentials = [];
  const lines = content.split('\n');
  const regex = /([a-zA-Z0-9._%+-]+):([^:\n]+)@(.*)/;

  lines.forEach(line => {
    const match = line.match(regex);
    if (match) {
      const username = match[1];
      const password = match[2];
      const domain = match[3];

      if (domainsToTrack.includes(domain)) {
        credentials.push({ domain, username, password });
      }
    }
  });

  return credentials;
}

function saveCredentials(credentials) {
  const resultsFolder = "results";  // folder where text files will be saved
  let domains = {};

  credentials.forEach(credential => {
    const domain = credential.domain;

    if (!domains[domain]) {
      domains[domain] = [];
    }

    domains[domain].push(`${credential.username}:${credential.password}`);
  });

  // For each domain, create a text file
  for (const [domain, credList] of Object.entries(domains)) {
    const fileContent = credList.join("\n");

    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${domain}_credentials.txt`;
    link.click();
  }
}
