function processFile() {
  const fileInput = document.getElementById('fileInput');
  const credentialsOutput = document.getElementById('credentialsOutput');
  const fileInfo = document.getElementById('fileInfo');

  if (fileInput.files.length === 0) {
    alert('Please upload a file.');
    return;
  }

  const file = fileInput.files[0];
  fileInfo.textContent = `Processing file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;

  const reader = new FileReader();

  reader.onload = function(e) {
    const content = e.target.result;
    const parsedCredentials = parseCredentials(content);
    credentialsOutput.value = parsedCredentials.join("\n");
  };

  reader.onerror = function() {
    alert('Error reading file.');
  };

  reader.readAsText(file);
}

function parseCredentials(content) {
  const credentials = [];
  const lines = content.split('\n');

  // Regex to match username:password format (email or alphanumeric)
  const regex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9]+):([^:\n]+)/;

  lines.forEach(line => {
    const match = line.match(regex);
    if (match) {
      const username = match[1];
      const password = match[2];
      credentials.push(`${username}:${password}`);
    }
  });

  return credentials;
}
