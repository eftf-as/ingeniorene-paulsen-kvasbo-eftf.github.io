const gridSize = 5;

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events;

const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: 1,
    background: "#ffffff00",
    hasBounds: true,
    enabled: true,
    wireframes: false,
    showSleeping: false,
    showDebug: false,
    showBroadphase: false,
    showBounds: false,
    showVelocity: false,
    showCollisions: false,
    showSeparations: false,
    showAxes: false,
    showPositions: false,
    showAngleIndicator: false,
    showIds: false,
    showShadows: false,
    showVertexNumbers: false,
    showConvexHulls: false,
    showInternalEdges: false,
    showMousePosition: false,
  },
});

// Set the bounds
engine.world.bounds = {
  min: { x: 0, y: 0 },
  max: { x: window.innerWidth, y: window.innerHeight },
};

// Find the number of rows and columns in the grid
const dimensions = getGridDimensions();

// Define the logo placement
const maxX = Math.max(...logo.map((coord) => coord.x));
const maxY = Math.max(...logo.map((coord) => coord.y));
const origoX = Math.floor(dimensions.columns / 2) - Math.floor(maxX / 2);
const origoY = Math.floor((dimensions.rows - maxY) / 2);

// Define the envelope placement
const envelopeMaxX = Math.max(...envelope.map((coord) => coord.x));
const envelopeMaxY = Math.max(...envelope.map((coord) => coord.y));
const envelopeStartX = (window.innerWidth / 2) - Math.floor(envelopeMaxX) * 2.5;
const envelopeStartY = (window.innerHeight) - 100;

const grid = document.body;

const bodies = [];
const staticBodies = [];

// Create the logo
logo.forEach((coord) => {
  // And this is the one that falls down
  // Get the x and y coordinates of the logo
  const x = origoX + coord.x;
  const y = origoY + coord.y;
  // Find hte coordinates of the grid point
  const gridX = x * gridSize;
  const gridY = y * gridSize;

  // Create a random grayscale color
  const color = Math.floor(Math.random() * 4);
  const colorHex = `#${color.toString()}${color.toString()}${color.toString()}`;

  // Add the falling bodies
  const box = Bodies.rectangle(gridX, gridY, gridSize, gridSize, {
    restitution: 1,
    friction: 0.01,
    density: Math.random() * 1,
    angularVelocity: 0.1,
    sleepThreshold: 60,
    frictionAir: Math.random() * 0.01,
    render: {
      fillStyle: colorHex,
      strokeStyle: colorHex,
      lineWidth: 1,
    },
  });
  // Add the static body, not to be used in collisions
  const staticBox = Bodies.rectangle(gridX, gridY, gridSize, gridSize, {
    isStatic: true,
    collisionFilter: {
      mask: 0 // This will make the circle ignore all collisions
    },
    render: {
      fillStyle: "#DDD",
      strokeStyle: "#DDD",
      lineWidth: 1,
    },
  });

  bodies.push(box);
  staticBodies.push(staticBox);
});

const envelopeBodies = [];


envelope.forEach((coord) => {

  const staticBox = Bodies.rectangle(envelopeStartX + (coord.x * gridSize), envelopeStartY + (coord.y * gridSize), gridSize, gridSize, {
    isStatic: true,
    render: {
      fillStyle: "#F00",
      strokeStyle: "#F00",
      lineWidth: 1,
    },
  });
  envelopeBodies.push(staticBox);
});

// Create a clickable body
const clickableBody = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 75, 50, 50, {
  isStatic: true, // Make it static so it doesn't move
  collisionFilter: {
    mask: 0 // This will make the circle ignore all collisions
  },
  restitution: 0.8,
  render: {
      fillStyle: '#ff000000', // Set color for visibility
      strokeStyle: '#ff000000',
      lineWidth: 2
  }
});

Composite.add(engine.world, clickableBody);

// Add static boundary walls (left, right, top, bottom)
const ground = Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight + 10,
  window.innerWidth,
  20,
  { isStatic: true }
);
const leftWall = Bodies.rectangle(
  -10,
  window.innerHeight / 2,
  20,
  window.innerHeight,
  { isStatic: true }
);
const rightWall = Bodies.rectangle(
  window.innerWidth + 10,
  window.innerHeight / 2,
  20,
  window.innerHeight,
  { isStatic: true }
);
const ceiling = Bodies.rectangle(
  window.innerWidth / 2,
  -10,
  window.innerWidth,
  20,
  { isStatic: true }
);

Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);
Composite.add(engine.world, [...staticBodies, ...bodies]);
Composite.add(engine.world, envelopeBodies);

// REnder after three seconds if not on localhost
if (window.location.hostname !== "localhost") {
  setTimeout(Render.run(render), 2500);
} else {
  Render.run(render);
}

var runner = Runner.create();
Runner.run(runner, engine);

// Create mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false,
    },
  },
});
Composite.add(engine.world, mouseConstraint);

// Apply force to the particle on mouse click
Events.on(mouseConstraint, "mousemove", function (event) {
  const mousePosition = event.mouse.position;

  bodies.forEach((body) => {
    // Check if the body contains the mouse position
    if (Matter.Bounds.contains(body.bounds, mousePosition)) {
      // Apply a force to the body when clicked
      const forceMagnitude = 0.02 * body.mass;
      Matter.Body.applyForce(body, body.position, {
        x: (body.position.x - mousePosition.x) * forceMagnitude,
        y: (body.position.y - mousePosition.y) * forceMagnitude,
      });
    }
  });
});

// Detect clicks on the contact icon
Events.on(mouseConstraint, "mousedown", function (event) {
  const mousePosition = event.mouse.position;
  // Check if the body contains the mouse position
  if (Matter.Bounds.contains(clickableBody.bounds, mousePosition)) {
    window.location.href = "mailto:post@eftf.no";
  }
});


function getGridDimensions() {
  // Assuming each grid cell is 10px by 10px

  // Get the width and height of the viewport
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate the number of columns and rows
  const columns = Math.floor(viewportWidth / gridSize);
  const rows = Math.floor(viewportHeight / gridSize);

  return { rows, columns };
}

// Listen to device orientation and adjust gravity
window.addEventListener("deviceorientation", function (event) {
  const beta = event.beta; // -180 to 180 (front-back tilt)
  const gamma = event.gamma; // -90 to 90 (left-right tilt)

  // Normalize gravity values
  const gravityX = gamma / 90; // Maps gamma (-90, 90) to gravity (-1, 1)
  const gravityY = beta / 180; // Maps beta (-180, 180) to gravity (-1, 1)

  // Set gravity in the Matter.js engine
  engine.world.gravity.x = gravityX;
  engine.world.gravity.y = gravityY;

  console.log(`Gravity X: ${gravityX}, Gravity Y: ${gravityY}`);
});
