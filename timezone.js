// Comprehensive timezone database with all major cities and countries
const TIMEZONES = [
  // North America
  {
    city: "New York",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Los Angeles",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Chicago",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Houston",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Phoenix",
    country: "United States",
    timezone: "America/Phoenix",
    flag: "🇺🇸",
  },
  {
    city: "Philadelphia",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "San Antonio",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "San Diego",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Dallas",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "San Jose",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Austin",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Jacksonville",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Fort Worth",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Columbus",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "San Francisco",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Charlotte",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Indianapolis",
    country: "United States",
    timezone: "America/Indiana/Indianapolis",
    flag: "🇺🇸",
  },
  {
    city: "Seattle",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Denver",
    country: "United States",
    timezone: "America/Denver",
    flag: "🇺🇸",
  },
  {
    city: "Washington",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Boston",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Nashville",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Detroit",
    country: "United States",
    timezone: "America/Detroit",
    flag: "🇺🇸",
  },
  {
    city: "Portland",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Las Vegas",
    country: "United States",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
  },
  {
    city: "Memphis",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Louisville",
    country: "United States",
    timezone: "America/Kentucky/Louisville",
    flag: "🇺🇸",
  },
  {
    city: "Baltimore",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Milwaukee",
    country: "United States",
    timezone: "America/Chicago",
    flag: "🇺🇸",
  },
  {
    city: "Albuquerque",
    country: "United States",
    timezone: "America/Denver",
    flag: "🇺🇸",
  },
  {
    city: "Miami",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "Atlanta",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },

  {
    city: "Toronto",
    country: "Canada",
    timezone: "America/Toronto",
    flag: "🇨🇦",
  },
  {
    city: "Montreal",
    country: "Canada",
    timezone: "America/Montreal",
    flag: "🇨🇦",
  },
  {
    city: "Vancouver",
    country: "Canada",
    timezone: "America/Vancouver",
    flag: "🇨🇦",
  },
  {
    city: "Calgary",
    country: "Canada",
    timezone: "America/Edmonton",
    flag: "🇨🇦",
  },
  {
    city: "Edmonton",
    country: "Canada",
    timezone: "America/Edmonton",
    flag: "🇨🇦",
  },
  {
    city: "Ottawa",
    country: "Canada",
    timezone: "America/Toronto",
    flag: "🇨🇦",
  },
  {
    city: "Winnipeg",
    country: "Canada",
    timezone: "America/Winnipeg",
    flag: "🇨🇦",
  },
  {
    city: "Quebec City",
    country: "Canada",
    timezone: "America/Toronto",
    flag: "🇨🇦",
  },

  {
    city: "Mexico City",
    country: "Mexico",
    timezone: "America/Mexico_City",
    flag: "🇲🇽",
  },
  {
    city: "Guadalajara",
    country: "Mexico",
    timezone: "America/Mexico_City",
    flag: "🇲🇽",
  },
  {
    city: "Monterrey",
    country: "Mexico",
    timezone: "America/Monterrey",
    flag: "🇲🇽",
  },
  { city: "Cancun", country: "Mexico", timezone: "America/Cancun", flag: "🇲🇽" },
  {
    city: "Tijuana",
    country: "Mexico",
    timezone: "America/Tijuana",
    flag: "🇲🇽",
  },

  // South America
  {
    city: "Sao Paulo",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    flag: "🇧🇷",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    flag: "🇧🇷",
  },
  {
    city: "Brasilia",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    flag: "🇧🇷",
  },
  {
    city: "Salvador",
    country: "Brazil",
    timezone: "America/Bahia",
    flag: "🇧🇷",
  },
  {
    city: "Fortaleza",
    country: "Brazil",
    timezone: "America/Fortaleza",
    flag: "🇧🇷",
  },

  {
    city: "Buenos Aires",
    country: "Argentina",
    timezone: "America/Argentina/Buenos_Aires",
    flag: "🇦🇷",
  },
  {
    city: "Cordoba",
    country: "Argentina",
    timezone: "America/Argentina/Cordoba",
    flag: "🇦🇷",
  },
  {
    city: "Rosario",
    country: "Argentina",
    timezone: "America/Argentina/Cordoba",
    flag: "🇦🇷",
  },

  { city: "Lima", country: "Peru", timezone: "America/Lima", flag: "🇵🇪" },
  {
    city: "Bogota",
    country: "Colombia",
    timezone: "America/Bogota",
    flag: "🇨🇴",
  },
  {
    city: "Santiago",
    country: "Chile",
    timezone: "America/Santiago",
    flag: "🇨🇱",
  },
  {
    city: "Caracas",
    country: "Venezuela",
    timezone: "America/Caracas",
    flag: "🇻🇪",
  },
  {
    city: "Quito",
    country: "Ecuador",
    timezone: "America/Guayaquil",
    flag: "🇪🇨",
  },
  {
    city: "La Paz",
    country: "Bolivia",
    timezone: "America/La_Paz",
    flag: "🇧🇴",
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    timezone: "America/Montevideo",
    flag: "🇺🇾",
  },

  // Europe
  {
    city: "London",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },
  {
    city: "Manchester",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },
  {
    city: "Birmingham",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },
  {
    city: "Glasgow",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },
  {
    city: "Liverpool",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },

  { city: "Paris", country: "France", timezone: "Europe/Paris", flag: "🇫🇷" },
  {
    city: "Marseille",
    country: "France",
    timezone: "Europe/Paris",
    flag: "🇫🇷",
  },
  { city: "Lyon", country: "France", timezone: "Europe/Paris", flag: "🇫🇷" },
  { city: "Toulouse", country: "France", timezone: "Europe/Paris", flag: "🇫🇷" },
  { city: "Nice", country: "France", timezone: "Europe/Paris", flag: "🇫🇷" },

  { city: "Berlin", country: "Germany", timezone: "Europe/Berlin", flag: "🇩🇪" },
  { city: "Munich", country: "Germany", timezone: "Europe/Berlin", flag: "🇩🇪" },
  {
    city: "Frankfurt",
    country: "Germany",
    timezone: "Europe/Berlin",
    flag: "🇩🇪",
  },
  {
    city: "Hamburg",
    country: "Germany",
    timezone: "Europe/Berlin",
    flag: "🇩🇪",
  },
  {
    city: "Cologne",
    country: "Germany",
    timezone: "Europe/Berlin",
    flag: "🇩🇪",
  },
  {
    city: "Stuttgart",
    country: "Germany",
    timezone: "Europe/Berlin",
    flag: "🇩🇪",
  },

  { city: "Madrid", country: "Spain", timezone: "Europe/Madrid", flag: "🇪🇸" },
  {
    city: "Barcelona",
    country: "Spain",
    timezone: "Europe/Madrid",
    flag: "🇪🇸",
  },
  { city: "Valencia", country: "Spain", timezone: "Europe/Madrid", flag: "🇪🇸" },
  { city: "Seville", country: "Spain", timezone: "Europe/Madrid", flag: "🇪🇸" },

  { city: "Rome", country: "Italy", timezone: "Europe/Rome", flag: "🇮🇹" },
  { city: "Milan", country: "Italy", timezone: "Europe/Rome", flag: "🇮🇹" },
  { city: "Naples", country: "Italy", timezone: "Europe/Rome", flag: "🇮🇹" },
  { city: "Turin", country: "Italy", timezone: "Europe/Rome", flag: "🇮🇹" },
  { city: "Florence", country: "Italy", timezone: "Europe/Rome", flag: "🇮🇹" },
  { city: "Venice", country: "Italy", timezone: "Europe/Rome", flag: "🇮🇹" },

  {
    city: "Amsterdam",
    country: "Netherlands",
    timezone: "Europe/Amsterdam",
    flag: "🇳🇱",
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
    timezone: "Europe/Amsterdam",
    flag: "🇳🇱",
  },
  {
    city: "The Hague",
    country: "Netherlands",
    timezone: "Europe/Amsterdam",
    flag: "🇳🇱",
  },

  {
    city: "Brussels",
    country: "Belgium",
    timezone: "Europe/Brussels",
    flag: "🇧🇪",
  },
  { city: "Vienna", country: "Austria", timezone: "Europe/Vienna", flag: "🇦🇹" },
  {
    city: "Zurich",
    country: "Switzerland",
    timezone: "Europe/Zurich",
    flag: "🇨🇭",
  },
  {
    city: "Geneva",
    country: "Switzerland",
    timezone: "Europe/Zurich",
    flag: "🇨🇭",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    timezone: "Europe/Prague",
    flag: "🇨🇿",
  },
  {
    city: "Budapest",
    country: "Hungary",
    timezone: "Europe/Budapest",
    flag: "🇭🇺",
  },
  { city: "Warsaw", country: "Poland", timezone: "Europe/Warsaw", flag: "🇵🇱" },
  {
    city: "Copenhagen",
    country: "Denmark",
    timezone: "Europe/Copenhagen",
    flag: "🇩🇰",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    timezone: "Europe/Stockholm",
    flag: "🇸🇪",
  },
  { city: "Oslo", country: "Norway", timezone: "Europe/Oslo", flag: "🇳🇴" },
  {
    city: "Helsinki",
    country: "Finland",
    timezone: "Europe/Helsinki",
    flag: "🇫🇮",
  },
  { city: "Dublin", country: "Ireland", timezone: "Europe/Dublin", flag: "🇮🇪" },
  {
    city: "Lisbon",
    country: "Portugal",
    timezone: "Europe/Lisbon",
    flag: "🇵🇹",
  },
  { city: "Athens", country: "Greece", timezone: "Europe/Athens", flag: "🇬🇷" },
  {
    city: "Bucharest",
    country: "Romania",
    timezone: "Europe/Bucharest",
    flag: "🇷🇴",
  },
  { city: "Sofia", country: "Bulgaria", timezone: "Europe/Sofia", flag: "🇧🇬" },

  { city: "Moscow", country: "Russia", timezone: "Europe/Moscow", flag: "🇷🇺" },
  {
    city: "Saint Petersburg",
    country: "Russia",
    timezone: "Europe/Moscow",
    flag: "🇷🇺",
  },
  {
    city: "Novosibirsk",
    country: "Russia",
    timezone: "Asia/Novosibirsk",
    flag: "🇷🇺",
  },
  {
    city: "Yekaterinburg",
    country: "Russia",
    timezone: "Asia/Yekaterinburg",
    flag: "🇷🇺",
  },
  {
    city: "Vladivostok",
    country: "Russia",
    timezone: "Asia/Vladivostok",
    flag: "🇷🇺",
  },

  {
    city: "Istanbul",
    country: "Turkey",
    timezone: "Europe/Istanbul",
    flag: "🇹🇷",
  },
  {
    city: "Ankara",
    country: "Turkey",
    timezone: "Europe/Istanbul",
    flag: "🇹🇷",
  },
  { city: "Izmir", country: "Turkey", timezone: "Europe/Istanbul", flag: "🇹🇷" },

  // Asia
  { city: "Tokyo", country: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Osaka", country: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Kyoto", country: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Yokohama", country: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Nagoya", country: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },

  { city: "Seoul", country: "South Korea", timezone: "Asia/Seoul", flag: "🇰🇷" },
  { city: "Busan", country: "South Korea", timezone: "Asia/Seoul", flag: "🇰🇷" },
  {
    city: "Incheon",
    country: "South Korea",
    timezone: "Asia/Seoul",
    flag: "🇰🇷",
  },

  { city: "Beijing", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Shanghai", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  {
    city: "Guangzhou",
    country: "China",
    timezone: "Asia/Shanghai",
    flag: "🇨🇳",
  },
  { city: "Shenzhen", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Chengdu", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  {
    city: "Chongqing",
    country: "China",
    timezone: "Asia/Shanghai",
    flag: "🇨🇳",
  },
  { city: "Tianjin", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Wuhan", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Hangzhou", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Xi'an", country: "China", timezone: "Asia/Shanghai", flag: "🇨🇳" },

  {
    city: "Hong Kong",
    country: "Hong Kong",
    timezone: "Asia/Hong_Kong",
    flag: "🇭🇰",
  },
  { city: "Taipei", country: "Taiwan", timezone: "Asia/Taipei", flag: "🇹🇼" },
  {
    city: "Singapore",
    country: "Singapore",
    timezone: "Asia/Singapore",
    flag: "🇸🇬",
  },

  {
    city: "Bangkok",
    country: "Thailand",
    timezone: "Asia/Bangkok",
    flag: "🇹🇭",
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    timezone: "Asia/Ho_Chi_Minh",
    flag: "🇻🇳",
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    timezone: "Asia/Ho_Chi_Minh",
    flag: "🇻🇳",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    timezone: "Asia/Kuala_Lumpur",
    flag: "🇲🇾",
  },
  {
    city: "Jakarta",
    country: "Indonesia",
    timezone: "Asia/Jakarta",
    flag: "🇮🇩",
  },
  {
    city: "Manila",
    country: "Philippines",
    timezone: "Asia/Manila",
    flag: "🇵🇭",
  },

  { city: "Mumbai", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Delhi", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Bangalore", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Hyderabad", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Chennai", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Kolkata", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Pune", country: "India", timezone: "Asia/Kolkata", flag: "🇮🇳" },

  {
    city: "Karachi",
    country: "Pakistan",
    timezone: "Asia/Karachi",
    flag: "🇵🇰",
  },
  { city: "Lahore", country: "Pakistan", timezone: "Asia/Karachi", flag: "🇵🇰" },
  {
    city: "Islamabad",
    country: "Pakistan",
    timezone: "Asia/Karachi",
    flag: "🇵🇰",
  },

  { city: "Dhaka", country: "Bangladesh", timezone: "Asia/Dhaka", flag: "🇧🇩" },

  {
    city: "Dubai",
    country: "United Arab Emirates",
    timezone: "Asia/Dubai",
    flag: "🇦🇪",
  },
  {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    timezone: "Asia/Dubai",
    flag: "🇦🇪",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    timezone: "Asia/Riyadh",
    flag: "🇸🇦",
  },
  {
    city: "Jeddah",
    country: "Saudi Arabia",
    timezone: "Asia/Riyadh",
    flag: "🇸🇦",
  },
  {
    city: "Mecca",
    country: "Saudi Arabia",
    timezone: "Asia/Riyadh",
    flag: "🇸🇦",
  },
  { city: "Doha", country: "Qatar", timezone: "Asia/Qatar", flag: "🇶🇦" },
  {
    city: "Kuwait City",
    country: "Kuwait",
    timezone: "Asia/Kuwait",
    flag: "🇰🇼",
  },
  { city: "Tehran", country: "Iran", timezone: "Asia/Tehran", flag: "🇮🇷" },
  { city: "Baghdad", country: "Iraq", timezone: "Asia/Baghdad", flag: "🇮🇶" },
  {
    city: "Tel Aviv",
    country: "Israel",
    timezone: "Asia/Jerusalem",
    flag: "🇮🇱",
  },
  {
    city: "Jerusalem",
    country: "Israel",
    timezone: "Asia/Jerusalem",
    flag: "🇮🇱",
  },

  { city: "Baku", country: "Azerbaijan", timezone: "Asia/Baku", flag: "🇦🇿" },
  { city: "Tbilisi", country: "Georgia", timezone: "Asia/Tbilisi", flag: "🇬🇪" },
  { city: "Yerevan", country: "Armenia", timezone: "Asia/Yerevan", flag: "🇦🇲" },

  // Africa
  { city: "Cairo", country: "Egypt", timezone: "Africa/Cairo", flag: "🇪🇬" },
  { city: "Lagos", country: "Nigeria", timezone: "Africa/Lagos", flag: "🇳🇬" },
  {
    city: "Kinshasa",
    country: "DR Congo",
    timezone: "Africa/Kinshasa",
    flag: "🇨🇩",
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    timezone: "Africa/Johannesburg",
    flag: "🇿🇦",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    timezone: "Africa/Johannesburg",
    flag: "🇿🇦",
  },
  { city: "Nairobi", country: "Kenya", timezone: "Africa/Nairobi", flag: "🇰🇪" },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    timezone: "Africa/Addis_Ababa",
    flag: "🇪🇹",
  },
  { city: "Accra", country: "Ghana", timezone: "Africa/Accra", flag: "🇬🇭" },
  {
    city: "Casablanca",
    country: "Morocco",
    timezone: "Africa/Casablanca",
    flag: "🇲🇦",
  },
  {
    city: "Algiers",
    country: "Algeria",
    timezone: "Africa/Algiers",
    flag: "🇩🇿",
  },
  { city: "Tunis", country: "Tunisia", timezone: "Africa/Tunis", flag: "🇹🇳" },
  { city: "Dakar", country: "Senegal", timezone: "Africa/Dakar", flag: "🇸🇳" },
  {
    city: "Dar es Salaam",
    country: "Tanzania",
    timezone: "Africa/Dar_es_Salaam",
    flag: "🇹🇿",
  },
  {
    city: "Kampala",
    country: "Uganda",
    timezone: "Africa/Kampala",
    flag: "🇺🇬",
  },
  {
    city: "Abidjan",
    country: "Ivory Coast",
    timezone: "Africa/Abidjan",
    flag: "🇨🇮",
  },

  // Oceania
  {
    city: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    flag: "🇦🇺",
  },
  {
    city: "Melbourne",
    country: "Australia",
    timezone: "Australia/Melbourne",
    flag: "🇦🇺",
  },
  {
    city: "Brisbane",
    country: "Australia",
    timezone: "Australia/Brisbane",
    flag: "🇦🇺",
  },
  {
    city: "Perth",
    country: "Australia",
    timezone: "Australia/Perth",
    flag: "🇦🇺",
  },
  {
    city: "Adelaide",
    country: "Australia",
    timezone: "Australia/Adelaide",
    flag: "🇦🇺",
  },
  {
    city: "Canberra",
    country: "Australia",
    timezone: "Australia/Sydney",
    flag: "🇦🇺",
  },

  {
    city: "Auckland",
    country: "New Zealand",
    timezone: "Pacific/Auckland",
    flag: "🇳🇿",
  },
  {
    city: "Wellington",
    country: "New Zealand",
    timezone: "Pacific/Auckland",
    flag: "🇳🇿",
  },

  { city: "Fiji", country: "Fiji", timezone: "Pacific/Fiji", flag: "🇫🇯" },
  {
    city: "Port Moresby",
    country: "Papua New Guinea",
    timezone: "Pacific/Port_Moresby",
    flag: "🇵🇬",
  },
];

// Search function
function searchTimezones(query) {
  const lowerQuery = query.toLowerCase();
  return TIMEZONES.filter(
    (tz) =>
      tz.city.toLowerCase().includes(lowerQuery) ||
      tz.country.toLowerCase().includes(lowerQuery)
  );
}

// Get timezone by city name
function getTimezoneByCity(cityName) {
  return TIMEZONES.find(
    (tz) => tz.city.toLowerCase() === cityName.toLowerCase()
  );
}
