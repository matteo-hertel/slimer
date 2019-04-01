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
  ['X-Frame-Options', 'DENY'],
  ['X-XSS-Protection', '1; mode=block'],
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
