export const baseURL1 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/relationships`;

export const baseURL2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/hospitality`

export const baseURL3 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/road-rage`


export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};