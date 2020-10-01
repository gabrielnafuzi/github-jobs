export default function createSearchUrl(
  description,
  fulltime,
  locationInput,
  locationsOptions
) {
  let url = 'https://www.githubjobs.io/jobs/search?';
  const locations = [];

  if (locationInput) locations.push(clearString(locationInput));

  locationsOptions.forEach(locationItem => {
    if (locationItem) locations.push(clearString(locationItem));
  });

  url += `description=${clearString(description)}`;
  url += `&full_time=${fulltime}`;

  if (locations.length) {
    locations.forEach((locationItem, index) => {
      url += `&location${index + 1}=${locationItem}`;
    });
  }

  return url;
}

function clearString(text) {
  return text.trim().replace(/\s/g, '%20');
}
