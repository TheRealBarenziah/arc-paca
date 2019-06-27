# Pré-réquis
## Instalation des librairies
- redux
- react-redux
- redux-thunk (pour pouvoir utiliser des fonctions en tant qu'action)
- redux-logger (uniquement en dev pour surveiller le changement de state redux)
## Creer la structure des repertoires
```javascript
"/"
"/store"
"/store/index.jx"                 // contient le store et toute la configuration
"/store/actions"
"/store/actions/auth.js"          // exemple d'action possible
"/store/reducers"
"/store/reducers/index.js"        // contient le combine reducer
"/store/reducers/authReducer.js"  // exemple de reducer (lié à l'action auth)
```

# Actions
## Création de(s) l'action(s)
/store/actions/auth.js
```javascript
export function authAction(userData) {
  return {
    type: 'AUTH_USER',
    payload: {userData}
  }
}
```
Lorsque cette action sera exécuté elle renvera 'AUTH_USER' afin d'être indentifié par le  reducer a qui elle transmetra le payload


# Reducer
## Création de(s) reducer(s)
/store/reducers/authReducer.js
```javascript
// Initialisation d'une variable contenant la structure des states par defaut 
const defaultStates = {
  user: {
    userData: {
      user: '',
      isAdmin: false,
      id: 0,
      token: '',
      isConnected: false
    }
  }
}
// Creation du reducer lié à l'action auth, cependant celui-ci pourrait très bien répondre à d'autres actions
export default (state = defaultStates, action) => {
  switch (action.type) {
    case 'AUTH_USER':
    return {
      user: action.payload
    }
    default:
      return state
  }
}
```
Chaques actions doient être liées à un reducer mais un reduceur peut répondre à plusieurs actions.
Il faut quand même faire attention à rester organisé et créer un nouveau reducer pour chaque contexte (authentification, saisie d'un formulaire, multi-etape...)


## Combine reducers
/store/reducers/index.js
```javascript
import { combineReducers } from 'redux';

import authReducer from './authReducer';
export default combineReducers({
  authentification: authReducer
});
```
Combine reducers comme sont nom l'indique rassemble tout les reducers pour ne retourner qu'un seul objet


# Le store
## Création
/store/index.js
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';

export default createStore(
  allReducer,
  applyMiddleware(thunk, logger)
);
```
Le store rassemble les reducers, les middlewares et tout un tas d'autre chose peuvent y être gréffé comme un persisteur par exemple.

## Intégration
/App.js
```javascript
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';

import './App.css';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <LoginForm/>
            <Profile />
          </div>
      </Provider>
    );
  }
}

export default App;
```
Une fois la configuration fini il ne reste qu'a englober l'application react avec un `<Provider> YOUR APP HERE </Provider>` celui-ci attend une props `store` qui contiendra elle-même le store

# Connexion des composants
## Composant avec action
/components/LoginForm.jsx
```javascript
import React, { Component } from 'react'
// Import de l'action qui si executer appellera le reducer
import {authAction} from '../store/actions/auth'
// Import de connect qui va connecter le composant à redux
import { connect } from 'react-redux';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <button
          // Appel de l'action authAction
          onClick={() => this.props.authAction({userId: 1, isAdmin: true, username: 'Jh0n_D03', isConnected: true})}
        >Click ME to login as Admin</button>
      </div>
    )
  }
}

// Fonction qui va permettre de dispacher les données vers l'action puis vers le reducer
const mapDispatchToProps = dispatch => ({
  authAction: (userData) => dispatch(authAction(userData))
})
// Fonction qui permet de récupérer les states redux
const mapStateToProps = state => ({
  ...state
})
// Export par defaut du composant connecté à redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
```
Composant connecté dans les deux sens car il recoit les states du store et peux aussi les modifier

## Composant sans action
/components/Profile.jsx
```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    console.log("props from Profile.jsx :", this.props)
    return (
      <div>
        <h1>Hello Global Props</h1>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
```
Si le composant a seulement besoin d'acceder aux states redux sans pour autant devoir interagir avec il suffit de passer un objet vide à la fonction dispatch

# Remarque
Ici nos deux composant `<LoginForm />  et <Profile/>` ne sont pas directement liés l'un à pourtant lorsque le premier modifie les states, le second se met automatiquement à jour.


## Append ARC-Paca :

