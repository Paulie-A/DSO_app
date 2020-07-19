# DSO_app
The DSO App is an express app with functions to calculate DSO (days outstanding) and CEI (Collection Effectiveness index) for measuring accounts receivables collections.

I was inspired to create this app as DSO/CEI is a key performance indicator in my current profession.

### Live view
View the deployed page at https://agile-plains-29357.herokuapp.com/

### Usage

 The following figures are required for variable input

**DSO**
 1. The total balance of your receivables ledger
 2. Your current month credit sales value
 3. The number of days in the the current month 
 
 **CEI**
 1. The total opening balance of your receviables ledger
 2. The total current month credit sales billed value
 3. The total closing balance of your receivables ledger
 4. The closing total of your current month credit sales billed


To run this app locally run dso.js in node and open http://localhost:3000 in the browser.
