import { Component, ViewChild, ElementRef } from "@angular/core";
import { pad } from './beats.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild('drumPad', {static: false})
  drumPad: ElementRef;

  bars = Array(16)
    .fill()
    .map((x, i) => i);
  beat

  Instruments = [
    {
      title: "bass_drum",
      location: "./assets/sounds/bass_drum.wav",
      active: false
    },
    {
      title: "cl_hi_hat",
      location: "./assets/sounds/cl_hi_hat.wav",
      active: false
    },
    {
      title: "claves",
      location: "./assets/sounds/claves.wav",
      active: false
    },
    {
      title: "cowbell",
      location: "./assets/sounds/cowbell.wav",
      active: false
    },
    {
      title: "cymbal",
      location: "./assets/sounds/cymbal.wav",
      active: false
    },
    {
      title: "hand_clap",
      location: "./assets/sounds/hand_clap.wav",
      active: false
    },
    {
      title: "hi_conga",
      location: "./assets/sounds/hi_conga.wav",
      active: false
    },
    {
      title: "hi_tom",
      location: "./assets/sounds/hi_tom.wav",
      active: false
    },
    {
      title: "low_conga",
      location: "./assets/sounds/low_conga.wav",
      active: false
    },
    {
      title: "low_tom",
      location: "./assets/sounds/low_tom.wav",
      active: false
    },
    {
      title: "maracas",
      location: "./assets/sounds/maracas.wav",
      active: false
    },
    {
      title: "mid_conga",
      location: "./assets/sounds/mid_conga.wav",
      active: false
    },
    {
      title: "mid_tom",
      location: "./assets/sounds/mid_tom.wav",
      active: false
    },
    {
      title: "o_hi_hat",
      location: "./assets/sounds/o_hi_hat.wav",
      active: false
    },
    {
      title: "rim_shot",
      location: "./assets/sounds/rim_shot.wav",
      active: false
    },
    {
      title: "snare_drum",
      location: "./assets/sounds/snare_drum.wav",
      active: false
    }
  ];

  padMap: pad[] = new Array;

  title = "little drummerboy";

  _sampleRate = 44100;
  _minuteInSeconds = 60;
  _beatsPerMinute = 140;
  _totalSteps = 16;

  _stepDelay;

  _isPlaying = false;
  _currentBar = 0

  calculateBPM = () => {
    this._stepDelay = Math.round(
      (this._sampleRate * this._minuteInSeconds) /
        (this._beatsPerMinute * this._totalSteps) /
        this._totalSteps
    );

    return this._stepDelay;
  };

  playPause = () => {
    this.calculateBPM();

    if (this._isPlaying) {
      this.stopAudio();
      this._isPlaying = false;
    } else {
      this._isPlaying = true;
      this.beat = setInterval(() => {
        this.startAudio();
      }, this._stepDelay)
    }
  };

  updateBPM = (bpm) => {
    bpm = parseInt(bpm, 10)
    this._beatsPerMinute = bpm;

    this.calculateBPM();

    this.playPause();
    this.playPause();
  };

  stopAudio = () => {
    clearInterval(this.beat)
  };

  playAudio = (location) => {
    const audio = new Audio;
    audio.src = location;
    audio.load();
    audio.play();

    setTimeout(() => {
      audio.pause();
    },1000)

    this._isPlaying = true
  }

  startAudio = () => {
    if(this._currentBar < this.bars.length) {
      this._currentBar++;
    }else if(this._currentBar >= this.bars.length){
      this._currentBar = 1;
    }

    this.padMap.forEach (pad => {
      if(pad.position+1 === this._currentBar && pad.active) {
        this.playAudio(pad.location);
      }
    })
  };

  toggleStatus = (btn: pad, padState) => {
    const pad = this.padMap.filter(pad => (pad._id === btn._id))

    if(pad.length) {
      pad[0].active = !pad[0].active
    } else {
      this.padMap.push(btn)
    }

    padState = !padState
  }
}
