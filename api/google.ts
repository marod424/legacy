const SPREADSHEET_ID = '16ZFeCKW9f8pF1L_c-_RGHDXKTkMIy8ADrjlw4YLXf0M';
const WORKSHEET_ID = 'od6';

const sheets = {
  baseURL: 'https://spreadsheets.google.com',
  path: `feeds/list/${SPREADSHEET_ID}/${WORKSHEET_ID}/public/values`,
  contentType: 'json',
}

export const sheetsURL = `${sheets.baseURL}/${sheets.path}?alt=${sheets.contentType}`;
