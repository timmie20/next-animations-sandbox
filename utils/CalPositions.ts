import { InputValueType } from "@/types/global";

export const calculatePositions = ({
  stiffness,
  mass,
  damping,
}: InputValueType) => {
  /* Spring Length, set to 1 for simplicity */
  let springLength = 1;
  /* Object position and velocity. */
  let x = 2;
  let v = 0;
  let d = -damping;
  /* Spring stiffness, in kg / s^2 */
  let k = -stiffness;
  /* Framerate: we want 60 fps hence the framerate here is at 1/60 */
  let frameRate = 1 / 60;
  /* Initiate the array of position and the current framerate i to 0 */
  let positions = [];
  let i = 0;
  /* We loop 600 times, i.e. for 600 frames which is equivalent to 10s*/
  while (i < 60) {
    let Fspring = k * (x - springLength);
    let Fdamping = d * v;
    let a = (Fspring + Fdamping) / mass;
    v += a * frameRate;
    x += v * frameRate;
    i++;
    positions.push({
      position: x,
      frame: i,
    });
  }
  /**
   * positions is an array of number where each number
   * represents the position of the object in a spring
   * motion at a specific frame
   *
   * We use this array to plot all the position of the
   * object for 10 seconds.
   */
  return positions;
};
