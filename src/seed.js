export function seedDatabase(firebase) {
  function getUUID() {
    // eslint for bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
      ============================================ */
  // Documentaries
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Tiger King",
    description:
      "El dueño de un zoo, rodeado de los excéntricos personajes del submundo de la cría de grandes felinos, es acusado de contratar a un sicario. Basada en hechos reales.",
    genre: "documentaries",
    maturity: "18",
    slug: "tiger-king",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Amanda Knox",
    description:
      "Fue acusada de homicidio y absuelta en dos ocasiones. Este revelador documental cede la palabra a Amanda Knox y a quienes intervinieron en su caso.",
    genre: "documentaries",
    maturity: "12",
    slug: "amanda-knox",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Citizenfour",
    description:
      "Citizenfour es una película documental del 2014 dirigida por Laura Poitras que trata sobre Edward Snowden y las revelaciones sobre la red de vigilancia mundial.",
    genre: "documentaries",
    maturity: "12",
    slug: "citizenfour",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Súper Engórdame",
    description:
      "Súper Engórdame es una película-documental que nos muestra los efectos que provoca en nuestro cuerpo una alimentación a base de comida basura durante todo un mes.",
    genre: "documentaries",
    maturity: "12",
    slug: "super-size-me",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Man on Wire",
    description:
      "El 7 de agosto de 1974, el funambulista Philippe Petit logró caminar sobre un alambre tendido entre las torres gemelas de Nueva York.",
    genre: "documentaries",
    maturity: "12",
    slug: "man-on-wire",
  });

  // Comedies
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Office",
    description:
      "Un falso documental sobre un equipo de trabajadores de oficina comunes, donde la jornada laboral consiste en enfrentamientos de ego, acciones impropias y rutina.",
    genre: "comedies",
    maturity: "15",
    slug: "the-office",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arrested Development",
    description:
      "Es la historia, ganadora del premio Emmy, de una familia adinerada que lo perdió todo y el hijo que tuvo que mantener a todos unidos.",
    genre: "comedies",
    maturity: "15",
    slug: "arrested-development",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Larry David",
    description:
      "Larry David lo tiene todo: dinero, seguridad, amigos famosos, una mujer que le quiere, una fabulosa casa en Hollywood. Así que, ¿por qué se empeña en hacer de su vida un auténtico caos?",
    genre: "comedies",
    maturity: "15",
    slug: "curb-your-enthusiasm",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Family Guy",
    description:
      "En esta serie de Seth MacFarlane políticamente incorrecta, el atontado de Peter Griffin y su familia desestructurada protagonizan chifladuras de todo tipo.",
    genre: "comedies",
    maturity: "15",
    slug: "family-guy",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "South Park",
    description:
      "Esta comedia satírica protagonizada por cuatro críos malhablados se ceba sin compasión con los temas de moda, los famosos y los políticos.",
    genre: "comedies",
    maturity: "15",
    slug: "south-park",
  });

  // Children
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Peppa Pig",
    description:
      "En el día a día de la intrépida cerdita Peppa, nunca faltan aventuras para aprender y divertirse junto a su familia y todos sus amigos.",
    genre: "children",
    maturity: "0",
    slug: "peppa-pig",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Dora La Exploradora",
    description:
      "Dora es una niña de siete años a la que le encanta jugar a exploradora con su amigo, el mono Botas.",
    genre: "children",
    maturity: "0",
    slug: "dora-the-explorer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "La patrulla canina",
    description:
      "Seis cachorros liderados por un niño experto en tecnología realizan misiones de rescate de alto riesgo con humor, ingenio y vehículos muy chulos.",
    genre: "children",
    maturity: "0",
    slug: "paw-patrol",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arturo",
    description:
      "Arturo es una serie animada infantil y educativa, basada en los libros escritos e ilustrados por Marc Brown.",
    genre: "children",
    maturity: "0",
    slug: "arthur",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Bob Esponja",
    description:
      "Desde la piña donde vive bajo el mar, Bob Esponja y sus amigos, entre ellos Gary, el caracol que maúlla, se verán inmersos en memorables desventuras.",
    genre: "children",
    maturity: "0",
    slug: "spongebob",
  });

  // Crime
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Making a Murderer",
    description:
      "Rodada a lo largo de 13 años, este thriller basado en una historia real cuenta la historia de dos hombres acusados de un macabro crimen que quizás no cometieron.",
    genre: "crime",
    maturity: "18",
    slug: "making-a-murderer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Long Shot",
    description:
      "En este documental Juan Catalan es arrestado por un asesinato que no ha cometido y decide demostrar su inocencia ayudándose de imágenes de un popular programa de TV.",
    genre: "crime",
    maturity: "18",
    slug: "long-shot",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Confession Killer",
    description:
      "Henry Lee Lucas agrandó su popularidad al confesar la autoría de centenares de asesinatos sin resolver. Esta docuserie analiza la verdad y sus horribles consecuencias.",
    genre: "crime",
    maturity: "18",
    slug: "the-confession-killer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Innocent Man",
    description:
      "Este documental, adaptación del único libro de no ficción de John Grisham, plantea cuestiones inquietantes sobre dos casos de asesinato ocurridos en Oklahoma en los 80.",
    genre: "crime",
    maturity: "18",
    slug: "the-innocent-man",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Staircase",
    description:
      "¿Accidente o asesinato? Tras la misteriosa muerte de su esposa, el escritor Michael Peterson ve cómo se examina su vida con lupa.",
    genre: "crime",
    maturity: "18",
    slug: "the-staircase",
  });

  // Feel-good
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "El Indomable Will Hunting",
    description:
      "Will es un joven rebelde con una inteligencia asombrosa, especialmente para las matemáticas. El descubrimiento de su talento por parte de los profesores le planteará un dilema: seguir con su vida de siempre o aprovechar sus grandes cualidades intelectuales en alguna universidad.",
    genre: "feel-good",
    maturity: "12",
    slug: "good-will-hunting",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Forrest Gump",
    description:
      "Tom Hanks es Forrest Gump, un hombre ingenuo que resulta estar en medio de casi todos los hechos más importantes de los sesenta y setenta.",
    genre: "feel-good",
    maturity: "12",
    slug: "forrest-gump",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Juno",
    description:
      "Juno MacGuff (Ellen Page), una adolescente de dieciséis años de Minnesota, descubre que está embarazada de su amigo. Aunque inicialmente se inclina por abortar, en el último momento decide tener el bebé y darlo en adopción.",
    genre: "feel-good",
    maturity: "12",
    slug: "juno",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Medianoche en París",
    description:
      "Un guionista estadounidense llega con su prometida y los padres de ella a París. Mientras vaga por las calles de la capital francesa, cae bajo una especie de hechizo que lo conduce a los años 20.",
    genre: "feel-good",
    maturity: "12",
    slug: "midnight-in-paris",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "School of Rock",
    description:
      "Dewey Finn, que es músico, consigue un trabajo como profesor suplente en un colegio y empieza a enseñar rock 'n' roll en secreto a los alumnos.",
    genre: "feel-good",
    maturity: "12",
    slug: "school-of-rock",
  });

  /* Films
      ============================================ */
  // Drama
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El truco final",
    description:
      "Dos magos rivales desesperados por desentrañar los secretos del otro empiezan a realizar trucos cada vez más arriesgados que no tardan en volverse letales.",
    genre: "drama",
    maturity: "15",
    slug: "the-prestige",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El Club De La Lucha",
    description:
      "Un joven hastiado de su gris y monótona vida lucha contra el insomnio.",
    genre: "drama",
    maturity: "15",
    slug: "fight-club",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El Discurso Del Rey",
    description:
      "Durante un difícil periodo histórico, el rey Jorge VI lucha para comunicarse con el público, hasta que recurre al terapeuta del habla Lionel Logue.",
    genre: "drama",
    maturity: "15",
    slug: "kings-speech",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El renacido",
    description:
      "En la década de 1820, un cazador de pieles lucha por sobrevivir para vengarse de un despiadado mercenario que lo abandonó a su suerte junto al río Misuri.",
    genre: "drama",
    maturity: "15",
    slug: "the-revenant",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "La Red Social",
    description:
      "Una noche, Mark Zuckerberg, alumno de Harvard y genio de la programación, empieza a desarrollar una nueva idea. Pronto se convierte en una revolucionaria red social que envenena a todo el planeta.",
    genre: "drama",
    maturity: "12",
    slug: "the-social-network",
  });

  // Suspense
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Shutter Island",
    description:
      "En 1954, dos agentes judiciales acuden a una remota isla de Boston para investigar la desaparición de una asesina recluida en un psiquiátrico. Ambos descubrirán los peligros que esconde el lugar.",
    genre: "suspense",
    maturity: "15",
    slug: "shutter-island",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Perdida",
    description:
      "En medio de una crisis matrimonial, Nick vuelve a casa un día y descubre que su mujer ha desaparecido. A medida que aumenta la presión policial, la verdad sale a la luz.",
    genre: "suspense",
    maturity: "15",
    slug: "gone-girl",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Prisioneros",
    description:
      "Keller se enfrenta a la peor de las pesadillas: Anna, su hija de seis años, ha desaparecido con su amiga Joy. El pánico lo va dominando y, desesperado, decide ocuparse personalmente del asunto.",
    genre: "suspense",
    maturity: "15",
    slug: "prisoners",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Siete",
    description:
      "Un curtido detective de homicidios y su nuevo compañero afrontan la caza de un asesino cuyos horrendos crímenes se inspiran en los siete pecados capitales.",
    genre: "suspense",
    maturity: "15",
    slug: "seven",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Zodiac",
    description:
      "Entre 1966 y 1978, el asesino del Zodiaco mató a un número indeterminado de personas. Paralelamente, como distracción, enviaba acertijos a los medios de comunicación sobre su identidad.",
    genre: "suspense",
    maturity: "15",
    slug: "zodiac",
  });

  // Children
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Hotel Transylvania",
    description:
      "Drácula, el dueño del Hotel Transilvania, se convierte en un padre superprotector cuando un pretendiente poco grato se interesa por su hija.",
    genre: "children",
    maturity: "0",
    slug: "hotel-transylvania",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Gru Mi Villano Favorito",
    description:
      "El villano Gru traza un plan para robar la luna del cielo, pero tiene dificultades para lograr su objetivo cuando tres huérfanas quedan bajo su cuidado.",
    genre: "children",
    maturity: "0",
    slug: "despicable-me",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Frozen: El Reino del Hielo",
    description:
      "Una profecía condena a un reino a vivir en un invierno eterno. La joven Anna, el montañero Kristoff y el reno Sven salen a buscar a Elsa, hermana de Anna y Reina de las Nieves, para anular el hechizo.",
    genre: "children",
    maturity: "0",
    slug: "frozen",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El Viaje de Chihiro",
    description:
      "Chihiro descubre un mundo mágico gobernado por una bruja que convierte en animales a quienes la desobedecen.",
    genre: "children",
    maturity: "0",
    slug: "spirited-away",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Up",
    description:
      "Carl es un vendedor de globos de 78 años cuya esposa acaba de fallecer. Su vida no tiene demasiado sentido hasta que decide enganchar miles de globos a su casa y salir volando hacia América del Sur.",
    genre: "children",
    maturity: "0",
    slug: "up",
  });

  // Thriller
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Joker",
    description:
      "Arthur Fleck, un hombre con un problema neurológico, es ignorado y maltratado por la ciudad de Gotham. Una serie de trágicos acontecimientos hacen crecer su ira contra la sociedad.",
    genre: "thriller",
    maturity: "15",
    slug: "joker",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Un Lugar Tranquilo",
    description:
      "Lee y Evelyn Abbott, un matrimonio que intenta mantener con vida a sus tres hijos en un entorno límite, un mundo infectado de unos terribles cazadores que se guían por el sonido con una precisión letal.",
    genre: "thriller",
    maturity: "15",
    slug: "a-quiet-place",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Cisne Negro",
    description:
      "Nina logra el papel de bailarina principal en un espectáculo de danza clásica. La presión de una madre controladora, la rivalidad con una compañera y las exigencias de su director le harán enloquecer.",
    genre: "thriller",
    maturity: "15",
    slug: "black-swan",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Nightcrawler",
    description:
      "Louis Bloom es un joven sin empleo ni escrúpulos que decide adentrarse en el mundo del periodismo criminalista tras ser testigo de un brutal accidente",
    genre: "thriller",
    maturity: "15",
    slug: "nightcrawler",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El Silencio de los Corderos",
    description:
      "Un despiadado asesino en serie anda suelto. La mejor opción que tiene el FBI para atraparlo es pedir consejo a otro criminal recluido, el cautivador y estremecedor doctor Hannibal Lecter.",
    genre: "thriller",
    maturity: "15",
    slug: "the-silence-of-the-lambs",
  });

  // Romance
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Ha Nacido Una Estrella",
    description:
      "Cuando una aspirante a cantante y un músico consagrado comienzan una apasionada relación, la carrera de ella despega y él se hunde en una espiral de autodestrucción.",
    genre: "romance",
    maturity: "15",
    slug: "a-star-is-born",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Blue Valentine",
    description:
      "Dean y Cindy son un matrimonio que no está pasando por su mejor momento. En un intento desesperado por recuperar la pasión, la pareja organiza una escapada romántica a un hotel.",
    genre: "romance",
    maturity: "15",
    slug: "blue-valentine",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "La La Land",
    description:
      "Mia es una chica aspirante a actriz que trabaja como camarera mientras se presenta a castings y Sebastian es un pianista de jazz que se gana la vida tocando en locales. Los dos acaban enamorandose.",
    genre: "romance",
    maturity: "15",
    slug: "la-la-land",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El Diario De Noa",
    description:
      "La guerra y las diferencias sociales de los años 40 destrozan la relación de dos jóvenes enamorados en esta adaptación de la exitosa novela de Nicholas Sparks.",
    genre: "romance",
    maturity: "15",
    slug: "the-notebook",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Titanic",
    description:
      "Dos jóvenes cruzan sus destinos en el viaje inaugural del Titanic. A pesar de que ambos proceden de diferentes clases sociales, nada puede impedir que nazca el amor. Un iceberg hunde su romance.",
    genre: "romance",
    maturity: "15",
    slug: "titanic",
  });
}
