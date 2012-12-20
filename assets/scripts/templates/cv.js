define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cv.mustache'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "\n    <div class=\"hresume\">\n\n        <p class=\"recruiter-warning\">This CV can be found in it's original format - <a href=\"http://blink-design.net/cv\">http://blink-design.net/cv</a></p>\n\n        <section id=\"profile\" class=\"profile summary\">\n            <h1 class=\"hdr hdr-main\">Profile</h1>\n            <p>I've been doing things with websites professionally for over five years and I make things happen with HTML5, CSS3, JavaScript and mobile first responsive design.</p>\n        </section>\n\n        <section id=\"employment\" class=\"employment\">\n            <h1 class=\"hdr hdr-main\">Employment</h1>\n\n            <article id=\"im\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">Immediate Media</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.immediatemedia.co.uk/\">www.immediatemedia.co.uk</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2012-10-29\" class=\"dtstart\">October 2012</time></dd>\n                        <dt>To</dt>\n                        <dd>Present</dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Working as a Senior UI Developer</p>\n                </div>\n            </article>\n\n            <article id=\"qmetric\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">QMetric</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.qmetric.co.uk\">www.qmetric.co.uk</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2011-12-05\" class=\"dtstart\">December 2011</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2012-11-26\" class=\"dtend\">October 2012</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Worked on <a href=\"http://www.policyexpert.co.uk\">www.policyexpert.co.uk</a> and an internal Back Office Ajax application.</p>\n                    <p>Used HTML5, CSS3 (via LESS), Twitter bootstrap and Mootools</p>\n                    <p>Employed mobile first, responsive design on new design and rebuild of the policyexpert.co.uk site</p>\n                    <p>Launched responsive version of the <a href=\"http://qmetric.co.uk\">QMetric company website</a>. Source on <a href=\"https://github.com/qmetric/qmg-website\">GitHub</a></p>\n                </div>\n            </article>\n\n            <article id=\"bbc-worldwide\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">BBC Worldwide</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.bbcworldwide.com\">www.bbcworldwide.com</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2009-08-30\" class=\"dtstart\">August 2009</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2011-12-02\" class=\"dtend\">December 2011</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Led UI development on <a href=\"http://radiotimes.com\">the new Radio Times</a>.</p>\n                    <p>Used the latest and greatest front-end tech on a major BBC site. (HTML5, CSS3, Modernizr, MooTools)</p>\n                    <p>Providing feedback to PM, Product Owner and design agency regarding user experience best practices and accessibility guidelines.</p>\n                    <p>Worked with another front-end developer to architect a <a href=\"http://topgear.com\">new Top Gear homepage</a>, news article page and car model section. Created clean, semantic code and took care to ensure the user experience was acceptable on multiple browsers, environments and languages.</p>\n                    <p>Maintained front-end code on <a href=\"http://www.bbcgoodfood.com/\">GoodFood</a> and <a href=\"http://www.gardenersworld.com/\">Gardener's World</a></p>\n                </div>\n            </article>\n\n            <article id=\"sas-design\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">SAS Design</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.saslondon.com/\">http://www.saslondon.com/</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2009-04-15\" class=\"dtstart\">April 2009</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2009-06-24\" class=\"dtend\">June 2009</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Worked from Photoshop design mock-ups to create static web pages using valid, standards based code which performed in various browser environments.</p>\n                </div>\n            </article>\n\n            <article id=\"de-construct\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">De-construct</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.de-construct.com/\">de-construct.com</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2009-03-08\" class=\"dtstart\">March 2009</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2009-04-10\" class=\"dtend\">April 2009</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Constructed a mini site based on existing designs using front-end technologies.</p>\n                </div>\n            </article>\n\n            <article id=\"dgtl\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">DGTL</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.dgtl.net/\">dgtl.net</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2008-11-24\" class=\"dtstart\">November 2008</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2009-03-02\" class=\"dtend\">March 2009</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Responsible for all front-end code on <a href=\"http://www.pentland.com/\">www.pentland.com</a> and exact duplication of site designs were required in various browser environments.</p>\n                </div>\n            </article>\n\n            <article id=\"focus\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">Focus</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.focusintegrated.co.uk/\">focusintegrated.co.uk</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2008-10-04\" class=\"dtstart\">October 2008</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2008-11-08\" class=\"dtend\">November 2008</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Several small sites required development from Photoshop designs into fully working web pages.</p>\n                </div>\n            </article>\n\n            <article id=\"akqa\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\">AKQA</h1>\n                    <p class=\"company-url location\"><a href=\"http://www.akqa.com/\">akqa.com</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2008-06-30\" class=\"dtstart\">June 2008</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2008-09-13\" class=\"dtend\">September 2008</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Responsible for front-end development and bug fixing on <a href=\"http://www.sainsburys.co.uk\">www.sainsburys.co.uk</a> whilst working in a small project team.</p>\n                </div>\n            </article>\n\n            <article id=\"aat\" class=\"entry vcalendar\">\n                <header class=\"experience vevent\">\n                    <h1 class=\"fn org hdr hdr-item\"><abbr title=\"Association of Accounting Technicians\">AAT</abbr></h1>\n                    <p class=\"company-url location\"><a href=\"http://www.aat.org\">aat.org</a></p>\n                    <dl class=\"employment-dates cf\">\n                        <dt>From</dt>\n                        <dd><time datetime=\"2007-06-30\" class=\"dtstart\">June 2007</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime=\"2008-06-28\" class=\"dtend\">June 2008</time></dd>\n                    </dl>\n                </header>\n                <div class=\"summary\">\n                    <p>Part of the front-end development team working in a Java environment. Working closely with project managers and back-end developers to create web applications on the VYRE Unify CMS.</p>\n                </div>\n            </article>\n        </section>\n\n        <section id=\"additional\">\n            <h1 class=\"hdr hdr-main\">Additional Information</h1>\n\n            <article id=\"personal\" class=\"entry\">\n                <h1 class=\"hdr hdr-item\">Personal Web Projects</h1>\n                <p>Creating, owning and maintaining a hugely popular gaming community - <a href=\"http://www.interlopers.net\">www.interlopers.net</a>. The site receives thousands of page visits per day and has an expanding community of nearly 10,000 members.</p>\n                <p>Started in 2004, the site has grown considerably and I am responsible for all front-end code on the site. Working closely with a PHP developer has allowed various web applications\n                to be built that have been received well by the user base.</p>\n                <p>I have begun re-writing the site responsively and it is visible at <a href=\"http://dev.interlopers.net\">dev.interlopers.net</a>.</p>\n                <p>Not so long ago I worked with another developer to release Boxjs, a new way for users to load scripts into their pages. The service will take multiple scripts and deliver them to the browser as one,\n                compressed and cached file. A small JS library was necessary to ensure loading files was an easy task and the site also implements a fully responsive design.</p>\n            </article>\n\n            <article id=\"interests\" class=\"entry\">\n                <h1 class=\"hdr hdr-item\">Interests</h1>\n                <p>I play drums in <a href=\"http://fashodacrisis.com\">a loud rock band</a>. We've completed three tours of Eastern Europe and released multiple CDs independently.</p>\n                <p>I've also had the remarkable experience of <a href=\"http://www.flickr.com/photos/simonblink24/sets/72157625051285708/\">visiting Chernobyl in September 2010</a> and returning radiation free! A bit different to ‘Badminton, socialising and reading blogs’ usually found here!</p>\n            </article>\n        </section>\n\n    </div>\n";});
});