export default function createSearchUrl(description, fulltime, location) {
  let url =
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';

  url += `description=${clearString(description)}`;

  if (location) {
    url += `&location=${clearString(location)}`;
  }

  if (fulltime) {
    url += `&full_time=${fulltime}`;
  }

  return url;
}

function clearString(text) {
  return text.trim().replace(/\s/g, '+').toLowerCase();
}
