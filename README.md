# pens

A series of snippets and scripts that I made for my own use. Due to their small size and personal application, I didn't feel like each deserved their own repo, but I still wanted to publish them in case anyone else finds them useful (and to free up space on my drive).

## Pages

### [AirOS Desktop](https://github.com/fogoplayer/pens/tree/main/air-os)

When I was a teenager, I started drawing up mockups of a desktop interface designed to look clean and futuristic. When I learned about `transform: skew()`, I recognized that it allowed me to make the parallelograms that formed the core of AirOS's design language, so I whipped up a quick mockup. It doesn't look good, and it's not supposed to--this was a gleeful reaction to the discovery of new possibilities.

#### [Version 1](./air-os/air-os-desktop.html)

#### [Version 2](./air-os/air-os-desktop-2.html)

---

### [Apps Script](https://github.com/fogoplayer/pens/tree/main/apps-script)

#### [Sync Sheets](https://github.com/fogoplayer/pens/tree/main/apps-script/sync-sheets.gs)

Syncs up ranges in a Google Sheet (so, for example, a header is kept constant across the different pages but all can be edited).

#### [Table of Contents](https://github.com/fogoplayer/pens/tree/main/apps-script/table-of-contents)

Creates a custom sidebar that lists the names of each sheet in a workbook.

---

### [Bash Scripts](https://github.com/fogoplayer/pens/tree/main/bash-scripts)

#### [Ping](https://github.com/fogoplayer/pens/tree/main/bash-scripts/ping.sh)

A script to ping all IP addresses on a network and return the successful ones. Helpful for finding wireless access points.

#### [Router Test](https://github.com/fogoplayer/pens/tree/main/bash-scripts/router_test.sh)

A script that pings a router frequently and indefinitely and logs outages to a text file.

---

### [Bookmarklets](https://github.com/fogoplayer/pens/tree/main/bookmarklets)

<script src="https://fogoplayer.github.io/pens/bookmarklets/bookmarklets.js"></script>

<!-- Change Video Speed -->
<h4><a id="changespeed" href=''>Change Video Speed</a></h4>
<script>
  changeSpeed = changeSpeed.toString();
  document.querySelector('#changespeed').href = "javascript: (" + changeSpeed + ")();";
</script>

Finds the first `video` element on a page and prompts the user to set a playback speed (helpful for default video players that don't have playback speed controls, as well as for going beyond the max speed of players like Youtube and Vimeo).

---

### [Buc-ee's Animation](./bucees)

A simple puppet of Texas legend Buc-ee.

---

### [Power Of Two](./power-of-two)

A response to a challenge to find a power of two that does not have a power of two as one of its digits. Has both [webpage](https://fogoplayer.github.io/pens/power-of-two/) and [node.js](https://github.com/fogoplayer/pens/tree/main/power-of-two/powerOfTwoNode.js) versions.

---

### [Snow](./snow)

A simple snowfall animation. Scales to viewport.

---

### [ZCode Logo](./zcode-logo)

A CSS animation that I developed for use as a logo.
