function upgradePlan(plan, cost) {
    const confirmUpgrade = confirm(`Do you want to upgrade to the ${plan} plan for ₹${cost}?`);
    if (confirmUpgrade) {
      alert(`Processing your payment for the ${plan} plan...`);
      setTimeout(() => {
        alert(`Payment successful for the ${plan} plan!`);
        sendEmail(plan, cost);
      }, 1000); 
    } else {
      alert('Upgrade cancelled. You can continue using your current plan.');
    }
  }

  function sendEmail(plan, cost) {
    console.log(`Email sent: You have successfully upgraded to the ${plan} plan for ₹${cost}.`);
    console.log(`Invoice: Plan - ${plan}, Cost - ₹${cost}`);
    alert(`An email has been sent to your registered email address with the invoice for the ${plan} plan.`);
  }