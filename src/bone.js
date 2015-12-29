  /**
   *  Here's the behavior required by the bone, described as:
   *  - query selector
   *  - dom manipulator (a specific subset of this, being class manipulation)
   */
(function () { // TODO is this cross browser for modern ones? mobile?
    var _bFH = {};

    // TODO move this down to init scope as options
    _bFH.header = document.querySelector(".bone-flex-header");
    _bFH.scrolling = false;
    _bFH.transitionAt = 75;
    _bFH.scrollTimout = 250;

    // TODO these probably suck
    _bFH.addClass = function (list, cls) {
        var names = list.split(" ")

        var index = names.indexOf(cls)

        if (index === -1) {
            names.push(cls)
        }

        return names.join(" ")
    }

    _bFH.rmClass = function (list, cls) {
        var names = list.split(" ")

        var index = names.indexOf(cls)

        if (index !== -1) {
            names.splice(index, 1)
        }

        return names.join(" ")
    }

    _bFH.init = function init () {
        var self = this;
        window.addEventListener("scroll", function (ev) { // TODO leaky if multiple init() calls?
            if (!self.scrolling) {
                self.scrolling = true;
                setTimeout(self.setClass.bind(self), self.scrollTimeout);
            }
        }, false)
    }

    _bFH.setClass = function () {
        if (this.getYOffset() > this.transitionAt) {
            // TODO make the flex-active class optionally configured
            this.header.className = this.addClass(this.header.className, "bone-flex")
        } else {
            this.header.className = this.rmClass(this.header.className, "bone-flex")
        }

        this.scrolling = false
    }

    _bFH.getYOffset = function () {
        var doc = document.documentElement // TODO cache this in init
        var offset = window.pageYOffset || doc.scrollTop;
        //console.log(offset)
        return offset
    }

    _bFH.init()
})()
