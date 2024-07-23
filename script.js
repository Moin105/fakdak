
const marqueeContainer = document.getElementById('marquee-container');
const numRows = 100; // Number of rows to generate

// Base content to create variations
const baseContent = [   // Add more tags as needed      
  {tags:["FAK", "FAK DAK", "FAK YOR DEVELULPERS", "FAK YOR COOKING", "FAK YOU MENTAL ISSUES",
  "FAK YR TX SPEED", "FAK YOR TOKEN", "FAK YOR CEO"]},{tags:[ "FAK YOR GOVERNANCE", "FAK0",
  "FAK", "FAKDAK", "FAK YOR CFO TOO", "FAK YOR OPINIONS", "FAK YOR COMMUNITY",
  "FAK YOR DEV"]} ,{tags:["FAK YR BLOCKCHAIN", "FAK YOR STAKING", "FAK YOR APR",
  "FAK", "FAKDAK", "FAK YOR STOCK IMAGES", "U FAT FAK", "FAK YOR STAKE POOL"]},
  {tags:["FAK YOR WAY AIM GUCCI", "FAK YOR INFLUENCER", "FAK YOR WALLET", "FAK YOR COLOR", "FAK YOR LIFE",
  "FAK YOR TA", "FAK YOR MARKET CYCLE", "FAK YOR TICKER"]}, {tags:["FAK YOR ALPHA", "FAK YOR BAGS",
  "FAK YOR PORTFOLIO", "FAK YOR META", "FAK YOR PRESIDENT", "FAK YOR GOVERNMENT TOO!"]}
];

// Function to generate unique content for each row
function generateUniqueContent(rowIndex) {
    // Create a new set of content by cycling through the base content array
    const contentIndex = rowIndex % baseContent.length;
    return baseContent[contentIndex].tags;
  }
  

// Function to create a marquee row
function createMarqueeRow(isReverse, rowIndex) {
  const marqueeRow = document.createElement('div');
  marqueeRow.className = 'marquee';
  if (isReverse) marqueeRow.classList.add('reverse');

  const uniqueContent = generateUniqueContent(rowIndex);
  const randomIndex = Math.floor(Math.random() * uniqueContent.length);

  uniqueContent.forEach((content,index) => {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.textContent = content;
    if (index === randomIndex) {
        tag.classList.add('red'); // Add a class for styling
      }
    marqueeRow.appendChild(tag);
  });

  // Duplicate the content to ensure seamless scrolling
  const clone = marqueeRow.cloneNode(true);
  marqueeRow.appendChild(clone);

  return marqueeRow;
}

// Append marquee rows to the container
for (let i = 0; i < numRows; i++) {
  const isReverse = i % 2 !== 0;
  const marqueeRow = createMarqueeRow(isReverse, i);
  marqueeContainer.appendChild(marqueeRow);
}
