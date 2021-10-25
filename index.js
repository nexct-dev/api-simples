
import request from 'superagent';
import * as config from './config';
import lodash from 'lodash';
import $ from 'jquery';

import {
    expect
} from 'chai';

let originalMemberLength;
let runTimes = 0;
let token;


const logger = (text) => {
    var div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}
