
async function calculateAndShow() {

  
  const day = document.getElementById('day').value;
  const sales = document.getElementById('sales').value;
  const target = document.getElementById('target').value;
  const trans = document.getElementById('transactions').value;
  const units = document.getElementById('units').value;
  const traffic = document.getElementById('traffic').value;
  const avt = document.getElementById('avt').value;
  const upt = document.getElementById('upt').value;
  const mtd = document.getElementById('mtd').value;
  const mtdstarget = document.getElementById('mtdstarget').value;
  const mtarget = 1400000; // Monthly target value

  const messageDiv = document.getElementById('message');

  let varFromTarget = "";
  const targetCalc = target - sales;
  if (targetCalc < 0) {
    varFromTarget = `+R${Math.abs(targetCalc).toFixed(2)}`;
  } else{
      varFromTarget = `- R${Math.abs(targetCalc).toFixed(2)}`;
    }

  const PercentageToTarget = ((sales / target) * 100).toFixed(1);
  const ConversionRate = ((trans / traffic) * 100).toFixed(1);
  const mPercentageToTarget = ((mtdstarget / mtd) * 100).toFixed(1);
  const projections = ((mtd / day) * 30).toFixed(2);

  const msg = `Good evening team<br><br>
  Please see below our closing sales update.<br><br>
  ${day}/06/2026<br><br>
  *Figures* 8pm<br><br>
  *Monthly Target*- R1 400 000<br>
  *Actual*: R${sales}<br>
  *Target:* R${target}<br>
  *Var to Target:* ${varFromTarget}<br>
  *Percentage To:* ${PercentageToTarget}%<br>
  ################<br>
  *Trans:* ${trans}<br>
  *Units Sold:* ${units}<br>
  *Foot Traffic:* ${traffic} EST<br>
  *Conversion:* ${ConversionRate}%<br>
  *AVT:* R${avt}<br>
  *UPT:* ${upt}<br>
  ################<br><br>
  *MTD:* R${mtd}<br>
  *MTDs Target:* R${mtdstarget}<br>
  *Percentage to Target* ${mPercentageToTarget}%<br>
  *Projections:* R${projections}<br>
  #################`;
  


  document.getElementById('messagetext').innerHTML = `${msg}`;

}
