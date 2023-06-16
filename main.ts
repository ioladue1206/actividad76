maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
music.playMelody("C D E F G A B C5 ", 200)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
music.playMelody("C5 B A G F E D C ", 200)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
