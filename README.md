# Overview

Test case to demonstrate an error I can't resolve. To replicate:

* `npm install`
* `gulp test`

I see the error:

	Failed to start mocha.
	Unsafe JavaScript attempt to access frame with URL about:blank from frame with URL file:///Users/helen/src/prototypes/gulp-mocha-phantom-test/index.html. Domains, protocols and ports must match.

I believe that is caused by [this](https://github.com/ariya/phantomjs/issues/12697) issue, but as they haven't released a new Phantom release yet I'm wondering if there is a workaround.