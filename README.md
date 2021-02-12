# Coding test for SCP. No relation.

Because Heroku sucks, run express locally to serve the weather json on localhost port 8080, and then load index.html directly in the browser like file://[path]/index.html

The demo is therefore coded using jsonp instead of plain json, to get around the poor implementation that is CORS.

This repo contains simple shell scripts I wrote that will run express and the react compiler on my machine. Depending on your config, they may work on yours.

This demo can probably be accessed at http://kazvorpal.hopto.org:8080/ — with slight changes because it's all being hosted for reals there, so no CORS issues. 
Sometimes, though, the NAT passthrough on my modem responds too slowly and the JSON server times out. Not a coding problem, an issue with AT&T UVerse.
