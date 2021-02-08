export const getBandMembers = () => {
  return {
    members: [
      {
        name: 'Joey',
        url: '/members/joey'
      },
      {
        name: 'Johnny',
        url: '/members/johnny'
      },
      {
        name: 'Tommy',
        url: '/members/tommy'
      },
      {
        name: 'Dee Dee',
        url: '/members/dee-dee'
      }
    ]
  };
};

export const getBandMember = () => {
  return {
    name: 'Joey Ramone',
    biography: `In 1974, Jeffrey Hyman co-founded the punk rock band the Ramones
            with friends John Cummings and Douglas Colvin. Colvin was already
            using the pseudonym "Dee Dee Ramone" and the others also adopted
            stage names using "Ramone" as their surname: Cummings became Johnny
            Ramone and Hyman became Joey Ramone. The name "Ramone" stems from
            Paul McCartney: he briefly used the stage name "Paul Ramon" during
            1960/1961, when the Beatles, still an unknown five-piece band called
            the Silver Beetles, did a tour of Scotland and all took up
            pseudonyms; and again on the 1969 Steve Miller album Brave New
            World, where he played the drums on one song using that name.`
  };
};
