// Function to play a note and change the light color
function playNote (note: number, duration: number, colour: number) {
    music.playTone(note, duration)
    strip.showColor(colour)
    // Pause to allow the light to match the note
    basic.pause(duration)
}
let strip: neopixel.Strip = null
// Initialize the NeoPixel (LED) strip
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Red))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Green))
    playNote(330, music.beat(BeatFraction.Whole), neopixel.colors(NeoPixelColors.Blue))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Yellow))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Orange))
    playNote(330, music.beat(BeatFraction.Whole), neopixel.colors(NeoPixelColors.Red))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.White))
    playNote(392, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Yellow))
    playNote(262, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Blue))
    playNote(294, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Yellow))
    playNote(330, music.beat(BeatFraction.Whole), neopixel.colors(NeoPixelColors.Purple))
    playNote(349, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Orange))
    playNote(349, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Violet))
    playNote(349, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.White))
    playNote(349, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Red))
    playNote(349, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Orange))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Blue))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Yellow))
    playNote(330, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Green))
    playNote(392, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Purple))
    playNote(392, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.White))
    playNote(349, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Orange))
    playNote(294, music.beat(BeatFraction.Half), neopixel.colors(NeoPixelColors.Yellow))
    playNote(262, music.beat(BeatFraction.Whole), neopixel.colors(NeoPixelColors.Blue))
    // Pause briefly before repeating the song
    basic.pause(1000)
})
