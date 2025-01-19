const AtmMachine = (amount: number): object => {

    const denominations: string[] = ["5000", "1000", "500"]
    const cashOut: Record<string, number> = {
        "5000": 0,
        "1000": 0,
        "500": 0
    }

    for (let denominationStr of denominations) {
        let denomination = parseInt(denominationStr);

        if (amount >= denomination) {
            if (amount == denomination) {
                // do nothing
            }
            else if (amount % denomination == 0) {
                cashOut[denominationStr] = Math.floor((amount - denomination) / denomination);
                amount = denomination;
            } else if (amount % denomination != 0) {
                cashOut[denominationStr] = Math.floor((amount) / denomination);
                amount = amount % denomination;
            }

            // special case: last denomation will always be added 
            //               so as to add remaining last denomination amount (if it exists)
            if (amount == 500) {
                cashOut["500"] += 1
                amount -= 500
            }

            console.log("Amount after " + denominationStr + " cashed out: " + amount)
        }

    }

    return cashOut;
}

console.log(AtmMachine(16500))
