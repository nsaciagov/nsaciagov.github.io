const domainsToTrack = new Set([
  "facebook.com", "twitter.com", "instagram.com", "linkedin.com", "tiktok.com",
  "pinterest.com", "snapchat.com", "youtube.com", "reddit.com", "tumblr.com",
  "vimeo.com", "flickr.com", "quora.com", "wordpress.com", "medium.com",
  "wix.com", "blogger.com", "deviantart.com", "behance.net", "500px.com",
  "dribbble.com", "soundcloud.com", "mixcloud.com", "patreon.com", "bandcamp.com",
  "github.com", "gitlab.com", "stackoverflow.com", "discord.com", "slack.com",
  "telegram.com", "whatsapp.com", "zoom.us", "google.com", "apple.com",
  "paypal.com", "amazon.com", "shopify.com", "ebay.com", "alibaba.com"
]);

function processFile() {
  const input = document.getElementById('fileInput');
  const file = input.files[0];
  if (!file) return alert("Please select a file.");

  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result;
    const lines = text.split('\n');
    const credsByDomain = {};

    lines.forEach(line => {
      const match = line.match(/^(.+?):(.+?)@(.+)$/);
      if (match) {
        const user = match[1].trim();
        const pass = match[2].trim();
        const domain = match[3].trim().toLowerCase();

        if (domainsToTrack.has(domain)) {
          if (!credsByDomain[domain]) credsByDomain[domain] = [];
          credsByDomain[domain].push(`${user}:${pass}`);
        }
      }
    });

    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = "";

    for (const domain in credsByDomain) {
      const blob = new Blob([credsByDomain[domain].join("\n")], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${domain}.txt`;
      link.textContent = `Download ${domain}.txt`;
      link.style.display = "block";
      statusDiv.appendChild(link);
    }

    if (Object.keys(credsByDomain).length === 0) {
      statusDiv.textContent = "No valid credentials found for tracked domains.";
    }
  };

  reader.readAsText(file);
}
