export function properTimeSong(ms) {
  let min = Math.floor((ms / 1000 / 60) << 0);
  let sec = Math.floor((ms / 1000) % 60);
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}
