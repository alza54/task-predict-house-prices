import debug from 'debug';
import got, { Got, NormalizedOptions, RequestError, Response } from 'got';

export type HttpClient = Got;

export function createHttpClient (): HttpClient {
  const log = debug('crawler:http');

  return got.extend({
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Linux',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    },
    timeout: 5000,
    retry: {
      limit: 5
    },
    hooks: {
      beforeRequest: [
        (options: NormalizedOptions) => {
          log('Making %s request to %s', options.method, options.url);
        }
      ],
      beforeRetry: [
        (options: NormalizedOptions, error: RequestError | undefined, retryCount?: number) => {
          log('Making retry %i/5 to %s', retryCount, options.url);
        }
      ],
      afterResponse: [
        (response: Response) => {
          log('Got response from %s', response.url);

          return response;
        }
      ]
    }
  });
}
