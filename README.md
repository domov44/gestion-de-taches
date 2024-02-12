## Application AWS Amplify
<a name="readme-top"></a>


<br />
  <h3 align="center">Amplify</h3>




<details>
  <summary>Sommaires</summary>
  <ol>
    <li>
      <a href="#a-propos-du-projet">A propos du projet</a>
    </li>
    <li>
      <a href="#commencer">Commencer</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#lancement">Lancer le projet</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## A propos du projet

Ce projet est un bac à sable Amplify, il consiste à découvrir cette technologie en faisant marcher un projet basique necessitant une authentification.

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>



## Commencer

Pour commencer le projet vous pouvez suivre les instructions qui vont suivre.


### Installation

Pour commencer vous avez besoin d'installer le projet c'est assez simple.

2. Vous devez avoir un compte AWS, si ce n'est pas le cas créez le via cette url
   ```sh
   https://aws.amazon.com/

1. Clonez le repo git
   ```sh
   git clone https://github.com/domov44/gestion-de-taches
   ```
2. Ensuite installez le packages npm : 
    ```sh
   npm install
   ```

3. [optionnel] Il se peut que aws-amplify ne s'installe pas correctement, réinstallez-le à la main si dans la phase de lancement vous avez des erreurs de ce type :
"ERROR in ./src/components/CustomSigIn.js 27:16-22 export 'signIn' (imported as 'signIn') was not found in 'aws-amplify/auth' (module has no exports)"

Pour le réinstaller à la main, désinstallez-le :
    ```sh
   npm uninstall aws-amplify
   ```

Puis réinstallez le :
    ```sh
   npm install aws-amplify@6.0.16
   ```
3. Testez la commande amplify : 
    ```sh
   amplify -v
   ```
   Normalement vous devriez voir la version amplify s'afficher.
   Sur Windows : Si ce n'est pas le cas, et que vous avez une erreur vous indiquant que la commande amplify est inconnue, il se peut que amplify soit bloqué par Windows. 

   Ouvrez le Powershell Windows et autorisez les scripts 
    ```sh
   Set-ExecutionPolicy RemoteSigned
   ```
4. 


**Le projet est installé, bravo !**

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>



## Lancement

La dernière étape est de lancer le projet

1. Lancez le projet React
   ```sh
   npm start
   ```

Après quelques dizaines de secondes, vous devriez voir la magnifique page avec un formulaire de connexion sur le port localhost:3000.


<p align="right">(<a href="#readme-top">retour en haut</a>)</p>



## Contact

Si vous avez une question contactez-moi sans hésiter sur [mon LinkedIn](https://www.linkedin.com/in/ronan-scotet-concepteur-web/) - ou par mail **ronan@reltim.com**

Lien du projet: [https://github.com/domov44/gestion-de-taches](https://github.com/domov44/gestion-de-taches)

<p align="right">(<a href="#readme-top">revenir en haut</a>)</p>