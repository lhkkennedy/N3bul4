import { PlaneGeometry, MeshStandardMaterial, Mesh } from "three";
// import data from "../../../../Python/midi/";
function fxfunctionSelect(fxbar, geometry, data) {
  const midiEventName = data['midi-item-name']
  console.log(data)
  if (midiEventName == 'start-stop-left-keydown'){  
    fxbar.material.color.setHex( 0xC3B865 )
    console.log("1")
  } else if (midiEventName == 'start-stop-left-keyup'){
    fxbar.material.color.setHex( 0x0E203C )
    console.log("2")
  } else if (midiEventName == 'start-stop-right-keydown'){
    fxbar.material.color.setHex( 0x0D00FF )
    console.log("3")
  } else if (midiEventName == 'start-stop-right-keyup'){
    fxbar.material.color.setHex( 0x00FFAA )
    console.log("4")
  }
  return fxbar
}

function loadfxtriggers() {
  //   const json = JSON.stringify(data);
  var fxtriggers = [];
  for (var x = 0; x < data.length; x++) {
    console.log(data[x]["midi-item-time"]);
    var timebites = data[x]["midi-item-time"].split(":");
    let hours = Number(timebites[0]);
    let minutes = Number(timebites[1]) + Number(hours * 60);
    let seconds = Number(timebites[2]) + Number(minutes * 60);
    fxtriggers.push(seconds);
  }
  return fxtriggers;
}

const data = [
  {
    "midi-item-name": "start-stop-left-keydown",
    "midi-item-hex": "90 00 7F ",
    "midi-item-channel": "1",
    "midi-item-booleon": "True",
    "midi-item-time": "00:00:04.305",
    "midi-item-value": "127",
    "midi-item-active": "False",
  },
  {
    "midi-item-name": "start-stop-left-keyup",
    "midi-item-hex": "80 00 00 ",
    "midi-item-channel": "1",
    "midi-item-booleon": "True",
    "midi-item-time": "00:00:06.475",
    "midi-item-value": "0",
    "midi-item-active": "False",
  },
  {
    "midi-item-name": "start-stop-right-keydown",
    "midi-item-hex": "91 00 7F ",
    "midi-item-channel": "2",
    "midi-item-booleon": "True",
    "midi-item-time": "00:00:08.666",
    "midi-item-value": "127",
    "midi-item-active": "False",
  },
  {
    "midi-item-name": "start-stop-right-keyup",
    "midi-item-hex": "81 00 00 ",
    "midi-item-channel": "2",
    "midi-item-booleon": "True",
    "midi-item-time": "00:00:10.756",
    "midi-item-value": "0",
    "midi-item-active": "False",
  },
];

export default function createFxBar(props) {
  const geometry = new PlaneGeometry(2, 8);
  const material = new MeshStandardMaterial({ color: 0x000000 });
  const fxbar = new Mesh(geometry, material);
  // fxbar corodinates x  y  z  ->
  fxbar.position.set(0, 8, 24);
  fxbar.rotation.z -= Math.PI * 0.5;

  console.log(fxbar.material.color);

  let clock = props.clock;

  const fxtriggers = loadfxtriggers();

  fxbar.tick = () => {
    for (var a = 0; a < fxtriggers.length; a++) {
      let trigger = fxtriggers[a];
      if (
        (trigger < clock.elapsedTime) &
        (data[a]["midi-item-active"] == "False")
      ) {
        data[a]["midi-item-active"] = "True";
        fxfunctionSelect(fxbar, geometry, data[a]);
      }
    }
  };
  return fxbar;
}

export { createFxBar };
