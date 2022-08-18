// https://calculator.swiftutors.com/surface-area-of-a-cylinder-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofaCylinderRadio = document.getElementById('surfaceAreaofaCylinderRadio');
const circleRadiusRadio = document.getElementById('circleRadiusRadio');
const circleHeightRadio = document.getElementById('circleHeightRadio');

let surfaceAreaofaCylinder;
const PI = Math.PI;
let circleRadius = v1;
let circleHeight = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

surfaceAreaofaCylinderRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Circle Radius';
  variable2.textContent = '(h) Circle Height';
  circleRadius = v1;
  circleHeight = v2;
  result.textContent = '';
});

circleRadiusRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of a Cylinder';
  variable2.textContent = '(h) Circle Height';
  surfaceAreaofaCylinder = v1;
  circleHeight = v2;
  result.textContent = '';
});

circleHeightRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of a Cylinder';
  variable2.textContent = '(r) Circle Radius';
  surfaceAreaofaCylinder = v1;
  circleRadius = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofaCylinderRadio.checked)
    result.textContent = `Surface Area of a Cylinder = ${computeSurfaceAreaofaCylinder().toFixed(2)}`;

  else if(circleRadiusRadio.checked)
    result.textContent = `Circle Radius = ${computeCircleRadius().toFixed(2)}`;

  else if(circleHeightRadio.checked)
    result.textContent = `Circle Height = ${computeCircleHeight().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaofaCylinder() {
  return 2 * PI * Math.pow(Number(circleRadius.value), 2) + 2 * PI * Number(circleRadius.value) * Number(circleHeight.value);
}

function computeCircleRadius() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeCircleHeight() {
  return (Number(surfaceAreaofaCylinder.value) - (2 * PI * Math.pow(Number(circleRadius.value), 2))) / (2 * PI * Number(circleRadius.value));
}