export interface Country {
  slug: string;
  name: string;
  blurb: string;
  regions: string[];
  cities: string[];
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const countries: Country[] = [
  { slug: "usa", name: "United States", regions: ["California", "Texas", "New York", "Florida"], cities: ["New York City", "Los Angeles", "Chicago", "Houston"], blurb: "supporting students at colleges and universities with capstone, coursework, and coding-project requirements every semester" },
  { slug: "uk", name: "United Kingdom", regions: ["England", "Scotland", "Wales", "Northern Ireland"], cities: ["London", "Manchester", "Birmingham", "Edinburgh"], blurb: "supporting students at UK universities with structured dissertation and final-year project modules" },
  { slug: "canada", name: "Canada", regions: ["Ontario", "British Columbia", "Quebec", "Alberta"], cities: ["Toronto", "Vancouver", "Montreal", "Calgary"], blurb: "supporting students at Canadian colleges and universities with capstone and coding projects" },
  { slug: "australia", name: "Australia", regions: ["New South Wales", "Victoria", "Queensland", "Western Australia"], cities: ["Sydney", "Melbourne", "Brisbane", "Perth"], blurb: "supporting students at Australian universities with capstone and thesis requirements" },
  { slug: "india", name: "India", regions: ["West Bengal", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Gujarat", "Rajasthan", "Madhya Pradesh", "Kerala"], cities: ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Noida", "Ahmedabad", "Jaipur", "Lucknow", "Indore", "Kochi", "Coimbatore", "Bhopal", "Nagpur"], blurb: "supporting engineering, MCA, and diploma students from universities such as MAKAUT, AKTU, VTU, and Anna University" },
  { slug: "uae", name: "United Arab Emirates", regions: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"], cities: ["Dubai", "Abu Dhabi", "Sharjah"], blurb: "supporting students at international campuses and universities across the Emirates with project development and academic writing" },
  { slug: "singapore", name: "Singapore", regions: [], cities: ["Singapore"], blurb: "helping students at Singapore's universities and polytechnics with software projects, data analysis, and reports" },
  { slug: "new-zealand", name: "New Zealand", regions: ["Auckland Region", "Wellington Region", "Canterbury Region"], cities: ["Auckland", "Wellington", "Christchurch", "Hamilton"], blurb: "supporting students at New Zealand universities and polytechnics with coding projects and applied research assignments" },
  { slug: "ireland", name: "Ireland", regions: ["Leinster", "Munster", "Connacht", "Ulster"], cities: ["Dublin", "Cork", "Galway", "Limerick"], blurb: "helping students at Irish universities and institutes of technology with final-year projects and dissertations" },
  { slug: "south-africa", name: "South Africa", regions: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape"], cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria"], blurb: "assisting students at South African universities with capstone projects, coding assignments, and research reports" },
  { slug: "nigeria", name: "Nigeria", regions: ["Lagos State", "Federal Capital Territory", "Rivers State", "Oyo State"], cities: ["Lagos", "Abuja", "Port Harcourt", "Ibadan"], blurb: "supporting students at University of Lagos, University of Ibadan, and other Nigerian universities with final year projects and software development" },
  { slug: "kenya", name: "Kenya", regions: ["Nairobi County", "Mombasa County", "Kisumu County"], cities: ["Nairobi", "Mombasa", "Kisumu"], blurb: "helping students at University of Nairobi and other Kenyan universities with coding projects, data analysis, and final year research" },
  { slug: "ghana", name: "Ghana", regions: ["Greater Accra Region", "Ashanti Region", "Western Region"], cities: ["Accra", "Kumasi", "Takoradi"], blurb: "supporting students at University of Ghana, KNUST, and other Ghanaian institutions with academic and software project work" },
  { slug: "nepal", name: "Nepal", regions: ["Bagmati Province", "Gandaki Province"], cities: ["Kathmandu", "Pokhara"], blurb: "helping students at Tribhuvan University and other Nepali colleges with final year projects and programming assignments" },
  { slug: "philippines", name: "Philippines", regions: ["Metro Manila", "Central Visayas", "Davao Region"], cities: ["Manila", "Cebu City", "Davao City"], blurb: "supporting students at University of the Philippines, De La Salle University, and other Filipino institutions with capstone and thesis projects" },
  { slug: "malaysia", name: "Malaysia", regions: ["Selangor", "Kuala Lumpur", "Penang", "Johor"], cities: ["Kuala Lumpur", "Penang", "Johor Bahru"], blurb: "helping students at University of Malaya and other Malaysian universities with final year projects and software assignments" },
  { slug: "sri-lanka", name: "Sri Lanka", regions: ["Western Province", "Central Province"], cities: ["Colombo", "Kandy"], blurb: "supporting students at University of Colombo and other Sri Lankan institutions with coding projects and research writing" },
  { slug: "germany", name: "Germany", regions: ["Bavaria", "North Rhine-Westphalia", "Berlin", "Baden-Wurttemberg"], cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"], blurb: "assisting international students in English-taught programs at German universities with coding projects and reports" },
  { slug: "saudi-arabia", name: "Saudi Arabia", regions: ["Riyadh Province", "Makkah Province", "Eastern Province"], cities: ["Riyadh", "Jeddah", "Dammam"], blurb: "supporting students at international and English-medium university programs across Saudi Arabia" },
  { slug: "qatar", name: "Qatar", regions: ["Doha Municipality", "Al Rayyan Municipality"], cities: ["Doha", "Al Rayyan"], blurb: "helping students at Qatar's international university branch campuses with coding and academic project work" },
  { slug: "kuwait", name: "Kuwait", regions: ["Capital Governorate", "Hawalli Governorate"], cities: ["Kuwait City", "Hawalli"], blurb: "supporting students at Kuwait's universities and international colleges with final year and coding projects" },
  { slug: "egypt", name: "Egypt", regions: ["Cairo Governorate", "Alexandria Governorate", "Giza Governorate"], cities: ["Cairo", "Alexandria", "Giza"], blurb: "helping students at Egyptian and international-curriculum universities with software and academic projects" },
  { slug: "indonesia", name: "Indonesia", regions: ["Jakarta", "West Java", "East Java"], cities: ["Jakarta", "Surabaya", "Bandung"], blurb: "supporting students in English-taught programs at Indonesian universities with coding and data projects" },
  { slug: "vietnam", name: "Vietnam", regions: ["Hanoi Region", "Ho Chi Minh City Region", "Da Nang Region"], cities: ["Hanoi", "Ho Chi Minh City", "Da Nang"], blurb: "helping students at Vietnamese and international-curriculum universities with software project development" },
  { slug: "uganda", name: "Uganda", regions: ["Central Region", "Western Region"], cities: ["Kampala", "Entebbe"], blurb: "supporting students at Makerere University and other Ugandan institutions with coding and final year projects" },
  { slug: "tanzania", name: "Tanzania", regions: ["Dar es Salaam Region", "Arusha Region"], cities: ["Dar es Salaam", "Arusha", "Dodoma"], blurb: "helping students at University of Dar es Salaam and other Tanzanian institutions with academic project work" },
  { slug: "zimbabwe", name: "Zimbabwe", regions: ["Harare Province", "Bulawayo Province"], cities: ["Harare", "Bulawayo"], blurb: "supporting students at University of Zimbabwe and other institutions with coding and final year projects" },
  { slug: "malta", name: "Malta", regions: ["Northern Region", "Southern Harbour Region"], cities: ["Valletta", "Sliema", "St. Julian's"], blurb: "helping students at Malta's international university campuses with software and academic project support" },
];

export function getCountryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug);
}
