  /**
   *  Here's the behavior required by the bone, described as:
   *  - query selector
   *  - dom manipulator (a specific subset of this, being class manipulation)
   */
(function () { // TODO is this cross browser for modern ones? mobile?
    var _bFH = {};

    // TODO these probably suck
    _bFH.addClass = function addClass (list, cls) {
        var names = list.split(" ")

        var index = names.indexOf(cls)

        if (index === -1) {
            names.push(cls)
        }

        return names.join(" ")
    }

    _bFH.rmClass = function rmClass (list, cls) {
        var names = list.split(" ")

        var index = names.indexOf(cls)

        if (index !== -1) {
            names.splice(index, 1)
        }

        return names.join(" ")
    }

    _bFH.setClass = function setClass () {
        if (this.getYOffset() > this.transitionAt) {
            this.header.className = this.addClass(this.header.className, this.activeClass)
        } else {
            this.header.className = this.rmClass(this.header.className, this.activeClass)
        }

        this.scrolling = false
    }

    _bFH.getYOffset = function getYOffset () {
        var offset = window.pageYOffset || this.doc.scrollTop;

        return offset
    }

    _bFH.init = function init () {
        this.header       = document.querySelector(".bone-flex-header");
        this.scrolling    = false;
        this.transitionAt = 75;
        this.scrollTimout = 250;
        this.doc          = document.documentElement;
        this.activeClass  = "bone-flex";

        var self = this;

        window.addEventListener("scroll", function (ev) { // TODO leaky if multiple init() calls?
            if (!self.scrolling) {
                self.scrolling = true;
                setTimeout(self.setClass.bind(self), self.scrollTimeout);
            }
        }, false)
    }

    _bFH.init()
})()
