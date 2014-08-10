/*jslint node: true */
/*jshint expr: true*/
/*global describe, it*/
'use strict';

var should = require('should'),
    t9     = require('../src');

describe('t9', function() {
    it('should exist', function(){
        should.exist(t9);
    });

    it('should return a', function(){
        t9('2').should.equal('a');
    });

    it('should return multunus', function(){
        t9('6885558 8866887777').should.equal('multunus');
    });

    it('should return ruby multunus', function(){
        t9('777882299906885558 8866887777').should.equal('ruby multunus');
    });

    it('should return ab cd ef', function(){
        t9('2 2202223033 333').should.equal('ab cd ef');
    });
});