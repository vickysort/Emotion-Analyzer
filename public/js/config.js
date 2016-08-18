/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var HIGHLIGHT_ANIMATION_DURATION = 500,
  TOP_N_WEIGHTED_POSITIVE_LIWC = 3,
  TOP_N_WEIGHTED_NEGATIVE_LIWC = 3,
  WORD_TRAIT_CORR_TYPE = {
    positive: 'positive',
    negative: 'negative'
  };

var COLOR_SCHEMA = {
  'emotion_tone': '#FF5003',
  'Anger': '#AD1625',
  'sadness': '#562f72',
  'anxiety': '#311a41',
  'Negative': '#d74108',
  'Cheerfulness': '#db2780',
  'writing_tone': '#5aa700',
  'causation': '#3690C0',
  'Analytical': '#4b8400',
  'Tentative': '#0a3c02',
  'insight': '#023858',
  'certainty': '#A6BDDB',
  'Confident': '#2d660A',
  'social_tone': '#5596e6',
  'family_c': '#a6d96a',
  'Conscientiousness_Big5': '#264a60',
  'friends': '#74c476',
  'Openness_Big5': '#4178be',
  'leisure': '#238b45',
  'Agreeableness_Big5': '#325c80',
  'refs_to_others': '#006d2c',
  'distant': '#006d2c'
};

var SAMPLE_TEXT = '' + 'Hi Team, \n\n' +

'These are difficult times! Our team has been performing poorly for the past two weeks. We very well know that we are being pessimistic in various aspects. We have a competitive product to deliver to the client. So we need to stop taking frequent breaks.  \n\n' + 
'We need to understand our problems. I don\'t blame you for your poor performance. Our client is in agony, since we failed to deliver various modules we promised. Our schedule has nothing to do with it. In fact, in times like this, our clients are expecting us to perform well. So, lets get ready to show our efforts. \n\n' +
'Finally, we have done a good job so far, and I expect us to continue to do so without being frustrated. So, Don\'t be hopeless. We have to close all the issues as soon as possible.  \n\n' + 
'Team lead,\n' + 
'Mail Buddy.\n\n';

