// Q1
function fetchDataCallback(url, callback) {
  console.log(`Fetching data from ${url}...`);
  
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data);
  }, 2000);
}

// Q2
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Invalid URL');
      return;
    }

    console.log(`Fetching data from ${url}...`);

    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data);
    }, 2000);
  });
}

// Q3
function fetchDataAsync(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('Invalid URL');
      return;
    }

    console.log(`Fetching data from ${url}...`);

    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data);
    }, 2000);
  });
}

async function loadData(url) {
  try {
    const data = await fetchDataAsync(url);
    console.log('Data received:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
