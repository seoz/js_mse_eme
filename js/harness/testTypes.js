/*
Copyright 2016 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
'use strict';

(function() {

window.testSuiteDescriptions = {
  'conformance-test': {
    name: 'MSE Conformance Tests',
    title: 'Media Source and Encrypted Media Conformance Tests',
    heading: 'MSE Conformance Tests'
  },
  'encryptedmedia-test': { 
    name: 'EME Conformance Tests',
    title: 'Encrypted Media Extensions Conformance Tests',
    heading: 'EME Conformance Tests'
   },
  'performance-test': {
    name: 'MSE Performance Tests',
    title: 'Media Source and Encrypted Media Conformance Tests',
    heading: 'MSE Performance Tests'
  },
  'endurance-test': {
    name: 'MSE Endurance Tests',
    title: 'Media Source and Encrypted Media Conformance Tests',
    heading: 'MSE Endurance Tests'
  },
  'progressive-test': {
    name: 'Progressive Tests',
    title: 'HTML Media Element Conformance Tests',
    heading: 'HTML Media Element Conformance Tests'
  }
};

window.testSuiteVersions = {
  '0.5' : {
    'testSuites' : [
      'conformance-test',
      'performance-test',
      'endurance-test',
      'progressive-test'
    ],
    'config' : {
      'defaultTestSuite': 'conformance-test',
      'enablewebm': 'false'
    }
  },
  '0.6' : {
    'testSuites' : [
      'conformance-test',
      'performance-test',
      'endurance-test',
      'progressive-test'
    ],
    'config' : {
      'defaultTestSuite': 'conformance-test',
      'enablewebm': 'false'
    }
  },
  '2015' : {
    'testSuites' : [
      'conformance-test',
      'encryptedmedia-test',
      'performance-test',
      'endurance-test',
      'progressive-test'
    ],
    'config' : {
      'defaultTestSuite': 'conformance-test',
      'enablewebm': 'false'
    }
  },
  '2016' : {
    'testSuites' : [
      'conformance-test',
      'encryptedmedia-test',
      'performance-test',
      'endurance-test',
      'progressive-test'
    ],
    'config' : {
      'defaultTestSuite': 'conformance-test',
      'enablewebm': 'true'
    }
  },
  'tip' : {
    'testSuites' : [
      'conformance-test',
      'encryptedmedia-test',
      'performance-test',
      'endurance-test',
      'progressive-test'
    ],
    'config' : {
      'defaultTestSuite': 'conformance-test',
      'enablewebm': 'true'
    }
  }
};

})();
