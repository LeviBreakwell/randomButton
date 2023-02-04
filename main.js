console.log("Hello World!")

const reps = () => {
    var sets = []   
    for (var i = 0 ; i < 3 ; i++) {
        sets.push(Math.floor(Math.random()*30+1))
    }
    return sets
}
const sets = Math.floor(Math.random()*8+1)
   
var exercises = ['Squats','Bench', 'Chin-ups', 'Lunge', 'RDL','Bi-curl',
    'tri-extention','calf raise', 'KOT calf raise', 'Pistol-squat'
     ]

const createProgram = () => {
    var program= []
        for ( var i =0; i < sets ; i++) {
            var exNum = Math.floor(Math.random()*10)
            program.push(`${i+1}. ${reps()[0]} x 3 : ${exercises[exNum]}`)
            exercises.filter((ex,i) => 
                i != exNum
            )
        }
    return program
}

console.log("Today's Program:")

console.log(createProgram())
