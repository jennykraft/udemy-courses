// data: initial amount, annual contribution, expected return, duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data; // js destructering
    if (initialAmount < 0) {
        return 'initial investment must be at least 0'
    }
    if (duration <= 0) {
        return 'no valid amount of years'
    }
    if (expectedReturn < 0) {
        return 'expected return must be at least 0'
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }

    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResults of results) {
        console.log(`Year: ${yearEndResults.year}`);
        console.log(`Total Amount: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResults.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResults.totalInterestEarned.toFixed(0)}`);
        console.log('––––––––––––––––––––––––––––––––');
    }

}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};

const results = calculateInvestment(investmentData);
printResults(results);