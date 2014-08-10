/*jslint node: true */
/*jshint expr: true*/
/*global describe, it, before*/
'use strict';

var should = require('should'),
    t9     = require('../src');

describe('t9', function() {
    it('should exist', function(){
        should.exist(t9);
    });

    it('should return a', function(){
        t9(3).should.equal('a');
    });
});