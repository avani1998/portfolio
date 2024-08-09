import React from "react";
import ParticlesBg from "particles-bg";

const ParticleComponent = () => {
  let config = {
    num: [1, 3], // The number of particles generated, with a range between 4 and 7 particles.
    rps: 0.4, // Particles generated per second (rate per second).
    radius: [5, 40], // The radius size of each particle, ranging from 5 to 40 pixels.
    life: [1.5, 5.5], // The lifespan of each particle in seconds, ranging from 1.5 to 3 seconds.
    v: [1, 2], // The velocity of particles, ranging from 2 to 3 units.
    tha: [90, -90], // The angle (in degrees) of particle movement, ranging from -40 to 40 degrees.
    // body: "./img/icon.png",     // Path to an image file to be used as particles. If uncommented, particles will be images.
    // rotate: [0, 20],            // The rotation range of particles, from 0 to 20 degrees.
    alpha: [0.25, 0], // The transparency of particles, starting at 0.6 and fading to 0.
    scale: [4, 0.1], // The scale of particles, starting at full size (1) and shrinking to 0.1.
    position: "all", // The position where particles are generated, can be "all", "center", or a specific area defined by {x, y, width, height}.
    color: "random", // The color of the particles, can be "random" or specific color codes. Here, it's either random or red.
    cross: "dead", // Particle behavior when crossing the canvas edge. "cross" makes them reappear on the opposite side, "dead" makes them disappear.
    random: 15, // Randomness factor of particle generation, or null to disable.
    g: -1, // Gravity effect on particles, pulling them down by 5 units.
    // f: [2, -1],                 // Force applied to particles. Uncomment to apply a force vector.
    onParticleUpdate: (ctx, particle) => {
      // Custom function to draw each particle.
      ctx.beginPath();
      ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color; // Sets the fill color of the particle.
      ctx.globalAlpha = particle.alpha;
      ctx.fill(); // Fills the rectangle with the specified color.
      ctx.closePath(); // Closes the drawing path.
    },
  };

  return (
    <div>
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
};

export default ParticleComponent;
