const webpackOutput = require('./../site/data/webpack.json');
const headerTypeMap = new Map([
  [
    'js',
    {
      rel: '"preload"',
      as: '"script"',
    },
  ],
  [
    'css',
    {
      rel: '"preload"',
      as: '"style"',
    },
  ],
  [
    'img',
    {
      rel: '"preload"',
      as: '"image"',
    },
  ],
]);

const globlaHeaders = [
  ['Content-Security-Policy', 'upgrade-insecure-requests'],
  ['X-Xss-Protection', '1; mode=block'],
  ['X-Frame-Options', 'DENY'],
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload'],
  ['Feature-Policy', "sync-xhr 'self'; push 'self'; fullscreen 'self'"],
];

main();
function main() {
  const headers = createHeaderString([
    ...globlaHeaders,
    makeLinkHeader('js', webpackOutput['main']['js']),
    makeLinkHeader('css', webpackOutput['main']['css']),
  ]);

  console.log(
    `
/*
${headers}
`,
  );
}

function createHeaderString(headers) {
  return headers.reduce(concatHeader, '');

  function padString(string, pad = '    ') {
    return `${pad}${string}`;
  }

  function concatHeader(acc, header) {
    const [key, value] = header;
    return `${acc}${padString(`${key}:${value}`)}\n`;
  }
}
function makeLinkHeader(type, file) {
  if (!headerTypeMap.has(type)) {
    throw new Error('Unrecognised type');
  }
  const headerInfo = headerTypeMap.get(type);
  return ['Link', `</${file}>; rel=${headerInfo.rel}; as=${headerInfo.as}`];
}
