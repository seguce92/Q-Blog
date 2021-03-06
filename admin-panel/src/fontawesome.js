import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faEnvelope,
  faCircle,
  faTachometerAlt,
  faComments,
  faUsers,
  faEye,
  faCube,
  faTag,
  faWrench,
  faBook,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faSignOutAlt,
  faSpinner,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import {
  faUser,
  faClone,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// general
library.add(faBook);
library.add(faSpinner);
library.add(faTimes);
library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faAngleDown);

// nav bar
library.add(faCircle);
library.add(faEnvelope);
library.add(faSignOutAlt);

// side bar
library.add(faTachometerAlt);
library.add(faCube);
library.add(faUser);
library.add(faClone);
library.add(faTag);
library.add(faComments);
library.add(faWrench);

// dashboard
library.add(faUsers);
library.add(faEye);

Vue.component('font-awesome-icon', FontAwesomeIcon);
