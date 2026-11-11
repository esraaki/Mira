export const missions = {
  apollo: {
    id:'apollo', name:'Apollo 11', subtitle:'The part that stayed', place:'Sea of Tranquility', world:'MOON', year:'1969', emoji:'🌙', color:'#c9c8d7',
    description:'A quiet piece of history is waiting on the Moon.',
    scenes:[
      {title:'A quiet landing site', speaker:'???', lines:['Psst. Over here!','No, not the flag. Look a little lower.'], prompt:'What will you inspect?', choices:[{label:'The flag',reply:'A famous sight! But I’m down here.'},{label:'The landing gear',reply:'There you go. You found me!'}]},
      {title:'Meet the descent stage', speaker:'EAGLE · DESCENT STAGE', lines:['I helped two humans land on the Moon in 1969.','When they took off to return home, I stayed right here.'],fact:'Apollo 11 landed in the Sea of Tranquility on July 20, 1969.'},
      {title:'The landing', speaker:'EAGLE · DESCENT STAGE', lines:['The Moon has gravity, too. Landing safely takes careful control.','Help me choose the right moment to slow down.'],activity:'landing'},
      {title:'A piece left behind', speaker:'EAGLE · DESCENT STAGE', lines:['The upper part of Eagle lifted off to meet the command module.','I remained on the lunar surface. And what a view I have.'],fact:'The lunar module had two stages: a descent stage for landing and an ascent stage for leaving the surface.'},
      {title:'A giant first step', speaker:'EAGLE · DESCENT STAGE', lines:['I may be quiet now, but I was part of something extraordinary.','The first time humans set foot on another world.'],fact:'Apollo 11 astronauts Neil Armstrong and Buzz Aldrin walked on the Moon; Michael Collins orbited above in the command module.'}
    ], badge:'Moon Pioneer', takeaway:'You discovered how the Apollo 11 lunar module helped humans land and leave the Moon.'
  },
  opportunity: {
    id:'opportunity', name:'Opportunity', subtitle:'The rover that kept going', place:'Meridiani Planum', world:'MARS', year:'2004–2018', emoji:'🛞', color:'#e7a47b',
    description:'A little rover with a very long story.',
    scenes:[
      {title:'Something in the dust',speaker:'???',lines:['Hey! Careful where you step.','I’ve been parked here for a while.'],prompt:'Who is speaking?',choices:[{label:'A Martian?',reply:'Ha! Not quite. Try six wheels and solar panels.'},{label:'A rover?',reply:'You got it. I’m Opportunity!'}]},
      {title:'Ninety sols?',speaker:'OPPORTUNITY',lines:['They planned for me to explore Mars for just 90 sols.','Want to guess how long I actually worked?'],prompt:'How long did Opportunity operate?',choices:[{label:'90 sols',reply:'That was the plan. But I had other ideas!'},{label:'Almost 15 years',reply:'Exactly! I kept exploring for almost 15 Earth years.'},{label:'100 years',reply:'I appreciate the confidence, but not quite!'}],fact:'Opportunity operated on Mars from January 2004 until a planet-wide dust storm ended communications in June 2018.'},
      {title:'The tiny clue',speaker:'OPPORTUNITY',lines:['I found tiny round rocks. We called them “blueberries.”','Can you spot the little spheres?'],activity:'blueberries'},
      {title:'A watery past',speaker:'OPPORTUNITY',lines:['Those little spheres were made of hematite, a mineral that can form in water-rich environments.','They helped us investigate Mars’ watery past.'],fact:'Opportunity found hematite-rich spherules and geological evidence that liquid water once affected rocks at Meridiani Planum.'},
      {title:'When the sky went dark',speaker:'OPPORTUNITY',lines:['In 2018, a huge dust storm darkened the sky.','My solar panels couldn’t get enough sunlight. Eventually, I stopped responding.'],activity:'storm'},
      {title:'A journey that mattered',speaker:'OPPORTUNITY',lines:['I traveled more than 45 kilometers. Not bad for a 90-sol mission!','Maybe I’m not moving anymore. But the discoveries keep going.'],fact:'Opportunity traveled 45.16 km (28.06 miles) on Mars, a record for off-Earth wheeled travel at the time.'}
    ],badge:'Mars Detective',takeaway:'You uncovered clues that helped scientists study ancient water on Mars.'
  },
  ingenuity: {
    id:'ingenuity',name:'Ingenuity',subtitle:'The little helicopter that could',place:'Jezero Crater',world:'MARS',year:'2021–2024',emoji:'🚁',color:'#f4b66b',
    description:'A tiny aircraft with a very big first.',
    scenes:[
      {title:'A voice from below',speaker:'???',lines:['Psst! Over here.','I used to be up there. These days I’m staying on the ground.'],prompt:'What are you looking for?',choices:[{label:'A helicopter',reply:'Bingo! I’m Ingenuity.'},{label:'A giant rocket',reply:'Much smaller! Look for my rotor blades.'}]},
      {title:'A first on Mars',speaker:'INGENUITY',lines:['On April 19, 2021, I became the first aircraft to make a powered, controlled flight on another planet.','And Mars has a surprise: its air is incredibly thin!'],fact:'Mars’ atmosphere is much thinner than Earth’s, making powered flight challenging.'},
      {title:'Ready for liftoff?',speaker:'INGENUITY',lines:['My rotor blades had to spin very fast to lift me into that thin air.','Ready to help with a tiny demonstration?'],activity:'flight'},
      {title:'Five became seventy-two',speaker:'INGENUITY',lines:['I was designed to attempt up to five test flights.','Guess how many I completed? Seventy-two!'],prompt:'What made Ingenuity special?',choices:[{label:'It tested powered flight on Mars',reply:'Exactly. A new way to explore another world!'},{label:'It carried astronauts',reply:'Not me! I was a small robotic technology demonstrator.'}],fact:'Ingenuity completed 72 flights between 2021 and 2024.'},
      {title:'The final landing',speaker:'INGENUITY',lines:['On my final flight, I damaged my rotor blades during landing.','I couldn’t fly again, but my experiment had already succeeded.'],fact:'NASA ended Ingenuity’s flight mission in January 2024 after rotor damage sustained during its 72nd flight.'},
      {title:'What comes next?',speaker:'INGENUITY',lines:['I showed that powered flight on Mars is possible.','Maybe the next explorer will have wings—or rotors—because of what we learned.'],fact:'Ingenuity demonstrated technology that can inform future aerial exploration of Mars.'}
    ],badge:'Flight Pioneer',takeaway:'You discovered how Ingenuity made the first powered, controlled flight on another planet.'
  }
};
export const missionOrder=['apollo','opportunity','ingenuity'];
