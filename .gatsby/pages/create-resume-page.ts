import Axios from 'axios';
import Cheerio from 'cheerio';
import Fs from 'fs';
import TurndownService from 'turndown';
import config from './../config';

export default async function createResumePage() {
  const hasFile = Axios.get(config.googleDocResumeUrl).then((response) => {
    // Load the web page source code into a cheerio instance
    const $ = Cheerio.load(response.data);
    $('#contents');

    const turndownService = new TurndownService();
    turndownService.remove('style');
    turndownService.remove('script');

    Fs.writeFile(
      'content/resume.md',
      turndownService.turndown($('#contents').html()),

      (err) => {
        if (err) throw err;
      }
    );
  });
}
