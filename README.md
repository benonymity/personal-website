# Personal Website

Huge thanks to all the visual groundwork for this site laid by the [vcard-portfolio-website](https://github.com/codewithsadee/vcard-personal-portfolio) repository!

~~I love elegant things, and while I could have used some up and coming framework, I wanted to keep this as simple as possible while still maintaining an aesthetic design. Pure HTML and CSS it is, with only a few lines of vanilla JS to handle multiple pages in one file. As straightforward as it gets! Enjoy poking around.~~

Well, it seems my previous love for elegance was a fair-weather one. I decided to give this site a bit of a makeover, and went with the [page](https://github.com/visionmedia/page.js) library as a tiny router, which makes things far more readable and maintainable. So now if you want to play with this site, cd into `other/`, run `server.py`, and navigate to `localhost:5005`. It's still incredibly vanilla, but hopefully a lot more readable. I still have a good deal of refactoring to do, but I'm happy with the way things are shaping up!

I also have a lot of horrendously hacky python scripts that I use to generate content for the site somewhat dynamically from YAML that can be shared between the pretty HTML here and a more formal PDF format. You can check them out in the `other/` directory.

Enjoy!
