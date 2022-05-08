export class CrawlerParseError extends TypeError {
  public readonly pageBody: string;

  public readonly regex: string;

  constructor(message: string, pageBody: string, regex: string) {
    super(message);

    this.pageBody = pageBody;
    this.regex = regex;
  }
}
