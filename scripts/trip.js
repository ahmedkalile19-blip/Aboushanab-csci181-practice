// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------
const driver_name = "Ahmed Khalil";
const distance_miles = 400;
const mpg = 29;
const gas_price = 3.79;
const gallons = 15;
const is_round_trip = true;

let total_distance;

// ------------------------------------------------------------
// Derived/Calculated Values
// ------------------------------------------------------------
// Calculate total distance using if/else
if (is_round_trip) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}

console.log("Total distance:", total_distance, "miles");

// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------

// Function to calculate how many gallons needed for the trip
function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}

// Function to calculate fuel cost
function calculateFuelCost(gallons, gas_price) {
  return gallons * gas_price;
}

// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------

// Calculate gallons needed and fuel cost
const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const total_cost = calculateFuelCost(gallons_needed, gas_price);

console.log("Estimated gallons needed:", gallons_needed.toFixed(2));
console.log("Estimated total cost: $", total_cost.toFixed(2));

// ------------------------------------------------------------
// Loop to print gas stops
// ------------------------------------------------------------
let miles_traveled = 0;
let stop_number = 1;
let cost_so_far = 0;

while (miles_traveled < total_distance) {
  // Calculate miles until next stop
  let miles_until_next_stop = Math.min(
    gallons * mpg,
    total_distance - miles_traveled,
  );

  // Update miles traveled and cost so far
  miles_traveled += miles_until_next_stop;
  cost_so_far += calculateFuelCost(miles_until_next_stop / mpg, gas_price);

  // Log stop info
  console.log(
    `Stop #${stop_number}: Traveled ${miles_traveled} miles, Gas spent so far: $${cost_so_far.toFixed(2)}`,
  );
  stop_number++;
}

// ------------------------------------------------------------
// Final Road Trip Summary
// ------------------------------------------------------------
console.log("--------------------------------------------------");
console.log(`Driver: ${driver_name}`);
console.log(`Total distance: ${total_distance} miles`);
console.log(`Estimated gallons needed: ${gallons_needed.toFixed(2)}`);
console.log(`Estimated total fuel cost: $${total_cost.toFixed(2)}`);
console.log("--------------------------------------------------");
