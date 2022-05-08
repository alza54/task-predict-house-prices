import { createHttpClient, HttpClient } from '../core';

export abstract class WebEntity {
  protected readonly httpClient: HttpClient = createHttpClient();
}
