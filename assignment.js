// https://github.com/Md-Imam-Hasan/Javascript-Problem-Solving 

// kilometerToMeter conversion begin
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Invalid input, enter a non-negative length";
  } else {
    const meter = kilometer * 1000; // 1 kilometer = 1000 meter
    return meter;
  }
}
const result1 = kilometerToMeter(123);
console.log(result1);
// kilometerToMeter conversion end


// budgetCalculator begin
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Invalid input, enter non-negative number"
  } else {
    const watchPrice = watch * 50;
    const phonePrice = phone * 100;
    const laptopPrice = laptop * 500;
    const totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
  }
}
const result2 = budgetCalculator(1, 2, 3);
console.log(result2);
// budgetCalculator end


// hotelCost begin
function hotelCost(days) {
  let cost;
  if (days < 0) {
    return "Invalid input, enter non-negative number of days";
  } else if (days >= 0 && days <= 10) {
    cost = days * 100;
  } else if (days > 10 && days <= 20) {
    cost = 10 * 100 + (days - 10) * 80;
  } else {
    cost = 10 * 100 + 10 * 80 + (days - 20) * 50;
  }
  return cost;
}
const result3 = hotelCost(22);
console.log(result3);
// hotelCost end


// megaFriend begin
function megaFriend(friendsArray) {
  if (friendsArray.length == 0) {
    return "Invalid input, enter some name";
  } else {
    let megaName = "";
    for (var i = 0; i < friendsArray.length; i++) {
      if (friendsArray[i].length > megaName.length) {
        megaName = friendsArray[i];
      }
    }
    return megaName;
  }
}
const friends = ["Ashick", "Nayan", "Uzzol", "Meem"];
const result4 = megaFriend(friends);
console.log(result4);
// megaFriend end
