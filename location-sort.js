// Define the Haversine formula to calculate distance between two points
function haversine(lat1, lon1, lat2, lon2) {
  // Radius of the Earth in kilometers
  const R = 6371.0;

  // Convert latitude and longitude from degrees to radians
  const radLat1 = (Math.PI * lat1) / 180;
  const radLon1 = (Math.PI * lon1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const radLon2 = (Math.PI * lon2) / 180;

  // Haversine formula
  const dLon = radLon2 - radLon1;
  const dLat = radLat2 - radLat1;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance in kilometers
  const distance = R * c;

  return distance;
}

// Define the target point's latitude and longitude
const targetLat = 40.7128; // New York City latitude
const targetLon = -74.0060; // New York City longitude

// Define an array of points with their latitude and longitude
const points = [
  { name: "Point A", lat: 40.7128, lon: -74.0060 },
  { name: "Point B", lat: 34.0522, lon: -118.2437 },
  { name: "Point C", lat: 51.5074, lon: -0.1278 },
  // Add more points as needed
];

// Calculate distances and sort the points by proximity to the target point
points.sort((point1, point2) =>
  haversine(targetLat, targetLon, point1.lat, point1.lon) -
  haversine(targetLat, targetLon, point2.lat, point2.lon)
);

// Print the sorted points
points.forEach((point) => {
  console.log(
    `${point.name} is ${haversine(targetLat, targetLon, point.lat, point.lon).toFixed(2)} km away from the target point.`
  );
});
