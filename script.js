/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */

function p4_inspirations() {
  let inspiration = [
    {
      name: 'sunflower',
      assetUrl: 'sunflower.jpg'
    },
    {
      name: 'rainbow',
      assetUrl: 'rainbow.png'
    },
    {
      name: 'chocolate',
      assetUrl: 'chocolate.webp'
    }
  ]
  return inspiration;
}

function p4_initialize(inspiration) {
  let design;
  if(inspiration.name == 'sunflower'){
    design = {
      colorR: 255,
      colorG: 239,
      colorB: 0,
      x: 50,
      y: 50,
      height: 90,
      width: 90
    }
  }
  else if(inspiration.name == 'rainbow'){
    design = {
      colorR: 255,
      colorG: 0,
      colorB: 0,
      x: 0,
      y: 0,
      height: 100,
      width: 17
    }
  }
  else{
    design = {
      colorR: 51,
      colorG: 25,
      colorB: 0,
      x: 32,
      y: 8.5,
      height: 40,
      width: 82
    }
  }
  return design;
}

function p4_render(design, inspiration) {
  fill(design.colorR, design.colorG, design.colorB);
  if(inspiration.name == 'sunflower'){
    noStroke();
    ellipse(design.x, design.y, design.height, design.width);
    fill(153, 76, 0);
    ellipse(design.x, design.y, design.height - 45, design.height - 45);

  }
  else if(inspiration.name == 'rainbow'){
    noStroke();
    rect(design.x, design.y, design.height, design.width);
    fill(design.colorR, design.colorG + 128, design.colorB);
    rect(design.x, design.y + 17, design.height, design.width);
    fill(design.colorR, design.colorG + 255, design.colorB);
    rect(design.x, design.y + 34, design.height, design.width);
    fill(design.colorR- 255, design.colorG + 255, design.colorB);
    rect(design.x, design.y + 51, design.height, design.width);
    fill(design.colorR- 255, design.colorG, design.colorB + 255);
    rect(design.x, design.y + 68, design.height, design.width);
    fill(design.colorR- 128, design.colorG, design.colorB + 255);
    rect(design.x, design.y + 85, design.height, design.width);
  }
  else{
    noStroke();
    rect(design.x, design.y, design.height, design.width);
  }
}

function p4_mutate(design, inspiration, rate) {
  if(inspiration.name == 'sunflower'){
    design.height += 1*rate;
    design.width += 1*rate;
    design.x += 1*rate;
    design.y += 1*rate;
  }
  else if(inspiration.name == 'rainbow'){
    design.colorR -= 20*rate;
    design.colorG -= 20*rate;
    design.colorB -= 20*rate;
  }
  else if(inspiration.name == 'chocolate'){
    design.height += rate;
    design.width -= rate;
    design.colorR -= 20*rate;
    design.colorG -= 20*rate;
    design.colorB -= 20*rate;
  }
}
