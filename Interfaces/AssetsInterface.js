"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
var rtl = require('bayrell-runtime-nodejs').rtl;
var Map = require('bayrell-runtime-nodejs').Map;
var Dict = require('bayrell-runtime-nodejs').Dict;
var Vector = require('bayrell-runtime-nodejs').Vector;
var Collection = require('bayrell-runtime-nodejs').Collection;
var IntrospectionInfo = require('bayrell-runtime-nodejs').IntrospectionInfo;
var RenderContainer = require('../Render/RenderContainer.js');
class AssetsInterface{
	/**
	 * Returns required assets
	 * @return Vector<string>
	 */
	static getRequiredAssets(context){
	}
	/**
	 * Returns sync loaded files
	 */
	static assetsSyncLoad(context){
	}
	/**
	 * Returns async loaded files
	 */
	static assetsAsyncLoad(context){
	}
	/**
	 * Init render container
	 */
	static initContainer(container){
	}
	/* ======================= Class Init Functions ======================= */
}
module.exports = AssetsInterface;