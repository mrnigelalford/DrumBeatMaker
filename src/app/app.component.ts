import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  BPM = 120;
  TICKS = 16;
  INTERVAL = 1 / ((4 * this.BPM) / (60 * 1000));
  MAX_BITS = 32;
  MAX_HEX = this.MAX_BITS / 4;
  bars = Array(16)
    .fill()
    .map((x, i) => i);

  Sounds = [
    {
      title: "bass_drum",
      location: "assets/bass_drum.wav"
    },
    {
      title: "cl_hi_hat",
      location: "assets/cl_hi_hat.wav"
    },
    {
      title: "claves",
      location: "assets/claves.wav"
    },
    {
      title: "cowbell",
      location: "assets/cowbell.wav"
    },
    {
      title: "cymbal",
      location: "assets/cymbal.wav"
    },
    {
      title: "hand_clap",
      location: "assets/hand_clap.wav"
    },
    {
      title: "hi_conga",
      location: "assets/hi_conga.wav"
    },
    {
      title: "hi_tom",
      location: "assets/hi_tom.wav"
    },
    {
      title: "low_conga",
      location: "assets/low_conga.wav"
    },
    {
      title: "low_tom",
      location: "assets/low_tom.wav"
    },
    {
      title: "maracas",
      location: "assets/maracas.wav"
    },
    {
      title: "mid_conga",
      location: "assets/mid_conga.wav"
    },
    {
      title: "mid_tom",
      location: "assets/mid_tom.wav"
    },
    {
      title: "o_hi_hat",
      location: "assets/o_hi_hat.wav"
    },
    {
      title: "rim_shot",
      location: "assets/rim_shot.wav"
    },
    {
      title: "snare_drum",
      location: "assets/snare_drum.wav"
    }
  ];

  title = "drummerboy";
}
