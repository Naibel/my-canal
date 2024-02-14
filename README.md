## My Canal

Dans le cadre d'un entretien technique visant à rejoindre Canal+, j'ai été amené à réaliser ce site qui utilise les informations de la très riche base de données collaborative [TheMovieDB](https://developer.themoviedb.org/docs/getting-started).

Cette application permet à la fois de consulter, au sein de la page d'accueil les séries et les films du moment, selon les informations données par la base de données, ainsi qu'à chercher n'importe quelle série ou film référencée dans cette base de données grâce au moteur de recherche présent sur la barre de navigation, ainsi qu'au sein de la partie "Découverte", où vous pouvez recherche une série ou un film sur la base de plusieurs critères.

## Choix techniques

## NextJS, ça le fait !

J'ai souhaité mettre en place un projet se basant sur le couple React/[Next.js](https://nextjs.org/), bootstrapé avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), car il me permet d'intégrer aisément le SSR, d'implémenter facilement des fonts customs (comme notre chère Futura), de gérer le routing entre les page "Tendances" et "Découvrir", et surtout me permet de déployer ce projet très facilement sur la plateforme [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), qui lance un déploiement de chaque branche du repo à chaque push sur origin.

[Lien du site sur Vercel](https://my-canal.vercel.app/)

### State management : Des hooks, du Zustand, des HOCs !

Au moment de débuter ce projet, j'ai souhaité implémenter une solution simple pour stocker les données, car au départ l'application ne disposait que d'une page, celle des tendances.

J'ai d'abord souhaité implémenter ReactQuery car il permet de stocker efficacement toutes les données renvoyées par l'API, l'état de "loading" ou encore les erreurs si on en reçoit.

Quand j'ai souhaité réaliser la page "Découvrir" en plus de la page des tendances, il m'apparaissait clair que pour éviter le prop drilling incessant, il me fallait employer une plus large panoplie de solutions.

D'abord en intégrant des stores Zustand afin de stocker les données du composant Alert (afin d'afficher les messages d'erreurs à tout endroit du site), mais aussi celles de la fenêtre Modal, qui doit être appelé en tout endroit du site (Page Tendance, Découvrir, mais aussi la zone de résultats de recherche).

Ensuite, j'ai intégré un HOC appelé withProviders, afin de wrapper chaque page du site NextJS avec le même set de features, la possibilité d'afficher la fenetre modale avec des données dynamiques, de pratiquer une recherche au niveau de la navbar, ainsi que d'afficher la popup d'alert en cas d'erreur. Chacune de ces features sont intégrés dans un Provider, qui va donc "provider" la feature désignée (modal, recherche, alert) au composant wrappé, à savoir les pages du site.

Mon but était de concevoir une application qui exploite une bonne partie des possibilités que la librairie React et le framework NextJS propose en termes de state managment.

### Du CSS, des classes Tailwind... et c'est tout !

Quant à la partie graphique, je n'ai utilisé que Tailwind CSS, que l'équipe en charge de l'appli Canal utilise déjà il me semble (n'hésitez pas à me le confirmer !)
J'ai aussi utilisé de temps en temps quelques fichiers CSS modules destinés à contourner le comportement parfois un peu récalcitrant de Tailwind, mais aussi afin de créer des classes personnalisées afin de mieux définir

Pour m'éviter le syndrome de la page blanche, je me suis trouvé quelques sources d'inspiration, notamment sur ce que réalise déjà Canal sur leur propre plateforme vidéo.

Si j'ai voulu garder quelques idées qui me semblaient très pertinentes, j'ai tout de même souhaité m'en écarter pour ne pas donner l'impression d'un projet copié (non mais !). J'ai aussi voulu utiliser autant que possible les diverses déclinaisons de la célèbre police Futura (Etienne Robial ftw!), afin d'habiller mon projet et de lui donner un air résoluement "Canal +".

Il est important de préciser qu'aucune librairie graphique autre que les classes CSS Tailwind ou les CSS modules n'ont été utilisés. C'est un choix volontaire de ma part de ne pas dépendre de librairie tierce, qui n'aurait pas à l'évaluateur de donner un avis objectif et précis sur le travail graphique que j'ai véritablement accompli.

### Un composant = un fichier !

Ma hantise à chaque projet auxquels j'ai participé, c'est de voir des sous-composants se balader à l'intérieur de gros fichiers de composant. Certes, ils ne sont utilisées qu'une fois au sein de ce même gros composant, mais à la fin le fichier lui-même devient énorme, confus, et on doit scroller pour retrouver le composant parent derrière une pile de composant enfants.

Quand je souhaite modifier un composant, je souhaite immédiatement le retrouver en faisant _Command + P_ sur mon IDE. Par conséquent chaque composant, même le plus petit, dispose de son propre fichier. S'il n'est utilisé que par un seul composant parent, et n'a pas vocation à être réutilisé ailleurs, il se retrouve au sein du dossier comprenant le composant, tout simplement. Ce n'est pas la pratique la plus employée, elle fait de l'organisation du projet un petit casse-tête, mais c'est celle où je m'y retrouve le plus facilement. Veuillez m'excuser par avance si pour naviguer au sein de ces dossiers, il faut parfois cliquer un peu.

### Allez, quelques tests unitaires en plus !

Parce que c'est un projet qui fait appel à pas mal de traitement de données en amont de son afifchage dans le DOM, j'ai souhaité tester les fonctions présentes dans le fichier "format.ts" avec des tests unitaires, en utilisant Jest et des mocks de résultats d'API.

Forcément, couvrir l'entierté du projet avec des TI et des TU m'aurait contraint de travailler sur ce projet plus que le temps qui m'est alloué. Cependant, si l'envie de prendre d'y replonger, je n'hésiterai pas à écrir des tests pour les fonctions de fetching, ainsi que des tests d'intégrations pour les différents composants crées.

## Lancer le projet

Pour lancer le serveur de developpement, c'est très simple

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Et vous ouvrez [http://localhost:3000](http://localhost:3000) sur votre navigateur pour voir le résultat.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## TODO

- Plus d'infos affichées sur chaque fiche (casting, réalisateur)

- Un moteur de recherche sur la page "Décourvir" plus élaboré avec plus de critères de recherches (pays, année, acteurs présents, genre, etc.)

- Un système d'authentification afin de noter les films ou les séries, de sélectionner des films ou des séries en favoris, ou encore d'ajouter soi-même ses propres entrées.

- Plus de tests unitaires et d'intégration !
