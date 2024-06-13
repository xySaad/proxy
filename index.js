const http = require('http');
const https = require('https');
const { URL } = require('url');

const server = http.createServer();

server.on('request', async (req, res) => {
  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    });
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const targetMirror = url.searchParams.get('mirror');
  const targetUrl = url.searchParams.get('url');

  const targetOrigin = new URL(targetUrl).origin;

  // Define default headers
  let headers = {
    'Accept-Encoding': req.headers['accept-encoding'] || '',
    'Accept-Language': req.headers['accept-language'] || '',
    Host: targetOrigin,
    Origin: targetOrigin,
    Referer: req.headers.referer || '',
    'Sec-Ch-Ua': req.headers['sec-ch-ua'] || '',
    'Sec-Ch-Ua-Mobile': req.headers['sec-ch-ua-mobile'] || '',
    'Sec-Ch-Ua-Platform': req.headers['sec-ch-ua-platform'] || '',
    'Sec-Fetch-Dest': req.headers['sec-fetch-dest'] || '',
    'Sec-Fetch-Mode': req.headers['sec-fetch-mode'] || '',
    'Sec-Fetch-Site': req.headers['sec-fetch-site'] || '',
    'User-Agent': req.headers['user-agent'] || '',
  };

  // Modify headers based on the path
  if (targetMirror === 'dood') {
    const userRange = req.headers.range || 'bytes=0-'; // Default range if not provided
    headers = {
      ...headers,
      Accept: '*/*',
      Connection: 'keep-alive',
      Host: 'ixx272l.video-delivery.net',
      Range: userRange,
      Referer: 'https://d000d.com/',
      'Sec-Ch-Ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'video',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
    };
  } else if (targetMirror === 'rido') {
    headers = {
      ...headers,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      Priority: 'u=0, i',
      Referer: 'https://ridomovies.tv/',
      'Sec-Ch-Ua': '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'iframe',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'cross-site',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
      method: 'GET',
    };
  } else if (targetMirror === 'doodEmbed') {
    headers = {
      ...headers,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      Priority: 'u=0, i',
      'Sec-Ch-Ua': '"Chromium";v="125", "Microsoft Edge";v="125", "Not-A.Brand";v="24"',
      Host: 'ixx272l.video-delivery.net',
      Referer: 'https://d000d.com/',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
    };
  } else if (targetMirror === 'streamwish') {
    headers = {
      ...headers,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'keep-alive',
      Host: 'whpgl5sx.sw-cdnstreamwish.com',
      Origin: 'https://fsdcmo.sbs',
      Referer: 'https://fsdcmo.sbs/',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
      'sec-ch-ua': `"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"`,
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
    };
  } else if (targetMirror === 'closeload') {
    headers = {
      ...headers,
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      Origin: 'https://closeload.top',
      Pragma: 'no-cache',
      Priority: 'u=1, i',
      Referer: 'https://closeload.top/',
      'Sec-Ch-Ua': `"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"`,
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': 'Windows',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0`,
    };
  }

  const options = {
    method: req.method,
    headers,
  };

  const proxyReq = https.request(targetUrl, options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      ...proxyRes.headers,
    });
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
