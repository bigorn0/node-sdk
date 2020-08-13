/*
   Copyright 2020 The Authors

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

import { Containers } from '../src';
import { StartRequest, StopRequest } from '../src/containers';

const containerClient = new Containers();

const start = (id: string) => {
  const startRequest = new StartRequest();
  startRequest.setId(id);
  containerClient.start(startRequest, () => {
    console.log('started');
  });
};

const stop = (id: string) => {
  const stopRequest = new StopRequest();
  stopRequest.setId(id);
  containerClient.stop(stopRequest, () => {
    console.log('stopped');
  });
};

if (process.argv[2] === 'start') {
  start(process.argv[3]);
}

if (process.argv[2] === 'stop') {
  stop(process.argv[3]);
}
