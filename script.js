//1.You are given a list of integers. Write a program to find the maximum product of three integers in the list and display the result on a web page.
function findMaxProduct() {
  const numOne = document.getElementById("num1").value,
    numTwo = document.getElementById("num2").value,
    numThree = document.getElementById("num3").value,
    numFour = document.getElementById("num4").value,
    numFive = document.getElementById("num5").value,
    numSix = document.getElementById("num6").value,
    result = document.getElementById("result"),
    btn = document.getElementById("btnSubmit");
  const numbers = [numOne, numTwo, numThree, numFour, numFive, numSix];
  numbers.sort((a, b) => a - b);
  const maxProduct = Math.max(
    numbers[0] * numbers[1] * numbers[2],
    numbers[3] * numbers[4] * numbers[5]
  );
  document.getElementById("result").textContent =
    "Maximum Product: " + maxProduct;
}

//2.You are given a list of integers representing stock prices. Write a program to find the maximum profit that can be made by buying and selling the stock at most once, and display the result on a web page.
// function findMaximumProfit() {
//   const numOneProfit = document.getElementById("num7").value,
//     numTwoProfit = document.getElementById("num8").value,
//     numThreeProfit = document.getElementById("num9").value,
//     numFourProfit = document.getElementById("num10").value,
//     numFiveProfit = document.getElementById("num11").value,
//     numSixProfit = document.getElementById("num12").value,
//     resultProfit = document.getElementById("result"),
//     btnProfit = document.getElementById("btnSubmit");
// }
// Function to find the maximum profit from stock prices
function findMaximumProfit() {
  const stockPrices = [
    Number(document.getElementById("num7").value),
    Number(document.getElementById("num8").value),
    Number(document.getElementById("num9").value),
    Number(document.getElementById("num10").value),
    Number(document.getElementById("num11").value),
    Number(document.getElementById("num12").value),
  ];

  if (stockPrices.length < 2) {
    resultProfit.textContent = "At least two stock prices are required.";
    return;
  }

  const maxProfit = calculateMaxProfit(stockPrices);
  resultProfit.textContent = `Maximum profit: $${maxProfit}`;
}

function calculateMaxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  return maxProfit;
}

const btnProfit = document.getElementById("btnSubmit");
btnProfit.addEventListener("click", findMaximumProfit);

//3.You are given a list of integers representing weights of items and their corresponding values. Write a program to find the maximum value that can be obtained by selecting a subset of items with a total weight not exceeding a given limit, and display the result on a web page.

function maxFromSubsetOfItem() {
  const weightsInput = document.getElementById("weights").value;
  const valuesInput = document.getElementById("values").value;
  const weightLimit = parseInt(document.getElementById("weight-limit").value);

  const weights = weightsInput.split(",").map(Number);
  const values = valuesInput.split(",").map(Number);

  const n = weights.length;
  const dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(weightLimit + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= weightLimit; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  const maxValue = dp[n][weightLimit];
  document.getElementById("resultSubset").textContent =
    "Maximum value: " + maxValue;
}

//4.You are given a list of numbers. Write a program to find the subarray with the largest sum and display the result on a web page.

function findMaxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let subarray = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      start = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      subarray = arr.slice(start, i + 1);
    }
  }

  return { maxSum, subarray };
}

function calculateMaxSubarraySum() {
  const inputElement = document.getElementById("inputArray");
  const inputArray = inputElement.value
    .split(",")
    .map((item) => parseInt(item.trim(), 10));

  const { maxSum, subarray } = findMaxSubarraySum(inputArray);

  const resultElement = document.getElementById("resulthere");
  resultElement.innerHTML = `The subarray with the largest sum is [${subarray}] with a sum of ${maxSum}.`;
}

//5.You are given a binary tree. Write a program to find the maximum depth of the tree and display the result on a web page.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createBinaryTree(arr) {
  if (arr.length === 0) return null;

  const val = arr.shift();
  if (val === null) return null;

  const root = new TreeNode(val);
  root.left = createBinaryTree(arr);
  root.right = createBinaryTree(arr);

  return root;
}

function maxDepth(root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

function findMaxDepth() {
  const inputField = document.getElementById("inputField");
  const input = inputField.value.trim();
  const inputArray = input.split(",").map((s) => {
    if (s.trim() === "null") return null;
    return parseInt(s);
  });

  const treeRoot = createBinaryTree(inputArray);
  const depth = maxDepth(treeRoot);

  const maxDepthSpan = document.getElementById("maxDepth");
  maxDepthSpan.textContent = depth.toString();
}

const calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", findMaxDepth);

//6.You are given a list of integers. Write a program to find the kth smallest element in the list and display the result on a web page

function findKthSmallest() {
  const inputList = document.getElementById("inputList").value;
  const numbers = inputList.split(",").map(Number);
  numbers.sort((a, b) => a - b);
  const kValue = numbers.length;
  const kthSmallest = numbers[kValue - 1];
  document.getElementById(
    "resultKth"
  ).innerText = `The ${kValue}th smallest element in the list is ${kthSmallest}`;
}

//7.You are given a string.Write a program that checks if a given string is a valid email address using logical operators and displays the result in web page.
function validateEmail() {
  const email = document.getElementById("emailInput").value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)) {
    document.getElementById("resultEmail").textContent = "Valid email";
  } else {
    document.getElementById("resultEmail").textContent = "Invalid email";
  }
}

//8.Write a program to calculate the total sum of a particular column in the table and display it on the web page.

let table = document.querySelector("table");
let rows = table.rows;
let sum = 0;

for (let i = 1; i < rows.length; i++) {
  let priceCell = rows[i].cells[1];
  let quantityCell = rows[i].cells[2];
  let price = parseFloat(priceCell.textContent);
  sum += price;
}

let totalSpan = document.getElementById("sum");
totalSpan.textContent = sum.toFixed(2);

//9.You are given a sentence. Write a program that removes all punctuation marks from the sentence and displays the result on a web page.
function removePunctuation(sentence) {
  return sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

let inputSentence = "Skill,safari,is,located,in.coimbatore.";
let result = removePunctuation(inputSentence);
document.getElementById("resultPunctuation").textContent = result;

//10.You are given a list of words. Write a program that finds the words that have more than 5 letters and displays the result on a web page.

function findWords() {
  let inputText = document.getElementById("inputWords").value;
  let words = inputText.split(" ");
  let longWords = words.filter(function (word) {
    return word.length > 5;
  });
  let resultDiv = document.getElementById("resultWords");
  resultDiv.innerHTML =
    "<p>Words with more than 5 letters:</p><p>" + longWords.join(", ") + "</p>";
}
