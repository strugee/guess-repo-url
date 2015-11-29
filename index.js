/*

 Copyright 2015 Alex Jordan <alex@strugee.net>.

 This file is part of guess-repo-url.

 guess-repo-url is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 guess-repo-url is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with guess-repo-url.  If not, see
 <http://www.gnu.org/licenses/>.

 */

module.exports = function() {
	var type = require('guess-repo-type');

	switch (type) {
	case 'git':
		// Do something
		break;
	default:
		throw Exception("Can't handle " + type + " repos.");
		break;
	}
}
