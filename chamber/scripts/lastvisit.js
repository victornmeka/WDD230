let daysSince = "";


function getDaysSinceLast() {
  const currentDate = new Date();
  if (!localStorage.getItem("lastVisit")) {
    localStorage.setItem("lastVisit", currentDate.getTime());
    daysSince = ("Welcome! This is your first visit Ever.");
    return daysSince;
  } else {
    let lastVisit = new Date(parseInt(localStorage.getItem("lastVisit")));
    const timeDifference = currentDate - lastVisit;
    let daysSinceLastVisit = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    localStorage.setItem("lastVisit", currentDate.getTime());
    if (daysSinceLastVisit == 1) {
      daysSinceString = (`It's been  ${daysSinceLastVisit} day since your last visit.`);
    }
    else
      daysSinceString = (`We've missed you! It's been  ${daysSinceLastVisit} days since your last visit.`);
    return daysSinceString;
  }
};
document.querySelector("#lastVisit").innerHTML = getDaysSinceLast();
console.log("hey ya")