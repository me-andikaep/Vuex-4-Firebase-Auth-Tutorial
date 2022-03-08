import { createStore } from "vuex";

//firebase import 
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) { 
      state.user = payload;
      console.log('user state changed: ', state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    }
  },
  actions: {
    async signup(context, {email, password}) {
      console.log('signup action called ');
      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('signup failed');
      }
    },
    async login(context, { email, password }) {
      console.log('login action called ');
      //async code
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('login failed');
      }
    },
    async logout(context) {
      console.log('logout action called ');
      //async code
      await signOut(auth);
      context.commit('setUser', null);
    }
  }
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  unsub();
})

export default store;