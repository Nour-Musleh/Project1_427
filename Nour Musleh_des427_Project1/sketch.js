let grassImage;
let birdsAudio;
let flowerSize = 60; // Initial flower size
let flowers = []; // Array to store all flower objects
let selectedFlower = 0; // Index of the currently selected flower
let arrowPressCount = 0; // Count of arrow key presses for the current flower

function preload() {
  // Load the grass image and birds audio
  grassImage = loadImage("grass.jpg");
  birdsAudio = loadSound("birds.mp3");
}

function keyPressed() {
  if (keyCode === UP_ARROW && arrowPressCount < 3) {
    // Increase the flower size of the currently selected flower
    flowers[selectedFlower].size = min(flowers[selectedFlower].size + 10, 200); // Adjust the maximum size as needed
    arrowPressCount++;
  } else if (keyCode === DOWN_ARROW && arrowPressCount < 3) {
    // Decrease the flower size of the currently selected flower, but ensure it doesn't go below a minimum value
    flowers[selectedFlower].size = max(flowers[selectedFlower].size - 10, 20); // Adjust the minimum size as needed
    arrowPressCount++;
  }

  // If 3 arrow key presses have been made for the current flower, move to the next flower
  if (arrowPressCount >= 3) {
    selectedFlower = (selectedFlower + 1) % flowers.length;
    arrowPressCount = 0;
  }
}

function setup() {
  createCanvas(1000, 600); // Create a canvas
  background('#bdf4ff'); // Set background color

  image(grassImage, 0, 0); // Display the grass image

  // Define Flower 1
  let flower1 = {
    x: 400,
    y: 600,
    flowerColor: 'pink',
    stemColor: 'green',
    leafColor: 'brown',
    size: flowerSize,

    display: function () {
      // Draw leaves
      fill(this.leafColor);
      beginShape();
      vertex(this.x, this.y - 40);
      vertex(this.x, this.y - 100);
      vertex(this.x, this.y - 60);
      vertex(this.x + 10, this.y - 80);
      endShape(CLOSE);

      // Draw stem
      stroke(this.stemColor);
      strokeWeight(5);
      line(this.x, this.y, this.x, this.y - 200);

      // Draw flower petals
      fill(this.flowerColor);
      ellipse(this.x, this.y - 220, this.size, this.size); // petal size

      // Draw flower center
      fill('white');
      ellipse(this.x, this.y - 220, 12, 12);
    }
  };

  // Push Flower 1 into the flowers array
  flowers.push(flower1);

  // Define Flower 2
  let flower2 = {
    x: 600,
    y: 600,
    flowerColor: 'red',
    stemColor: 'green',
    leafColor: 'brown',
    size: flowerSize,

    display: function () {
      // Draw leaves
      fill(this.leafColor);
      beginShape();
      vertex(this.x, this.y - 40);
      vertex(this.x, this.y - 100);
      vertex(this.x, this.y - 60);
      vertex(this.x + 10, this.y - 80);
      endShape(CLOSE);

      // Draw stem
      stroke(this.stemColor);
      strokeWeight(5);
      line(this.x, this.y, this.x, this.y - 200);

      // Draw flower petals
      fill(this.flowerColor);
      ellipse(this.x, this.y - 220, this.size, this.size); // petal size

      // Draw flower center
      fill('white');
      ellipse(this.x, this.y - 220, 12, 12);
    }
  };

  // Push Flower 2 into the flowers array
  flowers.push(flower2);

  // Define Flower 3
  let flower3 = {
    x: 800,
    y: 600,
    flowerColor: 'purple',
    stemColor: 'green',
    leafColor: 'brown',
    size: flowerSize,

    display: function () {
      // Draw leaves
      fill(this.leafColor);
      beginShape();
      vertex(this.x, this.y - 40);
      vertex(this.x, this.y - 100);
      vertex(this.x, this.y - 60);
      vertex(this.x + 10, this.y - 80);
      endShape(CLOSE);

      // Draw stem
      stroke(this.stemColor);
      strokeWeight(5);
      line(this.x, this.y, this.x, this.y - 200);

      // Draw flower petals
      fill(this.flowerColor);
      ellipse(this.x, this.y - 220, this.size, this.size); // petal size

      // Draw flower center
      fill('white');
      ellipse(this.x, this.y - 220, 12, 12);
    }
  };

  // Push Flower 3 into the flowers array
  flowers.push(flower3);

  // Define Flower 4
  let flower4 = {
    x: 200,
    y: 600,
    flowerColor: 'yellow',
    stemColor: 'green',
    leafColor: 'brown',
    size: flowerSize,

    display: function () {
      // Draw leaves
      fill(this.leafColor);
      beginShape();
      vertex(this.x, this.y - 40);
      vertex(this.x, this.y - 100);
      vertex(this.x, this.y - 60);
      vertex(this.x + 10, this.y - 80);
      endShape(CLOSE);

      // Draw stem
      stroke(this.stemColor);
      strokeWeight(5);
      line(this.x, this.y, this.x, this.y - 200);

      // Draw flower petals
      fill(this.flowerColor);
      ellipse(this.x, this.y - 220, this.size, this.size); // petal size

      // Draw flower center
      fill('white');
      ellipse(this.x, this.y - 220, 12, 12);
    }
  };

  // Push Flower 4 into the flowers array
  flowers.push(flower4);

  // Play the birds audio in a loop
  birdsAudio.loop();


// Add instruction text
textSize(16); // Set the text size
fill(0); // Set text color to black
textAlign(CENTER, TOP); // Align text to the top-center of the canvas
text("Press up or down arrow keys 3 times to go to the next flower", 
width / 2, 10);

}

function draw() {
  // Loop through the flowers array and display each flower
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }
}
